'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, CheckCircle2, Globe, Smartphone, Zap } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── Inline browser mockup showing a fictional trade website ── */
function WebsiteMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-700 shadow-2xl shadow-black/50 animate-float">
      {/* Browser chrome */}
      <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-3 border-b border-slate-700">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 bg-slate-700 rounded-full px-3 py-1 text-xs text-slate-400 text-center">
          www.sydneyelite-plumbing.com.au
        </div>
        <Globe size={14} className="text-slate-500" />
      </div>

      {/* Mock hero */}
      <div className="bg-[#0e2240] p-5">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-brand-primary" />
            <div className="h-2.5 w-20 bg-white/70 rounded-full" />
          </div>
          <div className="hidden sm:flex gap-2 items-center">
            <div className="h-2 w-10 bg-white/30 rounded-full" />
            <div className="h-2 w-10 bg-white/30 rounded-full" />
            <div className="h-2 w-10 bg-white/30 rounded-full" />
            <div className="h-6 w-20 bg-brand-primary rounded-lg" />
          </div>
        </div>
        <div className="py-6">
          <div className="inline-flex items-center gap-1.5 bg-brand-primary/20 text-brand-primary text-[9px] font-semibold tracking-wider uppercase rounded-full px-3 py-1 mb-3">
            <Zap size={8} /> Licensed & Insured
          </div>
          <div className="h-5 w-11/12 bg-white/90 rounded-full mb-2" />
          <div className="h-4 w-4/5 bg-white/80 rounded-full mb-1.5" />
          <div className="h-3 w-2/3 bg-white/50 rounded-full mb-5" />
          <div className="flex gap-2">
            <div className="h-8 w-28 bg-brand-primary rounded-lg flex items-center justify-center">
              <span className="text-[8px] font-bold text-brand-dark-bg">Get a Free Quote</span>
            </div>
            <div className="h-8 w-24 border border-white/40 rounded-lg flex items-center justify-center">
              <span className="text-[8px] text-white/70">View Our Work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mock services strip */}
      <div className="bg-white px-4 py-3 border-b border-slate-100">
        <div className="h-2 w-24 bg-slate-200 rounded-full mb-2.5 mx-auto" />
        <div className="grid grid-cols-3 gap-2">
          {['Burst Pipes', 'Hot Water', 'Blocked Drains'].map((s) => (
            <div
              key={s}
              className="bg-slate-50 border border-slate-100 rounded-lg p-2 text-center"
            >
              <div className="w-5 h-5 rounded-md bg-brand-primary/20 mx-auto mb-1.5" />
              <div className="h-1.5 w-full bg-slate-200 rounded-full mb-1" />
              <div className="h-1 w-2/3 bg-slate-100 rounded-full mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Mock reviews strip */}
      <div className="bg-brand-dark-bg px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={8} className="text-brand-secondary fill-brand-secondary" />
          ))}
        </div>
        <div className="h-1.5 w-28 bg-slate-700 rounded-full" />
        <div className="ml-auto flex items-center gap-1">
          <Smartphone size={8} className="text-brand-primary" />
          <div className="h-1.5 w-12 bg-slate-700 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-brand-dark-bg overflow-hidden pt-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern" />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-brand-secondary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left content ── */}
          <div>
            {/* Company badge */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 mb-6">
              <div className="flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full pl-1.5 pr-4 py-1.5">
                <img
                  src="/logo.png"
                  alt="Bigroos Tech"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-brand-primary text-sm font-semibold tracking-wide">
                  Bigroos Tech Australia
                </span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-brand-secondary fill-brand-secondary" />
                ))}
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-[1.1] tracking-tight mb-6 text-balance"
            >
              We build{' '}
              <span className="text-brand-primary">modern websites</span>
              {' '}for trade and service businesses
              {' '}
              <span className="text-brand-secondary">in Australia.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Get a professional website that helps customers understand your services, trust your
              business, and contact you faster.
            </motion.p>

            {/* Trust indicators */}
            <motion.div {...fadeUp(0.25)} className="flex flex-wrap gap-3 mb-8">
              {['Mobile Friendly', 'Fast Loading', 'Quote Form Ready', 'Australian Focused'].map(
                (badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-full px-3 py-1.5"
                  >
                    <CheckCircle2 size={12} className="text-brand-primary" />
                    {badge}
                  </span>
                )
              )}
            </motion.div>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-primary hover:bg-[#12b0cf] text-brand-dark-bg font-bold px-7 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.03] shadow-xl shadow-brand-primary/35 animate-pulse-glow"
              >
                Start My Website
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2.5 border border-slate-600 hover:border-brand-primary/60 text-slate-300 hover:text-white font-semibold px-7 py-4 rounded-xl text-base transition-all duration-200 hover:bg-white/5"
              >
                <Play size={16} className="fill-current" />
                See Website Examples
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-800"
            >
              <div className="flex -space-x-2">
                {['#19C2E3', '#F4C542', '#10b981', '#f97316', '#8b5cf6'].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-brand-dark-bg"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Trusted by local trade businesses</p>
                <p className="text-slate-500 text-xs">across Australia</p>
              </div>
            </motion.div>
          </div>

          {/* ── Right: device mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow ring behind mockup */}
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 rounded-3xl blur-2xl" />
            <div className="relative">
              <WebsiteMockup />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-brand-dark-bg border border-slate-700 rounded-2xl px-4 py-3 shadow-2xl"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand-primary/15 flex items-center justify-center">
                  <Zap size={18} className="text-brand-primary" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold">Fast Delivery</p>
                  <p className="text-slate-400 text-[10px]">Modern tools & workflows</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-brand-dark-bg border border-slate-700 rounded-2xl px-4 py-3 shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <Smartphone size={16} className="text-brand-secondary" />
                <span className="text-white text-xs font-bold">Mobile‑First Design</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-light-bg to-transparent" />
    </section>
  );
}
