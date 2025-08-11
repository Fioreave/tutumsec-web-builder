import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, Save, Upload, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PostForm {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string | null;
  published: boolean;
}

const PostEditor = () => {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const { user, profile, loading: authLoading } = useAuth();
  const [form, setForm] = useState<PostForm>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image: null,
    published: false,
  });
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(isEditing);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
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

      if (isEditing && id) {
        fetchPost();
      } else {
        setPageLoading(false);
      }
    }
  }, [user, profile, authLoading, isEditing, id, navigate]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      setForm({
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt || '',
        content: data.content,
        featured_image: data.featured_image,
        published: data.published,
      });

      if (data.featured_image) {
        const { data: urlData } = supabase.storage
          .from('blog-images')
          .getPublicUrl(data.featured_image);
        setImagePreview(urlData.publicUrl);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      toast({
        title: "Error",
        description: "Error al cargar la publicación.",
        variant: "destructive",
      });
      navigate('/admin');
    } finally {
      setPageLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[áàäâã]/g, 'a')
      .replace(/[éèëê]/g, 'e')
      .replace(/[íìïî]/g, 'i')
      .replace(/[óòöôõ]/g, 'o')
      .replace(/[úùüû]/g, 'u')
      .replace(/[ñ]/g, 'n')
      .replace(/[ç]/g, 'c')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setForm(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Error",
          description: "La imagen no puede ser mayor a 5MB.",
          variant: "destructive",
        });
        return;
      }

      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    return fileName;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let featured_image = form.featured_image;

      // Upload new image if selected
      if (imageFile) {
        featured_image = await uploadImage(imageFile);
      }

      const postData: any = {
        ...form,
        featured_image,
        author_id: user!.id,
      };

      if (form.published && !isEditing) {
        postData.published_at = new Date().toISOString();
      }

      if (isEditing) {
        const { error } = await supabase
          .from('blogs')
          .update(postData)
          .eq('id', id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blogs')
          .insert([postData]);

        if (error) throw error;
      }

      toast({
        title: "Éxito",
        description: `Publicación ${isEditing ? 'actualizada' : 'creada'} correctamente.`,
      });

      navigate('/admin');
    } catch (error: any) {
      console.error('Error saving post:', error);
      toast({
        title: "Error",
        description: error.message || `Error al ${isEditing ? 'actualizar' : 'crear'} la publicación.`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || pageLoading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-8 w-64 mb-8" />
          <div className="space-y-6">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => navigate('/admin')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          <h1 className="text-3xl font-bold">
            {isEditing ? 'Editar Publicación' : 'Nueva Publicación'}
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Información Básica</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  value={form.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Título de la publicación"
                  required
                />
              </div>

              <div>
                <Label htmlFor="slug">URL (slug)</Label>
                <Input
                  id="slug"
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  placeholder="url-de-la-publicacion"
                  required
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Esta será la URL de tu artículo: /blog/{form.slug}
                </p>
              </div>

              <div>
                <Label htmlFor="excerpt">Extracto</Label>
                <Textarea
                  id="excerpt"
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  placeholder="Un breve resumen de la publicación..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="image">Imagen destacada</Label>
                <div className="mt-2">
                  {imagePreview ? (
                    <div className="relative inline-block">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-w-md h-48 object-cover rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => {
                          setImagePreview(null);
                          setImageFile(null);
                          setForm({ ...form, featured_image: null });
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                      <Label htmlFor="image-upload" className="cursor-pointer">
                        <span className="text-primary hover:text-primary/80">
                          Haz clic para subir una imagen
                        </span>
                      </Label>
                      <p className="text-sm text-muted-foreground mt-2">
                        PNG, JPG, GIF hasta 5MB
                      </p>
                    </div>
                  )}
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="published"
                  checked={form.published}
                  onCheckedChange={(checked) => setForm({ ...form, published: checked })}
                />
                <Label htmlFor="published">Publicar inmediatamente</Label>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Contenido</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder="Escribe el contenido de tu publicación..."
                rows={20}
                className="resize-none"
                required
              />
            </CardContent>
          </Card>

          <div className="flex items-center gap-4">
            <Button type="submit" disabled={loading}>
              {loading && <Save className="mr-2 h-4 w-4 animate-spin" />}
              {isEditing ? 'Actualizar Publicación' : 'Crear Publicación'}
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate('/admin')}>
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostEditor;