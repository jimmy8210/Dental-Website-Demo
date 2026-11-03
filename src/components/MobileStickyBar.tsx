import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { clinicData, getWhatsAppLink } from '../config/clinicData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        
        {/* Left 50%: Direct Phone Call */}
        <a
          href={`tel:${clinicData.phoneRaw}`}
          className="flex items-center justify-center gap-2 bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs sm:text-sm py-3 px-3 rounded-xl shadow-sm active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 text-teal-400 shrink-0" />
          <span className="truncate">📞 Call Clinic</span>
        </a>

        {/* Right 50%: 1-Tap WhatsApp Booking */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm py-3 px-3 rounded-xl shadow-md shadow-emerald-500/20 active:scale-95 transition-all text-center"
        >
          <MessageCircle className="w-4 h-4 fill-white text-white shrink-0" />
          <span className="truncate">💬 WhatsApp</span>
        </a>

      </div>
    </div>
  );
};

