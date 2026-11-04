export type Language = 'el' | 'en';

export type AudienceType = 'employer' | 'agency' | 'student' | 'institution' | 'candidate';

export type SectorType = 'construction_industry' | 'tourism_hospitality' | 'other';

export interface SectorItem {
  id: SectorType;
  title: string;
  subtitle: string;
  description: string;
  roles: string[];
  focus: string[];
  ctaText: string;
  ctaHref: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  points: string[];
  ctaText: string;
  ctaHref: string;
  note?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ResponsibilityRow {
  action: string;
  zilolex: string;
  employer: string;
  worker: string;
  authorities: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GuideItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
}

export interface ContactFormData {
  audience: AudienceType;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  sector: string;
  workersCount: string;
  startDate: string;
  housing: 'yes' | 'no' | 'discuss';
  message: string;
  gdprConsent: boolean;
}
