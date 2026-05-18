'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

interface PortfolioCard {
  type: string;
  slug: string;
  description: string;
  heroBg: string;
  accentColor: string;
  urlSlug: string;
  tag: string;
}

const portfolioItems: PortfolioCard[] = [
  {
    type: 'Plumbing',
    slug: 'Plumbing Website Concept',
    description:
      'A clean and trustworthy plumbing website with emergency call CTA, service cards, reviews, and quote form.',
    heroBg: '#0e2240',
    accentColor: '#19C2E3',
    urlSlug: 'sydneyelite-plumbing',
    tag: 'Trade Service',
  },
  {
    type: 'Electrician',
    slug: 'Electrician Website Concept',
    description:
      'Bold and professional electrician site with licensing badges, service areas, and 24/7 call button.',
    heroBg: '#1a1a2e',
    accentColor: '#F4C542',
    urlSlug: 'metro-electrical',
    tag: 'Trade Service',
  },
  {
    type: 'Painter',
    slug: 'Painter Website Concept',
    description:
      'Bright and creative painter portfolio with colour gallery, before/after photos, and customer reviews.',
    heroBg: '#3d1a00',
    accentColor: '#f97316',
    urlSlug: 'premium-painters',
    tag: 'Trade Service',
  },
  {
    type: 'Carpentry',
    slug: 'Carpentry Website Concept',
    description:
      'Warm and premium carpentry site with project gallery, custom joinery showcase, and enquiry form.',
    heroBg: '#1c0f05',
    accentColor: '#a16207',
    urlSlug: 'craft-carpentry',
    tag: 'Trade Service',
  },
  {
    type: 'Cleaning Service',
    slug: 'Cleaning Service Website Concept',
    description:
      'Fresh and inviting cleaning service website with service packages, booking form, and trust badges.',
    heroBg: '#0a2718',
    accentColor: '#10b981',
    urlSlug: 'sparkle-cleaning',
    tag: 'Local Service',
  },
  {
    type: 'Landscaping',
    slug: 'Landscaping Website Concept',
    description:
      'Nature-inspired landscaping site with project portfolio, service zones map, and seasonal promotions.',
    heroBg: '#0d2010',
    accentColor: '#22c55e',
    urlSlug: 'greenthumb-landscapes',
    tag: 'Local Service',
  },
];

function BrowserMockup({ item }: { item: PortfolioCard }) {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
      {/* Chrome */}
      <div className="bg-slate-100 px-3 py-2 flex items-center gap-2 border-b border-slate-200">
        <div className="flex gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-full px-3 py-1 flex items-center gap-1.5">
          <Globe size={8} className="text-slate-400" />
          <span className="text-[9px] text-slate-400 truncate">
            www.{item.urlSlug}.com.au
          </span>
        </div>
      </div>

      {/* Hero section */}
      <div className="px-4 py-5" style={{ backgroundColor: item.heroBg }}>
        {/* Nav */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1.5">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: item.accentColor }}
            />
            <div className="h-2 w-14 rounded-full bg-white/60" />
          </div>
          <div
            className="h-5 w-16 rounded-lg text-[8px] flex items-center justify-center font-bold"
            style={{ backgroundColor: item.accentColor, color: '#0F172A' }}
          >
            Call Now
          </div>
        </div>

        {/* Hero content */}
        <div className="py-4">
          <div className="h-3 w-full bg-white/90 rounded-full mb-1.5" />
          <div className="h-2.5 w-4/5 bg-white/70 rounded-full mb-1" />
          <div className="h-2 w-2/3 bg-white/50 rounded-full mb-4" />
          <div className="flex gap-2">
            <div
              className="h-6 w-20 rounded-lg"
              style={{ backgroundColor: item.accentColor }}
            />
            <div className="h-6 w-16 rounded-lg border border-white/30" />
          </div>
        </div>
      </div>

      {/* Services strip */}
      <div className="bg-white px-3 py-3">
        <div className="h-2 w-16 bg-slate-200 rounded-full mb-2.5 mx-auto" />
        <div className="grid grid-cols-3 gap-1.5">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-slate-50 border border-slate-100 rounded-lg p-2 text-center">
              <div
                className="w-5 h-5 rounded-md mx-auto mb-1"
                style={{ backgroundColor: `${item.accentColor}25` }}
              />
              <div className="h-1.5 w-full bg-slate-200 rounded-full mb-1" />
              <div className="h-1 w-2/3 bg-slate-100 rounded-full mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Review strip */}
      <div
        className="px-3 py-2 flex items-center gap-2"
        style={{ backgroundColor: item.heroBg }}
      >
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="8" height="8" viewBox="0 0 24 24" fill="#F4C542">
              <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
            </svg>
          ))}
        </div>
        <div className="h-1.5 w-20 bg-white/20 rounded-full" />
        <div className="ml-auto h-1.5 w-12 bg-white/20 rounded-full" />
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-brand-light-bg">
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
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark-text mb-5 tracking-tight text-balance">
            Website styles we{' '}
            <span className="text-brand-primary">can create</span>
          </h2>
          <p className="text-brand-gray-text text-base max-w-xl mx-auto">
            The examples below are design templates and concepts representing the style and quality
            of websites we build for trade businesses.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className="group bg-white border border-brand-border rounded-2xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Mockup */}
              <div className="p-4 bg-slate-50 border-b border-slate-100">
                <BrowserMockup item={item} />
              </div>

              {/* Meta */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${item.accentColor}18`,
                      color: item.accentColor,
                      border: `1px solid ${item.accentColor}30`,
                    }}
                  >
                    {item.type}
                  </span>
                  <span className="text-xs text-brand-gray-text">{item.tag}</span>
                </div>
                <h3 className="text-brand-dark-text font-bold text-base mb-2">{item.slug}</h3>
                <p className="text-brand-gray-text text-sm leading-relaxed mb-4">{item.description}</p>
                <button className="inline-flex items-center gap-1.5 text-brand-primary font-semibold text-sm hover:gap-2.5 transition-all duration-200">
                  View Example <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-[#12b0cf] text-brand-dark-bg font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-brand-primary/25"
          >
            Request Your Custom Design
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
