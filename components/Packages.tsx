'use client';

import { motion } from 'framer-motion';
import {
  Home, LayoutList, User, Image, Star, Mail, Phone, MapPin,
  Globe, Smartphone, Zap, Search, Share2, ClipboardList,
} from 'lucide-react';

const features = [
  { icon: Home, label: 'Modern homepage' },
  { icon: LayoutList, label: 'Services section' },
  { icon: User, label: 'About business section' },
  { icon: Image, label: 'Project / gallery section' },
  { icon: Star, label: 'Customer reviews' },
  { icon: Mail, label: 'Contact form' },
  { icon: Phone, label: 'Click-to-call button' },
  { icon: MapPin, label: 'Google Maps location' },
  { icon: Globe, label: 'Service area section' },
  { icon: Smartphone, label: 'Mobile responsive design' },
  { icon: Zap, label: 'Fast loading layout' },
  { icon: Search, label: 'Basic SEO setup' },
  { icon: Share2, label: 'Social media links' },
  { icon: ClipboardList, label: 'Quote request form' },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-white">
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
            What You Get
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark-text mb-5 tracking-tight text-balance">
            What your website{' '}
            <span className="text-brand-primary">can include</span>
          </h2>
          <p className="text-brand-gray-text text-lg max-w-xl mx-auto leading-relaxed">
            Every website is built around your business, your services, and your customers.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.05 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4"
        >
          {features.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: i * 0.04 } },
              }}
              className="group flex flex-col items-center gap-2.5 bg-brand-light-bg border border-brand-border hover:border-brand-primary/40 hover:bg-brand-primary/5 rounded-2xl p-5 text-center transition-all duration-250 hover:scale-[1.05] cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                <Icon size={18} className="text-brand-primary" strokeWidth={1.8} />
              </div>
              <span className="text-brand-dark-text text-xs font-semibold leading-tight">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 bg-gradient-to-r from-brand-dark-bg to-[#1e2d4a] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-700"
        >
          <div>
            <h3 className="text-white font-black text-xl mb-2">
              Ready to get your business online?
            </h3>
            <p className="text-slate-400 text-sm">
              Tell us about your business and we&apos;ll prepare a custom website plan.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-primary hover:bg-[#12b0cf] text-brand-dark-bg font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:scale-[1.04] shadow-lg shadow-brand-primary/30 whitespace-nowrap"
          >
            Start My Website
          </a>
        </motion.div>
      </div>
    </section>
  );
}
