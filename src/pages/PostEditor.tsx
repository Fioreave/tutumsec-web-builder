import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Save, Eye, Plus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import BlogEditor from '@/components/BlogEditor';
import ImageUpload from '@/components/ImageUpload';
import SEOMetaTags from '@/components/SEOMetaTags';

const postSchema = z.object({
  title: z.string().min(1, 'El título es obligatorio').max(200, 'Máximo 200 caracteres'),
  slug: z.string().min(1, 'El slug es obligatorio').max(100, 'Máximo 100 caracteres').regex(/^[a-z0-9-]+$/, 'Solo letras minúsculas, números y guiones'),
  excerpt: z.string().max(160, 'Máximo 160 caracteres').optional(),
  content: z.any(),
  featured_image: z.string().optional(),
  cover_alt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  meta_title: z.string().max(60, 'Máximo 60 caracteres').optional(),
  meta_description: z.string().max(160, 'Máximo 160 caracteres').optional(),
  canonical_url: z.string().url('URL inválida').optional().or(z.literal('')),
  status: z.enum(['DRAFT', 'PUBLISHED']).default('DRAFT'),
});

type PostForm = z.infer<typeof postSchema>;

const PostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, profile, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [currentTag, setCurrentTag] = useState('');
  const { toast } = useToast();
  const isEditing = !!id;

  const form = useForm<PostForm>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: '',
      slug: '',
      excerpt: '',
      content: {},
      featured_image: '',
      cover_alt: '',
      tags: [],
      meta_title: '',
      meta_description: '',
      canonical_url: '',
      status: 'DRAFT',
    },
  });

  const { watch, setValue, handleSubmit, formState: { errors } } = form;
  const watchedTitle = watch('title');
  const watchedSlug = watch('slug');
  const watchedTags = watch('tags');

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        navigate('/blog-admin-access');
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

      if (isEditing) {
        fetchPost();
      }
    }
  }, [user, profile, authLoading, isEditing, id, navigate]);

  const fetchPost = async () => {
    if (!id) return;
    
    setPageLoading(true);
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      if (data) {
        form.reset({
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt || '',
          content: data.content || {},
          featured_image: data.featured_image || '',
          cover_alt: data.cover_alt || '',
          tags: data.tags || [],
          meta_title: data.meta_title || '',
          meta_description: data.meta_description || '',
          canonical_url: data.canonical_url || '',
          status: data.status || 'DRAFT',
        });
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      toast({
        title: "Error",
        description: "Error al cargar la publicación.",
        variant: "destructive",
      });
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
    setValue('title', title);
    if (!isEditing || !watchedSlug) {
      setValue('slug', generateSlug(title));
    }
  };

  const addTag = () => {
    if (currentTag.trim() && !watchedTags.includes(currentTag.trim())) {
      setValue('tags', [...watchedTags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setValue('tags', watchedTags.filter(tag => tag !== tagToRemove));
  };

  const onSubmit = async (data: PostForm) => {
    setLoading(true);

    try {
      const postData: any = {
        ...data,
        content: data.content,
      };

      // Set published_at when publishing
      if (data.status === 'PUBLISHED' && !isEditing) {
        postData.published_at = new Date().toISOString();
      }

      // Generate canonical URL if not provided
      if (!data.canonical_url) {
        postData.canonical_url = `${window.location.origin}/blog/${data.slug}`;
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

  const saveDraft = () => {
    setValue('status', 'DRAFT');
    handleSubmit(onSubmit)();
  };

  const publish = () => {
    setValue('status', 'PUBLISHED');
    handleSubmit(onSubmit)();
  };

  if (authLoading || pageLoading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <SEOMetaTags
          title="Editor de Posts"
          noIndex={true}
        />
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
      <SEOMetaTags
        title={isEditing ? 'Editar Post' : 'Nuevo Post'}
        noIndex={true}
      />
      
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

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Información Básica */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Información Básica</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title">Título *</Label>
                <Input
                  id="title"
                  value={watchedTitle}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Título de la publicación"
                />
                {errors.title && (
                  <p className="text-sm text-destructive mt-1">{errors.title.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="slug">URL (slug) *</Label>
                <Input
                  id="slug"
                  value={watchedSlug}
                  onChange={(e) => setValue('slug', e.target.value)}
                  placeholder="url-de-la-publicacion"
                />
                {errors.slug && (
                  <p className="text-sm text-destructive mt-1">{errors.slug.message}</p>
                )}
                <p className="text-sm text-muted-foreground mt-1">
                  Esta será la URL de tu artículo: /blog/{watchedSlug}
                </p>
              </div>

              <div>
                <Label htmlFor="excerpt">Extracto</Label>
                <Textarea
                  id="excerpt"
                  {...form.register('excerpt')}
                  placeholder="Un breve resumen de la publicación..."
                  rows={3}
                />
                {errors.excerpt && (
                  <p className="text-sm text-destructive mt-1">{errors.excerpt.message}</p>
                )}
              </div>

              <div>
                <Label>Tags</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    placeholder="Agregar tag"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" onClick={addTag} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {watchedTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Imagen destacada */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Imagen Destacada</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageUpload
                value={watch('featured_image')}
                alt={watch('cover_alt')}
                onImageChange={(url) => setValue('featured_image', url)}
                onAltChange={(alt) => setValue('cover_alt', alt)}
              />
            </CardContent>
          </Card>

          {/* Contenido */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Contenido</CardTitle>
            </CardHeader>
            <CardContent>
              <BlogEditor
                content={watch('content')}
                onChange={(content) => setValue('content', content)}
              />
            </CardContent>
          </Card>

          {/* SEO */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>SEO y Metadatos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="meta_title">Meta Title</Label>
                <Input
                  id="meta_title"
                  {...form.register('meta_title')}
                  placeholder="Título SEO (si vacío, se usa el título del post)"
                />
                {errors.meta_title && (
                  <p className="text-sm text-destructive mt-1">{errors.meta_title.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="meta_description">Meta Description</Label>
                <Textarea
                  id="meta_description"
                  {...form.register('meta_description')}
                  placeholder="Descripción SEO (si vacía, se usa el extracto)"
                  rows={3}
                />
                {errors.meta_description && (
                  <p className="text-sm text-destructive mt-1">{errors.meta_description.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="canonical_url">URL Canónica</Label>
                <Input
                  id="canonical_url"
                  {...form.register('canonical_url')}
                  placeholder="https://ejemplo.com/blog/slug (si vacía, se genera automáticamente)"
                />
                {errors.canonical_url && (
                  <p className="text-sm text-destructive mt-1">{errors.canonical_url.message}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Acciones */}
          <div className="flex items-center gap-4">
            <Button type="button" onClick={saveDraft} variant="outline" disabled={loading}>
              {loading && <Save className="mr-2 h-4 w-4 animate-spin" />}
              Guardar Borrador
            </Button>
            
            <Button type="button" onClick={publish} disabled={loading}>
              {loading && <Save className="mr-2 h-4 w-4 animate-spin" />}
              {isEditing ? 'Actualizar y Publicar' : 'Publicar'}
            </Button>

            <Button type="button" variant="ghost" onClick={() => navigate('/admin')}>
              Cancelar
            </Button>

            {watch('slug') && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => window.open(`/blog/${watch('slug')}?preview=true`, '_blank')}
              >
                <Eye className="mr-2 h-4 w-4" />
                Previsualizar
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostEditor;