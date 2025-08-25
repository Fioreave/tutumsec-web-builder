import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SetupAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const { toast } = useToast();

  const handleCreateAdmin = async () => {
    setLoading(true);
    
    try {
      const { error } = await supabase.functions.invoke('create-admin-user', {
        body: {
          email: 'favegliano@bdrinformatica.com',
          password: 'bdrinf',
          fullName: 'Federico Avegliano'
        }
      });

      if (error) throw error;

      setCreated(true);
      toast({
        title: "Usuario administrador creado",
        description: "El usuario administrador ha sido creado exitosamente.",
      });
    } catch (error: any) {
      console.error('Error creating admin:', error);
      toast({
        title: "Error",
        description: error.message || "No se pudo crear el usuario administrador",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (created) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-green-600">¡Configuración Completa!</CardTitle>
            <CardDescription>
              El usuario administrador ha sido creado exitosamente.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> favegliano@bdrinformatica.com</p>
              <p><strong>Contraseña:</strong> bdrinf</p>
              <p className="text-muted-foreground">
                Asegúrate de cambiar la contraseña después del primer inicio de sesión.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <a href="/blog-admin-access">Ir al Panel de Administración</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Configuración Inicial</CardTitle>
          <CardDescription>
            Crear usuario administrador para TutumSec
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p><strong>Email:</strong> favegliano@bdrinformatica.com</p>
            <p><strong>Contraseña inicial:</strong> bdrinf</p>
            <p className="text-muted-foreground">
              Se creará un usuario administrador con estas credenciales. 
              Podrás cambiar la contraseña después del primer inicio de sesión.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleCreateAdmin} disabled={loading} className="w-full">
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Crear Usuario Administrador
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SetupAdmin;