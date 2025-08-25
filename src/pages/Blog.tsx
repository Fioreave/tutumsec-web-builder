import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, User, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOMetaTags from '@/components/SEOMetaTags';

dayjs.locale('es');

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  cover_alt: string | null;
  tags: string[];
  published_at: string;
  author_id: string;
  profiles: {
    full_name: string;
  } | null;
}

const POSTS_PER_PAGE = 9;

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPosts, setTotalPosts] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const page = parseInt(searchParams.get('page') || '1');
  const search = searchParams.get('search') || '';
  const tag = searchParams.get('tag') || '';

  useEffect(() => {
    fetchPosts();
  }, [page, search, tag]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('blogs')
        .select(`
          id,
          title,
          slug,
          excerpt,
          featured_image,
          cover_alt,
          tags,
          published_at,
          author_id,
          profiles:author_id (
            full_name
          )
        `, { count: 'exact' })
        .eq('status', 'PUBLISHED')
        .order('published_at', { ascending: false });

      if (search) {
        query = query.or(`title.ilike.%${search}%,excerpt.ilike.%${search}%`);
      }

      if (tag) {
        query = query.contains('tags', [tag]);
      }

      const { data, error, count } = await query
        .range((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE - 1);

      if (error) throw error;
      
      setPosts(data || []);
      setTotalPosts(count || 0);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (path: string | null) => {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    const { data } = supabase.storage.from('blog').getPublicUrl(path);
    return data.publicUrl;
  };

  const handleSearch = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set('search', searchTerm);
    } else {
      params.delete('search');
    }
    params.set('page', '1');
    setSearchParams(params);
  };

  const handleTagClick = (tagName: string) => {
    const params = new URLSearchParams(searchParams);
    if (tag === tagName) {
      params.delete('tag');
    } else {
      params.set('tag', tagName);
    }
    params.set('page', '1');
    setSearchParams(params);
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    setSearchParams(params);
  };

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-background">
      <SEOMetaTags
        title="Blog de Ciberseguridad"
        description="Mantente al día con las últimas tendencias, consejos y noticias en ciberseguridad. Artículos de expertos en seguridad informática, compliance NIS2, y transformación digital."
      />
      
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Blog de Ciberseguridad
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mantente al día con las últimas tendencias, consejos y noticias en ciberseguridad
            </p>
          </div>

          {/* Search */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar artículos..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Active filters */}
          {(search || tag) && (
            <div className="mb-8 flex flex-wrap gap-2 justify-center">
              {search && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Búsqueda: "{search}"
                  <button
                    onClick={() => handleSearch('')}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {tag && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Tag: {tag}
                  <button
                    onClick={() => handleTagClick(tag)}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          )}

          {/* Posts Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
                {search || tag ? 'No se encontraron resultados' : 'No hay publicaciones disponibles'}
              </h2>
              {(search || tag) && (
                <p className="text-muted-foreground">
                  Intenta con otros términos de búsqueda o explora todas las publicaciones
                </p>
              )}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {posts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <article>
                      {post.featured_image && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={getImageUrl(post.featured_image) || '/placeholder.svg'}
                            alt={post.cover_alt || post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            width={400}
                            height={225}
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <time dateTime={post.published_at}>
                              {dayjs(post.published_at).format('DD MMM YYYY')}
                            </time>
                          </div>
                          {post.profiles?.full_name && (
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {post.profiles.full_name}
                            </div>
                          )}
                        </div>
                        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                          <Link to={`/blog/${post.slug}`}>
                            <h2>{post.title}</h2>
                          </Link>
                        </CardTitle>
                        {post.excerpt && (
                          <CardDescription className="line-clamp-3">
                            {post.excerpt}
                          </CardDescription>
                        )}
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {post.tags.slice(0, 3).map((tagName) => (
                              <button
                                key={tagName}
                                onClick={() => handleTagClick(tagName)}
                                className="text-xs text-primary hover:text-primary/80 transition-colors"
                              >
                                #{tagName}
                              </button>
                            ))}
                          </div>
                        )}
                      </CardHeader>
                      <CardContent>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                          Leer más →
                        </Link>
                      </CardContent>
                    </article>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page <= 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Anterior
                  </Button>
                  
                  <span className="px-4 py-2 text-sm text-muted-foreground">
                    Página {page} de {totalPages}
                  </span>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page >= totalPages}
                  >
                    Siguiente
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;