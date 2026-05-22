'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Droplets, Zap, PaintBucket, Hammer, Building2 } from 'lucide-react';

type TradeKey = 'Plumber' | 'Electrician' | 'Painter' | 'Carpenter' | 'Builder';

const tabs: {
  key: TradeKey;
  label: string;
  icon: React.ElementType;
  pill: string;
}[] = [
  { key: 'Plumber',     label: 'Plumbers',     icon: Droplets,    pill: 'text-blue-500   bg-blue-500/10   border-blue-500/20'   },
  { key: 'Electrician', label: 'Electricians', icon: Zap,         pill: 'text-yellow-500 bg-yellow-400/10 border-yellow-400/20' },
  { key: 'Painter',     label: 'Painters',     icon: PaintBucket, pill: 'text-orange-500 bg-orange-400/10 border-orange-400/20' },
  { key: 'Carpenter',   label: 'Carpenters',   icon: Hammer,      pill: 'text-amber-600  bg-amber-600/10  border-amber-500/20'  },
  { key: 'Builder',     label: 'Builders',     icon: Building2,   pill: 'text-violet-500 bg-violet-500/10 border-violet-500/20' },
];

interface PortfolioItem {
  trade: TradeKey;
  title: string;
  description: string;
  heroBg: string;
  accentColor: string;
  urlSlug: string;
  liveUrl?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    trade: 'Plumber',
    title: 'Plumbing Website Concept',
    description:
      'A clean and trustworthy plumbing website with emergency call CTA, service cards, customer reviews, and a quote request form.',
    heroBg: '#0e2240',
    accentColor: '#19C2E3',
    urlSlug: 'sydneyelite-plumbing',
    liveUrl: 'https://plumsite.onrender.com',
  },
  {
    trade: 'Electrician',
    title: 'Electrician Website Concept',
    description:
      'Bold and professional electrician site with licensing badges, service area coverage, and a 24/7 call button.',
    heroBg: '#1a1a2e',
    accentColor: '#F4C542',
    urlSlug: 'metro-electrical',
    liveUrl: 'https://eletrisite.onrender.com',
  },
  {
    trade: 'Painter',
    title: 'Painter Website Concept',
    description:
      'Bright and creative painter portfolio with colour gallery, before/after photos, and customer reviews.',
    heroBg: '#3d1a00',
    accentColor: '#f97316',
    urlSlug: 'premium-painters',
    liveUrl: 'https://painterender.com',
  },
  {
    trade: 'Carpenter',
    title: 'Carpentry Website Concept',
    description:
      'Warm and premium carpentry site with project gallery, custom joinery showcase, and an enquiry form.',
    heroBg: '#1c0f05',
    accentColor: '#a16207',
    urlSlug: 'craft-carpentry',
    liveUrl: 'https://carpentry-18qx.onrender.com',
  },
  {
    trade: 'Builder',
    title: 'Builder Website Concept',
    description:
      'Professional building company site with a project portfolio, licensing credentials, suburb coverage map, and contact form.',
    heroBg: '#12082e',
    accentColor: '#8b5cf6',
    urlSlug: 'reliable-builders',
  },
];

function BrowserMockup({ item }: { item: PortfolioItem }) {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
      {/* Chrome bar */}
      <div className="bg-slate-100 px-3 py-2 flex items-center gap-2 border-b border-slate-200">
        <div className="flex gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-full px-3 py-1 flex items-center gap-1.5">
          <Globe size={8} className="text-slate-400" />
          <span className="text-[9px] text-slate-400 truncate">www.{item.urlSlug}.com.au</span>
        </div>
      </div>

      {/* Hero */}
      <div className="px-4 py-5" style={{ backgroundColor: item.heroBg }}>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: item.accentColor }} />
            <div className="h-2 w-14 rounded-full bg-white/60" />
          </div>
          <div
            className="h-5 w-16 rounded-lg text-[8px] flex items-center justify-center font-bold"
            style={{ backgroundColor: item.accentColor, color: '#0F172A' }}
          >
            Call Now
          </div>
        </div>
        <div className="py-4">
          <div className="h-3 w-full bg-white/90 rounded-full mb-1.5" />
          <div className="h-2.5 w-4/5 bg-white/70 rounded-full mb-1" />
          <div className="h-2 w-2/3 bg-white/50 rounded-full mb-4" />
          <div className="flex gap-2">
            <div className="h-6 w-20 rounded-lg" style={{ backgroundColor: item.accentColor }} />
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
      <div className="px-3 py-2 flex items-center gap-2" style={{ backgroundColor: item.heroBg }}>
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
  const [selected, setSelected] = useState<TradeKey>('Plumber');

  useEffect(() => {
    const handler = (e: Event) => {
      const trade = (e as CustomEvent<{ trade: TradeKey }>).detail.trade;
      if (tabs.some((t) => t.key === trade)) setSelected(trade);
    };
    window.addEventListener('selectTrade', handler);
    return () => window.removeEventListener('selectTrade', handler);
  }, []);

  const activeItem = portfolioItems.find((p) => p.trade === selected)!;
  const activeTab = tabs.find((t) => t.key === selected)!;

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-brand-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-brand-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark-text mb-5 tracking-tight text-balance">
            Website styles we{' '}
            <span className="text-brand-primary">can create</span>
          </h2>
          <p className="text-brand-gray-text text-base max-w-xl mx-auto">
            These are design concepts representing the style and quality of websites we build for
            trade businesses. Select a trade below to see an example.
          </p>
        </motion.div>

        {/* Capsule tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map(({ key, label, icon: Icon, pill }) => {
            const isActive = selected === key;
            const item = portfolioItems.find((p) => p.trade === key)!;
            return (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-white shadow-lg scale-[1.05]'
                    : `bg-white ${pill} hover:scale-[1.03] hover:shadow-md`
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: item.accentColor,
                        borderColor: item.accentColor,
                        boxShadow: `0 4px 18px ${item.accentColor}50`,
                      }
                    : {}
                }
              >
                <Icon size={15} strokeWidth={2} />
                {label}
              </button>
            );
          })}
        </motion.div>

        {/* Single card — animated swap */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-brand-border rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Mockup */}
              <div className="p-5 bg-slate-50 border-b border-slate-100">
                <BrowserMockup item={activeItem} />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${activeItem.accentColor}18`,
                      color: activeItem.accentColor,
                      border: `1px solid ${activeItem.accentColor}30`,
                    }}
                  >
                    {activeTab.label}
                  </span>
                  <span className="text-xs text-brand-gray-text">Trade Service</span>
                </div>
                <h3 className="text-brand-dark-text font-bold text-xl mb-2">{activeItem.title}</h3>
                <p className="text-brand-gray-text text-sm leading-relaxed mb-5">
                  {activeItem.description}
                </p>
                <a
                  href={activeItem.liveUrl ?? '#contact'}
                  target={activeItem.liveUrl ? '_blank' : undefined}
                  rel={activeItem.liveUrl ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 hover:gap-3"
                  style={{ color: activeItem.accentColor }}
                >
                  Get a website like this <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
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
