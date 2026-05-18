'use client';

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'Who We Help', href: '#who-we-help' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Our Packages', href: '#packages' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'How It Works', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

const services = [
  'Website Design',
  'Landing Pages',
  'Business Portfolio Sites',
  'Website Redesign',
  'Contact Forms & Booking',
  'SEO-Friendly Structure',
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark-bg border-t border-slate-800">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Bigroos Tech Australia"
                  className="w-12 h-12 rounded-xl object-cover"
                />
              </div>
              <div>
                <p className="text-white font-black text-lg leading-none">
                  Bigroos<span className="text-brand-primary"> Tech</span>
                </p>
                <p className="text-[9px] text-slate-500 tracking-[0.2em] uppercase mt-0.5">Australia</p>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Bigroos Tech Australia helps service-based businesses build clean, modern, and
              professional websites that support customer enquiries and online trust.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary/40 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-slate-400 hover:text-brand-primary text-sm transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#what-we-do"
                    className="text-slate-400 hover:text-brand-primary text-sm transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-brand-primary" />
                </div>
                <div>
                  <p className="text-slate-500 text-[11px] uppercase tracking-wider mb-0.5">Email</p>
                  <a
                    href="mailto:hello@bigroostech.com.au"
                    className="text-slate-300 hover:text-brand-primary text-sm transition-colors"
                  >
                    hello@bigroostech.com.au
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-brand-primary" />
                </div>
                <div>
                  <p className="text-slate-500 text-[11px] uppercase tracking-wider mb-0.5">Phone</p>
                  <a
                    href="tel:+61400000000"
                    className="text-slate-300 hover:text-brand-primary text-sm transition-colors"
                  >
                    +61 4XX XXX XXX
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-brand-primary" />
                </div>
                <div>
                  <p className="text-slate-500 text-[11px] uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-slate-300 text-sm">Australia</p>
                </div>
              </li>
            </ul>

            {/* Mini CTA */}
            <a
              href="#contact"
              className="mt-6 flex items-center justify-center gap-2 bg-brand-primary hover:bg-[#12b0cf] text-brand-dark-bg font-bold px-4 py-3 rounded-xl text-sm transition-all duration-200 hover:scale-[1.03] shadow-md shadow-brand-primary/25"
            >
              Request a Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Bigroos Tech Australia. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Terms of Service
            </a>
            <span className="text-slate-600 text-xs">Built in 🇦🇺 Australia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
