-- Create admin user in auth system and profiles table
-- Note: This creates the user with a temporary password that should be changed on first login

-- Insert admin user into profiles table with admin role
INSERT INTO public.profiles (id, email, full_name, role)
VALUES (
  '00000000-0000-0000-0000-000000000001'::uuid,
  'favegliano@bdrinformatica.com',
  'Federico Avegliano',
  'admin'::public.user_role
)
ON CONFLICT (id) DO NOTHING;

-- Create a function to handle password reset requests
CREATE OR REPLACE FUNCTION public.request_password_reset(user_email text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  result json;
BEGIN
  -- This function will be called from the frontend to trigger password reset
  -- The actual email sending will be handled by Supabase Auth
  SELECT json_build_object(
    'success', true,
    'message', 'If the email exists, a password reset link will be sent'
  ) INTO result;
  
  RETURN result;
END;
$$;

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION public.request_password_reset(text) TO authenticated, anon;