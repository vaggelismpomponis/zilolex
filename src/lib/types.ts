export type Language = 'el' | 'en';

export type SectorType = 'tourism' | 'agriculture' | 'construction' | 'industry' | 'logistics' | 'other';

export interface SectorItem {
  id: SectorType;
  title: string;
  subtitle: string;
  description: string;
  roles: string[];
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration?: string;
  details: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  sector: SectorType;
  workersCount: string;
  message: string;
}
