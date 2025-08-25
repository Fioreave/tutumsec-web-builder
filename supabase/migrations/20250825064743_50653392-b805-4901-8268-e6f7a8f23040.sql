-- Add missing columns to blogs table
do $$
begin
  if not exists (select 1 from information_schema.columns where table_name = 'blogs' and column_name = 'content') then
    alter table public.blogs add column content jsonb default '{}'::jsonb;
  end if;
  
  if not exists (select 1 from information_schema.columns where table_name = 'blogs' and column_name = 'cover_alt') then
    alter table public.blogs add column cover_alt text;
  end if;
  
  if not exists (select 1 from information_schema.columns where table_name = 'blogs' and column_name = 'tags') then
    alter table public.blogs add column tags text[] default '{}';
  end if;
  
  if not exists (select 1 from information_schema.columns where table_name = 'blogs' and column_name = 'status') then
    alter table public.blogs add column status public.post_status default 'DRAFT';
  end if;
  
  if not exists (select 1 from information_schema.columns where table_name = 'blogs' and column_name = 'meta_title') then
    alter table public.blogs add column meta_title text;
  end if;
  
  if not exists (select 1 from information_schema.columns where table_name = 'blogs' and column_name = 'meta_description') then
    alter table public.blogs add column meta_description text;
  end if;
  
  if not exists (select 1 from information_schema.columns where table_name = 'blogs' and column_name = 'canonical_url') then
    alter table public.blogs add column canonical_url text;
  end if;
end $$;

-- Convert published boolean to status enum for existing rows
update public.blogs 
set status = case when published = true then 'PUBLISHED'::public.post_status else 'DRAFT'::public.post_status end
where status is null;