import React from 'react';
import { MessageCircle, ArrowRight, Check } from 'lucide-react';
import { clinicData, getWhatsAppLink } from '../config/clinicData';

export const Hero: React.FC = () => {
  const clinicalMetrics = [
    { label: "3,200+ Guided Implants", detail: "98.7% osseointegration rate" },
    { label: "European Class-B Autoclave", detail: "134°C fractional vacuum sterility" },
    { label: "Single-Sitting RCT", detail: "45-min computerized anesthesia" },
    { label: "0% Interest EMI Available", detail: "Transparent plans from ₹2,999/mo" },
  ];

  return (
    <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-dental-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Supporting Claim & Actions */}
          <div className="lg:col-span-7 space-y-6 hero-animate-1">
            
            {/* Main Headline (2 lines, ~5 words) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-dental-ink leading-[1.08] tracking-tight">
              Painless Dentistry & Guided Implants
            </h1>

            {/* Supporting Sentence directly beneath */}
            <p className="text-lg sm:text-xl text-dental-ink max-w-xl leading-relaxed">
              Hospital-grade Class-B sterilization, 3D CBCT digital precision, and direct 1-on-1 consultations with Dr. Ananya Mukherjee in Bandra West, Mumbai.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-sm px-6 py-3.5 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href="#treatments"
                className="inline-flex items-center justify-center gap-2 bg-dental-surface hover:bg-slate-200 text-dental-ink font-semibold text-sm px-6 py-3.5 rounded-lg transition-colors"
              >
                <span>View Procedures & Fees</span>
                <ArrowRight className="w-4 h-4 text-dental-accent" />
              </a>
            </div>

            {/* Three Essential Proof Guarantees */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-dental-ink font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-dental-accent shrink-0" />
                <span>Painless Local Numbing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-dental-accent shrink-0" />
                <span>Zero-Hidden Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-dental-accent shrink-0" />
                <span>Sterile Kits Opened Before You</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Specimen Plinth with Clinical Surgeon Portrait */}
          <div className="lg:col-span-5 hero-animate-2">
            <div className="bg-dental-surface rounded-tile p-6 sm:p-8 space-y-6">
              
              {/* Doctor Clinical Portrait */}
              <div className="relative aspect-[4/3] rounded-specimen overflow-hidden bg-slate-200">
                <img 
                  src={clinicData.doctor.image} 
                  alt={`${clinicData.doctor.name} - Chief Dental Surgeon & Implant Specialist`}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute bottom-0 inset-x-0 bg-dental-dark/95 text-white p-3.5 text-sm flex items-center justify-between">
                  <span className="font-bold">{clinicData.doctor.name}</span>
                  <span className="text-slate-200 text-[13px]">{clinicData.doctor.degrees}</span>
                </div>
              </div>

              {/* Verified Clinical Facts Grid */}
              <div className="grid grid-cols-2 gap-3 text-left">
                {clinicalMetrics.map((m, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-lg">
                    <span className="text-sm font-bold text-dental-ink block leading-tight">
                      {m.label}
                    </span>
                    <span className="text-[13px] text-dental-ink block mt-1">
                      {m.detail}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
