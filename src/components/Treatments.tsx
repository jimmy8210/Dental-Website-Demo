import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Smile, 
  Gem, 
  HeartHandshake,
  Check, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { clinicData, getTreatmentWhatsAppLink } from '../config/clinicData';

// Map icon strings to Lucide components
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  ShieldCheck,
  Sparkles,
  Zap,
  Smile,
  Gem,
  HeartHandshake,
};

export const Treatments: React.FC = () => {
  return (
    <section id="treatments" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Specialized Clinical Procedures
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            High-Precision Dental Care for Lasting Smiles
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every procedure is planned using 3D digital imaging, computer-guided instruments, and hospital-grade sterilization for maximum patient comfort and zero pain.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicData.treatments.map((item) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            const whatsappLink = getTreatmentWhatsAppLink(item.title);

            return (
              <div 
                key={item.id}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-teal-400 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-13 h-13 p-3 rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    {item.badge && (
                      <span className="text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200/60 px-2.5 py-1 rounded-full text-right leading-tight">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 mt-0.5 mb-3">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action Links */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  {/* WhatsApp Ask Cost Micro-Link */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#1EBE5D] hover:text-[#128C7E] bg-emerald-50 hover:bg-emerald-100/80 px-3 py-2 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
                    <span>Ask Cost on WhatsApp</span>
                  </a>

                  {/* Appointment link */}
                  <a
                    href="#appointment-form"
                    className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-slate-600 hover:text-teal-700 py-1 transition-colors group/link"
                  >
                    <span>Book OPD</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Strip */}
        <div className="mt-14 bg-brand-mint border border-teal-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-brand-navy">
              Not sure which treatment is right for your tooth pain or smile?
            </h4>
            <p className="text-sm text-slate-600">
              Book a comprehensive 15-minute diagnostic consultation with digital intraoral X-ray check.
            </p>
          </div>
          <a
            href="#appointment-form"
            className="shrink-0 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-95"
          >
            Schedule Consultation Today
          </a>
        </div>

      </div>
    </section>
  );
};

