import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const siteUrl = 'https://vectorfastprint.com';
  const siteTitle = 'Vector Fast Print Istanbul | Same-Day Digital Printing & Exhibition Services';
  const siteDescription = 'Fast digital printing in Istanbul with 24/7 English support. Same-day delivery, free venue delivery. Trusted by international companies for exhibitions, conferences, and events.';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vector Fast Print",
    "description": "Fast digital printing and exhibition services in Istanbul with 24/7 English support",
    "url": siteUrl,
    "telephone": "+905331358890",
    "email": "new@vectorfastprint.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Istanbul",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082",
      "longitude": "28.9784"
    },
    "openingHours": "Mo-Sa 09:00-19:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    },
    "sameAs": [
      "https://wa.me/905331358890"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Printing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Printing",
            "description": "Business cards, brochures, banners, posters with same-day delivery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exhibition Booth Production",
            "description": "Complete booth design, construction and installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event Management",
            "description": "Full event logistics, AV equipment, photography"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content="digital printing istanbul, same day printing istanbul, exhibition printing istanbul, english printing services istanbul, business card printing istanbul, banner printing istanbul, event printing turkey" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="google-site-verification" content="VERIFICATION_CODE_HERE" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Vector Fast Print Istanbul" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />

      {/* Canonical */}
      <link rel="canonical" href={siteUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preconnect */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />

    </Helmet>
  );
}