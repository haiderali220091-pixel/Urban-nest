import { Property, Testimonial, Agent, Service, FAQ } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Grand Zenith Villa',
    location: 'Clifton, Block 4, Karachi',
    price: '$1,850,000',
    priceNumber: 1850000,
    bedrooms: 6,
    bathrooms: 7,
    area: '1,200 Sq Yds / 10,800 Sq Ft',
    areaValue: 10800,
    parking: 4,
    type: 'villa',
    purpose: 'buy',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    description: 'An architectural masterpiece of pure luxury. Features custom marble flooring, a temperature-controlled swimming pool, private gymnasium, and breathtaking coastal views.',
    features: ['Swimming Pool', 'Private Gym', 'Smart Home System', 'Servant Quarters', 'Landscaped Garden', 'High-Speed Elevators']
  },
  {
    id: 'prop-2',
    title: 'Skyline Luminary Penthouse',
    location: 'Downtown Dubai, UAE',
    price: '$3,400,000',
    priceNumber: 3400000,
    bedrooms: 4,
    bathrooms: 5,
    area: '5,500 Sq Ft',
    areaValue: 5500,
    parking: 3,
    type: 'penthouse',
    purpose: 'buy',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-exclusive high-rise penthouse featuring panoramic views of the Burj Khalifa. Direct private elevator entry, double-height ceilings, and a private sky terrace.',
    features: ['Burj Khalifa View', 'Private Elevator', 'Infinity Sky Pool', '24/7 Concierge', 'Valet Parking', 'Chef\'s Kitchen']
  },
  {
    id: 'prop-3',
    title: 'Vanguard Headquarters Tower',
    location: 'Knightsbridge, London, UK',
    price: '$12,500 / month',
    priceNumber: 12500,
    bedrooms: 0,
    bathrooms: 4,
    area: '4,200 Sq Ft',
    areaValue: 4200,
    parking: 6,
    type: 'office',
    purpose: 'rent',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'State-of-the-art commercial corporate office spaces in London\'s ultra-premium commercial hub. Open-plan floor plans, fiber-optic backbone, and premium conference facilities.',
    features: ['Fiber-Optic Internet', 'Executive Boardrooms', 'Central HVAC', 'Secure Underground Parking', 'Meeting Pods', 'Reception Desk']
  },
  {
    id: 'prop-4',
    title: 'Prestige Boulevard Retail Plaza',
    location: 'Gulberg III, Lahore',
    price: '$7,200 / month',
    priceNumber: 7200,
    bedrooms: 0,
    bathrooms: 2,
    area: '2,800 Sq Ft',
    areaValue: 2800,
    parking: 8,
    type: 'retail',
    purpose: 'rent',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    description: 'High-visibility dual-frontage retail shop located on a high-footfall luxury high street. Complete double-height ceiling, customized storefront displays, and full standby backup generator power.',
    features: ['Dual Frontage', 'Double Height Ceiling', 'Backup Power Generator', 'Central Security', 'HVAC Ready', 'Storage Mezzanine']
  },
  {
    id: 'prop-5',
    title: 'Serene Sanctuary Farmhouse',
    location: 'Bedford Estates, Toronto, CA',
    price: '$2,150,000',
    priceNumber: 2150000,
    bedrooms: 5,
    bathrooms: 6,
    area: '4 Acres / 174,240 Sq Ft',
    areaValue: 174240,
    parking: 10,
    type: 'farmhouse',
    purpose: 'buy',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    description: 'A sprawling private country sanctuary blending rustic wooden charm with ultra-modern luxury. Fully equipped equestrian stables, private orchard, freshwater pond, and designer guest cottage.',
    features: ['Equestrian Stables', 'Freshwater Pond', 'Fruit Orchard', 'Guest Guesthouse', 'Gourmet Kitchen', 'Security Fencing']
  },
  {
    id: 'prop-6',
    title: 'Elysian Heights Apartment',
    location: 'West Vancouver, British Columbia, CA',
    price: '$4,500 / month',
    priceNumber: 4500,
    bedrooms: 3,
    bathrooms: 3,
    area: '2,100 Sq Ft',
    areaValue: 2100,
    parking: 2,
    type: 'apartment',
    purpose: 'rent',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    description: 'Stunning luxury high-rise residence featuring floor-to-ceiling double-glazed windows, private heated balcony, premium smart home appliances, and spa-grade resident amenities.',
    features: ['Floor-to-Ceiling Windows', 'Heated Balcony', 'Resident Wellness Spa', 'Fitness Studio', 'Allocated Tesla Charging', 'Storage Unit']
  },
  {
    id: 'prop-7',
    title: 'Contemporary Urban Townhouse',
    location: 'DHA Phase 6, Lahore',
    price: '$650,000',
    priceNumber: 650000,
    bedrooms: 4,
    bathrooms: 4,
    area: '10 Marla / 2,700 Sq Ft',
    areaValue: 2700,
    parking: 2,
    type: 'townhouse',
    purpose: 'buy',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    description: 'Stylishly designed modern triplex townhouse. Includes private terrace lounges, customizable basement home theater, fully imported Italian kitchen, and eco-friendly smart fittings.',
    features: ['Rooftop Terrace', 'Italian Fitted Kitchen', 'Home Theater Basement', 'Eco-Solar Integration', 'Double Car Garage', 'Secure Gated Society']
  },
  {
    id: 'prop-8',
    title: 'Pacific Horizon Vacation Estate',
    location: 'Malibu, California, USA',
    price: '$5,900,000',
    priceNumber: 5900000,
    bedrooms: 5,
    bathrooms: 6,
    area: '6,800 Sq Ft',
    areaValue: 6800,
    parking: 4,
    type: 'vacation',
    purpose: 'buy',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    description: 'An elite beachfront oasis with private gated access directly to the sand. Features infinity-edge saltwater ocean pool, open-concept design, and a fully automated custom glass facade.',
    features: ['Direct Beach Access', 'Infinity Saltwater Pool', 'Outdoor Kitchen', 'Retractable Glass Walls', 'Steam Room', 'Wine Cellar']
  },
  {
    id: 'prop-9',
    title: 'Elite Crest Heights Plot',
    location: 'Sector E-11, Islamabad',
    price: '$890,000',
    priceNumber: 890000,
    bedrooms: 0,
    bathrooms: 0,
    area: '2 Kanal / 9,000 Sq Ft',
    areaValue: 9000,
    parking: 0,
    type: 'plot',
    purpose: 'buy',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    description: 'Premier elevated residential corner plot with direct panoramic Margalla Hills vistas. Fully cleared, legal-possession registered, and ready for immediate architectural development.',
    features: ['Margalla Hills View', 'Elevated Corner Plot', 'Immediate Possession', 'LDA/Capital Approved', 'Wide 60ft Boulevard', 'All Utilities Paid']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Thompson',
    location: 'London, United Kingdom',
    role: 'International Property Investor',
    quote: 'UrbanNest Realty provided an absolutely flawless, transparent international transaction. Their team handled everything from legal due diligence to tenant matching with unmatched professionalism and clear, regular communication.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'test-2',
    name: 'Ahmed Khan',
    location: 'Karachi, Pakistan',
    role: 'Entrepreneur & Homeowner',
    quote: 'The level of care, respect, and market insight I received while searching for our family villa was stellar. No hidden surprises, full legal documentation assistance, and an extremely friendly, client-first approach.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'test-3',
    name: 'David Wilson',
    location: 'Toronto, Canada',
    role: 'Commercial Fund Manager',
    quote: 'Relocating our regional headquarters was a massive undertaking, but UrbanNest matched us with an exceptional high-rise office building within days. Their negotiation skills and commercial real estate expertise saved us both time and capital.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'test-4',
    name: 'Fatima Ali',
    location: 'Lahore, Pakistan',
    role: 'Real Estate Developer',
    quote: 'I have worked with multiple brokers, but the transparency and strict listing verification standards of UrbanNest set them completely apart. Every single property they showcased was authentic and thoroughly vetted.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534751516642-a131fed10495?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'test-5',
    name: 'Michael Carter',
    location: 'Los Angeles, USA',
    role: 'Luxury Home Buyer',
    quote: 'I bought my vacation estate through them, and the experience was premium from start to finish. Their attention to detail, secure transaction structures, and elite localized support are truly top-tier.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'test-6',
    name: 'Ayesha Malik',
    location: 'Dubai, UAE',
    role: 'Portfolio Asset Manager',
    quote: 'Their investment consulting services are highly analytical. They don\'t just sell properties; they provide comprehensive market growth patterns, high-yielding options, and premium asset management advice.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80'
  }
];

export const AGENTS: Agent[] = [
  {
    id: 'agent-1',
    name: 'Alexander Sterling',
    position: 'Chief Executive & Principal Partner',
    experience: '15+ Years Luxury Market Experience',
    phone: '+1 (555) 019-2831',
    email: 'sterling@urbannestrealty.com',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 'agent-2',
    name: 'Zainab Qureshi',
    position: 'Director of International Portfolios',
    experience: '10+ Years Cross-Border Advisory',
    phone: '+92 (300) 555-0192',
    email: 'zainab@urbannestrealty.com',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    socials: {
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    id: 'agent-3',
    name: 'Marcus Vance',
    position: 'Senior VP Commercial & Retail Properties',
    experience: '12+ Years Commercial Brokering',
    phone: '+44 (20) 7946 0192',
    email: 'marcus@urbannestrealty.com',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    socials: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 'agent-4',
    name: 'Mariam Al-Mansoori',
    position: 'Executive Director (GCC Region)',
    experience: '8+ Years Premium UAE Market',
    phone: '+971 (50) 555-2831',
    email: 'mariam@urbannestrealty.com',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    socials: {
      linkedin: '#',
      instagram: '#'
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: 'serv-1',
    title: 'Buying Assistance',
    description: 'Bespoke end-to-end guidance to find, negotiate, and acquire premium properties matching your exact specifications.',
    icon: 'Search'
  },
  {
    id: 'serv-2',
    title: 'Property Selling',
    description: 'High-end target marketing, high-definition styling, and extensive active investor networks to sell your property at premium valuations.',
    icon: 'TrendingUp'
  },
  {
    id: 'serv-3',
    title: 'Rental Services',
    description: 'Connecting tenants and institutional owners through premium listings, rigorous credit screenings, and seamless lease drafting.',
    icon: 'Key'
  },
  {
    id: 'serv-4',
    title: 'Commercial Real Estate',
    description: 'Expert consultation and acquisition solutions for premium Grade-A corporate offices, retail hubs, and industrial warehouses.',
    icon: 'Building2'
  },
  {
    id: 'serv-5',
    title: 'Investment Consulting',
    description: 'Tailored, data-driven real estate advisory offering yield projection models, asset allocation, and market growth forecasts.',
    icon: 'BarChart3'
  },
  {
    id: 'serv-6',
    title: 'Property Valuation',
    description: 'Rigorous comparative market assessments, physical property audits, and certified asset valuation reports.',
    icon: 'ShieldCheck'
  },
  {
    id: 'serv-7',
    title: 'Legal Documentation',
    description: 'Comprehensive title deed verification, escrow handling, registry updates, and cross-border investment compliance.',
    icon: 'FileText'
  },
  {
    id: 'serv-8',
    title: 'Mortgage Assistance',
    description: 'Strategic integrations with top global and local banking institutions to secure pre-approvals and competitive financing packages.',
    icon: 'DollarSign'
  },
  {
    id: 'serv-9',
    title: 'Property Management',
    description: 'Full-service post-acquisition management, including monthly rental collection, maintenance upkeep, and quarterly audits.',
    icon: 'Settings'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How do I schedule a property visit?',
    answer: 'You can schedule a private, physically guided or virtual property tour by clicking "View Details" on your desired listing or via our "Book Consultation" portal. Alternatively, you can click our direct WhatsApp, Email, or Call buttons in the contact section to get matched with the designated exclusive listing agent within minutes.'
  },
  {
    id: 'faq-2',
    question: 'How do I list my property with UrbanNest Realty?',
    answer: 'To list your property, submit our professional Enquiry Form with the purpose set to "Sell Property" or "Rent Property", detailing the type and location. Our listing managers will contact you within 24 hours to arrange an expert physical valuation, professional media shoot, and verified registry onboarding.'
  },
  {
    id: 'faq-3',
    question: 'Are all your property listings legally verified?',
    answer: 'Yes, absolutely. Integrity is our core pillar. Every single property represented on our platform undergoes rigorous multi-layer background verification. We inspect the original registry deeds, confirm land ownership history, and check regulatory approvals (such as LDA, CDA, or local municipal authorities) before going live.'
  },
  {
    id: 'faq-4',
    question: 'Can international buyers safely invest in these properties?',
    answer: 'Yes, we specialize in cross-border property investments for Overseas clients and international funds. We offer specialized legal assistance, secure escrow accounts, digital remote signing (DocuSign), and complete advice regarding local taxation, legal repatriation of capital, and property power of attorney.'
  },
  {
    id: 'faq-5',
    question: 'Do you assist with the full legal transfer documentation?',
    answer: 'We provide full end-to-end legal support. Our in-house legal experts compile registry deeds, obtain tax clearance certificates, manage public registry transfers, draft binding contracts, and oversee secure financial escrow transactions to guarantee maximum peace of mind.'
  },
  {
    id: 'faq-6',
    question: 'Do you provide long-term rental or property management?',
    answer: 'Yes, we offer comprehensive post-purchase Property Management services. This includes preparing properties, finding qualified vetted tenants, rent collection, routine physical maintenance coordination, and legal lease renewal management, ensuring a highly passive and stable rental yield for investors.'
  }
];
