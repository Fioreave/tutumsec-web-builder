-- Crear función para obtener el rol del usuario actual (evita recursión infinita)
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT 
LANGUAGE sql
STABLE 
SECURITY DEFINER 
SET search_path = public
AS $$
  SELECT role::text FROM public.profiles WHERE id = auth.uid();
$$;

-- Actualizar función has_role para usar la nueva función
CREATE OR REPLACE FUNCTION public.has_role(required_role user_role)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = 'public', 'auth'
AS $$
  SELECT public.get_current_user_role() = required_role::text 
  OR public.get_current_user_role() = 'admin';
$$;

-- Crear tabla para envíos de formulario de contacto
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Habilitar RLS en la tabla de envíos de contacto
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Solo administradores pueden ver envíos de contacto
CREATE POLICY "Only admins can view contact submissions"
ON public.contact_submissions
FOR SELECT
USING (public.has_role('admin'::user_role));

-- Cualquiera puede crear envíos de contacto (para el formulario público)
CREATE POLICY "Anyone can create contact submissions"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- Trigger para actualizar updated_at
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();