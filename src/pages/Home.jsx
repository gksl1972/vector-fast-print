import React from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import HowItWorks from '@/components/landing/HowItWorks';
import CaseStudy from '@/components/landing/CaseStudy';
import Testimonials from '@/components/landing/Testimonials';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';
import BackToTop from '@/components/landing/BackToTop';
import SEO from '@/components/SEO';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <CaseStudy />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}