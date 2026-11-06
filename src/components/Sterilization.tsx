import React from 'react';
import { clinicData } from '../config/clinicData';

export const Sterilization: React.FC = () => {
  const steps = [
    {
      phase: "Phase 1: Bio-Debridement",
      param: "42 kHz Ultrasonic Cavitation",
      title: "Enzymatic Multi-Stage Cleansing",
      desc: "All instruments undergo computerized ultrasonic cavitation with hospital-grade enzymatic solution to dissolve all organic trace before autoclave sterilization."
    },
    {
      phase: "Phase 2: Core Sterilization",
      param: "134°C @ 2.1 Bar Pressure",
      title: "European Class-B Fractionated Autoclave",
      desc: "True triple-fractionated pre-vacuum pulse extracts all air from hollow handpiece channels, allowing superheated 134°C steam to kill 100% of bacterial and viral spores."
    },
    {
      phase: "Phase 3: Barrier Packaging",
      param: "Medical Grade Pouch Seal",
      title: "Hermetic Sealing & Chemical Indicator",
      desc: "Instruments are hermetically sealed into puncture-resistant medical sterilization pouches with dual chemical indicators that change color when sterility is achieved."
    },
    {
      phase: "Phase 4: Chairside Verification",
      param: "0% Cross-Contamination",
      title: "Unwrapped Exclusively Before You",
      desc: "Sealed sterile pouches remain unopened until you are seated in the operatory chair. You see the intact seal and active chemical proof before any instrument touches you."
    }
  ];

  return (
    <section id="sterilization" className="py-20 lg:py-24 bg-dental-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading & Argument */}
        <div className="max-w-3xl mb-14 motion-reveal">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Class-B Hospital Sterilization
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
            At {clinicData.name}, cross-contamination prevention is our strict clinical duty. Every drill, bur, and handpiece passes through a certified 4-stage European hospital cycle.
          </p>
        </div>

        {/* 4-Stage Architectural Flow (Editorial Ledger, Not Boxed Icon Cards) */}
        <div className="space-y-6 motion-reveal">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="py-4 flex flex-col md:flex-row items-start md:items-baseline justify-between gap-4"
            >
              <div className="max-w-2xl space-y-1.5">
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-bold text-teal-300">
                    {step.phase}
                  </span>
                  <span className="text-[13px] text-slate-300 font-medium">
                    {step.param}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {step.title}
                </h3>
                <p className="text-base text-slate-200 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="shrink-0 text-sm font-semibold text-teal-300 bg-teal-950/40 px-3.5 py-1.5 rounded-lg">
                Verified 0% Bio-Load
              </div>
            </div>
          ))}
        </div>

        {/* The Open-in-Front Guarantee Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-dental-darkSurface rounded-specimen flex flex-col md:flex-row items-start md:items-center justify-between gap-6 motion-reveal">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-teal-300 font-bold text-sm block">
              The "Opened in Front of Patient" Guarantee
            </span>
            <p className="text-base text-slate-200 leading-relaxed">
              Notice the color-changing chemical indicators on your sealed medical pouch. Our nursing staff opens your sterile instrument set exclusively after you are comfortably seated in the operatory chair.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-white font-medium shrink-0">
            <span>134°C Steam Tested</span>
            <span>•</span>
            <span>European Class-B Protocol</span>
          </div>
        </div>

      </div>
    </section>
  );
};
