'use client';

import { motion } from 'framer-motion';
import { Droplets, Zap, PaintBucket, Hammer, Building2 } from 'lucide-react';

const trades = [
  { label: 'Plumbers',     tradeKey: 'Plumber',      icon: Droplets,    color: 'text-blue-500   bg-blue-500/10   border-blue-500/20'   },
  { label: 'Electricians', tradeKey: 'Electrician',  icon: Zap,         color: 'text-yellow-500 bg-yellow-400/10 border-yellow-400/20' },
  { label: 'Painters',     tradeKey: 'Painter',      icon: PaintBucket, color: 'text-orange-500 bg-orange-400/10 border-orange-400/20' },
  { label: 'Carpenters',   tradeKey: 'Carpenter',    icon: Hammer,      color: 'text-amber-600  bg-amber-600/10  border-amber-500/20'  },
  { label: 'Builders',     tradeKey: 'Builder',      icon: Building2,   color: 'text-violet-500 bg-violet-500/10 border-violet-500/20' },
];

function selectTrade(tradeKey: string) {
  window.dispatchEvent(new CustomEvent('selectTrade', { detail: { trade: tradeKey } }));
  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
}

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-20 lg:py-28 bg-brand-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Responsive grid — 3 cols on mobile, 5 on sm+ */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4 max-w-3xl mx-auto"
        >
          {trades.map(({ label, tradeKey, icon: Icon, color }) => (
            <motion.button
              key={label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              onClick={() => selectTrade(tradeKey)}
              className={`flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-5 rounded-2xl border bg-white hover:shadow-xl hover:scale-[1.06] active:scale-[0.98] transition-all duration-200 cursor-pointer ${color}`}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border ${color}`}>
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <span className="text-brand-dark-text text-xs sm:text-sm font-semibold text-center leading-tight">
                {label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-brand-gray-text text-sm mt-8"
        >
          Click any trade to see a website example ↓
        </motion.p>
      </div>
    </section>
  );
}
