import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
  profiles: {
    full_name: string;
  } | null;
}

const Admin = () => {
  const { user, profile, loading: authLoading } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; postId: string | null }>({
    open: false,
    postId: null,
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        navigate('/auth');
        return;
      }
      
      if (!profile || (profile.role !== 'admin' && profile.role !== 'editor')) {
        toast({
          title: "Acceso denegado",
          description: "No tienes permisos para acceder a esta página.",
          variant: "destructive",
        });
        navigate('/');
        return;
      }

      fetchPosts();
    }
  }, [user, profile, authLoading, navigate]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          id,
          title,
          slug,
          excerpt,
          published,
          created_at,
          updated_at,
          profiles:author_id (
            full_name
          )
        `)
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: "Error",
        description: "Error al cargar las publicaciones.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const togglePublished = async (postId: string, currentStatus: boolean) => {
    try {
      const updates: any = { published: !currentStatus };
      
      if (!currentStatus) {
        updates.published_at = new Date().toISOString();
      }

      const { error } = await supabase
        .from('blogs')
        .update(updates)
        .eq('id', postId);

      if (error) throw error;

      setPosts(posts.map(post => 
        post.id === postId 
          ? { ...post, published: !currentStatus }
          : post
      ));

      toast({
        title: "Estado actualizado",
        description: `La publicación ha sido ${!currentStatus ? 'publicada' : 'despublicada'}.`,
      });
    } catch (error) {
      console.error('Error updating post:', error);
      toast({
        title: "Error",
        description: "Error al actualizar el estado de la publicación.",
        variant: "destructive",
      });
    }
  };

  const deletePost = async (postId: string) => {
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', postId);

      if (error) throw error;

      setPosts(posts.filter(post => post.id !== postId));
      setDeleteDialog({ open: false, postId: null });

      toast({
        title: "Publicación eliminada",
        description: "La publicación ha sido eliminada correctamente.",
      });
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: "Error",
        description: "Error al eliminar la publicación.",
        variant: "destructive",
      });
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-8 w-64 mb-8" />
          <div className="grid gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
          <Button onClick={() => navigate('/admin/posts/new')}>
            <Plus className="mr-2 h-4 w-4" />
            Nueva Publicación
          </Button>
        </div>

        {posts.length === 0 ? (
          <Card>
            <CardContent className="text-center py-16">
              <h2 className="text-xl font-semibold mb-4">No hay publicaciones</h2>
              <p className="text-muted-foreground mb-6">
                Comienza creando tu primera publicación de blog.
              </p>
              <Button onClick={() => navigate('/admin/posts/new')}>
                <Plus className="mr-2 h-4 w-4" />
                Crear primera publicación
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                        <Badge variant={post.published ? "default" : "secondary"}>
                          {post.published ? "Publicado" : "Borrador"}
                        </Badge>
                      </div>
                      {post.excerpt && (
                        <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Autor: {post.profiles?.full_name || 'Desconocido'}</span>
                        <span>
                          Actualizado: {format(new Date(post.updated_at), 'dd/MM/yyyy HH:mm', { locale: es })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => togglePublished(post.id, post.published)}
                      >
                        {post.published ? (
                          <>
                            <EyeOff className="mr-1 h-3 w-3" />
                            Despublicar
                          </>
                        ) : (
                          <>
                            <Eye className="mr-1 h-3 w-3" />
                            Publicar
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/admin/posts/${post.id}/edit`)}
                      >
                        <Edit className="mr-1 h-3 w-3" />
                        Editar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setDeleteDialog({ open: true, postId: post.id })}
                      >
                        <Trash2 className="mr-1 h-3 w-3" />
                        Eliminar
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}

        <AlertDialog 
          open={deleteDialog.open} 
          onOpenChange={(open) => setDeleteDialog({ open, postId: null })}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Eliminar publicación?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción no se puede deshacer. La publicación será eliminada permanentemente.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => deleteDialog.postId && deletePost(deleteDialog.postId)}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Eliminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Admin;