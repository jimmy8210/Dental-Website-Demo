import React from 'react';
import { ArrowUpRight, MessageCircle, Check } from 'lucide-react';
import { clinicData, getTreatmentWhatsAppLink } from '../config/clinicData';

export const Treatments: React.FC = () => {
  const featuredTreatment = clinicData.treatments[0]; // Dental Implants
  const catalogTreatments = clinicData.treatments.slice(1);

  return (
    <section id="treatments" className="py-20 lg:py-24 bg-dental-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading & Argument */}
        <div className="max-w-3xl mb-14 motion-reveal">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dental-ink tracking-tight">
            Specialized Clinical Procedures
          </h2>
          <p className="mt-3 text-base sm:text-lg text-dental-ink leading-relaxed">
            Every procedure is planned using 3D digital imaging, computer-guided instruments, and hospital-grade Class-B sterilization for zero pain and lifelong durability.
          </p>
        </div>

        {/* Specimen Catalogue Split: Featured Left, Editorial Register Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Featured Specimen: Dental Implants */}
          <div className="lg:col-span-5 bg-white rounded-tile p-6 sm:p-8 space-y-6 motion-reveal">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-bold text-dental-accent">
                {featuredTreatment.badge || "Clinical Specialty"}
              </span>
              <span className="text-sm font-semibold text-dental-ink">
                {featuredTreatment.startingPrice}
              </span>
            </div>

            <div className="aspect-[16/10] rounded-specimen overflow-hidden bg-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                alt="Permanent Dental Implant Restoration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-dental-ink">
                {featuredTreatment.title}
              </h3>
              <p className="text-sm font-medium text-dental-muted mt-1 mb-3">
                {featuredTreatment.subtitle}
              </p>
              <p className="text-base text-dental-ink leading-relaxed">
                {featuredTreatment.description}
              </p>
            </div>

            <ul className="space-y-2.5 pt-2">
              {featuredTreatment.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-dental-ink">
                  <Check className="w-4 h-4 text-dental-accent shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex items-center justify-between gap-4">
              <a
                href={getTreatmentWhatsAppLink(featuredTreatment.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Ask Fee on WhatsApp</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 font-semibold text-sm text-dental-ink hover:text-dental-accent transition-colors"
              >
                <span>Book OPD</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Catalog Register: The Other 5 Procedures (Editorial List, Not Icon Cards) */}
          <div className="lg:col-span-7 space-y-6 motion-reveal">
            {catalogTreatments.map((item) => {
              const whatsappLink = getTreatmentWhatsAppLink(item.title);

              return (
                <div 
                  key={item.id}
                  className="py-5 first:pt-0 last:pb-0 space-y-2.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <span className="text-[13px] font-bold text-dental-accent block">
                        {item.badge || "Clinical Protocol"}
                      </span>
                      <h3 className="text-xl font-bold text-dental-ink">
                        {item.title}
                      </h3>
                    </div>
                    {item.startingPrice && (
                      <span className="text-sm font-semibold text-dental-ink shrink-0">
                        {item.startingPrice}
                      </span>
                    )}
                  </div>

                  <p className="text-base text-dental-ink leading-relaxed">
                    {item.description}
                  </p>

                  <div className="text-[13px] text-dental-muted font-medium">
                    <span>Clinical protocol: </span>
                    <span className="text-dental-ink font-semibold">{item.highlights.slice(0, 3).join(' • ')}</span>
                  </div>

                  <div className="pt-2 flex items-center gap-6 text-sm">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-dental-accent hover:underline transition-colors"
                    >
                      <span>Inquire Fee on WhatsApp →</span>
                    </a>

                    <a
                      href="#contact"
                      className="font-semibold text-dental-ink hover:text-dental-accent transition-colors"
                    >
                      <span>Book Slot →</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
