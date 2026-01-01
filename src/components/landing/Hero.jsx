import React from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { MessageCircle, Mail, Clock, Award, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HERO_BG_URL = "/hero-v4-1920w.jpg";
const HERO_BG_SRCSET = "/hero-v4-640w.jpg 640w, /hero-v4-960w.jpg 960w, /hero-v4-1280w.jpg 1280w, /hero-v4-1920w.jpg 1920w";

const trustBadges = [
  { icon: Zap, text: 'Response within 3 minutes' },
  { icon: Clock, text: 'Quote within 1 hour' },
  { icon: Award, text: '10+ years experience' },
];

export default function Hero() {
  return (
    // LazyMotion: Gereksiz fizik motorunu yüklemez, JS boyutunu düşürür.
    <LazyMotion features={domAnimation}>
      {/* min-h-[100dvh]: Mobilde adres çubuğu zıplamasını engeller (CLS Fix) */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        
        {/* Background Layer */}
        <div className="absolute inset-0 bg-slate-900 z-0">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={HERO_BG_URL}
              srcSet={HERO_BG_SRCSET}
              sizes="100vw"
              alt="Vector Fast Print Production"
              width="1920"
              height="1080"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-900/40 to-slate-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30" />
        </div>

        {/* Animated Background Elements - Optimized with 'm' component */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <m.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl will-change-transform"
          />
          <m.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl will-change-transform"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl mx-auto text-center">
            
            {/* Badge */}
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">24/7 English Support Available</span>
            </m.div>

            {/* Main Headline */}
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Your Trusted{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-violet-500 to-blue-600">
                Digital Printing Partner
              </span>{' '}
              in Istanbul
            </m.h1>

            {/* Subheadline */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-white font-medium mb-4"
            >
              Same-Day Printing • 24/7 English Support • Free Delivery Across Istanbul
            </m.p>
            
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base text-slate-200 mb-10"
            >
              Business cards, banners, brochures, exhibition graphics—plus full event management when you need it.
            </m.p>

            {/* CTA Buttons */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <a
                href="https://wa.me/905331358890?text=Hi%20Vector%20Fast%20Print%2C%0A%0AI%20need%20services%20in%20Istanbul.%0A%0ADetails%3A%0A-%20Service%3A%20%0A-%20Deadline%3A%20%0A-%20Location%3A%20%0A%0AThanks!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact via WhatsApp"
                onClick={() => {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    'event': 'whatsapp_click',
                    'button_location': 'hero',
                    'button_text': 'WhatsApp Quote'
                  });
                }}
              >
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white gap-3 h-14 px-8 text-lg font-semibold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Quote
                </Button>
              </a>
              <a
                href="mailto:new@vectorfastprint.com?subject=Event%20Services%20Request"
                aria-label="Contact via Email"
                onClick={() => {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    'event': 'email_click',
                    'button_location': 'hero',
                    'button_text': 'Email Us'
                  });
                }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-2 border-white gap-3 h-14 px-8 text-lg font-semibold rounded-xl transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </Button>
              </a>
            </m.div>

            {/* Trust Badges */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {trustBadges.map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-white/80"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 via-violet-500 to-orange-500 flex items-center justify-center">
                    <badge.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </m.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <m.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </m.div>
        </m.div>
      </section>
    </LazyMotion>
  );
}