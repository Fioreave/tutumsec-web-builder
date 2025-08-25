-- Enums
create type public.user_role as enum ('ADMIN','EDITOR');
create type public.post_status as enum ('DRAFT','PUBLISHED');

-- profiles
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  role public.user_role default 'EDITOR',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Update existing blogs table structure
alter table public.blogs 
  add column if not exists content jsonb default '{}'::jsonb,
  add column if not exists cover_alt text,
  add column if not exists tags text[] default '{}',
  add column if not exists status public.post_status default 'DRAFT',
  add column if not exists meta_title text,
  add column if not exists meta_description text,
  add column if not exists canonical_url text;

-- Add generated column for backward compatibility
alter table public.blogs 
  add column if not exists published boolean generated always as (status = 'PUBLISHED') stored;

-- Update indexes
create unique index if not exists blogs_slug_uidx on public.blogs (slug);
create index if not exists blogs_status_published_at_idx on public.blogs (status, published_at desc);
create index if not exists blogs_tags_gin on public.blogs using gin (tags);

-- Add slug constraint
alter table public.blogs 
  add constraint if not exists blogs_slug_lower check (slug = lower(slug));

-- triggers
create or replace function public.set_updated_at() returns trigger
language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

drop trigger if exists trg_set_updated_at_blogs on public.blogs;
create trigger trg_set_updated_at_blogs before update on public.blogs
for each row execute function public.set_updated_at();

create or replace function public.set_author_id() returns trigger
language plpgsql as $$
begin if new.author_id is null then new.author_id := auth.uid(); end if; return new; end $$;

drop trigger if exists trg_set_author_id on public.blogs;
create trigger trg_set_author_id before insert on public.blogs
for each row execute function public.set_author_id();

create or replace function public.prevent_editor_slug_change() returns trigger
language plpgsql as $$
declare r public.user_role;
begin
  select role into r from public.profiles where id = auth.uid();
  if (old.status = 'PUBLISHED' and old.slug <> new.slug and r <> 'ADMIN') then
    raise exception 'No puedes cambiar el slug de un post publicado';
  end if;
  return new;
end $$;

drop trigger if exists trg_prevent_editor_slug_change on public.blogs;
create trigger trg_prevent_editor_slug_change before update on public.blogs
for each row execute function public.prevent_editor_slug_change();

-- RLS
alter table public.profiles enable row level security;
alter table public.blogs enable row level security;

-- policies profiles
drop policy if exists profiles_self_select on public.profiles;
create policy profiles_self_select on public.profiles
for select using (id = auth.uid() or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role='ADMIN'));

drop policy if exists profiles_self_update on public.profiles;
create policy profiles_self_update on public.profiles
for update using (id = auth.uid());

-- policies blogs
drop policy if exists blogs_public_read_published on public.blogs;
create policy blogs_public_read_published on public.blogs
for select using (status = 'PUBLISHED');

drop policy if exists blogs_editors_read on public.blogs;
create policy blogs_editors_read on public.blogs
for select using (
  auth.role() = 'authenticated' and (
    exists (select 1 from public.profiles pr where pr.id = auth.uid() and pr.role='ADMIN')
    or author_id = auth.uid()
  )
);

drop policy if exists blogs_insert on public.blogs;
create policy blogs_insert on public.blogs
for insert with check (
  auth.role() = 'authenticated' and exists (
    select 1 from public.profiles pr where pr.id = auth.uid() and pr.role in ('ADMIN','EDITOR')
  )
);

drop policy if exists blogs_update on public.blogs;
create policy blogs_update on public.blogs
for update using (
  auth.role() = 'authenticated' and (
    exists (select 1 from public.profiles pr where pr.id = auth.uid() and pr.role='ADMIN')
    or author_id = auth.uid()
  )
) with check (
  auth.role() = 'authenticated' and (
    exists (select 1 from public.profiles pr where pr.id = auth.uid() and pr.role='ADMIN')
    or author_id = auth.uid()
  )
);

drop policy if exists blogs_delete_admin_only on public.blogs;
create policy blogs_delete_admin_only on public.blogs
for delete using (exists (select 1 from public.profiles pr where pr.id = auth.uid() and pr.role='ADMIN'));

-- Storage bucket and policies
insert into storage.buckets (id, name, public) 
values ('blog', 'blog', true) 
on conflict (id) do nothing;

drop policy if exists "public read blog" on storage.objects;
create policy "public read blog" on storage.objects 
for select using (bucket_id='blog' and position('public/' in name)=1);

drop policy if exists "auth upload blog" on storage.objects;
create policy "auth upload blog" on storage.objects 
for insert to authenticated with check (bucket_id='blog' and owner = auth.uid());