import { Property } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, Bed, Bath, Maximize2, Car, MapPin, Tag, Shield, Calendar, Phone, Mail } from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: (purpose: string) => void;
}

export default function PropertyDetailModal({ property, isOpen, onClose, onBookConsultation }: PropertyDetailModalProps) {
  if (!property) return null;

  const handleBookUnit = () => {
    onClose();
    onBookConsultation(`Buy Unit: ${property.title}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-md"
            id="detail-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl md:max-w-4xl max-h-[90vh] flex flex-col"
            id="property-detail-modal-content"
          >
            {/* Top gold accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-beige via-gold to-beige" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 rounded-full bg-charcoal/40 p-2 text-white hover:bg-charcoal/80 transition-all"
              aria-label="Close modal"
              id="close-detail-modal-btn"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Scrollable Body Container */}
            <div className="overflow-y-auto flex-1">
              {/* Feature Hero Image */}
              <div className="relative h-64 w-full md:h-96">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                
                {/* Float Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="rounded bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
                    {property.purpose === 'buy' ? 'For Sale' : 'For Rent'}
                  </span>
                  <span className="rounded bg-charcoal/95 border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
                    {property.type}
                  </span>
                </div>

                {/* Price and Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                    <div>
                      <span className="text-xs font-semibold text-beige tracking-widest uppercase">
                        Exclusive Premium Listing
                      </span>
                      <h2 className="font-display text-2xl font-bold md:text-3.5xl tracking-tight mt-1 leading-tight">
                        {property.title}
                      </h2>
                      <p className="flex items-center text-sm text-white/80 mt-2">
                        <MapPin className="h-4 w-4 mr-1 text-gold" />
                        {property.location}
                      </p>
                    </div>
                    <div className="text-left md:text-right mt-2 md:mt-0">
                      <span className="text-xs text-white/60 block font-medium uppercase tracking-wider">
                        Listing Value
                      </span>
                      <p className="font-display text-2xl md:text-3.5xl font-semibold text-gold leading-none">
                        {property.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detail Content Section */}
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left/Middle: Specs, description, amenities */}
                <div className="md:col-span-2 space-y-6">
                  {/* Grid Specs */}
                  <div className="grid grid-cols-4 gap-2 bg-light-grey rounded-xl p-4 border border-charcoal/5">
                    {property.bedrooms > 0 && (
                      <div className="text-center">
                        <Bed className="h-5 w-5 mx-auto text-gold mb-1" />
                        <span className="block text-xs text-charcoal/60 font-semibold uppercase tracking-wider">Beds</span>
                        <span className="font-display text-sm font-semibold text-charcoal">{property.bedrooms} Units</span>
                      </div>
                    )}
                    {property.bathrooms > 0 && (
                      <div className="text-center">
                        <Bath className="h-5 w-5 mx-auto text-gold mb-1" />
                        <span className="block text-xs text-charcoal/60 font-semibold uppercase tracking-wider">Baths</span>
                        <span className="font-display text-sm font-semibold text-charcoal">{property.bathrooms} Units</span>
                      </div>
                    )}
                    <div className="text-center col-span-2 sm:col-span-1">
                      <Maximize2 className="h-5 w-5 mx-auto text-gold mb-1" />
                      <span className="block text-xs text-charcoal/60 font-semibold uppercase tracking-wider">Total Area</span>
                      <span className="font-display text-sm font-semibold text-charcoal truncate block">{property.area.split('/')[0]}</span>
                    </div>
                    {property.parking > 0 && (
                      <div className="text-center">
                        <Car className="h-5 w-5 mx-auto text-gold mb-1" />
                        <span className="block text-xs text-charcoal/60 font-semibold uppercase tracking-wider">Parking</span>
                        <span className="font-display text-sm font-semibold text-charcoal">{property.parking} Slots</span>
                      </div>
                    )}
                  </div>

                  {/* About the Property */}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-charcoal tracking-tight border-b border-charcoal/10 pb-2 mb-3">
                      About This Premium Unit
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal/70">
                      {property.description}
                    </p>
                  </div>

                  {/* Premium Highlights Checklist */}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-charcoal tracking-tight border-b border-charcoal/10 pb-2 mb-3">
                      Core Amenities & Highlights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {property.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="rounded-full bg-gold/15 p-0.5 text-gold">
                            <Shield className="h-3.5 w-3.5 fill-gold/10" />
                          </div>
                          <span className="text-xs font-medium text-charcoal/85">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Listing Agent & Call-to-Actions */}
                <div className="space-y-6">
                  {/* Lead Card */}
                  <div className="rounded-xl border border-charcoal/10 bg-soft-white p-5 shadow-sm space-y-4">
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-charcoal">
                      Inquire About This Unit
                    </h4>
                    
                    {/* Tiny Agent Profile */}
                    <div className="flex items-center gap-3 border-b border-charcoal/5 pb-3">
                      <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
                        alt="Adviser Profile"
                        className="h-10 w-10 rounded-full object-cover border border-gold/40"
                      />
                      <div>
                        <p className="text-xs font-semibold text-charcoal">Alexander Sterling</p>
                        <p className="text-[10px] uppercase tracking-wider text-gold font-medium">Principal Listing Partner</p>
                      </div>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <p className="text-charcoal/60 leading-normal">
                        Schedule an exclusive guided showcase or private consultation for this property.
                      </p>
                      <div className="rounded bg-light-grey p-2.5 text-[11px] text-charcoal/80 border-l-2 border-gold font-mono space-y-0.5">
                        <p>ID: <strong>UNN-{property.id.toUpperCase()}</strong></p>
                        <p>STATUS: <strong>VERIFIED LISTING</strong></p>
                      </div>
                    </div>

                    {/* Quick Call CTAs */}
                    <button
                      onClick={handleBookUnit}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-charcoal py-2.5 text-center text-xs font-bold text-white transition-all hover:bg-gold"
                    >
                      <Calendar className="h-4 w-4" />
                      Book Unit Tour
                    </button>

                    <a
                      href={`mailto:sterling@urbannestrealty.com?subject=Inquiry on Property ID UNN-${property.id.toUpperCase()}&body=Hello Alexander, I am interested in scheduling a private tour of the property: ${property.title}.`}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-charcoal/10 bg-white py-2.5 text-center text-xs font-bold text-charcoal transition-all hover:bg-light-grey"
                    >
                      <Mail className="h-4 w-4" />
                      Email Executive Partner
                    </a>
                  </div>

                  {/* Guaranteed Safety Trust */}
                  <div className="rounded-xl bg-beige/15 border border-beige/40 p-4 text-[11px] text-charcoal/70 flex gap-2.5">
                    <Shield className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-charcoal">Vetted Registry Guarantee</p>
                      <p className="mt-0.5 leading-normal text-charcoal/60">
                        This property holds active, verified registry deeds completely cleared of legal complications by UrbanNest's compliance legal officers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Panel */}
            <div className="bg-light-grey/60 border-t border-charcoal/10 py-3.5 px-6 flex items-center justify-between">
              <span className="text-[10px] text-charcoal/50 uppercase tracking-widest font-mono">
                UrbanNest Realty Private Portfolio • © 2026
              </span>
              <button
                onClick={onClose}
                className="text-xs font-semibold text-charcoal/60 hover:text-charcoal uppercase tracking-wider"
              >
                Close View
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
