import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { clinicData, getWhatsAppLink } from '../config/clinicData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(clinicData.faqs[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-dental-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 motion-reveal">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dental-ink tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-dental-ink leading-relaxed">
            Transparent answers to common concerns about painlessness, infection control, zero-hidden pricing, and OPD shifts.
          </p>
        </div>

        {/* Accordion Tiles */}
        <div className="space-y-3 motion-reveal">
          {clinicData.faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-specimen overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold text-dental-ink">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-dental-accent' : 'text-dental-muted'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-base text-dental-ink leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Doctor Ask Banner */}
        <div className="mt-10 p-6 bg-dental-surface rounded-specimen flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 motion-reveal">
          <div>
            <h4 className="text-base font-bold text-dental-ink">Have an acute tooth pain or urgent clinical question?</h4>
            <p className="text-[13px] text-dental-ink mt-0.5">Ask Dr. Ananya directly on WhatsApp without obligation.</p>
          </div>
          <a
            href={getWhatsAppLink("Hi Dr. Ananya, I have a quick question regarding a dental problem.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-950 bg-emerald-300 hover:bg-emerald-400 px-4 py-2.5 rounded-lg transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-950 text-emerald-950" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
