'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const tradeTypes = [
  'Plumber', 'Electrician', 'Painter', 'Carpenter', 'Roofer', 'Cleaner',
  'Landscaper', 'Builder', 'Mechanic', 'Pest Control', 'Handyman',
  'HVAC Technician', 'Tiler', 'Concreter', 'Glazier', 'Plasterer', 'Other',
];

const websiteTypes = [
  'Brand new website',
  'Redesign my existing website',
  'Landing page only',
  'Business portfolio website',
  'Not sure yet — need advice',
];

interface FormState {
  fullName: string;
  businessName: string;
  businessType: string;
  email: string;
  phone: string;
  currentWebsite: string;
  websiteType: string;
  message: string;
}

const initialForm: FormState = {
  fullName: '',
  businessName: '',
  businessType: '',
  email: '',
  phone: '',
  currentWebsite: '',
  websiteType: '',
  message: '',
};

export default function ContactCTA() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-slate-800/60 border border-slate-700 focus:border-brand-primary text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 focus:bg-slate-800';

  const labelClass = 'block text-slate-300 text-xs font-semibold mb-1.5 tracking-wide uppercase';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-dark-bg relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-brand-secondary/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-brand-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight text-balance">
            Ready to give your business a{' '}
            <span className="text-brand-primary">professional online presence?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Let Bigroos Tech Australia create a website that clearly presents your services, builds
            trust, and helps customers contact you faster.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-7 sm:p-10"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={32} className="text-brand-primary" />
              </div>
              <h3 className="text-white font-black text-2xl mb-3">Enquiry Sent!</h3>
              <p className="text-slate-400 text-base leading-relaxed max-w-md mx-auto">
                Thanks for reaching out. We&apos;ll review your details and get back to you shortly
                to discuss your website project.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm(initialForm); }}
                className="mt-6 text-brand-primary text-sm font-semibold hover:underline"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="John Smith"
                    value={form.fullName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Business Name *</label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    placeholder="Smith Plumbing Co."
                    value={form.businessName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Business Type *</label>
                  <select
                    name="businessType"
                    required
                    value={form.businessType}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>Select your trade…</option>
                    {tradeTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@smithplumbing.com.au"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="04XX XXX XXX"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Current Website URL (Optional)</label>
                  <input
                    type="url"
                    name="currentWebsite"
                    placeholder="https://yourwebsite.com.au"
                    value={form.currentWebsite}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Website type */}
              <div>
                <label className={labelClass}>What type of website do you need? *</label>
                <select
                  name="websiteType"
                  required
                  value={form.websiteType}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>Select an option…</option>
                  {websiteTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>Tell us about your business *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Share any details about your business, services, location, and what you're looking for in a website…"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-brand-primary hover:bg-[#12b0cf] disabled:opacity-70 disabled:cursor-not-allowed text-brand-dark-bg font-black px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-brand-primary/30 animate-pulse-glow"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-brand-dark-bg border-t-transparent rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} strokeWidth={2.5} />
                    Send Enquiry
                  </>
                )}
              </button>

              <p className="text-slate-600 text-xs text-center">
                We respond to all enquiries. Your information is kept private.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
