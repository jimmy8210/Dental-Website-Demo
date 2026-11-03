import React from 'react';
import { Sparkles, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Clinic Brand & Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-teal-100" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {clinicData.name}
              </span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Premier multi-speciality dental and oral implant centre dedicated to painless, ethical, and hospital-grade sterilized dental treatments in {clinicData.locality}, {clinicData.city}.
            </p>

            <div className="text-xs text-slate-400 space-y-1 pt-2">
              <p><strong className="text-white">Director:</strong> {clinicData.doctor.name}, {clinicData.doctor.degrees}</p>
              <p><strong className="text-white">Registered Facility:</strong> Maharashtra State Dental Council</p>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#treatments" className="hover:text-teal-300 transition-colors">Treatments</a></li>
              <li><a href="#sterilization" className="hover:text-teal-300 transition-colors">Sterilization Protocol</a></li>
              <li><a href="#doctor" className="hover:text-teal-300 transition-colors">About Dr. Ananya</a></li>
              <li><a href="#smile-gallery" className="hover:text-teal-300 transition-colors">Smile Transformations</a></li>
              <li><a href="#reviews" className="hover:text-teal-300 transition-colors">Google Reviews</a></li>
              <li><a href="#faq" className="hover:text-teal-300 transition-colors">Patient FAQs</a></li>
            </ul>
          </div>

          {/* Key Treatments (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Specialized Care
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Dental Implants</li>
              <li>Clear Aligners</li>
              <li>Single-Sitting RCT</li>
              <li>Porcelain Veneers</li>
              <li>Zirconia Crowns</li>
              <li>Pediatric Dentistry</li>
            </ul>
          </div>

          {/* Contact & Emergency Support (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Clinic & Emergency Contact
            </h4>
            
            <div className="space-y-2.5 text-sm">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">{clinicData.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${clinicData.phoneRaw}`} className="text-xs text-teal-300 hover:text-white font-semibold">
                  {clinicData.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${clinicData.email}`} className="text-xs text-slate-300 hover:text-teal-300">
                  {clinicData.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-lg text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>European Class-B Sterilized</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 mt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {clinicData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Crafted for painless dentistry with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> in {clinicData.city}
          </p>
        </div>
      </div>
    </footer>
  );
};

