'use client';

import { motion } from 'framer-motion';
import {
  Droplets, Zap, PaintBucket, Hammer, Home, Sparkles,
  Leaf, Building2, Car, Bug, Wrench, Wind,
} from 'lucide-react';

const trades = [
  { label: 'Plumbers', icon: Droplets, color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  { label: 'Electricians', icon: Zap, color: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20' },
  { label: 'Painters', icon: PaintBucket, color: 'bg-orange-400/10 text-orange-400 border-orange-400/20' },
  { label: 'Carpenters', icon: Hammer, color: 'bg-amber-600/10 text-amber-500 border-amber-500/20' },
  { label: 'Roofers', icon: Home, color: 'bg-slate-400/10 text-slate-400 border-slate-400/20' },
  { label: 'Cleaners', icon: Sparkles, color: 'bg-teal-400/10 text-teal-400 border-teal-400/20' },
  { label: 'Landscapers', icon: Leaf, color: 'bg-green-500/10 text-green-400 border-green-500/20' },
  { label: 'Builders', icon: Building2, color: 'bg-stone-400/10 text-stone-400 border-stone-400/20' },
  { label: 'Mechanics', icon: Car, color: 'bg-red-400/10 text-red-400 border-red-400/20' },
  { label: 'Pest Control', icon: Bug, color: 'bg-lime-500/10 text-lime-400 border-lime-500/20' },
  { label: 'Handymen', icon: Wrench, color: 'bg-indigo-400/10 text-indigo-400 border-indigo-400/20' },
  { label: 'HVAC Technicians', icon: Wind, color: 'bg-cyan-400/10 text-brand-primary border-brand-primary/20' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-20 lg:py-28 bg-brand-light-bg">
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
            Who We Help
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark-text mb-5 tracking-tight text-balance">
            Websites built for hardworking{' '}
            <span className="text-brand-primary">service businesses</span>
          </h2>
          <p className="text-brand-gray-text text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you run a plumbing company, painting service, electrical business, or local trade
            team, we create websites that clearly show your services and help customers contact you
            with confidence.
          </p>
        </motion.div>

        {/* Trade grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {trades.map(({ label, icon: Icon, color }) => (
            <motion.div
              key={label}
              variants={item}
              className={`group flex flex-col items-center gap-3 p-5 rounded-2xl border bg-white hover:shadow-lg hover:scale-[1.04] transition-all duration-300 cursor-default ${color}`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center border ${color}`}
              >
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <span className="text-brand-dark-text text-sm font-semibold text-center leading-tight">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-brand-gray-text text-sm mb-4">
            Don&apos;t see your trade? We build websites for all service businesses.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-[#12b0cf] text-brand-dark-bg font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:scale-[1.03] shadow-md shadow-brand-primary/25"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
