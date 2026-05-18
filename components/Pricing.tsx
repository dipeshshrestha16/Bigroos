'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Star, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Starter Landing Page',
    price: 'From $497',
    tagline: 'Get online fast with a high-converting single page.',
    popular: false,
    features: [
      'Single-page professional design',
      'Mobile responsive layout',
      'Click-to-call & contact form',
      'Google Maps embed',
      'Basic SEO setup',
      'Fast loading layout',
      'Social media links',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Full Trade Website',
    price: 'From $997',
    tagline: 'Everything your trade business needs to win online.',
    popular: true,
    features: [
      'Multi-page professional website',
      'Services section & about page',
      'Project / gallery section',
      'Customer reviews section',
      'Quote request form',
      'Service area section',
      'Mobile-first design',
      'Basic SEO structure',
      'Social media integration',
    ],
    cta: 'Most Popular — Get Started',
  },
  {
    name: 'Premium Portfolio',
    price: 'From $1,497',
    tagline: 'A premium presence that sets you apart from competitors.',
    popular: false,
    features: [
      'Everything in Full Trade Website',
      'Custom animated sections',
      'Advanced project gallery',
      'Testimonials with rich layout',
      'Multiple CTA zones',
      'Newsletter signup integration',
      'Priority support & revisions',
      'Performance-optimised build',
    ],
    cta: 'Get Started',
  },
];

export default function Pricing() {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-brand-dark-bg">
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
            Packages & Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight text-balance">
            Transparent pricing for{' '}
            <span className="text-brand-primary">every business</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            Choose the package that fits your goals. All websites are custom-built, mobile-first, and
            designed to convert visitors into customers.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`relative flex flex-col bg-brand-dark-card rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02] ${
                tier.popular
                  ? 'border-brand-primary shadow-2xl shadow-brand-primary/20'
                  : 'border-white/10 hover:border-brand-primary/40'
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-brand-primary text-brand-dark-bg text-xs font-black px-4 py-1.5 rounded-full shadow-lg">
                    <Star size={11} className="fill-brand-dark-bg" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Top accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl ${
                  tier.popular ? 'bg-brand-primary' : 'bg-white/10'
                }`}
              />

              <div className="mb-6 mt-2">
                <h3 className="text-white font-black text-xl mb-1">{tier.name}</h3>
                <p className="text-white/50 text-sm leading-snug">{tier.tagline}</p>
              </div>

              <div className="mb-6">
                <span className="text-brand-secondary font-black text-4xl">{tier.price}</span>
                <span className="text-white/40 text-sm ml-2">AUD</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="text-brand-primary shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-white/70 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-auto flex items-center justify-center gap-2 font-bold px-5 py-3.5 rounded-xl text-sm transition-all duration-200 hover:scale-[1.03] min-h-[44px] ${
                  tier.popular
                    ? 'bg-brand-primary hover:bg-[#009999] text-brand-dark-bg shadow-lg shadow-brand-primary/30 animate-pulse-glow'
                    : 'bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-brand-primary/40'
                }`}
              >
                {tier.popular && <Zap size={14} strokeWidth={2.5} />}
                {tier.cta}
                {!tier.popular && <ArrowRight size={14} />}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/40 text-sm mt-10"
        >
          All packages include a review & revision round. Final pricing depends on scope and content provided.{' '}
          <a href="#contact" className="text-brand-primary hover:underline">
            Contact us for a custom quote.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
