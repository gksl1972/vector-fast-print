import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO() {
  return (
    <Helmet>
      <title>Vector Fast Print Istanbul | Same-Day Digital Printing & Exhibition Services</title>
      <meta name="description" content="Fast digital printing in Istanbul with 24/7 English support. Same-day delivery, free venue delivery. Trusted by international companies for exhibitions, conferences, and events." />
      <meta name="keywords" content="digital printing istanbul, same day printing istanbul, exhibition printing istanbul, english printing services istanbul, business card printing istanbul, banner printing istanbul, event printing turkey" />
      
      {/* Open Graph for social sharing */}
      <meta property="og:title" content="Vector Fast Print Istanbul | Same-Day Digital Printing" />
      <meta property="og:description" content="24/7 English support, same-day printing, free delivery across Istanbul" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vectorfastprint.com" />
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
}