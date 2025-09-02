import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOMetaTags from '@/components/SEOMetaTags';
import { useAuth } from '@/hooks/useAuth';
import { sanitizeText } from '@/utils/sanitize';

dayjs.locale('es');

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content?: any;
  excerpt: string | null;
  featured_image: string | null;
  cover_alt?: string | null;
  tags: string[];
  published_at?: string;
  updated_at?: string;
  author_id?: string;
  meta_title?: string | null;
  meta_description?: string | null;
  canonical_url?: string | null;
  status?: string;
  profiles?: {
    full_name: string;
  } | null;
}

const BlogPost = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const { user, profile } = useAuth();
  
  const isPreview = searchParams.get('preview') === 'true';

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug, isPreview]);

  const fetchPost = async () => {
    try {
      let query = supabase
        .from('blogs')
        .select(`
          *,
          profiles:author_id (
            full_name
          )
        `)
        .eq('slug', slug);

      // Allow preview for authenticated editors/admins
      if (isPreview) {
        if (!user || !profile || (profile.role !== 'admin' && profile.role !== 'editor')) {
          setNotFound(true);
          setLoading(false);
          return;
        }
      } else {
        query = query.eq('status', 'PUBLISHED');
      }

      const { data, error } = await query.single();

      if (error) {
        if (error.code === 'PGRST116') {
          setNotFound(true);
        } else {
          throw error;
        }
      } else {
        setPost(data);
        if (data.tags.length > 0) {
          fetchRelatedPosts(data.tags, data.id);
        }
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedPosts = async (tags: string[], currentPostId: string) => {
    try {
      const { data } = await supabase
        .from('blogs')
        .select('id, title, slug, excerpt, featured_image, cover_alt, tags')
        .eq('status', 'PUBLISHED')
        .neq('id', currentPostId)
        .overlaps('tags', tags)
        .limit(3);

      if (data) {
        setRelatedPosts(data);
      }
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  };

  const getImageUrl = (path: string | null) => {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    const { data } = supabase.storage.from('blog').getPublicUrl(path);
    return data.publicUrl;
  };

  const renderContent = (content: any) => {
    if (!content) return null;
    
    const renderNode = (node: any): React.ReactNode => {
      if (!node) return null;
      
      switch (node.type) {
        case 'paragraph':
          return (
            <p className="mb-4 leading-relaxed">
              {node.content?.map((child: any, index: number) => renderNode(child)) || ''}
            </p>
          );
        case 'heading':
          const HeadingTag = `h${node.attrs?.level || 2}` as keyof JSX.IntrinsicElements;
          return (
            <HeadingTag className={`font-bold mb-4 ${
              node.attrs?.level === 2 ? 'text-2xl' : 'text-xl'
            }`}>
              {node.content?.map((child: any, index: number) => renderNode(child)) || ''}
            </HeadingTag>
          );
        case 'bulletList':
          return (
            <ul className="list-disc list-inside mb-4 space-y-2">
              {node.content?.map((child: any, index: number) => renderNode(child)) || ''}
            </ul>
          );
        case 'orderedList':
          return (
            <ol className="list-decimal list-inside mb-4 space-y-2">
              {node.content?.map((child: any, index: number) => renderNode(child)) || ''}
            </ol>
          );
        case 'listItem':
          return (
            <li>
              {node.content?.map((child: any, index: number) => renderNode(child)) || ''}
            </li>
          );
        case 'blockquote':
          return (
            <blockquote className="border-l-4 border-primary pl-4 italic mb-4 text-muted-foreground">
              {node.content?.map((child: any, index: number) => renderNode(child)) || ''}
            </blockquote>
          );
        case 'image':
          return (
            <figure className="mb-6">
              <img
                src={sanitizeText(node.attrs?.src || '')}
                alt={sanitizeText(node.attrs?.alt || '')}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
              {node.attrs?.title && (
                <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                  {sanitizeText(node.attrs.title)}
                </figcaption>
              )}
            </figure>
          );
        case 'text':
          let text = sanitizeText(node.text || '');
          let element: React.ReactNode = text;
          
          if (node.marks) {
            node.marks.forEach((mark: any) => {
              switch (mark.type) {
                case 'bold':
                  element = <strong>{element}</strong>;
                  break;
                case 'italic':
                  element = <em>{element}</em>;
                  break;
                case 'code':
                  element = <code className="bg-muted px-1 py-0.5 rounded text-sm">{element}</code>;
                  break;
                case 'link':
                  element = (
                    <a
                      href={sanitizeText(mark.attrs?.href || '')}
                      target="_blank"
                      rel="noopener nofollow"
                      className="text-primary hover:text-primary/80 underline"
                    >
                      {element}
                    </a>
                  );
                  break;
              }
            });
          }
          
          return element;
        default:
          if (node.content) {
            return node.content.map((child: any, index: number) => renderNode(child));
          }
          return null;
      }
    };

    if (content.content) {
      return content.content.map((node: any, index: number) => (
        <React.Fragment key={index}>{renderNode(node)}</React.Fragment>
      ));
    }

    return null;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skeleton className="h-8 w-32 mb-8" />
            <Skeleton className="h-64 w-full mb-8" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-4 w-1/2 mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-background">
        <SEOMetaTags
          title="Artículo no encontrado"
          description="El artículo que buscas no existe o ha sido eliminado."
          noIndex={true}
        />
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Artículo no encontrado
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              El artículo que buscas no existe o ha sido eliminado.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al blog
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const metaTitle = post.meta_title || post.title;
  const metaDescription = post.meta_description || post.excerpt;
  const ogImage = getImageUrl(post.featured_image);

  return (
    <div className="min-h-screen bg-background">
      <SEOMetaTags
        title={metaTitle}
        description={metaDescription || undefined}
        canonical={post.canonical_url || undefined}
        ogTitle={metaTitle}
        ogDescription={metaDescription || undefined}
        ogImage={ogImage || undefined}
        ogType="article"
        publishedTime={post.published_at}
        modifiedTime={post.updated_at}
        author={post.profiles?.full_name}
        noIndex={isPreview}
      />
      
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Preview notice */}
          {isPreview && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <p className="text-yellow-800 font-medium">
                Vista previa - Este artículo aún no está publicado
              </p>
            </div>
          )}

          {/* Back button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al blog
            </Link>
          </Button>

          <article>
            {/* Featured image */}
            {post.featured_image && (
              <figure className="aspect-[21/9] overflow-hidden rounded-lg mb-8">
                <img
                  src={getImageUrl(post.featured_image)}
                  alt={post.cover_alt || post.title}
                  className="w-full h-full object-cover"
                  width={1200}
                  height={514}
                />
              </figure>
            )}

            {/* Article header */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.published_at}>
                    {dayjs(post.published_at).format('DD [de] MMMM [de] YYYY')}
                  </time>
                </div>
                
                {post.updated_at !== post.published_at && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Actualizado: {dayjs(post.updated_at).format('DD [de] MMMM [de] YYYY')}
                  </div>
                )}
                
                {post.profiles?.full_name && (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.profiles.full_name}</span>
                  </div>
                )}
              </div>

              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {post.excerpt && (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              )}
            </header>

            {/* Article content */}
            <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground">
              {renderContent(post.content)}
            </div>
          </article>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="block group"
                  >
                    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      {relatedPost.featured_image && (
                        <img
                          src={getImageUrl(relatedPost.featured_image)}
                          alt={relatedPost.cover_alt || relatedPost.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      )}
                      <div className="p-4">
                        <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        {relatedPost.excerpt && (
                          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;