export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  priceNumber: number;
  bedrooms: number;
  bathrooms: number;
  area: string;
  areaValue: number; // raw value for comparisons
  parking: number;
  type: 'villa' | 'apartment' | 'office' | 'farmhouse' | 'penthouse' | 'retail' | 'townhouse' | 'plot' | 'vacation';
  purpose: 'buy' | 'rent';
  image: string;
  description: string;
  features: string[];
}

export interface Agent {
  id: string;
  name: string;
  position: string;
  experience: string;
  phone: string;
  email: string;
  photo: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface SearchFilters {
  location: string;
  type: string;
  purpose: 'all' | 'buy' | 'rent';
  budget: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
}
