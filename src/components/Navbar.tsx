import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clinicData, getWhatsAppLink } from '../config/clinicData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('treatments');

  const navLinks = [
    { label: 'Procedures', href: '#treatments' },
    { label: 'Transformations', href: '#smile-gallery' },
    { label: 'Sterilization', href: '#sterilization' },
    { label: 'Chief Surgeon', href: '#doctor' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faq' },
  ];

  useEffect(() => {
    const sectionIds = ['treatments', 'smile-gallery', 'sterilization', 'doctor', 'reviews', 'faq', 'contact'];
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section for nav tab highlights
      const scrollPos = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Programmatic smooth scroll using native scrollIntoView with scroll-margin-top
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      setTimeout(() => {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);

      if (window.history.pushState) {
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Notification / Emergency Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-teal-400">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Split OPD Hours:
            </span>
            <span className="hidden sm:inline text-slate-300">
              {clinicData.opdHours.workingDays} • {clinicData.opdHours.morning} & {clinicData.opdHours.evening}
            </span>
            <span className="sm:hidden text-slate-300">
              {clinicData.opdHours.morning} | {clinicData.opdHours.evening}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              {clinicData.locality}, {clinicData.city}
            </span>
            <a 
              href={`tel:${clinicData.phoneRaw}`} 
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-teal-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{clinicData.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'glass-header py-2.5 shadow-soft' 
            : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo & Clinic Branding */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-700 text-white flex items-center justify-center font-bold text-base shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform">
              AD
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold text-slate-900 tracking-tight leading-tight">
                  Apex Dental
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-teal-50 text-teal-700 border border-teal-200">
                  Implant Centre
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium block">
                {clinicData.locality}, {clinicData.city}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Active State */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-50/80 p-1.5 rounded-full border border-slate-200/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-teal-700 text-white shadow-sm font-bold'
                      : 'text-slate-600 hover:text-teal-700 hover:bg-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-xl transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>WhatsApp Doctor</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="shimmer-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold text-sm shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30 active:scale-95 transition-all"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu & Quick Phone Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${clinicData.phoneRaw}`}
              aria-label="Call clinic"
              className="p-2.5 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-600" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Quick-Navigation Tab Strip (Visible directly on mobile screens) */}
        <div className="lg:hidden w-full border-t border-slate-100/80 bg-slate-50/90 px-3 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 text-xs rounded-full whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-teal-700 text-white shadow-sm font-bold'
                    : 'bg-white text-slate-600 hover:text-teal-700 border border-slate-200/60 font-semibold'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Mobile Animated Dropdown Drawer (Floating Sheet) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="lg:hidden absolute top-full left-0 w-full border-t border-slate-200/80 bg-white/98 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl z-50 overflow-hidden"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-teal-50 text-teal-800 font-bold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-teal-700'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />}
                    </a>
                  );
                })}
                
                <div className="pt-4 flex flex-col gap-2">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="w-full inline-flex justify-center items-center gap-2 py-3 px-4 rounded-xl bg-teal-600 text-white font-semibold text-sm shadow-md shadow-teal-600/20 active:scale-98 transition-transform"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Book OPD Consultation</span>
                  </a>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full inline-flex justify-center items-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-xs"
                  >
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
