import React from 'react';
import { Check, MessageCircle, ArrowRight, Award, HeartHandshake } from 'lucide-react';
import { clinicData, getWhatsAppLink } from '../config/clinicData';

export const DoctorProfile: React.FC = () => {
  const doctor = clinicData.doctor;

  return (
    <section id="doctor" className="scroll-mt-36 lg:scroll-mt-28 py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-3">
            <Award className="w-3.5 h-3.5 text-teal-600" />
            <span>Lead Specialist & Director</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Meet Your Chief Dental Surgeon
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Direct surgical consultations backed by 14+ years of postgraduate clinical training, thousands of successful restorations, and transparent ethical diagnosis.
          </p>
        </div>

        {/* Doctor Showcase Container */}
        <div className="bg-gradient-to-br from-slate-50 via-teal-50/20 to-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Portrait & Direct Care Guarantee */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative rounded-2xl overflow-hidden max-h-[420px] bg-slate-100 shadow-md">
                <img 
                  src={doctor.image} 
                  alt={`${doctor.name} - ${doctor.degrees}`}
                  className="max-h-[420px] w-full object-cover object-top rounded-2xl hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/60 shadow-sm">
                  <h3 className="font-extrabold text-slate-900 text-base leading-tight">
                    {doctor.name}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 mt-0.5">
                    {doctor.degrees}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {doctor.speciality} • {doctor.experienceYears}
                  </p>
                </div>
              </div>

              {/* Direct 1-on-1 Care Callout */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct 1-on-1 Care Guarantee</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-normal">
                    You are examined and treated personally by Dr. Ananya—no junior delegate handovers or aggressive upselling.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Philosophy & Verified Accreditations */}
            <div className="lg:col-span-7 space-y-6">
              
              <blockquote className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug tracking-tight">
                "Dentistry should never be painful, hurried, or filled with financial surprises."
              </blockquote>

              <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal">
                {doctor.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Key Credentials Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-3">
                  Clinical Standards & Accreditations:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  {doctor.credentials.map((cred, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#contact"
                  className="shimmer-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md shadow-teal-600/20 active:scale-95 transition-all"
                >
                  <span>Book Consultation With Dr. Ananya</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={getWhatsAppLink("Hi Dr. Ananya, I would like to schedule a personal dental consultation with you at Apex Dental.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm shadow-sm active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
                  <span>Ask Doctor on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
