import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Treatments } from './components/Treatments';
import { Sterilization } from './components/Sterilization';
import { DoctorProfile } from './components/DoctorProfile';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { Reviews } from './components/Reviews';
import { FAQSection } from './components/FAQSection';
import { AppointmentSection } from './components/AppointmentSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  useEffect(() => {
    // Progressive scroll reveal observer for motion layer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in-view');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    const elements = document.querySelectorAll('.motion-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-[100dvh] bg-dental-bg text-dental-ink flex flex-col font-sans">
      {/* Top Header & Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero: Statement, Essential Proof & Plinth */}
        <Hero />

        {/* 2. Specialized Clinical Procedures: The Specimen Catalogue */}
        <Treatments />

        {/* 3. Real Clinical Transformations (Before/After Comparative Slider) */}
        <BeforeAfterSlider />

        {/* 4. Hospital-Grade 4-Step European Class-B Sterilization */}
        <Sterilization />

        {/* 5. Meet the Chief Dental Surgeon & 1-on-1 Consultation */}
        <DoctorProfile />

        {/* 6. Verified Patient Proof & Overcoming Anxiety */}
        <Reviews />

        {/* 7. Split OPD Timings, Location & Direct Form Booking */}
        <AppointmentSection />

        {/* 8. Patient FAQs & Pricing/Hygiene Transparency */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Desktop WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
