import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageSquare, DollarSign, CheckCircle2, Award, Shield, Truck } from 'lucide-react';

const differentiators = [
  {
    number: '01',
    icon: Zap,
    title: 'Lightning-Fast Response',
    description: 'First reply within 3 minutes via WhatsApp. Full quote within 1 hour. We understand that exhibition timelines don\'t wait—and neither do we.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'True English Communication',
    description: 'Native-level English support from start to finish. No miscommunication, no delays, no stress. Work with a team that speaks your language fluently.',
    color: 'text-sky-500',
    bgColor: 'bg-sky-500/10',
  },
  {
    number: '03',
    icon: DollarSign,
    title: 'No Hidden Costs',
    description: 'Transparent pricing with zero surprise fees. Free delivery across Istanbul. What you see in the quote is exactly what you pay—guaranteed.',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
];

const trustPoints = [
  { icon: Award, text: '10+ years serving international clients' },
  { icon: Shield, text: 'Trusted by Fortune 500 companies' },
  { icon: CheckCircle2, text: 'Quality-checked before delivery' },
  { icon: Truck, text: 'Full logistics coordination included' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-slate-50">
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
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why International Companies<br />Choose Vector Fast Print
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Built for the pace and precision of global business
          </p>
        </motion.div>

        {/* Differentiators */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Number */}
              <span className="absolute top-6 right-6 text-6xl font-bold text-slate-100">
                {item.number}
              </span>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.bgColor} mb-6`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-sky-400" />
                </div>
                <span className="text-white/90 font-medium">
                  {point.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}