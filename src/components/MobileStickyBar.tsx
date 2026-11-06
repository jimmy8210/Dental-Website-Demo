import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { clinicData, getWhatsAppLink } from '../config/clinicData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div data-ui="true" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white px-3 py-2.5 shadow-lg">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto text-sm">
        
        {/* Left: Call Clinic */}
        <a
          href={`tel:${clinicData.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 bg-dental-dark text-white font-semibold py-2.5 px-3 rounded-lg text-center"
        >
          <Phone className="w-4 h-4 text-dental-accent" />
          <span className="truncate">Call Clinic</span>
        </a>

        {/* Right: WhatsApp Booking */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-[#25D366] text-slate-950 font-bold py-2.5 px-3 rounded-lg text-center"
        >
          <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
          <span className="truncate">WhatsApp OPD</span>
        </a>

      </div>
    </div>
  );
};
