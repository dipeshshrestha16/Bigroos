'use client';

import { motion } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

const problems = [
  'No website at all',
  'Old-looking, outdated website',
  'Hard to contact or find',
  'No project gallery',
  'Poor mobile layout',
  'Missing service details',
  'Weak first impression',
];

const solutions = [
  'Modern, professional design',
  'Clear service sections',
  'Quote request form included',
  'Mobile-friendly layout',
  'Project & photo gallery',
  'Trust-building customer reviews',
  'Strong call-to-action buttons',
];

export default function BeforeAfter() {
  return (
    <section className="py-20 lg:py-28 bg-white">
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
            Before & After
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark-text mb-5 tracking-tight text-balance">
            Is your current online presence{' '}
            <span className="text-red-500">holding you back?</span>
          </h2>
        </motion.div>

        {/* Comparison */}
        <div className="grid sm:grid-cols-2 gap-0 max-w-3xl mx-auto rounded-3xl overflow-hidden border border-brand-border shadow-xl">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="bg-slate-50 p-7 sm:p-8 border-r border-brand-border"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <X size={16} className="text-red-500" strokeWidth={2.5} />
              </div>
              <h3 className="text-brand-dark-text font-bold text-lg">Without a website</h3>
            </div>
            <ul className="space-y-3.5">
              {problems.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={11} className="text-red-400" strokeWidth={3} />
                  </div>
                  <span className="text-brand-gray-text text-sm">{p}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="bg-brand-dark-bg p-7 sm:p-8 relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-2 mb-6 relative z-10">
              <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center">
                <CheckCircle2 size={16} className="text-brand-primary" strokeWidth={2.5} />
              </div>
              <h3 className="text-white font-bold text-lg">With Bigroos Tech</h3>
            </div>
            <ul className="space-y-3.5 relative z-10">
              {solutions.map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-brand-primary shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="text-slate-300 text-sm">{s}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-[#12b0cf] text-brand-dark-bg font-bold px-7 py-4 rounded-xl text-sm transition-all duration-200 hover:scale-[1.03] shadow-xl shadow-brand-primary/30"
          >
            Make the Switch Today
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
