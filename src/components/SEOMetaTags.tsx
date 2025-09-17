import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOMetaTagsProps {
  title: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noIndex?: boolean;
}

const SEOMetaTags: React.FC<SEOMetaTagsProps> = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "article",
  publishedTime,
  modifiedTime,
  author,
  noIndex = false,
}) => {
  const fullTitle = title
    ? `${title} | TutumSec`
    : "TutumSec - Ciberseguridad y Consultoría";
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const canonicalUrl = canonical || currentUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      {description && <meta name="description" content={description} />}

      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="TutumSec" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      {ogDescription && (
        <meta name="twitter:description" content={ogDescription} />
      )}
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Article specific */}
      {ogType === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === "article" && author && (
        <meta property="article:author" content={author} />
      )}

      {/* JSON-LD for articles */}
      {ogType === "article" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: description,
            image: ogImage,
            datePublished: publishedTime,
            dateModified: modifiedTime || publishedTime,
            author: {
              "@type": "Organization",
              name: author || "TutumSec",
            },
            publisher: {
              "@type": "Organization",
              name: "TutumSec",
              logo: {
                "@type": "ImageObject",
                url: "https://tutumsec.com/logo.png",
              },
            },
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEOMetaTags;
