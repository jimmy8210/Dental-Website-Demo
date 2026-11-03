import React from 'react';
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
import { MobileStickyBar } from './components/MobileStickyBar';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans pb-16 md:pb-0">
      {/* Top Header & Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. High-Margin Treatments 6-Card Grid */}
        <Treatments />

        {/* 3. Hospital-Grade 4-Step Sterilization */}
        <Sterilization />

        {/* 4. Meet the Chief Dental Surgeon */}
        <DoctorProfile />

        {/* 5. Interactive Smile Gallery Before/After Slider */}
        <BeforeAfterSlider />

        {/* 6. Verified Google Reviews */}
        <Reviews />

        {/* 7. Patient FAQs & Dental Anxiety Assurance */}
        <FAQSection />

        {/* 8. OPD Timings, Location & Instant Web3Forms Booking */}
        <AppointmentSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Conversion Boosters */}
      <FloatingWhatsApp />
      <MobileStickyBar />
    </div>
  );
};

export default App;

