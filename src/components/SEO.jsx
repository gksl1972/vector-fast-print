import React from 'react';

export default function SEO() {
  React.useEffect(() => {
    // Set page title
    document.title = 'Vector Fast Print Istanbul | Same-Day Digital Printing & Exhibition Services';
    
    // Set meta tags
    const setMetaTag = (name, content, isProperty = false, isHttpEquiv = false) => {
      const attribute = isHttpEquiv ? 'http-equiv' : (isProperty ? 'property' : 'name');
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Basic SEO
    setMetaTag('description', 'Fast digital printing in Istanbul with 24/7 English support. Same-day delivery, free venue delivery. Trusted by international companies for exhibitions, conferences, and events.');
    setMetaTag('keywords', 'digital printing istanbul, same day printing istanbul, exhibition printing istanbul, english printing services istanbul, business card printing istanbul, banner printing istanbul, event printing turkey');
    
    // Robots & SEO
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('format-detection', 'telephone=yes');
    
    // Google Search Console Verification - USER MUST REPLACE
    setMetaTag('google-site-verification', 'VERIFICATION_CODE_HERE');
    
    // Open Graph tags
    setMetaTag('og:title', 'Vector Fast Print Istanbul | Same-Day Digital Printing', true);
    setMetaTag('og:description', '24/7 English support, same-day printing, free delivery across Istanbul', true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', 'https://vectorfastprint.com', true);
    setMetaTag('og:locale', 'en_US', true);
    setMetaTag('og:site_name', 'Vector Fast Print Istanbul', true);
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://vectorfastprint.com');
    
    // Preconnect for performance
    const preconnectUrls = [
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com'
    ];
    
    preconnectUrls.forEach(url => {
      if (!document.querySelector(`link[href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        document.head.appendChild(link);
      }
    });
    
    // ========== TRACKING CODES START ==========
    
    // Google Tag Manager - GTM-NFNFBZZV
    if (!window.dataLayer) {
      window.dataLayer = window.dataLayer || [];
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NFNFBZZV');`;
      document.head.insertBefore(gtmScript, document.head.firstChild);
      
      // GTM noscript
      const noscript = document.createElement('noscript');
      noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFNFBZZV" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
      document.body.insertBefore(noscript, document.body.firstChild);
    }
    
    // Google Analytics 4 - USER MUST REPLACE G-XXXXXXXXXX
    if (!document.querySelector('script[src*="gtag/js"]')) {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
      document.head.appendChild(gaScript);
      
      const gaConfigScript = document.createElement('script');
      gaConfigScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `;
      document.head.appendChild(gaConfigScript);
    }
    
    // Facebook Pixel (Optional) - USER MUST REPLACE YOUR_PIXEL_ID_HERE
    // Uncomment to enable Facebook Pixel tracking
    /*
    if (!window.fbq) {
      const fbScript = document.createElement('script');
      fbScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'YOUR_PIXEL_ID_HERE');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fbScript);
      
      const fbNoscript = document.createElement('noscript');
      fbNoscript.innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID_HERE&ev=PageView&noscript=1" />';
      document.body.appendChild(fbNoscript);
    }
    */
    
    // ========== TRACKING CODES END ==========
    
    // ========== STRUCTURED DATA (Schema.org) START ==========
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Vector Fast Print",
      "description": "Fast digital printing and exhibition services in Istanbul with 24/7 English support",
      "url": "https://vectorfastprint.com",
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
    
    if (!document.querySelector('script[type="application/ld+json"]')) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    // ========== STRUCTURED DATA END ==========
    
    // Initialize global gtag function for conversion tracking
    window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
    
  }, []);
  
  return null;
}