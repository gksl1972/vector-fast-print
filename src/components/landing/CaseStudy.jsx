import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const imperialTobaccoImages = [
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694d35ec1d0796702e31ba57/7be021e0b_portfolio1-v3.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694d35ec1d0796702e31ba57/eab17fd2b_portfolio2-v3.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694d35ec1d0796702e31ba57/7753f7848_portfolio4-v3.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694d35ec1d0796702e31ba57/95291f616_portfolio5-v3.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694d35ec1d0796702e31ba57/c240f9dcd_portfolio6-v3.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694d35ec1d0796702e31ba57/33cb6323b_portfolio7-v3.jpg",
];

const solutionPoints = [
  'Complete booth design, construction, and installation',
  'Large-format exhibition graphics and branded materials',
  'All digital printing collateral (brochures, signage, promotional items)',
  'Full logistics coordination including transport, setup, and post-event breakdown',
  'On-site support throughout the event duration',
];

export default function CaseStudy() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imperialTobaccoImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="case-study" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
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
            Recent Project: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-violet-500 to-blue-600">Imperial Tobacco</span><br />International Event
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
            {/* Image Gallery Side */}
            <div className="relative h-96 lg:h-auto min-h-[500px] bg-slate-900 overflow-hidden">
              {/* Main Featured Image with Fade Transition */}
              <div className="relative w-full h-full">
                {imperialTobaccoImages.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`Imperial Tobacco Project ${index + 1}`}
                    width="800"
                    height="600"
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: currentImageIndex === index ? 1 : 0,
                      scale: currentImageIndex === index ? 1.05 : 1
                    }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>

              {/* Thumbnail Gallery */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto pb-2">
                {imperialTobaccoImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index 
                        ? 'border-white scale-110' 
                        : 'border-white/30 opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width="64"
                      height="64"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Project Label */}
              <div className="absolute top-6 left-6">
                <span className="inline-block bg-gradient-to-r from-orange-500 to-violet-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                  Exhibition Project
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