'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'The timeline depends on the size of the website and how quickly the content is provided. A basic landing page can usually be prepared faster than a full multi-page website. We will give you a clear timeframe at the start of your project.',
  },
  {
    q: 'Do I need to provide photos?',
    a: 'Photos are helpful, especially for trade and service businesses. If you do not have photos, we can still design a clean layout and guide you on what images are needed. High-quality images of your work, team, and projects make a significant difference to how professional your website looks.',
  },
  {
    q: 'Can you redesign my old website?',
    a: 'Yes, we can improve the layout, content structure, mobile responsiveness, and overall visual design of an existing website. We will review your current site and discuss what changes will make the most impact for your customers.',
  },
  {
    q: 'Can customers contact me through the website?',
    a: 'Yes, the website can include a contact form, quote request form, phone button, email link, and location details. We design these elements to be clear and easy to use so more visitors become real customer enquiries.',
  },
  {
    q: 'Is the website mobile-friendly?',
    a: 'Yes, websites should be designed to work properly on phones, tablets, and desktops. Since most customers browse on mobile devices, we build every website with a mobile-first approach to ensure a great experience on all screen sizes.',
  },
  {
    q: 'Can the website show my services and previous work?',
    a: 'Yes, we can include service cards, project galleries, reviews, business information, and service areas. A well-structured website helps customers understand exactly what you offer and builds the confidence they need to make contact.',
  },
];

function AccordionItem({ q, a, isOpen, onToggle }: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
        isOpen
          ? 'border-brand-primary/40 bg-brand-primary/5'
          : 'border-brand-border bg-white hover:border-brand-primary/20'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className={`font-semibold text-sm sm:text-base leading-snug transition-colors ${
            isOpen ? 'text-brand-primary' : 'text-brand-dark-text'
          }`}
        >
          {q}
        </span>
        <div
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            isOpen ? 'bg-brand-primary text-brand-dark-bg' : 'bg-slate-100 text-brand-gray-text'
          }`}
        >
          {isOpen ? <Minus size={15} strokeWidth={2.5} /> : <Plus size={15} strokeWidth={2.5} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-5 text-brand-gray-text text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-brand-light-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-brand-primary text-sm font-semibold tracking-widest uppercase mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark-text mb-5 tracking-tight text-balance">
            Common{' '}
            <span className="text-brand-primary">questions</span>
          </h2>
          <p className="text-brand-gray-text text-lg">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-brand-gray-text text-sm mb-4">
            Still have a question? We&apos;re happy to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-[#12b0cf] text-brand-dark-bg font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:scale-[1.03] shadow-md shadow-brand-primary/25"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
