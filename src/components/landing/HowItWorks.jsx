import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileCheck, Truck } from 'lucide-react';

const DELIVERY_CAR_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_694d3500c13a70f8ae96442d/9553d5851_VFP2026-delivery3.png";

const steps = [
  {
    number: '1',
    icon: MessageCircle,
    title: 'Contact Us Instantly',
    description: 'Message us via WhatsApp or email with your requirements. Attach design files (PDF, AI, or images). Receive acknowledgment within 3 minutes.',
    color: 'bg-sky-500',
  },
  {
    number: '2',
    icon: FileCheck,
    title: 'Confirm & Approve',
    description: 'Get detailed quote within 1 hour including specs, timeline, and delivery details. All quotes and payments are processed in Euro (€). Approve via message. Payment by wire transfer, credit card link, or cash on delivery.',
    color: 'bg-violet-500',
  },
  {
    number: '3',
    icon: Truck,
    title: 'We Deliver On Time',
    description: 'Your materials are produced, quality-checked, and delivered directly to your hotel, office, or exhibition venue across Istanbul. Setup and installation included when needed.',
    color: 'bg-emerald-500',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-sky-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            From <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-violet-500 to-blue-600">First Contact</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-violet-500 to-blue-600">Final Delivery</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Simple process, exceptional results
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-sky-500 via-violet-500 to-emerald-500" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step card */}
                <div className="group bg-slate-50 rounded-3xl p-8 h-full border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  {/* Number circle */}
                  <div className={`relative z-10 w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Step number badge */}
                  <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 text-sm font-semibold text-slate-600 mb-4 shadow-sm">
                    <span className="w-5 h-5 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs">
                      {step.number}
                    </span>
                    Step {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-6 z-20">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Delivery highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-20"
        >
          <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
            
            <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Free Delivery Across Istanbul
                </h3>
                <p className="text-slate-300 text-lg mb-6">
                  We deliver directly to your hotel, venue, or exhibition center. No extra charges, no surprises—just reliable service when and where you need it.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/90">Same-day delivery available</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/90">All Istanbul districts covered</span>
                  </div>
                </div>
              </div>
              <div className="relative h-48 lg:h-64">
                <img
                  src={DELIVERY_CAR_URL}
                  alt="Vector Fast Print Delivery Vehicle"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}