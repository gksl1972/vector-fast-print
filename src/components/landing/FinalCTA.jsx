import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  const [serviceType, setServiceType] = useState('printing');
  const [deadline, setDeadline] = useState('today');

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // GTM Event Tracking
    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'whatsapp_click',
        'button_location': 'final_cta_form',
        'service_type': serviceType,
        'deadline': deadline
      });
    }

    const text = `Hi Vector Fast Print,%0A%0AI need a quote for an upcoming job.%0A%0A*Service:* ${serviceType === 'printing' ? 'Fast Printing' : 'Event Production'}%0A*Timing:* ${deadline === 'today' ? 'Urgent (Today/Tomorrow)' : 'Future Event'}%0A%0APlease let me know the details.`;
    window.open(`https://wa.me/905331358890?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-slate-900 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Text Side */}
            <div>
              <span className="inline-block text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-4">
                Ready to Start?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Get Your Quote in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">3 Minutes</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                No complex forms or waiting for emails. Tell us what you need, and we'll respond instantly via WhatsApp.
              </p>

              <div className="flex items-center gap-4 text-slate-400 text-sm">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center">⚡️</div>
                  <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center">🕒</div>
                  <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center">✅</div>
                </div>
                <span>Average response time: 2 mins</span>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div>
                  <span className="block text-sm font-medium text-slate-700 mb-1" id="service-type-label">What do you need?</span>
                  <div className="grid grid-cols-2 gap-2" role="group" aria-labelledby="service-type-label">
                    <button
                      type="button"
                      onClick={() => setServiceType('printing')}
                      aria-pressed={serviceType === 'printing'}
                      className={`p-3 text-sm font-medium rounded-xl border transition-all ${serviceType === 'printing' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'}`}
                    >
                      Fast Printing
                    </button>
                    <button
                      type="button"
                      onClick={() => setServiceType('event')}
                      aria-pressed={serviceType === 'event'}
                      className={`p-3 text-sm font-medium rounded-xl border transition-all ${serviceType === 'event' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'}`}
                    >
                      Event Production
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="deadline-select" className="block text-sm font-medium text-slate-700 mb-1">When do you need it?</label>
                  <select
                    id="deadline-select"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  >
                    <option value="today">Urgent (Today/Tomorrow)</option>
                    <option value="future">Upcoming Event</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white gap-2 h-12 text-lg font-semibold rounded-xl shadow-lg shadow-emerald-500/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get WhatsApp Quote
                </Button>

                <p className="text-center text-xs text-slate-400">
                  Directs to WhatsApp • No spam guaranteed
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}