import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  AlertCircle,
  MessageCircle
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

  const [honeypot, setHoneypot] = useState('');
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
    return /^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    // 1. Anti-bot honeypot check (silently drop bot submissions)
    if (honeypot) {
      console.warn('Bot submission rejected via honeypot');
      setSubmittedData({ ...formData, phone: '9876543210' });
      return;
    }

    // 2. Client-side Rate Limiting / Submission Cooldown (60 seconds)
    const lastSubmitTime = sessionStorage.getItem('apex_last_appointment_submit');
    if (lastSubmitTime && Date.now() - Number(lastSubmitTime) < 60000) {
      const waitSecs = Math.ceil((60000 - (Date.now() - Number(lastSubmitTime))) / 1000);
      setErrorMsg(`Please wait ${waitSecs} seconds before submitting another request, or contact us directly on WhatsApp.`);
      return;
    }

    // 3. Strict Input Length & Sanitization Checks
    const trimmedName = formData.name.trim().slice(0, 80);
    if (trimmedName.length < 2) {
      setErrorMsg('Please enter your full name (minimum 2 characters).');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!validatePhone(cleanPhone)) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number (e.g., 9876543210).');
      return;
    }

    const sanitizedNotes = formData.notes.trim().slice(0, 300);
    const safeTreatment = treatmentsList.includes(formData.treatment)
      ? formData.treatment
      : treatmentsList[0];

    setLoading(true);

    try {
      const isPlaceholderKey = !clinicData.web3FormsAccessKey || 
        clinicData.web3FormsAccessKey.includes('YOUR_WEB3FORMS');

      if (!isPlaceholderKey) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: clinicData.web3FormsAccessKey,
            subject: `New Dental Appointment Request: ${trimmedName} (${safeTreatment})`,
            from_name: `${trimmedName} via ${clinicData.name} Website`,
            patient_name: trimmedName,
            phone_number: cleanPhone,
            treatment_needed: safeTreatment,
            preferred_shift: formData.shift,
            preferred_date: formData.date || 'Earliest Available',
            patient_notes: sanitizedNotes || 'None provided',
          }),
        });

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message || 'Submission failed');
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      sessionStorage.setItem('apex_last_appointment_submit', Date.now().toString());
      setSubmittedData({
        ...formData,
        name: trimmedName,
        phone: cleanPhone,
        treatment: safeTreatment,
        notes: sanitizedNotes,
      });
    } catch (err: any) {
      console.error('Form submission failed:', err);
      setErrorMsg(
        'We could not transmit your request over the internet right now. Please tap "Book on WhatsApp" below or call our clinic directly.'
      );
    } finally {
      setLoading(false);
    }
  };

  const getConfirmationWhatsAppLink = () => {
    if (!submittedData) return getWhatsAppLink();
    const msg = `Hi Dr. Ananya, I just booked an appointment on your website!\n\n• Name: ${submittedData.name}\n• Mobile: ${submittedData.phone}\n• Treatment: ${submittedData.treatment}\n• Preferred Shift: ${submittedData.shift}\n• Date: ${submittedData.date || 'Earliest Available'}\n\nPlease confirm my consultation slot.`;
    return getWhatsAppLink(msg);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-dental-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dental-ink tracking-tight">
            OPD Timings & Consultation Booking
          </h2>
          <p className="mt-3 text-base text-dental-muted leading-relaxed">
            Convenient split morning and evening OPD shifts in Bandra West designed around your workday.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, OPD Shifts & Phone */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-tile p-6 sm:p-8 space-y-6">
              
              {/* Address Block */}
              <div>
                <h4 className="text-sm font-bold text-dental-ink mb-1">
                  Clinic Location
                </h4>
                <p className="text-sm text-dental-muted leading-relaxed">
                  {clinicData.fullAddress}
                </p>
                <p className="text-[13px] text-dental-accent font-semibold mt-1">
                  {clinicData.landmark}
                </p>
                <div className="mt-3">
                  <a
                    href="https://maps.google.com/?q=Bandra+West+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-dental-ink hover:text-dental-accent transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Split OPD Hours */}
              <div className="pt-2">
                <h4 className="text-sm font-bold text-dental-ink mb-2">
                  OPD Shifts (Monday to Saturday)
                </h4>
                <div className="space-y-1.5 text-[13px] bg-dental-surface p-3.5 rounded-lg">
                  <div className="flex justify-between py-0.5">
                    <span className="font-semibold text-dental-ink">Morning Shift:</span>
                    <span className="text-dental-accent font-bold">{clinicData.opdHours.morning}</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="font-semibold text-dental-ink">Evening Shift:</span>
                    <span className="text-dental-accent font-bold">{clinicData.opdHours.evening}</span>
                  </div>
                  <p className="text-[13px] text-dental-ink pt-1">
                    {clinicData.opdHours.sundayEmergency}
                  </p>
                </div>
              </div>

              {/* Phone Line */}
              <div className="pt-2">
                <h4 className="text-sm font-bold text-dental-ink mb-1">
                  Direct Phone Desk
                </h4>
                <a
                  href={`tel:${clinicData.phoneRaw}`}
                  className="text-base font-bold text-dental-accent hover:underline block"
                >
                  {clinicData.phoneDisplay}
                </a>
                <p className="text-[13px] text-dental-ink mt-0.5">
                  Appointments & acute dental pain triage
                </p>
              </div>

              {/* Email Line */}
              <div className="pt-2">
                <h4 className="text-sm font-bold text-dental-ink mb-1">
                  Email
                </h4>
                <a
                  href={`mailto:${clinicData.email}`}
                  className="text-[13px] text-dental-ink hover:underline"
                >
                  {clinicData.email}
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div id="appointment-form" className="lg:col-span-7">
            <div className="bg-white rounded-tile p-6 sm:p-8">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dental-ink">
                  Request an OPD Consultation Slot
                </h3>
                <p className="text-[13px] text-dental-ink mt-1">
                  Fill in your details. Our clinic coordinator will confirm your exact slot within 15 minutes.
                </p>
              </div>

              {/* Error Notice with Fallback */}
              {errorMsg && (
                <div className="mb-6 bg-rose-50 text-rose-700 text-sm p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{errorMsg}</span>
                  </div>
                  <a
                    href={getWhatsAppLink("Hi Dr. Ananya, I was trying to request an appointment on your website and would like to book directly.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 bg-[#25D366] text-slate-950 font-bold text-xs px-3.5 py-1.5 rounded transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              )}

              {/* Form Element */}
              <form 
                data-ui="true"
                action="https://api.web3forms.com/submit" 
                method="POST" 
                onSubmit={handleSubmit}
                className="space-y-4"
              >
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

                {/* Anti-spam Honeypot field */}
                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                  <label htmlFor="hp-field">Leave blank</label>
                  <input
                    id="hp-field"
                    type="text"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="patient-name" className="block text-[13px] font-semibold text-dental-ink mb-1">
                    Patient Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="patient-name"
                    type="text"
                    name="name"
                    required
                    maxLength={80}
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-dental-border focus:border-dental-accent text-sm text-dental-ink outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="patient-phone" className="block text-[13px] font-semibold text-dental-ink mb-1">
                    10-Digit Mobile / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-semibold text-dental-ink">
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
                      className="w-full pl-12 pr-3.5 py-2.5 rounded-lg border border-dental-border focus:border-dental-accent text-sm text-dental-ink outline-none"
                    />
                  </div>
                </div>

                {/* Treatment Dropdown */}
                <div>
                  <label htmlFor="patient-treatment" className="block text-[13px] font-semibold text-dental-ink mb-1">
                    Treatment Needed / Primary Concern <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="patient-treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-dental-border focus:border-dental-accent text-sm text-dental-ink outline-none bg-white"
                  >
                    {treatmentsList.map((t, idx) => (
                      <option key={idx} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Shift & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="patient-shift" className="block text-[13px] font-semibold text-dental-ink mb-1">
                      Preferred OPD Shift <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="patient-shift"
                      name="shift"
                      value={formData.shift}
                      onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-dental-border focus:border-dental-accent text-sm text-dental-ink outline-none bg-white"
                    >
                      <option value="Morning OPD (10:00 AM – 2:00 PM)">
                        Morning Shift (10:00 AM – 2:00 PM)
                      </option>
                      <option value="Evening OPD (5:00 PM – 9:00 PM)">
                        Evening Shift (5:00 PM – 9:00 PM)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="patient-date" className="block text-[13px] font-semibold text-dental-ink mb-1">
                      Preferred Date
                    </label>
                    <input
                      id="patient-date"
                      type="date"
                      name="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-dental-border focus:border-dental-accent text-sm text-dental-ink outline-none bg-white"
                    />
                  </div>
                </div>

                {/* Clinical Notes */}
                <div>
                  <label htmlFor="patient-notes" className="block text-[13px] font-semibold text-dental-ink mb-1">
                    Brief Note on Symptoms / Pain (Optional)
                  </label>
                  <textarea
                    id="patient-notes"
                    rows={2}
                    name="notes"
                    maxLength={300}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Sensitivity to cold water on lower left molar since 3 days (Max 300 characters)"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-dental-border focus:border-dental-accent text-sm text-dental-ink outline-none"
                  />
                </div>

                {/* Privacy note */}
                <div className="flex items-center gap-1.5 text-[13px] text-dental-ink pt-1">
                  <ShieldCheck className="w-4 h-4 text-dental-accent shrink-0" />
                  <span>100% Confidential. Never shared. Direct front-desk confirmation.</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-lg bg-dental-accent hover:bg-dental-accentHover text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {loading ? (
                    <div data-ui="true" className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dental-dark/70">
          <div className="bg-white rounded-tile max-w-lg w-full p-6 sm:p-8 text-center border border-dental-border">
            
            <div className="w-12 h-12 rounded-full bg-dental-accentLight text-dental-accent flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-dental-ink">
              Appointment Request Received
            </h3>
            
            <p className="text-sm sm:text-base text-dental-ink mt-2 mb-6 leading-relaxed">
              Thank you, <strong className="text-dental-ink">{submittedData.name}</strong>. Our front desk at {clinicData.name} will call you shortly on <strong className="text-dental-accent">+91 {submittedData.phone}</strong> to confirm your slot time.
            </p>

            {/* Summary */}
            <div className="bg-dental-surface rounded-lg p-4 text-left text-sm space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-dental-muted">Procedure:</span>
                <span className="font-semibold text-dental-ink">{submittedData.treatment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dental-muted">OPD Shift:</span>
                <span className="font-semibold text-dental-accent">{submittedData.shift}</span>
              </div>
              {submittedData.date && (
                <div className="flex justify-between">
                  <span className="text-dental-muted">Date:</span>
                  <span className="font-semibold text-dental-ink">{submittedData.date}</span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <a
                href={getConfirmationWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-sm py-3 px-5 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Confirm Instantly on WhatsApp</span>
              </a>

              <button
                onClick={() => setSubmittedData(null)}
                className="w-full py-2 text-[13px] font-semibold text-dental-ink hover:underline transition-colors"
              >
                Close & Return
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
