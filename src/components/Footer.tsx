import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Clinic Brand (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white flex items-center justify-center font-bold text-base shadow-lg shadow-teal-500/20">
                AD
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                {clinicData.name}
              </span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              Premier multi-speciality dental surgery and oral implantology centre. Committed to painless, ethical, and European Class-B sterilized dental care in {clinicData.locality}, {clinicData.city}.
            </p>

            <div className="text-xs text-slate-400 space-y-1 pt-2">
              <p><strong className="text-slate-200">Director:</strong> {clinicData.doctor.name}, {clinicData.doctor.degrees}</p>
              <p><strong className="text-slate-200">Registration:</strong> Maharashtra State Dental Council</p>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#treatments" className="hover:text-white transition-colors">Procedures & Fees</a></li>
              <li><a href="#smile-gallery" className="hover:text-white transition-colors">Smile Transformations</a></li>
              <li><a href="#sterilization" className="hover:text-white transition-colors">Class-B Sterilization</a></li>
              <li><a href="#doctor" className="hover:text-white transition-colors">Chief Surgeon</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Patient Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Patient FAQs</a></li>
            </ul>
          </div>

          {/* Procedures (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>Dental Implants</li>
              <li>Clear Aligners</li>
              <li>Single-Sitting RCT</li>
              <li>Porcelain Veneers</li>
              <li>CAD/CAM Zirconia</li>
              <li>Preventive Care</li>
            </ul>
          </div>

          {/* Clinic Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Emergency & OPD Desk
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{clinicData.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${clinicData.phoneRaw}`} className="text-teal-400 hover:underline font-bold">
                  {clinicData.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${clinicData.email}`} className="text-slate-300 hover:text-white">
                  {clinicData.email}
                </a>
              </p>
            </div>

            <div className="pt-3">
              <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>134°C Autoclave Verified Operatory</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Footage Credits */}
        <div className="pt-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {clinicData.name}. All rights reserved.</p>
          <p className="text-slate-500 text-center md:text-right">
            Footage: <a href="https://commons.wikimedia.org/wiki/File:Mirrorless_vs_DSLR_in_Dental_Photography.webm" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">“Mirrorless vs DSLR in Dental Photography”</a> by Dental Photo Master, <a href="https://creativecommons.org/licenses/by/3.0" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">CC BY 3.0</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};
