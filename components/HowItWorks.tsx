'use client';

import { motion } from 'framer-motion';
import { MessageCircle, PenTool, Eye, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Tell us about your business',
    description:
      'Share your business name, services, location, and preferred website style. The more detail you provide, the better we can tailor the design.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'We prepare your website design',
    description:
      'We create a professional layout based on your trade, brand, and customer needs using modern tools and efficient development workflows.',
  },
  {
    number: '03',
    icon: Eye,
    title: 'You review and request changes',
    description:
      'You can suggest edits to text, images, colours, sections, and layout. We refine the design until you are completely happy.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Your website goes live',
    description:
      'Once approved, we help prepare the website for launch so customers can visit, browse your services, and contact you immediately.',
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-brand-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-primary text-sm font-semibold tracking-widest uppercase mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight text-balance">
            Get your business website in a{' '}
            <span className="text-brand-primary">simple process</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Depending on the website size and content, we can prepare a first version quickly
            compared to traditional development timelines.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />

          {steps.map(({ number, icon: Icon, title, description }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div className="relative mb-6 z-10">
                <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 border-t-2 border-t-brand-primary flex items-center justify-center transition-colors">
                  <Icon size={28} className="text-brand-primary" strokeWidth={1.5} />
                </div>
                {/* Number badge */}
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-primary text-brand-dark-bg text-[10px] font-black flex items-center justify-center">
                  {i + 1}
                </span>
              </div>

              <span className="text-brand-primary/50 text-xs font-bold tracking-widest uppercase mb-2">
                Step {number}
              </span>
              <h3 className="text-white font-bold text-lg mb-3 leading-snug">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-brand-primary hover:bg-[#12b0cf] text-brand-dark-bg font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.03] shadow-xl shadow-brand-primary/30 animate-pulse-glow"
          >
            <Rocket size={18} strokeWidth={2.5} />
            Start the Process
          </a>
        </motion.div>
      </div>
    </section>
  );
}
