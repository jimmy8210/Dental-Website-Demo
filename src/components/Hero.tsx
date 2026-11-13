import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { getWhatsAppLink } from '../config/clinicData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40">
      {/* Background Radial Glow */}
      <div className="mesh-glow-top" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Proof & Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-200/80 shadow-sm text-xs font-semibold text-slate-800">
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>
              <span className="text-slate-400">•</span>
              <span className="text-teal-900 font-bold">4.9/5 Rating</span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="text-slate-600 hidden sm:inline">280+ Verified Patient Reviews</span>
            </div>

            {/* Impact Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-slate-900 leading-[1.08] tracking-tight">
              A Confident Smile Begins With <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700">Gentle Precision</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed font-normal">
              Bandra West's premier dental & implant surgical centre. Combining 3D computerized scanning, zero-anxiety anesthesia, and European Class-B hospital sterilization under Dr. Ananya Mukherjee.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href="#contact"
                className="shimmer-btn inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 hover:from-teal-700 hover:to-teal-900 text-white font-bold text-base shadow-lg shadow-teal-700/25 active:scale-95 transition-all"
              >
                <span>Book Consultation Slot</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Ask Doctor on WhatsApp</span>
              </a>
            </div>

            {/* Clinical Guarantees Strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Painless Local Numbing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Zero-Hidden Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Sterile Kits Opened Before You</span>
              </div>
            </div>

            {/* Trust Metrics Pill */}
            <div className="pt-2 flex items-center gap-6 border-t border-slate-200/80">
              <div>
                <span className="text-2xl font-extrabold text-slate-900 block leading-tight">3,200+</span>
                <span className="text-xs text-slate-500 font-medium">Guided Implants Placed</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <span className="text-2xl font-extrabold text-slate-900 block leading-tight">98.7%</span>
                <span className="text-xs text-slate-500 font-medium">Bone Integration Rate</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <span className="text-2xl font-extrabold text-slate-900 block leading-tight">14+ Yrs</span>
                <span className="text-xs text-slate-500 font-medium">Clinical Excellence</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Visual with Animated Floating Glass Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/60 bg-gradient-to-tr from-slate-100 to-teal-50 border border-slate-200/80 p-2">
              <div className="relative aspect-[16/10] max-h-[480px] rounded-2xl overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80" 
                  alt="Apex Dental & Implant Centre - Modern Surgical Operatory & Dental Chair Suite"
                  className="w-full h-full max-h-[480px] object-cover hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />

                {/* Bottom Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Clinic Operatory Caption Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-xl glass-dark text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-extrabold text-white text-sm sm:text-base leading-tight">
                        Apex Surgical Operatory Suite
                      </h3>
                      <p className="text-teal-300 text-xs font-medium mt-0.5">
                        European Class-B Sterilized • 3D Guided Setup
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Glass Badge 1: Top Right */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 sm:-right-6 glass-card p-3.5 rounded-2xl shadow-card hidden sm:flex items-center gap-3 border border-white/80"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Class-B Sterilization</span>
                <span className="text-[11px] text-teal-700 font-semibold">134°C Autoclave Protocol</span>
              </div>
            </motion.div>

            {/* Floating Glass Badge 2: Left Middle */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 -left-4 sm:-left-8 glass-card p-3 rounded-2xl shadow-card hidden sm:flex items-center gap-2.5 border border-white/80"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Painless Guarantee</span>
                <span className="text-[11px] text-slate-500">Computerized Anesthesia</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
