import React from 'react';

export default function SEO() {
  React.useEffect(() => {
    // Set page title
    document.title = 'Vector Fast Print Istanbul | Same-Day Digital Printing & Exhibition Services';
    
    // Set meta tags
    const setMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    setMetaTag('description', 'Fast digital printing in Istanbul with 24/7 English support. Same-day delivery, free venue delivery. Trusted by international companies for exhibitions, conferences, and events.');
    setMetaTag('keywords', 'digital printing istanbul, same day printing istanbul, exhibition printing istanbul, english printing services istanbul, business card printing istanbul, banner printing istanbul, event printing turkey');
    
    // Open Graph tags
    setMetaTag('og:title', 'Vector Fast Print Istanbul | Same-Day Digital Printing', true);
    setMetaTag('og:description', '24/7 English support, same-day printing, free delivery across Istanbul', true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', 'https://vectorfastprint.com', true);
  }, []);
  
  return null;
}