import { ClinicConfig } from '../types';

export const clinicData: ClinicConfig = {
  // Brand & Basic Information (easily swappable)
  name: "Apex Dental & Implant Centre",
  tagline: "Painless, Precision Dentistry & Advanced Dental Implants",
  city: "Mumbai",
  locality: "Bandra West",
  fullAddress: "Shop 4, Ground Floor, Silver Crest Arcade, Near Hill Road Junction, Bandra West, Mumbai, Maharashtra 400050",
  landmark: "Opposite St. Peter's Church • Free Valet Parking • Ground Floor Wheelchair Accessible",
  
  // Contact Details
  phoneDisplay: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsappNumber: "919876543210",
  whatsappDefaultMsg: "Hi Doctor, I visited your website and would like to book a dental consultation.",
  email: "care@apexdentalmumbai.com",
  
  // OPD Timings (Split Indian Timings)
  opdHours: {
    morning: "10:00 AM – 2:00 PM",
    evening: "5:00 PM – 9:00 PM",
    workingDays: "Monday to Saturday",
    sundayEmergency: "Sunday Emergency & Prior Booking Only",
  },
  
  // Google Reviews & Trust Meta
  googleReviewsMeta: {
    rating: 4.9,
    reviewCount: 284,
    platform: "Google Verified Reviews",
    verifiedSmiles: "2,500+ Happy Smiles Restored",
  },
  
  // Chief Dental Surgeon Profile
  doctor: {
    name: "Dr. Ananya Mukherjee",
    degrees: "BDS, MDS (Oral Implantology & Aesthetic Dentistry)",
    speciality: "Chief Dental Surgeon & Certified Implant Specialist",
    experienceYears: "14+ Years Experience",
    designation: "Chief Dental Surgeon & Director",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    bio: [
      "Dr. Ananya Mukherjee is a renowned dental surgeon and implantologist committed to anxiety-free, gentle dentistry. With extensive postgraduate training in oral implantology and computer-guided surgical planning, she has successfully placed over 3,200 dental implants with a 98.7% long-term integration rate.",
      "She believes in complete pricing transparency, ethical treatment diagnosis, and taking the time to explain every radiograph and 3D CBCT scan to patients before initiating treatment."
    ],
    credentials: [
      "Fellow of the International Congress of Oral Implantologists (FICOI, USA)",
      "Pioneer in Computer-Guided Flapless Implant Surgery with Minimal Discomfort",
      "Specialized Rotary Endodontics for Painless Single-Sitting Root Canals",
      "Certified Digital Smile Design (DSD) & Clear Aligners Specialist",
      "Strict adherent to hospital-grade 4-tier sterilization protocols",
      "Transparent treatment estimates with zero hidden costs or unnecessary procedures"
    ]
  },
  
  // Form Endpoint (configured via VITE_WEB3FORMS_ACCESS_KEY in .env)
  web3FormsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY",
  
  // High-Margin Procedures
  treatments: [
    {
      id: "dental-implants",
      title: "Dental Implants",
      subtitle: "Permanent Lifetime Tooth Replacement",
      description: "Replace missing teeth permanently with biocompatible titanium & zirconia implants. Eat, speak, and laugh naturally with lifetime warranty options.",
      highlights: [
        "Swiss & German FDA-approved implants",
        "Computer-guided flapless keyhole placement",
        "Same-day temporary crown option available",
        "0% Interest EMI options from ₹2,999/mo"
      ],
      icon: "ShieldCheck",
      badge: "Lifetime Warranty Available",
      startingPrice: "EMI from ₹2,999/month"
    },
    {
      id: "clear-aligners",
      title: "Clear Aligners & Braces",
      subtitle: "Invisible Teeth Straightening",
      description: "Custom 3D-scanned invisible aligners and aesthetic ceramic braces for teenagers and working professionals without unsightly metal wires.",
      highlights: [
        "100% virtually invisible & removable",
        "No food restrictions or wire poke emergencies",
        "AI 3D digital simulation of results before starting",
        "Includes complimentary post-treatment retainers"
      ],
      icon: "Sparkles",
      badge: "3D Digital Smile Preview",
      startingPrice: "EMI from ₹3,499/month"
    },
    {
      id: "painless-rct",
      title: "Painless Single-Sitting RCT",
      subtitle: "Fast, Pain-Free Tooth Preservation",
      description: "Save deeply decayed or infected teeth in a single 45-minute sitting using advanced rotary endodontics, apex locators, and painless computerized anesthesia.",
      highlights: [
        "No multiple visits or painful needle pricks",
        "Digital apex locators for 99.8% precision",
        "Laser-assisted bacterial canal disinfection",
        "High-strength CAD/CAM porcelain crown fit"
      ],
      icon: "Zap",
      badge: "Done in 45 Minutes",
      startingPrice: "Single Sitting"
    },
    {
      id: "smile-makeover",
      title: "Smile Makeover & Veneers",
      subtitle: "Aesthetic Porcelain Veneers & Whitening",
      description: "Transform discolored, chipped, or uneven teeth with ultra-thin porcelain veneers, composite bonding, and in-office LED laser teeth whitening.",
      highlights: [
        "Custom shade matching to your facial tone",
        "Minimal tooth preparation with ultra-thin veneers",
        "Up to 8 shades lighter in 45 minutes whitening",
        "Long-lasting stain-resistant porcelain"
      ],
      icon: "Smile",
      badge: "Celebrity Smile Design",
      startingPrice: "Custom Aesthetic Plan"
    },
    {
      id: "crowns-bridges",
      title: "Crowns & Bridges",
      subtitle: "100% Metal-Free Zirconia Restorations",
      description: "Restore broken or damaged teeth with German CAD/CAM milled monolithic Zirconia crowns designed for unmatched chewing strength and lifelike translucency.",
      highlights: [
        "100% biocompatible, zero black gum margins",
        "Milled with 10-micron digital precision",
        "10 to 15-year clinic warranty certificate",
        "Natural translucency matching adjacent teeth"
      ],
      icon: "Gem",
      badge: "15-Year Warranty",
      startingPrice: "Digital CAD/CAM Milled"
    },
    {
      id: "pediatric-preventive",
      title: "Pediatric & Preventive Care",
      subtitle: "Gentle, Fear-Free Dental Care for Kids & Adults",
      description: "Gentle scaling, ultrasonic plaque removal, fluoride cavity-prevention therapies, and pit-and-fissure sealants in a warm, friendly atmosphere.",
      highlights: [
        "Compassionate, fear-free child dental protocols",
        "Ultrasonic scaling with zero enamel abrasion",
        "Fluoride varnishes preventing childhood caries",
        "Annual preventive dental wellness packages"
      ],
      icon: "HeartHandshake",
      badge: "Fear-Free Atmosphere",
      startingPrice: "Preventive Care"
    }
  ],
  
  // 4-Step Sterilization Protocol
  sterilizationSteps: [
    {
      step: 1,
      title: "Ultrasonic Cleaning & Bio-Disinfection",
      shortDesc: "Automated ultrasonic vibration removes microscopic debris followed by enzymatic soaking.",
      fullDesc: "All instruments immediately undergo 15 minutes of cavitation-based ultrasonic cleaning in medical-grade multi-enzyme solution that breaks down biological residues without surface damage.",
      protocolBadge: "Automated Cavitation",
      icon: "Waves"
    },
    {
      step: 2,
      title: "Individual Sterile Pouches with Chemical Indicators",
      shortDesc: "Sealed in puncture-resistant medical pouches and opened only in front of your eyes.",
      fullDesc: "Every instrument set is individually packaged into hospital-grade sterilization pouches with Class 4 internal & external chemical indicator strips that change color only when absolute sterility is achieved.",
      protocolBadge: "Opened In Front Of You",
      icon: "PackageCheck"
    },
    {
      step: 3,
      title: "Class-B Fractional Vacuum Autoclave",
      shortDesc: "High-pressure fractional steam at 134°C eradicates 100% of bacteria, viruses, and spores.",
      fullDesc: "We use European Class-B autoclaves featuring triple-pulse vacuum cycles. This forces superheated steam into even the hollow micro-channels of dental drills and handpieces, ensuring 0% cross-contamination.",
      protocolBadge: "European Class-B Standards",
      icon: "ShieldAlert"
    },
    {
      step: 4,
      title: "100% Disposable Single-Use Consumables",
      shortDesc: "Fresh gloves, masks, suction cannulas, glasses, and needles for every single patient.",
      fullDesc: "All contact items—including surgical gloves, 3-ply masks, saliva ejectors, patient bibs, injection needles, and barrier films—are discarded in bio-hazard bins immediately after every treatment session.",
      protocolBadge: "Zero Reuse Policy",
      icon: "Recycle"
    }
  ],
  
  // Interactive Smile Gallery Cases
  beforeAfterCases: [
    {
      id: "implants-case",
      title: "Full Arch Dental Implants & Zirconia Bridges",
      tag: "Dental Implants",
      description: "Restored chewing ability and smile aesthetics for a 54-year-old patient suffering from severe tooth loss and loose dentures.",
      beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      treatmentDuration: "Completed in 3 Visits"
    },
    {
      id: "aligners-case",
      title: "Clear Aligners Deep Bite & Crowding Correction",
      tag: "Clear Aligners",
      description: "Straightened severe lower crowding and closed front gaps without any metal braces for a 26-year-old corporate consultant.",
      beforeImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
      treatmentDuration: "Completed in 9 Months"
    }
  ],
  
  // Verified Google Reviews
  reviews: [
    {
      id: "review-1",
      author: "Pooja Merchant",
      location: "Bandra West, Mumbai",
      rating: 5,
      date: "3 weeks ago",
      treatmentTag: "Dental Implant Patient",
      comment: "I was petrified of dental work after a traumatic experience years ago. Dr. Ananya was exceptionally calm, thoroughly explained the 3D X-ray, and placed my molar implant completely painlessly! The clinic feels like an international hospital—spotless hygiene and zero hidden costs. Highly recommend Apex Dental!",
      verified: true,
      avatarBg: "bg-teal-600"
    },
    {
      id: "review-2",
      author: "Vikram Singhania",
      location: "Khar West, Mumbai",
      rating: 5,
      date: "1 month ago",
      treatmentTag: "Painless Root Canal & Zirconia Crown",
      comment: "Went in with agonizing toothache at 6 PM. Dr. Ananya completed the root canal in a single 45-minute sitting. I literally felt zero pain even during the local anesthesia! The custom Zirconia crown fits so naturally that I can't distinguish it from my original teeth. Worth every single rupee.",
      verified: true,
      avatarBg: "bg-emerald-600"
    },
    {
      id: "review-3",
      author: "Aditi S. Rao",
      location: "Santacruz, Mumbai",
      rating: 5,
      date: "2 months ago",
      treatmentTag: "Clear Aligners & Teeth Whitening",
      comment: "Got my clear aligners and laser whitening done here before my wedding. The digital 3D preview showed me the exact month-by-month results. Love the fact that instruments are opened from sealed sterile pouches right in front of you. The 0% EMI plan made payment effortless!",
      verified: true,
      avatarBg: "bg-indigo-600"
    }
  ],
  
  // Patient FAQs & Overcoming Dental Anxiety
  faqs: [
    {
      id: "faq-1",
      question: "Is root canal treatment (RCT) really painless at Apex Dental?",
      answer: "Yes, 100%. We utilize computerized local anesthesia delivery and modern digital rotary endodontics that numb the tooth deeply and eliminate the vibrating pressure associated with old dental drills. More than 95% of our patients report feeling no pain at all during or after the procedure.",
      category: "comfort"
    },
    {
      id: "faq-2",
      question: "How long do dental implants last and what warranty do you offer?",
      answer: "Dental implants are designed to be a permanent, lifetime tooth replacement solution. We use internationally recognized Swiss and German titanium systems that integrate directly into your jawbone. We provide manufacturer backed 10-year to lifetime warranties on the implant fixtures.",
      category: "procedures"
    },
    {
      id: "faq-3",
      question: "Are there any hidden costs? Can I pay in monthly installments (EMI)?",
      answer: "We maintain a strict zero-hidden-cost policy. Before any procedure begins, you receive a detailed printed treatment estimate itemizing all doctor fees, lab charges, and materials. We also offer 0% interest monthly EMI options through major credit cards and medical financing partners.",
      category: "pricing"
    },
    {
      id: "faq-4",
      question: "How do you guarantee clinic hygiene and prevent cross-infection?",
      answer: "We follow stringent European Class-B autoclave sterilization protocols. All instruments are ultrasonically cleaned, hermetically sealed in indicator pouches, sterilized at 134°C, and opened exclusively in front of the patient. All gloves, needles, cups, and suction tips are 100% single-use disposables.",
      category: "safety"
    },
    {
      id: "faq-5",
      question: "What are your OPD timings and do I need to book in advance?",
      answer: "Our OPD is open Monday to Saturday in two convenient shifts: Morning 10:00 AM – 2:00 PM and Evening 5:00 PM – 9:00 PM. While walk-ins with acute pain are always attended to promptly, prior booking via WhatsApp or our online form is recommended to ensure zero waiting time.",
      category: "procedures"
    }
  ]
};

// Helper to generate a direct WhatsApp click-to-chat URL with prefilled text
export const getWhatsAppLink = (customMessage?: string): string => {
  const message = customMessage || clinicData.whatsappDefaultMsg;
  return `https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

// Helper to generate a Treatment-specific WhatsApp cost inquiry URL
export const getTreatmentWhatsAppLink = (treatmentTitle: string): string => {
  const message = `Hi Doctor, I am interested in ${treatmentTitle} at Apex Dental & Implant Centre. Could you please share the procedure details, timeline, and estimated cost?`;
  return `https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

