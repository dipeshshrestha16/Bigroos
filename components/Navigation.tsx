'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Who We Help', href: '#who-we-help' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Packages', href: '#packages' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

function KangarooMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="10" fill="#19C2E3" />
      <path
        fill="#F4C542"
        d="M42 17c1-3-1-6-4-6.5-2-0.4-4 0.6-4.5 2-2-1.5-5-1-6 1-2-1.5-5.5-0.5-5.5 2.5-2.5 0-4.5 2-3.5 4.5-2 1.5-2 4 0 5.5l0 14.5c0 1.5 1.5 2.5 3 2l0-9c1.5 2.5 3.5 4.5 6 5.5l0 4c0 1.5 1.5 2.5 3 2l0-5c1.5 0.5 3 0.5 4.5 0l0 5c0 1.5 1.5 2.5 3 2l0-6c2.5-1.5 4-4 4-6.5 2.5-1.5 3.5-4.5 2-6.5 1.5-1.5 1-4-0.5-5.5l0-0.5z"
      />
      <path
        fill="#F4C542"
        d="M23 39l-1.5 9c-0.5 2 1.5 3 3 2l1.5-9-3-2z"
      />
      <circle cx="39" cy="17" r="1.8" fill="#0F172A" />
    </svg>
  );
}

export { KangarooMark };

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark-bg/95 backdrop-blur-lg shadow-2xl border-b border-slate-800/60'
          : 'bg-brand-dark-bg/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-9 h-9">
              <img
                src="/logo.png"
                alt="Bigroos Tech"
                className="w-9 h-9 rounded-lg object-cover"
              />
            </div>
            <div className="leading-none">
              <span className="block text-white font-bold text-[17px] tracking-tight">
                Bigroos<span className="text-brand-primary"> Tech</span>
              </span>
              <span className="block text-[9px] tracking-[0.2em] text-slate-500 uppercase mt-0.5">
                Australia
              </span>
            </div>
          </a>

          {/* ── Desktop nav ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-white px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/5 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ── CTA + burger ── */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-brand-primary hover:bg-[#12b0cf] text-brand-dark-bg font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 hover:scale-[1.04] shadow-lg shadow-brand-primary/30 animate-pulse-glow whitespace-nowrap"
            >
              <Zap size={14} strokeWidth={2.5} />
              Request a Free Quote
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {isOpen && (
        <div className="lg:hidden bg-brand-dark-bg border-t border-slate-800">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center text-slate-300 hover:text-white hover:bg-white/5 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-800">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-brand-primary text-brand-dark-bg font-bold px-4 py-3 rounded-xl text-sm w-full"
              >
                <Zap size={14} strokeWidth={2.5} />
                Request a Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
