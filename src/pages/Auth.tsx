import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useRateLimit } from '@/hooks/useRateLimit';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const Auth = () => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { signIn, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const rateLimit = useRateLimit('auth-login', {
    maxAttempts: 5,
    windowMs: 15 * 60 * 1000, // 15 minutes
    blockDurationMs: 30 * 60 * 1000, // 30 minutes
  });

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check rate limiting
    if (rateLimit.isBlocked) {
      const minutes = Math.ceil(rateLimit.timeUntilReset / (1000 * 60));
      toast({
        title: "Demasiados intentos",
        description: `Por favor, espera ${minutes} minutos antes de intentar iniciar sesión de nuevo.`,
        variant: "destructive",
      });
      return;
    }

    if (!rateLimit.attempt()) {
      toast({
        title: "Límite alcanzado",
        description: "Has alcanzado el límite de intentos de inicio de sesión. Inténtalo más tarde.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const { error } = await signIn(loginForm.email, loginForm.password);
      
      if (!error) {
        rateLimit.reset(); // Reset on successful login
        navigate('/');
      } else {
        // Don't reveal specific error details
        toast({
          title: "Error de acceso",
          description: "Credenciales incorrectas. Por favor, verifica tu email y contraseña.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ha ocurrido un error inesperado. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              TutorSec
            </h1>
          </Link>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Acceso al Panel de Blog</CardTitle>
            <CardDescription>
              Ingresa tus credenciales para acceder al panel administrativo
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Usuario</Label>
                <Input
                  id="login-email"
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  required
                  placeholder="Ingresa tu usuario"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Contraseña</Label>
                <Input
                  id="login-password"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  required
                  placeholder="Ingresa tu contraseña"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Acceder al Panel
              </Button>
              <div className="text-center">
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Auth;