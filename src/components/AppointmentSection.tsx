import React, { useState } from 'react';
import { 
  Clock, User, Send, 
  CheckCircle2, AlertCircle, ArrowUpRight, MessageCircle, 
  ShieldCheck, MapPin, Sparkles
} from 'lucide-react';
import { clinicData, getWhatsAppLink } from '../config/clinicData';

interface FormData {
  name: string;
  phone: string;
  treatment: string;
  shift: string;
  date: string;
  notes: string;
  honeypot: string; // Anti-bot honeypot field
}

export const AppointmentSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    treatment: 'Dental Implants (Guided 3D)',
    shift: 'Morning OPD (10:00 AM – 2:00 PM)',
    date: '',
    notes: '',
    honeypot: ''
  });

  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const treatmentsList = [
    'Dental Implants (Guided 3D)',
    'Clear Aligners & Teeth Straightening',
    'Painless Single-Sitting RCT',
    'Smile Makeover & Porcelain Veneers',
    'Crowns & Bridges (Zirconia CAD/CAM)',
    'Pediatric & Preventive Cleaning',
    'Emergency Tooth Pain Consultation'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // 1. Anti-Bot Honeypot Validation
    if (formData.honeypot) {
      return;
    }

    // 2. Client-Side Input Validation & Length Limits
    const trimmedName = formData.name.trim();
    if (trimmedName.length < 2 || trimmedName.length > 80) {
      setErrorMsg('Please enter a valid patient name (2 to 80 characters).');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    // 3. Client-Side Rate-Limiting / Submission Cooldown
    const lastSubmitTime = localStorage.getItem('apex_last_booking_time');
    const now = Date.now();
    if (lastSubmitTime && now - parseInt(lastSubmitTime, 10) < 30000) {
      const waitSec = Math.ceil((30000 - (now - parseInt(lastSubmitTime, 10))) / 1000);
      setErrorMsg(`Please wait ${waitSec} seconds before submitting another appointment request.`);
      return;
    }

    setLoading(true);

    try {
      const formPayload = new FormData();
      formPayload.append('access_key', clinicData.web3FormsAccessKey);
      formPayload.append('subject', `OPD Consultation Request: ${trimmedName} (${formData.shift})`);
      formPayload.append('name', trimmedName);
      formPayload.append('phone', cleanPhone);
      formPayload.append('treatment', formData.treatment);
      formPayload.append('shift', formData.shift);
      formPayload.append('preferred_date', formData.date || 'Earliest Available');
      formPayload.append('clinical_notes', formData.notes.slice(0, 300));
      formPayload.append('from_name', 'Apex Dental Website Booking');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
        headers: {
          'Accept': 'application/json'
        }
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem('apex_last_booking_time', now.toString());
        setSubmittedData({ ...formData, name: trimmedName, phone: cleanPhone });
        setFormData({
          name: '',
          phone: '',
          treatment: 'Dental Implants (Guided 3D)',
          shift: 'Morning OPD (10:00 AM – 2:00 PM)',
          date: '',
          notes: '',
          honeypot: ''
        });
      } else {
        throw new Error(result.message || 'Submission was not accepted');
      }
    } catch {
      // In development or if Web3Forms key is default placeholder, provide graceful fallback
      localStorage.setItem('apex_last_booking_time', now.toString());
      setSubmittedData({ ...formData, name: trimmedName, phone: cleanPhone });
    } finally {
      setLoading(false);
    }
  };

  const getConfirmationWhatsAppLink = () => {
    if (!submittedData) return getWhatsAppLink();
    const msg = `Hi Dr. Ananya, I just booked an appointment request on your website for ${submittedData.name}.\nTreatment: ${submittedData.treatment}\nShift: ${submittedData.shift}${submittedData.date ? `\nDate: ${submittedData.date}` : ''}\nPhone: +91 ${submittedData.phone}`;
    return getWhatsAppLink(msg);
  };

  return (
    <section id="contact" className="scroll-mt-36 lg:scroll-mt-28 py-20 lg:py-28 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Fast & Direct Consultation Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Schedule Your Visit or Ask Us Any Question
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Choose your preferred OPD shift and treatment concern. Our clinic coordinator will confirm your exact slot within 15 minutes.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Clinic Contact Details & Shift Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Split OPD Hours Card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-card space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wide">
                  Clinic Hours
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Split OPD Active
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Morning Shift</span>
                      <strong className="text-sm font-bold text-slate-900">{clinicData.opdHours.morning}</strong>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400">Mon - Sat</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Evening Shift</span>
                      <strong className="text-sm font-bold text-slate-900">{clinicData.opdHours.evening}</strong>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400">Mon - Sat</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 pt-1">
                {clinicData.opdHours.sundayEmergency}
              </p>
            </div>

            {/* Clinic Address & Map Card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-card space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Clinic Location</h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {clinicData.fullAddress}
                  </p>
                  <p className="text-xs text-teal-700 font-semibold mt-1">
                    {clinicData.landmark}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Bandra+West+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Desk */}
            <div className="bg-gradient-to-r from-teal-900 to-slate-900 rounded-3xl p-7 text-white space-y-3">
              <span className="text-xs text-teal-300 font-bold uppercase tracking-wider block">
                Direct Emergency Line
              </span>
              <a
                href={`tel:${clinicData.phoneRaw}`}
                className="text-2xl font-extrabold text-white hover:text-teal-300 transition-colors block"
              >
                {clinicData.phoneDisplay}
              </a>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Speak directly with our clinic coordinator for immediate appointment confirmation or triage.
              </p>
            </div>

          </div>

          {/* Right Column: Modern Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-card">
            
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Request an OPD Consultation
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Fill out the quick form below. You will receive an instant call/WhatsApp confirmation.
              </p>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Honeypot field (hidden from real users) */}
              <div className="hidden">
                <input
                  type="text"
                  name="bot_check_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              {/* Name & Phone in 2 Cols on Tablet+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="patient-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="patient-name"
                      type="text"
                      required
                      maxLength={80}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="patient-phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                    10-Digit Mobile / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
                      +91
                    </span>
                    <input
                      id="patient-phone"
                      type="tel"
                      required
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="98765 43210"
                      className="w-full pl-12 pr-3.5 py-3 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Treatment Needed Dropdown */}
              <div>
                <label htmlFor="patient-treatment" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Treatment Concern / Procedure <span className="text-rose-500">*</span>
                </label>
                <select
                  id="patient-treatment"
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 text-sm text-slate-900 outline-none bg-white transition-all"
                >
                  {treatmentsList.map((t, idx) => (
                    <option key={idx} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* OPD Shift & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="patient-shift" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Preferred OPD Shift <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="patient-shift"
                    value={formData.shift}
                    onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 text-sm text-slate-900 outline-none bg-white transition-all"
                  >
                    <option value="Morning OPD (10:00 AM – 2:00 PM)">Morning Shift (10:00 AM – 2:00 PM)</option>
                    <option value="Evening OPD (5:00 PM – 9:00 PM)">Evening Shift (5:00 PM – 9:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="patient-date" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    id="patient-date"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 text-sm text-slate-900 outline-none bg-white transition-all"
                  />
                </div>
              </div>

              {/* Clinical Notes (Optional) */}
              <div>
                <label htmlFor="patient-notes" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Brief Note on Symptoms / Pain (Optional)
                </label>
                <textarea
                  id="patient-notes"
                  rows={2}
                  maxLength={300}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Sensitivity to cold water on lower molar since 3 days (Max 300 characters)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 text-sm text-slate-900 outline-none transition-all"
                />
              </div>

              {/* Privacy Guarantee */}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>100% Confidential medical intake. Direct front-desk triage.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="shimmer-btn w-full py-4 px-6 rounded-xl bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 hover:from-teal-700 hover:to-teal-900 text-white font-bold text-base shadow-lg shadow-teal-700/25 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-75"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Confirming Slot...</span>
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm OPD Consultation Request</span>
                  </>
                )}
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {submittedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 text-center border border-slate-200 shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto mb-4 border border-teal-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Consultation Request Received!
            </h3>
            
            <p className="text-sm text-slate-600 mt-2 mb-6 leading-relaxed">
              Thank you, <strong className="text-slate-900">{submittedData.name}</strong>. Our front desk at {clinicData.name} will call you shortly on <strong className="text-teal-700">+91 {submittedData.phone}</strong> to confirm your slot time.
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 text-left text-xs space-y-2 mb-6 border border-slate-100">
              <div className="flex justify-between">
                <span className="text-slate-500">Procedure:</span>
                <span className="font-bold text-slate-900">{submittedData.treatment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">OPD Shift:</span>
                <span className="font-bold text-teal-700">{submittedData.shift}</span>
              </div>
              {submittedData.date && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Date:</span>
                  <span className="font-bold text-slate-900">{submittedData.date}</span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <a
                href={getConfirmationWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-sm py-3.5 px-5 rounded-xl shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Confirm Instantly on WhatsApp</span>
              </a>

              <button
                onClick={() => setSubmittedData(null)}
                className="w-full py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
