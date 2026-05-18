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

export { };

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <header role="banner" className="fixed top-0 left-0 right-0 z-50">
      <nav
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-brand-dark-bg/95 backdrop-blur-lg shadow-2xl border-b border-white/10'
            : 'bg-brand-dark-bg/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* ── Logo ── */}
            <a href="#" className="flex items-center gap-3 shrink-0">
              <div className="w-9 h-9">
                <img
                  src="/logo.png"
                  alt="Bigroos Tech Australia"
                  className="w-9 h-9 rounded-lg object-cover"
                />
              </div>
              <div className="leading-none">
                <span className="block text-white font-bold text-[17px] tracking-tight">
                  Bigroos<span className="text-brand-primary"> Tech</span>
                </span>
                <span className="block text-[9px] tracking-[0.2em] text-white/40 uppercase mt-0.5">
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
                  className="text-white/60 hover:text-white px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/5 transition-all duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* ── CTA + burger ── */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 bg-brand-primary hover:bg-[#009999] text-brand-dark-bg font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 hover:scale-[1.04] shadow-lg shadow-brand-primary/30 animate-pulse-glow whitespace-nowrap min-h-[44px]"
              >
                <Zap size={14} strokeWidth={2.5} />
                Request a Free Quote
              </a>
              <button
                onClick={() => setIsOpen((v) => !v)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`lg:hidden fixed top-[64px] left-0 right-0 z-50 bg-brand-dark-bg border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-1 max-w-7xl mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="flex items-center text-white/70 hover:text-white hover:bg-white/5 py-3 px-3 rounded-xl text-sm font-medium transition-colors min-h-[44px]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-white/10">
            <a
              href="#contact"
              onClick={close}
              className="flex items-center justify-center gap-2 bg-brand-primary hover:bg-[#009999] text-brand-dark-bg font-bold px-4 py-3.5 rounded-xl text-sm w-full min-h-[44px] transition-colors"
            >
              <Zap size={14} strokeWidth={2.5} />
              Request a Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[64px] bg-black/40 z-40"
          onClick={close}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
