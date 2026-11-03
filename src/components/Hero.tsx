import React from 'react';
import { 
  MessageCircle, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Award, 
  Clock, 
  CreditCard,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { clinicData, getWhatsAppLink } from '../config/clinicData';

export const Hero: React.FC = () => {
  const trustMetrics = [
    { icon: Award, label: "14+ Years Experience", sub: "MDS Specialists" },
    { icon: Clock, label: "Single-Sitting RCT", sub: "45-Min Fast Relief" },
    { icon: ShieldCheck, label: "100% Sterile & Safe", sub: "Class-B Autoclave" },
    { icon: CreditCard, label: "0% EMI Available", sub: "Easy Installments" },
  ];

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-gradient-to-b from-brand-mint via-teal-50/40 to-white overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-10 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Google Trust Pill */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-teal-200/80 px-3.5 py-1.5 rounded-full shadow-sm">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                {clinicData.googleReviewsMeta.rating}/5 Rating on Google
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs sm:text-sm font-medium text-teal-800">
                {clinicData.googleReviewsMeta.verifiedSmiles}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              Painless, Precision Dentistry & <span className="text-teal-700 underline decoration-teal-300 decoration-wavy decoration-2">Advanced Dental Implants</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Experience ethical dental care with hospital-grade 4-step sterilization, 3D digital scans, and experienced MDS specialists in {clinicData.locality}, {clinicData.city}.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* WhatsApp Primary CTA */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white" />
                <span>Book on WhatsApp</span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#treatments"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-navy border border-slate-300 font-semibold text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-teal-700" />
              </a>
            </div>

            {/* Trust Badges / Checkpoints */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                Zero-Pain Injections
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                No Hidden Treatment Costs
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                Wheelchair Accessible & Free Parking
              </span>
            </div>

            {/* Trust Metrics Row */}
            <div className="pt-6 border-t border-teal-100/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                {trustMetrics.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-teal-100/60 shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1.5 bg-teal-50 text-teal-700 rounded-lg">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-900 leading-tight">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 pl-0.5">
                        {item.sub}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Real Clinic Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Clinic Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Apex Dental Clinic Operatory with modern digital dental chair and sterilization equipment"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Clinic Location Badge */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                    High-Tech Dental Operatory
                  </p>
                  <p className="text-sm font-medium text-slate-200">
                    Equipped with Low-Radiation 3D Digital X-Rays & Laser Unit
                  </p>
                </div>
              </div>

              {/* Floating Doctor Profile Pill */}
              <div className="absolute -top-4 -left-3 sm:-left-6 bg-white rounded-xl shadow-xl p-3 sm:p-3.5 border border-slate-100 flex items-center gap-3 max-w-[260px] animate-bounce-subtle">
                <img
                  src={clinicData.doctor.image}
                  alt={clinicData.doctor.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-500 shrink-0"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{clinicData.doctor.name}</h4>
                  <p className="text-[11px] text-teal-700 font-medium">{clinicData.doctor.degrees.split('(')[0]}</p>
                  <div className="flex items-center text-amber-500 text-[10px] gap-0.5 mt-0.5">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-slate-700">4.9/5</span>
                    <span className="text-slate-400">(Top Rated MDS)</span>
                  </div>
                </div>
              </div>

              {/* Floating OPD Hours Pill */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-brand-navy text-white rounded-xl shadow-xl p-3.5 border border-slate-700 max-w-[220px]">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span className="text-xs font-bold text-teal-300">Today's OPD</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Morning: 10 AM – 2 PM<br />
                  Evening: 5 PM – 9 PM
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

