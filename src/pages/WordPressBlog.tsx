import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { wordpressApi } from '@/services/wordpressApi';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOMetaTags from '@/components/SEOMetaTags';

interface WordPressPost {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

const WordPressBlog = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const fetchPosts = useCallback(async (page: number, append: boolean = false) => {
    try {
      if (page === 1 && !append) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }
      
      setError(null);
      
      const response = await wordpressApi.getPosts(page, 12);
      
      if (append) {
        setPosts(prev => [...prev, ...response.data]);
      } else {
        setPosts(response.data);
      }
      
      setTotalPages(response.totalPages);
      setHasMore(page < response.totalPages);
      setCurrentPage(page);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar los posts');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  const loadMore = () => {
    if (!loadingMore && hasMore) {
      fetchPosts(currentPage + 1, true);
    }
  };

  // Auto-refresh every 60 seconds to check for new posts
  useEffect(() => {
    const interval = setInterval(async () => {
      if (currentPage === 1 && !loading && !loadingMore) {
        try {
          const response = await wordpressApi.getPosts(1, 12);
          // Only update if there are new posts (check first post ID)
          if (response.data.length > 0 && posts.length > 0 && response.data[0].id !== posts[0].id) {
            setPosts(response.data);
            setTotalPages(response.totalPages);
            setHasMore(1 < response.totalPages);
          }
        } catch (err) {
          // Silently fail on auto-refresh
        }
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [currentPage, loading, loadingMore, posts]);

  useEffect(() => {
    fetchPosts(1);
  }, [fetchPosts]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '').trim();
  };

  const PostSkeleton = () => (
    <Card className="overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <CardContent className="p-6">
        <Skeleton className="h-4 w-20 mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-3/4 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-9 w-32" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOMetaTags
        title="Blog de Ciberseguridad | TutumSec"
        description="Artículos especializados sobre ciberseguridad, compliance NIS2, ransomware y transformación digital. Insights y mejores prácticas de nuestros expertos."
        canonical="https://tutumsec.io/blog"
        ogType="website"
      />
      
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Blog de Ciberseguridad
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Insights, análisis y mejores prácticas en ciberseguridad empresarial
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-8">
                <p className="font-medium">Error al cargar el blog:</p>
                <p className="text-sm">{error}</p>
                <Button 
                  onClick={() => fetchPosts(1)} 
                  variant="outline" 
                  size="sm" 
                  className="mt-2"
                >
                  Reintentar
                </Button>
              </div>
            )}

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <PostSkeleton key={index} />
                ))}
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No hay artículos disponibles
                </h3>
                <p className="text-gray-600">
                  Vuelve pronto para leer nuestros últimos insights sobre ciberseguridad.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => {
                    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
                    const readingTime = wordpressApi.calculateReadingTime(post.excerpt.rendered);
                    
                    return (
                      <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        {featuredImage && (
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={featuredImage.source_url}
                              alt={featuredImage.alt_text || stripHtml(post.title.rendered)}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                        )}
                        
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{readingTime} min lectura</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                            {stripHtml(post.title.rendered)}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {stripHtml(post.excerpt.rendered)}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                              Ciberseguridad
                            </span>
                            <a
                              href={wordpressApi.sanitizeLink(post.link)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                            >
                              Leer artículo completo
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Load More Button */}
                {hasMore && (
                  <div className="text-center mt-12">
                    <Button
                      onClick={loadMore}
                      disabled={loadingMore}
                      size="lg"
                      className="px-8"
                    >
                      {loadingMore ? 'Cargando...' : 'Cargar más artículos'}
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WordPressBlog;