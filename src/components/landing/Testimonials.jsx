import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Clear English correspondence and fast follow-up made everything smooth.",
    role: "Executive Assistant",
    company: "Astria Learning",
    country: "USA",
    flag: "🇺🇸",
  },
  {
    quote: "They made our last-minute banner order for an Istanbul event incredibly easy—everything arrived exactly on time.",
    role: "Director",
    company: "S&P Global Commodity Insights",
    country: "UK",
    flag: "🇬🇧",
  },
  {
    quote: "They turned our detailed booklet design into a production-ready plan fast and professionally—everything felt effortless.",
    role: "Marketing Project Manager",
    company: "Chesamel / Modern",
    country: "UK",
    flag: "🇬🇧",
  },
  {
    quote: "Clear communication and fast quotation made it easy to arrange custom posters on short notice.",
    role: "Project Coordinator",
    company: "AOCHUAN Tech",
    country: "China",
    flag: "🇨🇳",
  },
  {
    quote: "We worked smoothly on an urgent last-minute request for the Amazon Event in Istanbul.",
    role: "Project Manager",
    company: "REC Gruppe GmbH",
    country: "Germany",
    flag: "🇩🇪",
  },
  {
    quote: "They managed same-day printing and hotel delivery without a single issue. Thanks team VFP.",
    role: "Associate Creative Project Manager",
    company: "Envision Pharma Group",
    country: "UK",
    flag: "🇬🇧",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const navigate = (direction) => {
    setAutoplay(false);
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    } else {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sky-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-violet-500 to-blue-600">International Teams</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 min-h-[300px] flex items-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-6 left-8 opacity-20">
              <Quote className="w-16 h-16 text-sky-400" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 w-full"
              >
                <blockquote className="text-xl lg:text-2xl text-white font-medium leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl">
                    {testimonials[currentIndex].flag}
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-slate-400">
                      {testimonials[currentIndex].company}, {testimonials[currentIndex].country}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('prev')}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('next')}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-sky-500 w-8' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}