import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../config/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 items-center">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Apex Dental on WhatsApp"
        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-sm px-4 py-3 rounded-full transition-transform active:scale-95"
      >
        <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
        <span>Chat with Clinic</span>
      </a>
    </div>
  );
};
