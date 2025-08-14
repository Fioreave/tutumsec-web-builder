import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Settings, LogOut, LogIn } from 'lucide-react';

const AdminLink = () => {
  const { user, profile, signOut, isEditor } = useAuth();

  if (!user || !profile) {
    return (
      <Button variant="ghost" size="sm" asChild>
        <Link to="/blog-admin-access">
          <LogIn className="mr-1 h-3 w-3" />
          Iniciar Sesión
        </Link>
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {isEditor && (
        <Button variant="outline" size="sm" asChild>
          <Link to="/admin">
            <Settings className="mr-1 h-3 w-3" />
            Admin
          </Link>
        </Button>
      )}
      <Button variant="ghost" size="sm" onClick={signOut}>
        <LogOut className="mr-1 h-3 w-3" />
        Salir
      </Button>
      <span className="text-sm text-muted-foreground">
        {profile.full_name || user.email}
      </span>
    </div>
  );
};

export default AdminLink;