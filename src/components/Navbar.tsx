import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (purpose?: string) => void;
  activeSection: string;
}

export default function Navbar({ onOpenConsultation, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor page scroll to activate high-end glassmorphism styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Properties', href: '#properties' },
    { name: 'Buy', href: '#properties?purpose=buy' },
    { name: 'Rent', href: '#properties?purpose=rent' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Enquiry', href: '#enquiry' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // If it's a sub-query like properties?purpose=buy
    const [id, query] = href.split('?');
    const targetElement = document.querySelector(id);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    if (query) {
      // Dispatch a custom event so the properties list knows to filter
      const purpose = query.split('=')[1];
      const event = new CustomEvent('filter-purpose', { detail: purpose });
      window.dispatchEvent(event);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-charcoal/5 py-3'
          : 'bg-transparent py-5 text-white'
      }`}
      id="main-header"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick('#home', e)}
            className="flex flex-col group"
            id="brand-logo"
          >
            <span className={`font-display text-xl md:text-2xl font-bold uppercase tracking-wider transition-colors ${
              isScrolled ? 'text-charcoal' : 'text-white'
            }`}>
              Urban<span className="text-gold">Nest</span>
            </span>
            <span className={`text-[9px] uppercase tracking-widest font-mono font-semibold -mt-1 block transition-colors ${
              isScrolled ? 'text-charcoal/50' : 'text-white/60'
            }`}>
              Realty Portfolio
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1.5" id="desktop-nav">
            {navLinks.map((link) => {
              const baseHref = link.href.split('?')[0];
              const isActive = activeSection === baseHref.replace('#', '');
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.href, e)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 ${
                    isScrolled
                      ? isActive
                        ? 'text-gold bg-light-grey'
                        : 'text-charcoal/70 hover:text-charcoal hover:bg-light-grey/60'
                      : isActive
                        ? 'text-gold bg-white/10'
                        : 'text-white/85 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            
            {/* Call Hotline (Desktop) */}
            <a
              href="tel:123456789"
              className={`hidden sm:flex items-center gap-1.5 text-xs font-semibold tracking-wider transition-colors ${
                isScrolled ? 'text-charcoal/70 hover:text-gold' : 'text-white/80 hover:text-beige'
              }`}
            >
              <Phone className="h-3.5 w-3.5 text-gold animate-pulse" />
              <span className="font-mono">123456789</span>
            </a>

            {/* Premium CTA Button */}
            <button
              onClick={() => onOpenConsultation()}
              className={`relative overflow-hidden rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md ${
                isScrolled
                  ? 'bg-charcoal text-white hover:bg-gold hover:shadow-lg'
                  : 'bg-white text-charcoal hover:bg-beige hover:shadow-lg'
              }`}
              id="schedule-nav-btn"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                Book Private Consultation
              </span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden rounded-lg p-2 transition-colors ${
                isScrolled ? 'text-charcoal hover:bg-light-grey' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
              id="hamburger-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Slide-out */}
      {isMobileMenuOpen && (
        <div className="lg:hidden" id="mobile-nav-drawer">
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-[60px] bg-charcoal/50 backdrop-blur-sm z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Drawer Panel */}
          <nav className="fixed top-[60px] right-0 left-0 bg-white border-b border-charcoal/10 shadow-xl py-6 px-6 z-40 space-y-3 flex flex-col">
            <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest block border-b border-charcoal/5 pb-1">
              Main Navigations
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.href, e)}
                className="py-1 text-sm font-semibold uppercase tracking-wider text-charcoal/80 hover:text-gold block"
              >
                {link.name}
              </a>
            ))}
            
            {/* Extra mobile drawer buttons */}
            <div className="pt-4 border-t border-charcoal/5 flex flex-col gap-3">
              <a
                href="tel:123456789"
                className="flex items-center gap-2 text-xs font-semibold text-charcoal/70"
              >
                <Phone className="h-4 w-4 text-gold" />
                <span className="font-mono">Direct Dial: 123456789</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
