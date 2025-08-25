-- Fix function search path security warnings

-- Update existing functions to have secure search paths
CREATE OR REPLACE FUNCTION public.set_updated_at() 
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN 
  NEW.updated_at = now(); 
  RETURN NEW; 
END $$;

CREATE OR REPLACE FUNCTION public.set_author_id() 
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN 
  IF NEW.author_id IS NULL THEN 
    NEW.author_id := auth.uid(); 
  END IF; 
  RETURN NEW; 
END $$;

CREATE OR REPLACE FUNCTION public.prevent_editor_slug_change() 
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE 
  r public.user_role;
BEGIN
  SELECT role INTO r FROM public.profiles WHERE id = auth.uid();
  IF (OLD.status = 'PUBLISHED' AND OLD.slug <> NEW.slug AND r <> 'admin') THEN
    RAISE EXCEPTION 'No puedes cambiar el slug de un post publicado';
  END IF;
  RETURN NEW;
END $$;

-- Also update the handle_new_user function (already has correct search_path)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    'editor'::public.user_role
  );
  RETURN NEW;
END;
$$;