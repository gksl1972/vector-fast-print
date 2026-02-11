import React, { Suspense } from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import SEO from '@/components/SEO';

// Lazy load below-the-fold sections
const Services = React.lazy(() => import('@/components/landing/Services'));
const WhyChooseUs = React.lazy(() => import('@/components/landing/WhyChooseUs'));
const HowItWorks = React.lazy(() => import('@/components/landing/HowItWorks'));
const CaseStudy = React.lazy(() => import('@/components/landing/CaseStudy'));
const Testimonials = React.lazy(() => import('@/components/landing/Testimonials'));
const FinalCTA = React.lazy(() => import('@/components/landing/FinalCTA'));
const Footer = React.lazy(() => import('@/components/landing/Footer'));
const BackToTop = React.lazy(() => import('@/components/landing/BackToTop'));

// Loading fallback for sections
const SectionLoader = () => <div className="w-full h-[50vh] bg-slate-50/50 animate-pulse" />;

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Header />
      <main>
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <WhyChooseUs />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <HowItWorks />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <CaseStudy />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <FinalCTA />
        </Suspense>
      </main>

      <Suspense fallback={<div className="w-full h-96 bg-slate-900 animate-pulse" />}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
    </div>
  );
}