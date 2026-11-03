import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink } from '../config/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2">
      {/* Speech bubble tooltip */}
      {!tooltipDismissed && (
        <div className="bg-white rounded-2xl shadow-xl p-3 border border-teal-100 max-w-[240px] text-xs text-slate-700 animate-in fade-in slide-in-from-bottom-2 relative">
          <button
            onClick={() => setTooltipDismissed(true)}
            className="absolute top-1.5 right-1.5 p-1 text-slate-400 hover:text-slate-600 rounded-full"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            Clinic Online
          </p>
          <p className="text-[11px] text-slate-500">
            Have tooth pain or treatment cost questions? Chat with our team now.
          </p>
        </div>
      )}

      {/* Pulsing WhatsApp CTA Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Apex Dental on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 animate-whatsapp-pulse"
      >
        <MessageCircle className="w-8 h-8 fill-white text-white" />
      </a>
    </div>
  );
};
