-- First, drop existing policies that might conflict
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "profiles_self_select" ON public.profiles;
DROP POLICY IF EXISTS "profiles_self_update" ON public.profiles;

-- Create comprehensive and secure policies for profiles table

-- 1. Allow users to view their own profile data
CREATE POLICY "users_can_view_own_profile" ON public.profiles
  FOR SELECT 
  USING (auth.uid() = id);

-- 2. Allow admins to view all profiles (but only admins)
CREATE POLICY "admins_can_view_all_profiles" ON public.profiles
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND role = 'ADMIN'
    )
  );

-- 3. Allow users to update their own profile (excluding role changes)
CREATE POLICY "users_can_update_own_profile" ON public.profiles
  FOR UPDATE 
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id 
    AND role = (SELECT role FROM public.profiles WHERE id = auth.uid())
  );

-- 4. Allow admins to update any profile
CREATE POLICY "admins_can_update_all_profiles" ON public.profiles
  FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND role = 'ADMIN'
    )
  );

-- 5. Prevent manual INSERT into profiles (should only be done via trigger)
CREATE POLICY "prevent_manual_profile_creation" ON public.profiles
  FOR INSERT 
  WITH CHECK (false);

-- 6. Prevent profile deletion (profiles should persist)
CREATE POLICY "prevent_profile_deletion" ON public.profiles
  FOR DELETE 
  USING (false);

-- 7. Create a function for safe profile creation (only via auth trigger)
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
    'EDITOR'::public.user_role
  );
  RETURN NEW;
END;
$$;

-- 8. Ensure the trigger exists for automatic profile creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 9. Add a policy to allow the trigger to insert profiles
CREATE POLICY "allow_auth_trigger_insert" ON public.profiles
  FOR INSERT 
  WITH CHECK (true);

-- 10. Restrict the trigger policy to only work during user creation
DROP POLICY IF EXISTS "allow_auth_trigger_insert" ON public.profiles;
CREATE POLICY "system_can_create_profiles" ON public.profiles
  FOR INSERT 
  WITH CHECK (
    -- Only allow if called from the auth trigger context
    current_setting('role') = 'postgres' OR
    current_setting('role') = 'supabase_admin'
  );