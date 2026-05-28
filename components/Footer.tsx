'use client';

import { Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const WhatsAppIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
                { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/p/Bigroostech-61559916611062/' },
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/bigroostech/' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary/40 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
              <a
                href="https://wa.me/97798xxxxxxxx"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary/40 transition-all duration-200"
              >
                <WhatsAppIcon size={15} />
              </a>
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
                    href="mailto:reachout@bigroostech.com"
                    className="text-slate-300 hover:text-brand-primary text-sm transition-colors"
                  >
                    reachout@bigroostech.com
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
