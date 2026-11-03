import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Sparkles, 
  CalendarCheck, 
  MessageCircle,
  FileText
} from 'lucide-react';
import { clinicData, getWhatsAppLink } from '../config/clinicData';

export const DoctorProfile: React.FC = () => {
  const doctor = clinicData.doctor;

  return (
    <section id="doctor" className="py-20 bg-brand-mint/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Pill */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-teal-100/70 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <Award className="w-3.5 h-3.5 text-teal-700" />
            Clinical Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Meet the Chief Dental Surgeon
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Expert surgical hands backed by 14+ years of postgraduate clinical training and thousands of successfully treated patients.
          </p>
        </div>

        {/* Two-Column Doctor Card */}
        <div className="bg-white rounded-3xl border border-teal-100 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Column: Doctor Photo & Quick Credentials */}
            <div className="lg:col-span-5 bg-gradient-to-b from-teal-50 to-teal-100/50 p-8 sm:p-10 flex flex-col items-center justify-between border-b lg:border-b-0 lg:border-r border-teal-100">
              <div className="w-full flex flex-col items-center">
                {/* Doctor Portrait with clinical frame */}
                <div className="relative mb-6">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
                    <img 
                      src={doctor.image} 
                      alt={`${doctor.name} - ${doctor.degrees}`}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Floating Experience Badge */}
                  <div className="absolute -bottom-3 bg-teal-700 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-200" />
                    <span>{doctor.experienceYears}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 text-center">
                  {doctor.name}
                </h3>
                <p className="text-sm font-semibold text-teal-700 text-center mt-1">
                  {doctor.degrees}
                </p>
                <p className="text-xs text-slate-500 text-center mt-0.5">
                  {doctor.speciality}
                </p>
              </div>

              {/* Consultation Promise Card */}
              <div className="mt-8 w-full bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-teal-200/70 text-left">
                <p className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-teal-600" />
                  Direct 1-on-1 Consultation
                </p>
                <p className="text-[12px] text-slate-600 leading-relaxed">
                  Every patient is examined directly by Dr. Ananya—no junior delegate handovers. You receive an honest diagnostic assessment without pushy upselling.
                </p>
              </div>
            </div>

            {/* Right Column: Bio, Philosophy & Credentials */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block mb-2">
                  Ethical & Gentle Dental Care
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-navy leading-snug mb-5">
                  "Dentistry shouldn't be painful, rushed, or full of financial surprises."
                </h4>

                <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  {doctor.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Key Clinical Protocols */}
                <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 text-teal-900">
                  Doctor's Strict Clinical Standards:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {doctor.credentials.map((cred, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#appointment-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book Consultation with Dr. Ananya</span>
                </a>
                
                <a
                  href={getWhatsAppLink("Hi Dr. Ananya, I would like to schedule a personal dental consultation with you at Apex Dental.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-sm px-5 py-3.5 rounded-xl border border-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>Ask Dr. Ananya on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

