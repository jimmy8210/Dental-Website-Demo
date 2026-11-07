import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { getWhatsAppLink } from '../config/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Apex Dental on WhatsApp"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs sm:text-sm px-4 py-3 rounded-full shadow-xl shadow-emerald-950/20 transition-all border border-emerald-400/50"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-900 opacity-60" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-950" />
        </span>
        <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950 shrink-0" />
        <span className="hidden sm:inline">WhatsApp Clinic</span>
      </motion.a>
    </div>
  );
};
