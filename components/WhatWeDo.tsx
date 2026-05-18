'use client';

import { motion } from 'framer-motion';
import { Monitor, LayoutTemplate, Briefcase, RefreshCw, MessageSquare, Search } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Website Design',
    description:
      'Clean, professional, and mobile-friendly websites designed for your specific business type. Built to convert visitors into enquiries.',
    accent: '#19C2E3',
  },
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    description:
      'Fast-loading landing pages made for promotions, ads, cold email campaigns, and lead generation that drive real results.',
    accent: '#F4C542',
  },
  {
    icon: Briefcase,
    title: 'Business Portfolio Websites',
    description:
      'Showcase your services, past work, reviews, service areas, and contact details all in one professional online presence.',
    accent: '#19C2E3',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    description:
      'Already have an old website? We can make it look modern, clear, and more trustworthy — without starting from scratch.',
    accent: '#F4C542',
  },
  {
    icon: MessageSquare,
    title: 'Contact Forms & Booking Sections',
    description:
      'Make it easy for customers to request quotes, send enquiries, or book a service directly from your website.',
    accent: '#19C2E3',
  },
  {
    icon: Search,
    title: 'SEO-Friendly Structure',
    description:
      'We build websites with clear headings, service sections, and content structure to help customers find what they need.',
    accent: '#F4C542',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 lg:py-28 bg-brand-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-brand-primary text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight text-balance">
            Everything your business{' '}
            <span className="text-brand-primary">needs online</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We use modern tools and efficient development workflows to deliver websites faster —
            without cutting corners on quality or design.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, title, description, accent }) => (
            <motion.div
              key={title}
              variants={cardVariant}
              className="group relative bg-slate-800/50 border border-slate-700/60 rounded-2xl p-7 hover:border-brand-primary/40 hover:bg-slate-800/80 transition-all duration-300 hover:scale-[1.02] cursor-default overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: accent }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}30` }}
              >
                <Icon size={22} style={{ color: accent }} strokeWidth={1.8} />
              </div>

              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          Every website is custom-built around your trade, brand, and customer needs.
        </motion.p>
      </div>
    </section>
  );
}
