import React from 'react';

export default function SEO() {
  React.useEffect(() => {
    // Inline Critical CSS for above-the-fold content
    if (!document.getElementById('critical-css')) {
      const criticalStyle = document.createElement('style');
      criticalStyle.id = 'critical-css';
      criticalStyle.textContent = `
        *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
        html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}
        body{margin:0;line-height:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
        .min-h-screen{min-height:100vh}.flex{display:flex}.items-center{align-items:center}.justify-center{justify-content:center}
        .bg-slate-900{background-color:rgb(15 23 42)}.text-white{color:#fff}
        .relative{position:relative}.absolute{position:absolute}.inset-0{inset:0}
        .overflow-hidden{overflow:hidden}.opacity-60{opacity:.6}
        .object-cover{object-fit:cover}.w-full{width:100%}.h-full{height:100%}
        .max-w-7xl{max-width:80rem}.mx-auto{margin-left:auto;margin-right:auto}
        .px-4{padding-left:1rem;padding-right:1rem}.py-32{padding-top:8rem;padding-bottom:8rem}
        .text-4xl{font-size:2.25rem;line-height:2.5rem}.font-bold{font-weight:700}
        .bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}
        .from-orange-500{--tw-gradient-from:#f97316}.to-blue-600{--tw-gradient-to:#2563eb}
      `;
      document.head.insertBefore(criticalStyle, document.head.firstChild);
    }
    
    // Defer main CSS bundle to prevent render-blocking
    const deferCSS = () => {
      const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
      cssLinks.forEach(link => {
        if (link.href.includes('/assets/') && link.href.includes('.css')) {
          // Convert to preload and then to stylesheet
          const preloadLink = document.createElement('link');
          preloadLink.rel = 'preload';
          preloadLink.as = 'style';
          preloadLink.href = link.href;
          preloadLink.onload = function() {
            this.onload = null;
            this.rel = 'stylesheet';
          };
          
          // Add noscript fallback
          const noscript = document.createElement('noscript');
          const fallbackLink = document.createElement('link');
          fallbackLink.rel = 'stylesheet';
          fallbackLink.href = link.href;
          noscript.appendChild(fallbackLink);
          
          link.parentNode.replaceChild(preloadLink, link);
          document.head.appendChild(noscript);
        }
      });
    };
    
    // Run CSS deferral immediately
    deferCSS();
    // Also run after a tiny delay to catch dynamically added stylesheets
    setTimeout(deferCSS, 0);
    
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
    
    // Preload primary font with font-display: swap
    if (!document.querySelector('link[rel="preload"][as="font"]')) {
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.as = 'font';
      fontPreload.type = 'font/woff2';
      fontPreload.href = 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';
      fontPreload.crossOrigin = 'anonymous';
      document.head.appendChild(fontPreload);
    }

    // Preconnect for performance
    const preconnectUrls = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com'
    ];

    preconnectUrls.forEach(url => {
      if (!document.querySelector(`link[href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        if (url.includes('gstatic')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      }
    });
    
    // Add preload for the responsive hero image (LCP) - using local files
    if (!document.querySelector('link[rel="preload"][imagesrcset]')) {
      const heroPreload = document.createElement('link');
      heroPreload.rel = 'preload';
      heroPreload.as = 'image';
      heroPreload.setAttribute('imagesrcset', '/hero-v4-640w.webp 640w, /hero-v4-960w.webp 960w, /hero-v4-1280w.webp 1280w, /hero-v4-1920w.webp 1920w');
      heroPreload.setAttribute('imagesizes', '100vw');
      heroPreload.setAttribute('fetchpriority', 'high');
      document.head.appendChild(heroPreload);
    }
    
    // ========== TRACKING CODES START ==========
    
    // Google Tag Manager & Analytics - Deferred until user interaction or 3s delay
    if (!window.dataLayer) {
      window.dataLayer = window.dataLayer || [];
      let trackingLoaded = false;
      
      const loadTracking = () => {
        if (trackingLoaded) return;
        trackingLoaded = true;
        
        // Load GTM
        const gtmScript = document.createElement('script');
        gtmScript.async = true;
        gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NFNFBZZV');`;
        document.body.appendChild(gtmScript);
        
        // GTM noscript
        const noscript = document.createElement('noscript');
        noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFNFBZZV" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
        document.body.appendChild(noscript);
        
        // Load Google Analytics
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XKDCLZTCW6';
        document.head.appendChild(gaScript);
        
        const gaConfigScript = document.createElement('script');
        gaConfigScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XKDCLZTCW6');
        `;
        document.head.appendChild(gaConfigScript);
      };
      
      // Load on user interaction (scroll, click, mousemove, touchstart)
      const interactionEvents = ['scroll', 'click', 'mousemove', 'touchstart', 'keydown'];
      const loadOnInteraction = () => {
        loadTracking();
        interactionEvents.forEach(event => {
          window.removeEventListener(event, loadOnInteraction);
        });
      };
      
      interactionEvents.forEach(event => {
        window.addEventListener(event, loadOnInteraction, { once: true, passive: true });
      });
      
      // Fallback: Load after 3 seconds if no interaction
      setTimeout(() => {
        if (!trackingLoaded) loadTracking();
      }, 3000);
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