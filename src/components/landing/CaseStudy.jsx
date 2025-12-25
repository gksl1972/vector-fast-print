import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PRINT_PHOTO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_694d3500c13a70f8ae96442d/c2afae52b_Screenshot2025-12-25at160133.png";

const solutionPoints = [
  'Complete booth design, construction, and installation',
  'Large-format exhibition graphics and branded materials',
  'All digital printing collateral (brochures, signage, promotional items)',
  'Full logistics coordination including transport, setup, and post-event breakdown',
  'On-site support throughout the event duration',
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 lg:py-32 bg-slate-50">
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
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Recent Project: Imperial Tobacco<br />International Event
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Full-scale exhibition production in Istanbul
          </p>
        </motion.div>

        {/* Case Study Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto min-h-[400px]">
              <img
                src={PRINT_PHOTO_URL}
                alt="Imperial Tobacco Project - Printing Production"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Production in Progress
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12">
              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-sky-500" />
                  Overview
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Imperial Tobacco required comprehensive exhibition services for their major Istanbul event—from initial concept to final breakdown.
                </p>
              </div>

              {/* Our Solution */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-violet-500" />
                  Our Solution
                </h3>
                <ul className="space-y-3">
                  {solutionPoints.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Result */}
              <div className="mb-8 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-emerald-500" />
                  Result
                </h3>
                <p className="text-slate-700">
                  Seamless execution delivered on time, enabling Imperial Tobacco to focus entirely on their event objectives while we handled all production and logistics.
                </p>
              </div>

              {/* CTA */}
              <a
                href="mailto:new@vectorfastprint.com?subject=Portfolio%20Request"
              >
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white gap-2 h-12 px-6 rounded-xl"
                >
                  <Mail className="w-5 h-5" />
                  View More Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}