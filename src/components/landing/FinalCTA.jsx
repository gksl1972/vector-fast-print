import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, CheckCircle, Clock, Truck, DollarSign, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";

const trustPoints = [
  { icon: Clock, text: 'Available 24/7 for urgent requests' },
  { icon: Truck, text: 'Free delivery across Istanbul' },
  { icon: DollarSign, text: 'No hidden fees, transparent pricing' },
  { icon: Award, text: '10+ years serving international clients' },
];

export default function FinalCTA() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" aria-label="Contact Us">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-violet-500 to-blue-600">Get Started</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Reach out now—we respond in minutes, not hours
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="https://wa.me/905331358890?text=Hi%20Vector%20Fast%20Print%2C%0A%0AI%20need%20services%20in%20Istanbul."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white gap-3 h-16 px-10 text-lg font-semibold rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                <div className="text-left">
                  <span className="block text-base">Message on WhatsApp</span>
                  <span className="block text-sm font-normal opacity-90">+90 533 135 88 90</span>
                </div>
              </Button>
            </a>
            <a
              href="mailto:new@vectorfastprint.com?subject=Event%20Services%20Request"
            >
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 bg-white/5 hover:bg-white/10 text-white gap-3 h-16 px-10 text-lg font-semibold rounded-2xl backdrop-blur-sm"
              >
                <Mail className="w-6 h-6" />
                <div className="text-left">
                  <span className="block text-base">Email Us</span>
                  <span className="block text-sm font-normal opacity-90">new@vectorfastprint.com</span>
                </div>
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Supporting Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-12">
            <p className="text-slate-300 text-center mb-6">
              Prefer to send details first? Email us your requirements:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-white font-medium">Product type and quantity</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-white font-medium">Deadline and delivery location</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-white font-medium">Any design files you have ready</p>
              </div>
            </div>
            <p className="text-slate-400 text-center mt-6 text-sm">
              We'll reply with a detailed quote within 1 hour.
            </p>
          </div>

          {/* Trust Points */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-white/90 text-sm">{point.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}