export interface TreatmentItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: string;
  badge?: string;
  startingPrice?: string;
}

export interface SterilizationStep {
  step: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  protocolBadge: string;
  icon: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  treatmentTag: string;
  comment: string;
  verified: boolean;
  avatarBg: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'safety' | 'pricing' | 'comfort' | 'procedures';
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  tag: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  treatmentDuration: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export interface ClinicConfig {
  name: string;
  tagline: string;
  city: string;
  locality: string;
  fullAddress: string;
  landmark: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappDefaultMsg: string;
  email: string;
  opdHours: {
    morning: string;
    evening: string;
    workingDays: string;
    sundayEmergency: string;
  };
  googleReviewsMeta: {
    rating: number;
    reviewCount: number;
    platform: string;
    verifiedSmiles: string;
  };
  doctor: {
    name: string;
    degrees: string;
    speciality: string;
    experienceYears: string;
    designation: string;
    bio: string[];
    credentials: string[];
    image: string;
  };
  web3FormsAccessKey: string;
  treatments: TreatmentItem[];
  sterilizationSteps: SterilizationStep[];
  beforeAfterCases: BeforeAfterCase[];
  reviews: GoogleReview[];
  faqs: FAQItem[];
}

