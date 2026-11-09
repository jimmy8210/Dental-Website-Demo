import React from 'react';
import { ShieldCheck, Waves, PackageCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const Sterilization: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: Waves,
      phase: "Enzymatic Debridement",
      title: "42 kHz Ultrasonic Cavitation",
      desc: "All instruments undergo computerized ultrasonic cavitation with hospital-grade multi-enzyme solutions to dissolve microscopic bio-films before thermal sterilization.",
      highlight: "Medical-grade bio-cleanse"
    },
    {
      num: "02",
      icon: PackageCheck,
      phase: "Hermetic Packaging",
      title: "Sterile Pouches & Indicators",
      desc: "Instruments are hermetically sealed into puncture-resistant medical pouches equipped with internal & external chemical indicators that change color upon verified sterility.",
      highlight: "Dual chemical verification"
    },
    {
      num: "03",
      icon: Zap,
      phase: "Core Hospital Protocol",
      title: "European Class-B Autoclave",
      desc: "Triple-pulse fractionated pre-vacuum extracts all air from hollow handpiece channels, driving superheated 134°C steam at 2.1 bar to eliminate 100% of bacterial and viral spores.",
      highlight: "134°C @ 2.1 bar steam"
    },
    {
      num: "04",
      icon: ShieldCheck,
      phase: "Point-of-Care Assurance",
      title: "Unwrapped Chairside In Front of You",
      desc: "Sterile pouches remain completely sealed until you are seated in the dental operatory. You witness the unbroken seal and active chemical proof before any instrument is used.",
      highlight: "0% Cross-contamination"
    }
  ];

  return (
    <section id="sterilization" className="scroll-mt-36 lg:scroll-mt-28 py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Decorative Tech Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-bold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>Hospital-Grade Infection Control</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            European Class-B Sterilization: Zero Cross-Contamination
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            At {clinicData.name}, patient safety is not a marketing phrase—it is our strictest clinical discipline. Every drill, bur, and instrument undergoes a certified 4-phase hospital cycle.
          </p>
        </div>

        {/* 4-Phase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="group relative bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-teal-500/50 p-6 sm:p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-teal-950 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-extrabold text-slate-800 group-hover:text-slate-700 transition-colors">
                      {s.num}
                    </span>
                  </div>

                  {/* Text Content */}
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block mb-1">
                    {s.phase}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2.5 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>

                {/* Highlight Chip */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-teal-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>{s.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Open-in-Front Guarantee Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-950/60 to-slate-900 border border-teal-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-teal-300 font-bold text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400" />
              The "Opened in Front of Patient" Promise
            </span>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Notice the color-changing chemical indicators on your sealed medical pouch. Our clinical staff unseals your instruments only after you are seated in the operatory chair.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right hidden sm:block">
              <span className="text-xs text-slate-400 block">Class-B Autoclave</span>
              <span className="text-sm font-bold text-white">134°C Steam Tested</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 border border-teal-400/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
