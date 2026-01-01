import React, { lazy, Suspense } from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import SEO from '@/components/SEO';

// Lazy load below-the-fold components to reduce initial bundle size
const Services = lazy(() => import('@/components/landing/Services'));
const WhyChooseUs = lazy(() => import('@/components/landing/WhyChooseUs'));
const HowItWorks = lazy(() => import('@/components/landing/HowItWorks'));
const CaseStudy = lazy(() => import('@/components/landing/CaseStudy'));
const Testimonials = lazy(() => import('@/components/landing/Testimonials'));
const FinalCTA = lazy(() => import('@/components/landing/FinalCTA'));
const Footer = lazy(() => import('@/components/landing/Footer'));
const BackToTop = lazy(() => import('@/components/landing/BackToTop'));

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Services />
          <WhyChooseUs />
          <HowItWorks />
          <CaseStudy />
          <Testimonials />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <BackToTop />
      </Suspense>
    </div>
  );
}