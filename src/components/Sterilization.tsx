import React from 'react';
import { 
  Waves, 
  PackageCheck, 
  ShieldAlert, 
  Recycle, 
  ShieldCheck, 
  CheckCircle,
  Eye,
  Thermometer
} from 'lucide-react';
import { clinicData } from '../config/clinicData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Waves,
  PackageCheck,
  ShieldAlert,
  Recycle,
};

export const Sterilization: React.FC = () => {
  return (
    <section id="sterilization" className="py-20 lg:py-24 bg-gradient-to-b from-brand-navy to-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            Hospital-Grade Hygiene Assurance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Your Safety is Our Strictest Protocol: <br className="hidden sm:inline" />
            <span className="text-teal-400">100% International Sterilization Standards</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            At {clinicData.name}, we treat cross-contamination prevention as our most sacred clinical duty. Every dental drill, bur, and handpiece passes through an uncompromising 4-step European standard cycle.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicData.sterilizationSteps.map((step) => {
            const Icon = iconMap[step.icon] || ShieldCheck;

            return (
              <div 
                key={step.step}
                className="bg-slate-800/80 border border-slate-700/80 hover:border-teal-400/60 rounded-2xl p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/30 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Protocol Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-9 h-9 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 font-bold text-sm flex items-center justify-center">
                      0{step.step}
                    </span>
                    <span className="text-[10px] font-semibold tracking-wider uppercase bg-slate-900 text-teal-300 px-2.5 py-1 rounded-full border border-slate-700">
                      {step.protocolBadge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-teal-900/50 text-teal-300 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.fullDesc}
                  </p>
                </div>

                {/* Micro trust guarantee */}
                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-1.5 text-xs text-teal-300">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Verified 0% Bio-Load</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sterilization Proof Callout with Highlights */}
        <div className="mt-12 bg-slate-800/60 border border-teal-500/20 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-teal-500/20 rounded-xl text-teal-300 shrink-0">
              <Eye className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                The "Open in Front of Patient" Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Notice the color-changing chemical indicators on your sealed dental kit. Our nursing team opens your sterile kit exclusively once you are comfortably seated on the chair.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 shrink-0 text-xs sm:text-sm text-teal-300 font-semibold">
            <span className="inline-flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-teal-400" />
              134°C Steam Tested
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              Class-B Certified
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

