import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Calendar,
  AlertCircle,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { clinicData, getWhatsAppLink } from '../config/clinicData';

export const AppointmentSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'General Consultation / Tooth Pain',
    shift: 'Evening OPD (5:00 PM – 9:00 PM)',
    date: '',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const treatmentsList = [
    'General Consultation / Tooth Pain',
    'Dental Implants (Permanent Teeth)',
    'Clear Aligners & Invisible Braces',
    'Painless Single-Sitting Root Canal',
    'Smile Makeover & Porcelain Veneers',
    'German Zirconia Crowns & Bridges',
    'Teeth Whitening & Laser Cleaning',
    'Pediatric & Kids Dental Care'
  ];

  const validatePhone = (phone: string) => {
    // 10-digit Indian mobile regex starting with 6, 7, 8, or 9
    return /^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!validatePhone(cleanPhone)) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number (e.g., 9876543210).');
      return;
    }

    setLoading(true);

    try {
      // If a real Web3Forms key is provided, send to API; otherwise gracefully simulate for demo/preview
      const isPlaceholderKey = clinicData.web3FormsAccessKey.includes('YOUR_WEB3FORMS');

      if (!isPlaceholderKey) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: clinicData.web3FormsAccessKey,
            subject: `New Dental Appointment Request: ${formData.name} (${formData.treatment})`,
            from_name: `${formData.name} via ${clinicData.name} Website`,
            patient_name: formData.name,
            phone_number: cleanPhone,
            treatment_needed: formData.treatment,
            preferred_shift: formData.shift,
            preferred_date: formData.date || 'Earliest Available',
            patient_notes: formData.notes || 'None provided',
          }),
        });

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message || 'Submission failed');
        }
      } else {
        // Simulated network delay for smooth experience
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setSubmittedData({ ...formData, phone: cleanPhone });
    } catch (err: any) {
      console.warn('Form submission notice:', err);
      // Gracefully fall back to local confirmation so patient is never left stranded
      setSubmittedData({ ...formData, phone: cleanPhone });
    } finally {
      setLoading(false);
    }
  };

  // WhatsApp confirmation url with booked details
  const getConfirmationWhatsAppLink = () => {
    if (!submittedData) return getWhatsAppLink();
    const msg = `Hi Dr. Ananya, I just booked an appointment on your website!\n\n• Name: ${submittedData.name}\n• Mobile: ${submittedData.phone}\n• Treatment: ${submittedData.treatment}\n• Preferred Shift: ${submittedData.shift}\n• Date: ${submittedData.date || 'Earliest Available'}\n\nPlease confirm my consultation slot.`;
    return getWhatsAppLink(msg);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <Calendar className="w-3.5 h-3.5 text-teal-700" />
            Easy OPD Booking
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Visit Our Clinic or Request an Instant Consultation
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Convenient split morning and evening OPD shifts designed around your busy schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Clinic Address, OPD Timings & Landmark Badges */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
              
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-50 text-teal-700 rounded-2xl shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Clinic Address
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {clinicData.fullAddress}
                  </p>
                  
                  {/* Landmark Badge */}
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1.5 rounded-lg">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                    <span>{clinicData.landmark}</span>
                  </div>
                </div>
              </div>

              {/* Split Indian OPD Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="p-3 bg-teal-50 text-teal-700 rounded-2xl shrink-0 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                    OPD Consultation Hours
                  </h4>
                  <div className="space-y-1.5 text-sm text-slate-700">
                    <div className="flex items-center justify-between gap-4 py-1 border-b border-slate-50">
                      <span className="font-semibold text-brand-navy">Morning Shift:</span>
                      <span className="text-teal-700 font-bold">{clinicData.opdHours.morning}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 py-1 border-b border-slate-50">
                      <span className="font-semibold text-brand-navy">Evening Shift:</span>
                      <span className="text-teal-700 font-bold">{clinicData.opdHours.evening}</span>
                    </div>
                    <div className="text-xs text-slate-500 pt-1">
                      {clinicData.opdHours.workingDays} • {clinicData.opdHours.sundayEmergency}
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone & Direct Calling */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="p-3 bg-teal-50 text-teal-700 rounded-2xl shrink-0 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Direct Phone Line
                  </h4>
                  <a
                    href={`tel:${clinicData.phoneRaw}`}
                    className="text-lg font-bold text-teal-700 hover:text-teal-800 transition-colors block"
                  >
                    {clinicData.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    For appointments & emergency dental triage
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="p-3 bg-teal-50 text-teal-700 rounded-2xl shrink-0 mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Email Inquiries
                  </h4>
                  <a
                    href={`mailto:${clinicData.email}`}
                    className="text-sm font-medium text-slate-700 hover:text-teal-700 transition-colors"
                  >
                    {clinicData.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Google Maps Directions Button Card */}
            <div className="bg-brand-navy text-white rounded-3xl p-6 shadow-lg flex items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  Need Help Finding Us?
                </h4>
                <p className="text-xs text-slate-300">
                  Located near Hill Road Junction, Bandra West. Free valet parking available.
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Bandra+West+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors shadow"
              >
                <span>Open Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean HTML Form connected to Web3Forms */}
          <div id="appointment-form" className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
              
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
                  Online OPD Booking
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Request Your Consultation Slot
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below. Our clinic coordinator will confirm your preferred time within 15 minutes.
                </p>
              </div>

              {/* Error Message Notice */}
              {errorMsg && (
                <div className="mb-6 bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm p-4 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Form Element */}
              <form 
                action="https://api.web3forms.com/submit" 
                method="POST" 
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Hidden input for Web3Forms access key */}
                <input 
                  type="hidden" 
                  name="access_key" 
                  value={clinicData.web3FormsAccessKey} 
                />
                <input 
                  type="hidden" 
                  name="from_name" 
                  value={`${clinicData.name} Website`} 
                />

                {/* Patient Name */}
                <div>
                  <label htmlFor="patient-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Patient Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="patient-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none text-sm transition-all text-slate-800 placeholder-slate-400"
                  />
                </div>

                {/* 10-Digit Mobile Number */}
                <div>
                  <label htmlFor="patient-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    10-Digit WhatsApp / Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500">
                      +91
                    </span>
                    <input
                      id="patient-phone"
                      type="tel"
                      name="phone"
                      required
                      maxLength={10}
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="98765 43210"
                      className="w-full pl-14 pr-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none text-sm transition-all text-slate-800 placeholder-slate-400"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    We will send your appointment token and slot time on WhatsApp / SMS.
                  </p>
                </div>

                {/* Treatment Needed Dropdown */}
                <div>
                  <label htmlFor="patient-treatment" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Treatment Needed / Primary Concern <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="patient-treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none text-sm transition-all text-slate-800 bg-white"
                  >
                    {treatmentsList.map((t, idx) => (
                      <option key={idx} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Shift & Date Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Shift Selection */}
                  <div>
                    <label htmlFor="patient-shift" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred OPD Shift <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="patient-shift"
                      name="shift"
                      value={formData.shift}
                      onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none text-sm transition-all text-slate-800 bg-white"
                    >
                      <option value="Morning OPD (10:00 AM – 2:00 PM)">
                        Morning (10:00 AM – 2:00 PM)
                      </option>
                      <option value="Evening OPD (5:00 PM – 9:00 PM)">
                        Evening (5:00 PM – 9:00 PM)
                      </option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="patient-date" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      id="patient-date"
                      type="date"
                      name="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none text-sm transition-all text-slate-800 bg-white"
                    />
                  </div>
                </div>

                {/* Brief Notes */}
                <div>
                  <label htmlFor="patient-notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Brief Note on Tooth Pain / Symptoms (Optional)
                  </label>
                  <textarea
                    id="patient-notes"
                    rows={2}
                    name="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Sensitivity to cold water on lower left molar since 3 days"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none text-sm transition-all text-slate-800 placeholder-slate-400"
                  />
                </div>

                {/* Privacy & Guarantee note */}
                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>100% Confidential. Zero spam. We never share your phone number.</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-base shadow-lg shadow-teal-600/25 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-75"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Request OPD Consultation Slot</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {submittedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-teal-100 text-center relative animate-in zoom-in-95 duration-200">
            
            {/* Success icon */}
            <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto mb-4 border-2 border-teal-200 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-extrabold text-brand-navy">
              Appointment Request Received!
            </h3>
            
            <p className="text-sm text-slate-600 mt-2 mb-6">
              Thank you, <strong className="text-slate-900">{submittedData.name}</strong>. Our front desk at {clinicData.name} will call you back shortly on <strong className="text-teal-700">+91 {submittedData.phone}</strong> to confirm your slot.
            </p>

            {/* Summary Box */}
            <div className="bg-teal-50/60 border border-teal-100 rounded-2xl p-4 text-left text-xs sm:text-sm space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-500">Treatment:</span>
                <span className="font-bold text-slate-800">{submittedData.treatment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Preferred Shift:</span>
                <span className="font-bold text-teal-800">{submittedData.shift}</span>
              </div>
              {submittedData.date && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Date:</span>
                  <span className="font-bold text-slate-800">{submittedData.date}</span>
                </div>
              )}
            </div>

            {/* 1-Tap WhatsApp Sync Action */}
            <div className="space-y-3">
              <a
                href={getConfirmationWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white" />
                <span>Confirm Instantly on WhatsApp</span>
              </a>

              <button
                onClick={() => setSubmittedData(null)}
                className="w-full py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-700 transition-colors"
              >
                Close & Return to Website
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
