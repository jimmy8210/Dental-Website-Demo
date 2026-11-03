import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  Sparkles,
  CalendarCheck
} from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Treatments', href: '#treatments' },
    { label: 'Sterilization', href: '#sterilization' },
    { label: 'About Doctor', href: '#doctor' },
    { label: 'Smile Gallery', href: '#smile-gallery' },
    { label: 'Patient Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Contact & OPD', href: '#contact' },
  ];

  return (
    <header className="w-full z-40 fixed top-0 left-0 transition-all duration-300">
      {/* Top Info Strip (Visible on Desktop / Tablets) */}
      <div className="bg-brand-navy text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>
              <strong className="text-white font-medium">OPD Hours:</strong> {clinicData.opdHours.workingDays} | Morning: {clinicData.opdHours.morning} | Evening: {clinicData.opdHours.evening}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              {clinicData.locality}, {clinicData.city}
            </span>
            <a 
              href={`tel:${clinicData.phoneRaw}`} 
              className="inline-flex items-center gap-1.5 font-semibold text-teal-300 hover:text-teal-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              {clinicData.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav 
        className={`w-full transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
            : 'bg-white shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Clinic Brand & Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-teal-100" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-brand-navy block leading-tight">
                {clinicData.name}
              </span>
              <span className="text-[11px] font-medium text-teal-700 block tracking-wide uppercase">
                {clinicData.locality}, {clinicData.city} • Modern Dental Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-teal-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#appointment-form"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow-teal-600/30 transition-all active:scale-95"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${clinicData.phoneRaw}`}
              aria-label="Call clinic"
              className="p-2 text-teal-700 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-teal-700 rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-700 hover:text-teal-700 py-2 border-b border-slate-100"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href="#appointment-form"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex justify-center items-center gap-2 bg-teal-600 text-white font-semibold py-3 rounded-lg shadow"
                >
                  <CalendarCheck className="w-5 h-5" />
                  <span>Book Appointment Now</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

