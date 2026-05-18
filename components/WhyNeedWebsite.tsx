'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Globe, TrendingUp } from 'lucide-react';

const points = [
  'Customers check online before calling.',
  'A professional website builds trust instantly.',
  'It explains your services clearly and completely.',
  'It helps customers contact you faster.',
  'It makes your business look more established.',
  'It shows photos, reviews, service areas, and contact details.',
  'It works 24/7 — even when you are busy on the job.',
];

export default function WhyNeedWebsite() {
  return (
    <section className="py-20 lg:py-28 bg-brand-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-brand-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Why You Need a Website
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark-text mb-6 tracking-tight text-balance leading-[1.15]">
              Your website is often the{' '}
              <span className="text-brand-primary">first impression</span> customers get.
            </h2>
            <p className="text-brand-gray-text text-lg leading-relaxed mb-8">
              Many customers decide whether to contact a business based on how professional it looks
              online. A clear website helps your business appear trustworthy, reliable, and easy to
              contact.
            </p>

            <ul className="space-y-3.5">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-brand-primary shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="text-brand-dark-text font-medium text-[15px] leading-snug">{point}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-brand-primary hover:bg-[#12b0cf] text-brand-dark-bg font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-brand-primary/25"
              >
                Build My Website
              </a>
            </motion.div>
          </motion.div>

          {/* Right: visual stats block */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {/* Big stat card */}
            <div className="bg-brand-dark-bg rounded-2xl p-8 text-center border border-slate-800">
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/15 border border-brand-primary/20 flex items-center justify-center mx-auto mb-4">
                <Globe size={28} className="text-brand-primary" />
              </div>
              <p className="text-6xl font-black text-white mb-2">
                97<span className="text-brand-primary">%</span>
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                of consumers search online to find local businesses before making contact.
              </p>
            </div>

            {/* Two smaller cards */}
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white border border-brand-border rounded-2xl p-6 text-center shadow-sm">
                <TrendingUp size={24} className="text-brand-secondary mx-auto mb-3" />
                <p className="text-3xl font-black text-brand-dark-text mb-1">
                  3<span className="text-brand-primary">×</span>
                </p>
                <p className="text-brand-gray-text text-xs leading-snug">
                  more enquiries vs. businesses without a website
                </p>
              </div>
              <div className="bg-brand-primary rounded-2xl p-6 text-center">
                <CheckCircle2 size={24} className="text-brand-dark-bg mx-auto mb-3" strokeWidth={2.5} />
                <p className="text-3xl font-black text-brand-dark-bg mb-1">24/7</p>
                <p className="text-brand-dark-bg/70 text-xs leading-snug font-medium">
                  your website works even when you&apos;re on the job
                </p>
              </div>
            </div>

            {/* Bottom quote */}
            <div className="bg-brand-secondary/10 border border-brand-secondary/30 rounded-2xl p-5">
              <p className="text-brand-dark-text text-sm font-medium leading-relaxed italic">
                &ldquo;A professional website is the difference between a customer calling you — or
                calling your competitor.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
