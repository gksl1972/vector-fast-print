import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, CheckCircle, Clock, Award, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HERO_BG_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694d35ec1d0796702e31ba57/4c5d7bbe4_hero-v3-final.jpg";

const trustBadges = [
  { icon: Zap, text: 'Response within 3 minutes' },
  { icon: Clock, text: 'Quote within 1 hour' },
  { icon: Award, text: '10+ years experience' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={HERO_BG_URL}
            alt="Vector Fast Print Production"
            width="1920"
            height="1080"
            loading="eager"
            fetchpriority="high"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-900/40 to-slate-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">24/7 English Support Available</span>
          </motion.div>

          {/* Main Headline - H1 for SEO */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Your Trusted{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-violet-500 to-blue-600">
              Digital Printing Partner
            </span>{' '}
            in Istanbul
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white font-medium mb-4"
          >
            Same-Day Printing • 24/7 English Support • Free Delivery Across Istanbul
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base text-slate-200 mb-10"
          >
            Business cards, banners, brochures, exhibition graphics—plus full event management when you need it.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <a
              href="https://wa.me/905331358890?text=Hi%20Vector%20Fast%20Print%2C%0A%0AI%20need%20services%20in%20Istanbul.%0A%0ADetails%3A%0A-%20Service%3A%20%0A-%20Deadline%3A%20%0A-%20Location%3A%20%0A%0AThanks!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp"
              onClick={() => {
                // GTM Event Tracking
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  'event': 'whatsapp_click',
                  'button_location': 'hero',
                  'button_text': 'WhatsApp Quote'
                });
                // Google Ads Conversion Tracking (uncomment and replace AW-XXXXXXXXX when ready)
                // window.gtag && window.gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXX/XXXXX'});
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
                // GTM Event Tracking
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
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}