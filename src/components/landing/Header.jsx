import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LOGO_URL = "/logo-v4-final.webp";

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Portfolio', href: '#case-study' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <img 
                src={LOGO_URL} 
                alt="Vector Fast Print" 
                width="180"
                height="56"
                fetchPriority="high"
                className="h-12 sm:h-14 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium transition-colors hover:text-sky-500 text-slate-700"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/905331358890?text=Hi%20Vector%20Fast%20Print%2C%0A%0AI%20need%20services%20in%20Istanbul."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2 rounded-full px-5"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl"
            >
              <div className="p-6 pt-24">
                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left text-lg font-medium text-slate-700 hover:text-sky-500 py-2 border-b border-slate-100"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                <div className="mt-8 space-y-3">
                  <a
                    href="https://wa.me/905331358890?text=Hi%20Vector%20Fast%20Print%2C%0A%0AI%20need%20services%20in%20Istanbul."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white gap-2 h-12 text-base">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Us
                    </Button>
                  </a>
                  <a
                    href="mailto:new@vectorfastprint.com?subject=Event%20Services%20Request"
                    className="block"
                  >
                    <Button variant="outline" className="w-full gap-2 h-12 text-base">
                      <Mail className="w-5 h-5" />
                      Email Us
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}