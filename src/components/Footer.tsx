import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dental-dark text-dental-darkMuted pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Clinic Brand (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-dental-accent text-white flex items-center justify-center font-bold text-sm tracking-tight">
                AD
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {clinicData.name}
              </span>
            </div>
            
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Premier multi-speciality dental surgery and oral implantology centre. Dedicated to painless, ethical, and European Class-B sterilized dental care in {clinicData.locality}, {clinicData.city}.
            </p>

            <div className="text-[13px] text-slate-300 space-y-0.5 pt-1">
              <p><strong className="text-white">Clinical Director:</strong> {clinicData.doctor.name}, {clinicData.doctor.degrees}</p>
              <p><strong className="text-white">Council Registration:</strong> Maharashtra State Dental Council</p>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-[13px] text-slate-300">
              <li><a href="#treatments" className="hover:text-white transition-colors">Procedures & Fees</a></li>
              <li><a href="#sterilization" className="hover:text-white transition-colors">Class-B Sterilization</a></li>
              <li><a href="#doctor" className="hover:text-white transition-colors">Chief Surgeon</a></li>
              <li><a href="#smile-gallery" className="hover:text-white transition-colors">Smile Transformations</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Patient Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Patient FAQs</a></li>
            </ul>
          </div>

          {/* Procedures (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white">
              Procedures
            </h4>
            <ul className="space-y-2 text-[13px] text-slate-300">
              <li>Dental Implants</li>
              <li>Clear Aligners</li>
              <li>Single-Sitting RCT</li>
              <li>Porcelain Veneers</li>
              <li>CAD/CAM Zirconia</li>
              <li>Pediatric Care</li>
            </ul>
          </div>

          {/* Clinic Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white">
              Clinic & Emergency Desk
            </h4>
            
            <div className="space-y-2 text-[13px]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-dental-accent shrink-0 mt-0.5" />
                <span className="text-slate-300">{clinicData.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-dental-accent shrink-0" />
                <a href={`tel:${clinicData.phoneRaw}`} className="text-teal-300 hover:underline font-semibold">
                  {clinicData.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-dental-accent shrink-0" />
                <a href={`mailto:${clinicData.email}`} className="text-slate-300 hover:text-white">
                  {clinicData.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-1.5 bg-dental-darkSurface px-3 py-1.5 rounded text-[13px] text-slate-200 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-teal-300" />
                <span>134°C Steam Tested Operatory</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Footage Credits */}
        <div className="pt-8 text-[13px] text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {clinicData.name}. All rights reserved.</p>
          <p className="text-slate-400">
            Footage: <a href="https://commons.wikimedia.org/wiki/File:Mirrorless_vs_DSLR_in_Dental_Photography.webm" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">“Mirrorless vs DSLR in Dental Photography”</a> by Dental Photo Master, <a href="https://creativecommons.org/licenses/by/3.0" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">CC BY 3.0</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};
