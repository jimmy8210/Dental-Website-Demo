import React, { useState } from 'react';
import { Phone, Clock, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Procedures', href: '#treatments' },
    { label: 'Class-B Sterilization', href: '#sterilization' },
    { label: 'Chief Surgeon', href: '#doctor' },
    { label: 'Smile Gallery', href: '#smile-gallery' },
    { label: 'Patient Proof', href: '#reviews' },
    { label: 'FAQs', href: '#faq' },
    { label: 'OPD Booking', href: '#contact' },
  ];

  return (
    <header data-ui="true" className="w-full z-40 fixed top-0 left-0 bg-white shadow-sm">
      {/* Top Clinical Strip (Hidden on extra small mobile screens for compact header) */}
      <div className="hidden sm:block bg-dental-dark text-slate-200 text-[13px] py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-200">
            <Clock className="w-4 h-4 text-teal-300 shrink-0" />
            <span>
              <strong className="text-white font-medium">Split OPD:</strong> {clinicData.opdHours.workingDays} • {clinicData.opdHours.morning} & {clinicData.opdHours.evening}
            </span>
          </div>
          <div className="flex items-center gap-5 text-[13px]">
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-4 h-4 text-teal-300" />
              {clinicData.locality}, {clinicData.city} (Near Hill Road)
            </span>
            <a 
              href={`tel:${clinicData.phoneRaw}`} 
              className="inline-flex items-center gap-1.5 font-medium text-white hover:text-teal-300 transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-300" />
              <span>{clinicData.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-white py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Clinic Brand */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-dental-dark text-white flex items-center justify-center font-bold text-sm tracking-tight">
              AD
            </div>
            <div>
              <span className="text-lg font-bold text-dental-ink block leading-tight tracking-tight">
                {clinicData.name}
              </span>
              <span className="text-[13px] font-medium text-dental-ink block tracking-normal">
                {clinicData.locality}, {clinicData.city} • Modern Oral Implantology
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-dental-ink hover:text-dental-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-dental-accent hover:bg-dental-accentHover text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
            >
              <span>Book OPD Slot</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${clinicData.phoneRaw}`}
              aria-label="Call clinic"
              className="p-2 text-dental-ink bg-dental-surface rounded-lg"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-dental-ink rounded-lg bg-dental-surface"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-dental-ink py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex justify-center items-center gap-2 bg-dental-accent text-white font-semibold py-3 rounded-lg text-sm"
                >
                  <span>Book Consultation Now</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
