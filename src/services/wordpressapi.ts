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

interface WordPressApiResponse {
  data: WordPressPost[];
  totalPages: number;
}

const API_BASE = import.meta.env.VITE_WP_API_BASE || "/blog-api";

export const wordpressApi = {
  async getPosts(
    page: number = 1,
    perPage: number = 12
  ): Promise<WordPressApiResponse> {
    try {
      const response = await fetch(
        `${API_BASE}/wp/v2/posts?per_page=${perPage}&page=${page}&_embed=1&_fields=id,slug,date,link,title,excerpt,_embedded`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("HTTP 404");
        }
        throw new Error(`HTTP ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("La API no devolvió JSON (posible redirección/HTML).");
      }

      const totalPages = parseInt(
        response.headers.get("X-WP-TotalPages") || "1",
        10
      );
      const data = await response.json();

      return {
        data,
        totalPages,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Error desconocido al obtener los posts");
    }
  },

  sanitizeLink(link: string): string {
    // Ensure the link uses https for security
    if (link.startsWith("http://")) {
      return link.replace("http://", "https://");
    }
    return link;
  },

  calculateReadingTime(excerpt: string): number {
    const wordsPerMinute = 200;
    const words = excerpt.replace(/<[^>]*>/g, "").split(/\s+/).length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
  },
};
