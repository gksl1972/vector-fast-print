import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Layers, Camera, Clock } from 'lucide-react';

const services = [
  {
    icon: Printer,
    title: 'Fast Digital Printing',
    description: 'Business cards, brochures, flyers, banners, posters, and promotional materials. Premium finishes with same-day turnaround. Delivered directly to your hotel or venue.',
    gradient: 'from-sky-500 to-blue-600',
    bgGradient: 'from-sky-50 to-blue-50',
  },
  {
    icon: Layers,
    title: 'Exhibition & Booth Production',
    description: 'Complete booth design, construction, and installation. Roll-up banners, backdrop walls, display systems, and branded exhibition graphics. Full setup and breakdown services.',
    gradient: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-50 to-purple-50',
  },
  {
    icon: Camera,
    title: 'Full Event Management',
    description: 'Audio-visual equipment rental and operation, professional photography and videography, corporate video production, and complete event logistics coordination.',
    gradient: 'from-orange-500 to-amber-600',
    bgGradient: 'from-orange-50 to-amber-50',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Support',
    description: 'Last-minute requests handled with priority production. Native English support via WhatsApp. Immediate response guarantee—because your deadline is our deadline.',
    gradient: 'from-emerald-500 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
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
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6" id="services">
            Fast Digital Printing<br className="sm:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-violet-500 to-blue-600">&</span><br className="sm:hidden" /> Complete Event Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From urgent print jobs to full-scale events—we deliver on time, every time
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 lg:p-10 border border-slate-100 hover:shadow-2xl hover:shadow-${service.gradient.split('-')[1]}-500/30 transition-all duration-500 cursor-pointer`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>

              {/* Decorative element */}
              <div className={`absolute top-6 right-6 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}