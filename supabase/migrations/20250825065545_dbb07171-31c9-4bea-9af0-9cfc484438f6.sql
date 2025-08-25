-- Create secure policies for profiles table with correct enum values

-- 1. Allow users to view their own profile data only
CREATE POLICY "users_can_view_own_profile" ON public.profiles
  FOR SELECT 
  USING (auth.uid() = id);

-- 2. Allow admins to view all profiles
CREATE POLICY "admins_can_view_all_profiles" ON public.profiles
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND role = 'admin'
    )
  );

-- 3. Allow users to update their own profile (but prevent role escalation)
CREATE POLICY "users_can_update_own_profile" ON public.profiles
  FOR UPDATE 
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id 
    AND (
      -- Users cannot change their own role
      role = (SELECT role FROM public.profiles WHERE id = auth.uid())
      -- OR they're an admin (admins can change roles)
      OR EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE id = auth.uid() 
        AND role = 'admin'
      )
    )
  );

-- 4. Allow admins to update any profile (including role changes)
CREATE POLICY "admins_can_update_all_profiles" ON public.profiles
  FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND role = 'admin'
    )
  );

-- 5. Prevent profile deletion entirely (maintain data integrity)
CREATE POLICY "prevent_profile_deletion" ON public.profiles
  FOR DELETE 
  USING (false);

-- 6. Only allow profile creation through the auth trigger system
CREATE POLICY "system_only_profile_creation" ON public.profiles
  FOR INSERT 
  WITH CHECK (false);

-- 7. Update the profile creation function to use correct enum values
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
    'editor'::public.user_role  -- Default role is editor, not admin
  );
  RETURN NEW;
END;
$$;

-- 8. Create a bypass policy for the auth trigger
CREATE POLICY "auth_trigger_can_create_profiles" ON public.profiles
  FOR INSERT 
  WITH CHECK (
    -- This policy allows the trigger to create profiles
    -- but normal users/applications cannot directly insert
    auth.role() = 'service_role'
  );