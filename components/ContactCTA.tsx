'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

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

type FieldKey = keyof FormState;

const initialForm: FormState = {
  fullName: '', businessName: '', businessType: '', email: '',
  phone: '', currentWebsite: '', websiteType: '', message: '',
};

function validate(name: FieldKey, value: string): string {
  if (name === 'currentWebsite') return '';
  if (!value.trim()) return 'This field is required.';
  if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    return 'Enter a valid email address.';
  if (name === 'phone' && !/^[\d\s+\-()+]{7,}$/.test(value))
    return 'Enter a valid phone number.';
  return '';
}

function fieldClass(hasError: boolean) {
  return `w-full bg-slate-900 border ${
    hasError
      ? 'border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.15)]'
      : 'border-slate-600 hover:border-slate-500 focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(0,191,191,0.15)]'
  } text-slate-100 placeholder:text-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 min-h-[48px]`;
}

function selectClass(hasError: boolean) {
  return `w-full bg-slate-900 border ${
    hasError
      ? 'border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.15)]'
      : 'border-slate-600 hover:border-slate-500 focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(0,191,191,0.15)]'
  } text-slate-100 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 min-h-[48px] cursor-pointer appearance-none`;
}

const labelClass = 'block text-slate-400 text-xs font-semibold mb-1.5 tracking-wide uppercase';

type FieldProps = {
  label: string;
  required?: boolean;
  isTouched?: boolean;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, required = true, isTouched, error, children }: FieldProps) {
  return (
    <div>
      <label className={labelClass}>
        {label}{required && <span className="text-brand-primary ml-0.5">*</span>}
      </label>
      {children}
      {isTouched && error && (
        <p className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5">
          <AlertCircle size={12} strokeWidth={2.5} />
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactCTA() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as FieldKey]) {
      setErrors((prev) => ({ ...prev, [name]: validate(name as FieldKey, value) }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(name as FieldKey, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(form).reduce(
      (acc, k) => ({ ...acc, [k]: true }), {} as Record<FieldKey, boolean>
    );
    const allErrors = Object.keys(form).reduce(
      (acc, k) => ({ ...acc, [k]: validate(k as FieldKey, form[k as FieldKey]) }),
      {} as Record<FieldKey, string>
    );
    setTouched(allTouched);
    setErrors(allErrors);
    if (Object.values(allErrors).some(Boolean)) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-dark-bg relative overflow-hidden">
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-brand-secondary/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Let Bigroos Tech Australia create a website that clearly presents your services, builds
            trust, and helps customers contact you faster.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="bg-brand-dark-card border border-white/10 rounded-3xl p-7 sm:p-10"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={32} className="text-brand-primary" />
              </div>
              <h3 className="text-white font-black text-2xl mb-3">Enquiry Sent!</h3>
              <p className="text-white/50 text-base leading-relaxed max-w-md mx-auto">
                Thanks for reaching out. We&apos;ll review your details and get back to you shortly
                to discuss your website project.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm(initialForm); setTouched({}); setErrors({}); }}
                className="mt-6 text-brand-primary text-sm font-semibold hover:underline"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" isTouched={!!touched.fullName} error={errors.fullName}>
                  <input
                    type="text" name="fullName" required
                    placeholder="John Smith" value={form.fullName}
                    onChange={handleChange} onBlur={handleBlur}
                    className={fieldClass(!!(touched.fullName && errors.fullName))}
                  />
                </Field>
                <Field label="Business Name" isTouched={!!touched.businessName} error={errors.businessName}>
                  <input
                    type="text" name="businessName" required
                    placeholder="Smith Plumbing Co." value={form.businessName}
                    onChange={handleChange} onBlur={handleBlur}
                    className={fieldClass(!!(touched.businessName && errors.businessName))}
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Business Type" isTouched={!!touched.businessType} error={errors.businessType}>
                  <select
                    name="businessType" required value={form.businessType}
                    onChange={handleChange} onBlur={handleBlur}
                    className={selectClass(!!(touched.businessType && errors.businessType))}
                  >
                    <option value="" disabled>Select your trade…</option>
                    {tradeTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="Email Address" isTouched={!!touched.email} error={errors.email}>
                  <input
                    type="email" name="email" required
                    placeholder="john@smithplumbing.com.au" value={form.email}
                    onChange={handleChange} onBlur={handleBlur}
                    className={fieldClass(!!(touched.email && errors.email))}
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Phone Number" isTouched={!!touched.phone} error={errors.phone}>
                  <input
                    type="tel" name="phone" required
                    placeholder="04XX XXX XXX" value={form.phone}
                    onChange={handleChange} onBlur={handleBlur}
                    className={fieldClass(!!(touched.phone && errors.phone))}
                  />
                </Field>
                <Field label="Current Website URL" required={false} isTouched={!!touched.currentWebsite} error={errors.currentWebsite}>
                  <input
                    type="url" name="currentWebsite"
                    placeholder="https://yourwebsite.com.au" value={form.currentWebsite}
                    onChange={handleChange} onBlur={handleBlur}
                    className={fieldClass(!!(touched.currentWebsite && errors.currentWebsite))}
                  />
                </Field>
              </div>

              <Field label="What type of website do you need?" isTouched={!!touched.websiteType} error={errors.websiteType}>
                <select
                  name="websiteType" required value={form.websiteType}
                  onChange={handleChange} onBlur={handleBlur}
                  className={selectClass(!!(touched.websiteType && errors.websiteType))}
                >
                  <option value="" disabled>Select an option…</option>
                  {websiteTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </Field>

              <Field label="Tell us about your business" isTouched={!!touched.message} error={errors.message}>
                <textarea
                  name="message" required rows={5}
                  placeholder="Share details about your business, services, location, and what you're looking for…"
                  value={form.message}
                  onChange={handleChange} onBlur={handleBlur}
                  className={`${fieldClass(!!(touched.message && errors.message))} resize-none`}
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-brand-primary hover:bg-[#009999] disabled:opacity-60 disabled:cursor-not-allowed text-brand-dark-bg font-black px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-brand-primary/30 animate-pulse-glow min-h-[52px]"
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

              <p className="text-white/30 text-xs text-center">
                Fields marked <span className="text-brand-primary">*</span> are required. We respond to all enquiries and keep your information private.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
