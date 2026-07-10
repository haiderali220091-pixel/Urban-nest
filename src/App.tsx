import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchPanel from './components/SearchPanel';
import FeaturedProperties from './components/FeaturedProperties';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import EnquiryForm from './components/EnquiryForm';
import MeetOurTeam from './components/MeetOurTeam';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookConsultationModal from './components/BookConsultationModal';
import PropertyDetailModal from './components/PropertyDetailModal';

import { SearchFilters, Property } from './types';

export default function App() {
  // Global search parameters propagated to FeaturedProperties
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    location: '',
    type: 'all',
    purpose: 'all',
    budget: 'all',
    bedrooms: 'all',
    bathrooms: 'all',
    area: 'all'
  });

  // Modal display states
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPurpose, setBookingPurpose] = useState('Buy Property');

  // Currently viewed anchor section identifier
  const [activeSection, setActiveSection] = useState('home');

  // Interactive high-precision scroll monitoring
  useEffect(() => {
    const sections = ['home', 'properties', 'services', 'why-us', 'about', 'testimonials', 'enquiry', 'contact'];
    
    const handleSectionScroll = () => {
      const scrollPosition = window.scrollY + 180; // offset threshold
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleSectionScroll);
    return () => window.removeEventListener('scroll', handleSectionScroll);
  }, []);

  // Modal display actions
  const handleOpenConsultation = (purpose?: string) => {
    if (purpose) {
      setBookingPurpose(purpose);
    } else {
      setBookingPurpose('Buy Property');
    }
    setIsBookingModalOpen(true);
  };

  const handleOpenPropertyDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-soft-white font-sans text-charcoal selection:bg-gold selection:text-white" id="urbannest-app-root">
      
      {/* Sticky Navigation */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        activeSection={activeSection}
      />

      {/* Hero Visual Banner Section */}
      <Hero onOpenConsultation={handleOpenConsultation} />

      {/* Bento Search Hub Panel */}
      <SearchPanel onFilterChange={setSearchFilters} />

      {/* Featured Properties Showcase Grid */}
      <FeaturedProperties
        filters={searchFilters}
        onViewDetails={handleOpenPropertyDetails}
      />

      {/* Integrated Core Offerings Services */}
      <Services />

      {/* Corporate Statistics Metrics Ribbon */}
      <Stats />

      {/* Why Choose Us trust parameters */}
      <WhyChooseUs />

      {/* Editorial Corporate Background */}
      <AboutUs />

      {/* Testimonials Trust Carousel Slider */}
      <Testimonials />

      {/* Enquiry Capture Section */}
      <EnquiryForm />

      {/* Corporate Partners & Agents Section */}
      <MeetOurTeam />

      {/* FAQ Accordion Section */}
      <FAQ />

      {/* Contact Section & Coordinates Map */}
      <ContactSection />

      {/* Terminal Footer Document Section */}
      <Footer />

      {/* Interactive Portal Modals */}
      <BookConsultationModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialPurpose={bookingPurpose}
      />

      <PropertyDetailModal
        property={selectedProperty}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onBookConsultation={handleOpenConsultation}
      />

    </div>
  );
}
