import React from 'react';
import { MessageCircle, Mail, MapPin, Phone, Clock } from 'lucide-react';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694d35ec1d0796702e31ba57/473a7a340_logo-v3-final.png";

const services = [
  'Digital Printing',
  'Exhibition Solutions',
  'Event Management',
  '24/7 Emergency Services',
];

export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Company Info */}
          <div>
            <img 
              src={LOGO_URL} 
              alt="Vector Fast Print" 
              width="180"
              height="56"
              loading="lazy"
              className="h-14 w-auto mb-6"
            />
            <p className="text-slate-600 mb-6 leading-relaxed">
              Your trusted partner for exhibition and event solutions in Istanbul. Serving international clients since 2014.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:new@vectorfastprint.com"
                className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
                new@vectorfastprint.com
              </a>
              <a 
                href="tel:+905331358890"
                className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +90 533 135 88 90
              </a>
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin className="w-5 h-5" />
                Istanbul, Turkey
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Business Hours</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-900 font-medium">Available 24/7 for urgent requests</p>
                  <p className="text-slate-600 text-sm mt-1">Emergency support always available via WhatsApp</p>
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-sm text-slate-600 mb-2">Standard business hours:</p>
                <p className="text-slate-900 font-medium">Monday - Saturday</p>
                <p className="text-slate-700">9:00 AM - 7:00 PM (Istanbul time)</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://wa.me/905331358890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-emerald-600 hover:bg-emerald-500 rounded-xl flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:new@vectorfastprint.com"
                className="w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © 2025 Vector Fast Print. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            Trusted by international clients since 2014
          </p>
        </div>
      </div>
    </footer>
  );
}