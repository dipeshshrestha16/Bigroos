'use client';

import { motion } from 'framer-motion';
import {
  Zap, Palette, Smartphone, HardHat, MessageSquare,
  LayoutTemplate, TrendingUp, DollarSign, LifeBuoy,
} from 'lucide-react';

const props = [
  { icon: Zap, label: 'Fast website delivery', desc: 'We use modern workflows to deliver faster than traditional agencies.' },
  { icon: Palette, label: 'Modern design', desc: 'Clean, contemporary layouts that look professional and polished.' },
  { icon: Smartphone, label: 'Mobile-first layout', desc: 'Designed to look great on every phone, tablet, and desktop.' },
  { icon: HardHat, label: 'Built for trade businesses', desc: 'We understand what local service businesses actually need online.' },
  { icon: MessageSquare, label: 'Clear communication', desc: 'We keep you updated at every stage — no confusing jargon.' },
  { icon: LayoutTemplate, label: 'Custom per business type', desc: 'Every website is tailored to your specific trade and brand.' },
  { icon: TrendingUp, label: 'Conversion-focused pages', desc: 'Pages designed to turn visitors into real customer enquiries.' },
  { icon: DollarSign, label: 'Affordable for small businesses', desc: 'Professional results without enterprise-level pricing.' },
  { icon: LifeBuoy, label: 'Support from idea to launch', desc: 'We guide you through every step — from concept to going live.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-brand-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left: header + description */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block text-brand-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-brand-dark-text mb-6 tracking-tight leading-[1.15] text-balance">
              Why choose{' '}
              <span className="text-brand-primary">Bigroos Tech</span>{' '}
              Australia?
            </h2>
            <p className="text-brand-gray-text text-base leading-relaxed mb-8">
              Bigroos Tech Australia focuses on building clean, practical, and professional websites
              for service-based businesses. Our goal is to help your business look trustworthy online
              and make it easier for customers to reach you.
            </p>

            {/* Logo card */}
            <div className="bg-brand-dark-bg rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/logo.png"
                  alt="Bigroos Tech"
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <div>
                  <p className="text-white font-bold text-sm">Bigroos Tech</p>
                  <p className="text-slate-500 text-xs">Australia</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Dedicated to helping Australian trade and service businesses establish a
                professional online presence that drives real customer enquiries.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-[#12b0cf] text-brand-dark-bg font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-brand-primary/25"
              >
                Get Started Today
              </a>
            </div>
          </motion.div>

          {/* Right: grid of value props */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.08 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {props.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="bg-white border border-brand-border rounded-2xl p-5 hover:border-brand-primary/40 hover:shadow-md transition-all duration-250 hover:scale-[1.02] group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
                  <Icon size={19} className="text-brand-primary" strokeWidth={1.8} />
                </div>
                <h4 className="text-brand-dark-text font-bold text-sm mb-1.5">{label}</h4>
                <p className="text-brand-gray-text text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
