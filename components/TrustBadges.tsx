'use client';

import { motion } from 'framer-motion';
import { Smartphone, Zap, ClipboardList, HardHat, Globe, RefreshCw } from 'lucide-react';

const badges = [
  {
    icon: Smartphone,
    label: 'Mobile Friendly',
    desc: 'Looks great on every device',
    color: '#19C2E3',
  },
  {
    icon: Zap,
    label: 'Fast Loading',
    desc: 'Optimised for quick load times',
    color: '#F4C542',
  },
  {
    icon: ClipboardList,
    label: 'Quote Form Ready',
    desc: 'Customers can request quotes instantly',
    color: '#10b981',
  },
  {
    icon: HardHat,
    label: 'Service-Based Design',
    desc: 'Tailored for trade businesses',
    color: '#f97316',
  },
  {
    icon: Globe,
    label: 'Australian Business Focus',
    desc: 'Built for the local market',
    color: '#8b5cf6',
  },
  {
    icon: RefreshCw,
    label: 'Easy to Update',
    desc: 'Simple changes whenever needed',
    color: '#ec4899',
  },
];

export default function TrustBadges() {
  return (
    <section className="py-20 lg:py-28 bg-brand-dark-bg">
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
            Our Standards
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight text-balance">
            Built with{' '}
            <span className="text-brand-secondary">business goals</span> in mind
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every website we create is held to a high standard — so your business looks credible
            from day one.
          </p>
        </motion.div>

        {/* Badge grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5"
        >
          {badges.map(({ icon: Icon, label, desc, color }, i) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group flex flex-col items-center text-center gap-3 bg-slate-800/50 border border-slate-700/60 rounded-2xl px-4 py-6 hover:border-opacity-80 hover:scale-[1.05] transition-all duration-300 cursor-default"
              style={{
                '--badge-color': color,
              } as React.CSSProperties}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${color}20`, border: `1px solid ${color}30` }}
              >
                <Icon size={24} style={{ color }} strokeWidth={1.7} />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight mb-1">{label}</p>
                <p className="text-slate-500 text-[11px] leading-snug">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-4 mt-14 max-w-2xl mx-auto"
        >
          {[
            { value: '100%', label: 'Mobile responsive' },
            { value: 'AU', label: 'Australian focused' },
            { value: '24/7', label: 'Works around the clock' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-brand-primary mb-1">{value}</p>
              <p className="text-slate-500 text-xs sm:text-sm">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
