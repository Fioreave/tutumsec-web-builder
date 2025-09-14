import React, { useState, useEffect, useCallback } from "react";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { wordpressApi } from "@/services/wordpressapi";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOMetaTags from "@/components/SEOMetaTags";

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
    "wp:featuredmedia"?: Array<{
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

  const fetchPosts = useCallback(
    async (page: number, append: boolean = false) => {
      try {
        if (page === 1 && !append) {
          setLoading(true);
        } else {
          setLoadingMore(true);
        }

        setError(null);

        const response = await wordpressApi.getPosts(page, 12);

        if (append) {
          setPosts((prev) => [...prev, ...response.data]);
        } else {
          setPosts(response.data);
        }

        setTotalPages(response.totalPages);
        setHasMore(page < response.totalPages);
        setCurrentPage(page);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error al cargar los posts"
        );
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    []
  );

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
          if (
            response.data.length > 0 &&
            posts.length > 0 &&
            response.data[0].id !== posts[0].id
          ) {
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
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, "").trim();
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
    <div className="min-h-screen bg-tutumsec-gray-50">
      <SEOMetaTags
        title="Blog de Ciberseguridad | TutumSec"
        description="Artículos especializados sobre ciberseguridad, compliance NIS2, ransomware y transformación digital. Insights y mejores prácticas de nuestros expertos."
        canonical="https://tutumsec.io/blog"
        ogType="website"
      />

      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Blog de Ciberseguridad
              </h1>
              <p className="text-xl md:text-2xl text-primary-light max-w-3xl mx-auto animate-slide-up">
                Insights, análisis y mejores prácticas en ciberseguridad
                empresarial
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {error && (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive px-6 py-4 rounded-lg mb-8">
                <p className="font-medium">Error al cargar el blog:</p>
                <p className="text-sm">{error}</p>
                <Button
                  onClick={() => fetchPosts(1)}
                  variant="outline"
                  size="sm"
                  className="mt-3 border-destructive text-destructive hover:bg-destructive hover:text-white"
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
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  No hay artículos disponibles
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Vuelve pronto para leer nuestros últimos insights sobre
                  ciberseguridad.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post, index) => {
                    const featuredImage =
                      post._embedded?.["wp:featuredmedia"]?.[0];
                    const readingTime = wordpressApi.calculateReadingTime(
                      post.excerpt.rendered
                    );

                    return (
                      <Card
                        key={post.id}
                        className="overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-card group hover:-translate-y-1 animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {featuredImage && (
                          <div className="aspect-video overflow-hidden relative">
                            <img
                              src={featuredImage.source_url}
                              alt={
                                featuredImage.alt_text ||
                                stripHtml(post.title.rendered)
                              }
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        )}

                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-primary" />
                              <span>{readingTime} min lectura</span>
                            </div>
                          </div>

                          <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                            {stripHtml(post.title.rendered)}
                          </h3>

                          <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                            {stripHtml(post.excerpt.rendered)}
                          </p>

                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                              Ciberseguridad
                            </span>
                            <a
                              href={wordpressApi.sanitizeLink(post.link)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg group"
                            >
                              Leer artículo
                              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Load More Button */}
                {hasMore && (
                  <div className="text-center mt-16">
                    <Button
                      onClick={loadMore}
                      disabled={loadingMore}
                      size="lg"
                      className="px-8 py-3 bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {loadingMore ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Cargando...
                        </>
                      ) : (
                        "Cargar más artículos"
                      )}
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
