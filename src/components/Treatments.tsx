import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, Check, Sparkles, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clinicData, getTreatmentWhatsAppLink } from '../config/clinicData';

export const Treatments: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Procedures' },
    { id: 'dental-implants', label: 'Dental Implants' },
    { id: 'clear-aligners', label: 'Clear Aligners' },
    { id: 'painless-rct', label: 'Painless RCT' },
    { id: 'smile-makeover', label: 'Smile Design' },
    { id: 'crowns-bridges', label: 'Crowns & Zirconia' },
  ];

  const treatmentImages: Record<string, string> = {
    'dental-implants': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    'clear-aligners': 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    'painless-rct': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    'smile-makeover': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    'crowns-bridges': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    'pediatric-preventive': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  };

  const filteredTreatments = activeCategory === 'all' 
    ? clinicData.treatments 
    : clinicData.treatments.filter(t => t.id === activeCategory);

  return (
    <section id="treatments" className="py-24 lg:py-32 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Specialized Clinical Procedures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Designed for Comfort, Longevity & Natural Aesthetics
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every procedure is planned using 3D digital imaging, computerized guidance, and hospital-grade Class-B sterilization for zero pain and lifelong durability.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap active:scale-95 ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/15'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Treatment Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredTreatments.map((t) => {
              const whatsappLink = getTreatmentWhatsAppLink(t.title);
              const imgUrl = treatmentImages[t.id] || treatmentImages['dental-implants'];

              return (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image with Tag Overlay */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img 
                        src={imgUrl} 
                        alt={t.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-teal-800 border border-white/60 shadow-sm">
                        {t.badge}
                      </div>
                      {t.startingPrice && (
                        <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                          {t.startingPrice}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider block mb-1">
                        {t.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {t.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">
                        {t.description}
                      </p>

                      {/* Clinical Highlights Pills */}
                      <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs sm:text-sm text-slate-700">
                        {t.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="p-6 pt-0 mt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                      <span>WhatsApp Fee</span>
                    </a>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-teal-700 transition-colors"
                    >
                      <span>Book OPD</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Clinical Transparency Guarantee Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Transparent Ethical Pricing Policy
              </h4>
              <p className="text-sm text-slate-600 mt-0.5">
                Every patient receives a printed diagnostic breakdown with itemized treatment options before any work begins. Zero unexpected charges.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-colors"
          >
            Schedule Consultation
          </a>
        </div>

      </div>
    </section>
  );
};
