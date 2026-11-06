import React from 'react';
import { Check, MessageCircle, ArrowUpRight } from 'lucide-react';
import { clinicData, getWhatsAppLink } from '../config/clinicData';

export const DoctorProfile: React.FC = () => {
  const doctor = clinicData.doctor;

  return (
    <section id="doctor" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 motion-reveal">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dental-ink tracking-tight">
            Meet the Chief Dental Surgeon
          </h2>
          <p className="mt-3 text-base sm:text-lg text-dental-ink leading-relaxed">
            Direct surgical examination backed by 14+ years of postgraduate clinical training, thousands of successful restorations, and transparent ethical diagnosis.
          </p>
        </div>

        {/* Doctor Editorial Card */}
        <div className="bg-dental-surface rounded-tile p-8 sm:p-12 motion-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Portrait & Credentials */}
            <div className="lg:col-span-5 space-y-5">
              <div className="aspect-[4/5] rounded-specimen overflow-hidden bg-slate-200">
                <img 
                  src={doctor.image} 
                  alt={`${doctor.name} - ${doctor.degrees}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-dental-ink">
                  {doctor.name}
                </h3>
                <p className="text-sm font-semibold text-dental-accent mt-0.5">
                  {doctor.degrees}
                </p>
                <p className="text-[13px] text-dental-ink mt-1">
                  {doctor.speciality} • {doctor.experienceYears}
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg text-sm text-dental-ink space-y-1">
                <p className="font-bold text-dental-ink">Direct 1-on-1 Consultation Guarantee</p>
                <p className="text-dental-ink text-sm">Every case is examined and treated directly by Dr. Ananya—no junior delegate handovers. You receive an honest diagnostic assessment without aggressive upselling.</p>
              </div>
            </div>

            {/* Right Column: Narrative, Standards & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              <blockquote className="text-2xl sm:text-3xl font-bold text-dental-ink leading-snug tracking-tight">
                "Dentistry shouldn't be painful, rushed, or full of financial surprises."
              </blockquote>

              <div className="space-y-4 text-base text-dental-ink leading-relaxed">
                {doctor.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Strict Clinical Standards */}
              <div className="pt-4">
                <h4 className="text-base font-bold text-dental-ink mb-3">
                  Clinical Standards & Accreditations:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-dental-ink">
                  {doctor.credentials.map((cred, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-dental-accent shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Booking Actions */}
              <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-1.5 bg-dental-accent hover:bg-dental-accentHover text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
                >
                  <span>Book Consultation with Dr. Ananya</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={getWhatsAppLink("Hi Dr. Ananya, I would like to schedule a personal consultation with you at Apex Dental.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-dental-ink font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
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
