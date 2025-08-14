-- Crear el usuario blog con contraseña blogbdrgroup!
-- Este usuario se creará directamente en la tabla auth.users
INSERT INTO auth.users (
    id,
    instance_id,
    email,
    encrypted_password,
    email_confirmed_at,
    created_at,
    updated_at,
    raw_app_meta_data,
    raw_user_meta_data,
    is_super_admin,
    role
) VALUES (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000000',
    'blog@tutorsec.com',
    crypt('blogbdrgroup!', gen_salt('bf')),
    now(),
    now(),
    now(),
    '{"provider":"email","providers":["email"]}',
    '{"full_name":"Blog Admin"}',
    false,
    'authenticated'
) ON CONFLICT (email) DO NOTHING;

-- Crear el perfil correspondiente con rol de admin
INSERT INTO public.profiles (
    id,
    email,
    full_name,
    role
) 
SELECT 
    u.id,
    u.email,
    'Blog Admin',
    'admin'
FROM auth.users u 
WHERE u.email = 'blog@tutorsec.com'
ON CONFLICT (id) DO UPDATE SET role = 'admin';