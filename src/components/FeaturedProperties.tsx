import { useState } from 'react';
import { Property, SearchFilters } from '../types';
import { PROPERTIES } from '../data';
import PropertyCard from './PropertyCard';
import { Building2, Plus, ArrowRight } from 'lucide-react';

interface FeaturedPropertiesProps {
  filters: SearchFilters;
  onViewDetails: (property: Property) => void;
}

export default function FeaturedProperties({ filters, onViewDetails }: FeaturedPropertiesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter properties in real-time based on ALL filter sliders
  const filteredProperties = PROPERTIES.filter((property) => {
    // 1. Filter by location
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }

    // 2. Filter by property type (from both SearchPanel and category tabs)
    const activeType = selectedCategory !== 'all' ? selectedCategory : filters.type;
    if (activeType !== 'all' && property.type !== activeType) {
      return false;
    }

    // 3. Filter by purpose (buy vs rent)
    if (filters.purpose !== 'all' && property.purpose !== filters.purpose) {
      return false;
    }

    // 4. Filter by budget ranges
    if (filters.budget !== 'all') {
      const price = property.priceNumber;
      if (filters.budget === 'under-15k' && price > 15000) return false;
      if (filters.budget === 'under-500k' && (price > 500000 || price <= 15000)) return false;
      if (filters.budget === '500k-1m' && (price < 500000 || price > 1000000)) return false;
      if (filters.budget === '1m-3m' && (price < 1000000 || price > 3000000)) return false;
      if (filters.budget === 'over-3m' && price < 3000000) return false;
    }

    // 5. Filter by bedrooms
    if (filters.bedrooms !== 'all') {
      const bedsFilter = parseInt(filters.bedrooms);
      if (bedsFilter === 0 && property.bedrooms !== 0) return false;
      if (bedsFilter > 0 && property.bedrooms < bedsFilter) return false;
    }

    // 6. Filter by bathrooms
    if (filters.bathrooms !== 'all') {
      const bathsFilter = parseInt(filters.bathrooms);
      if (property.bathrooms < bathsFilter) return false;
    }

    // 7. Filter by area value
    if (filters.area !== 'all') {
      const area = property.areaValue;
      if (filters.area === 'under-3000' && area > 3000) return false;
      if (filters.area === '3000-6000' && (area < 3000 || area > 6000)) return false;
      if (filters.area === 'over-6000' && area < 6000) return false;
    }

    return true;
  });

  const categories = [
    { id: 'all', label: 'All Listings' },
    { id: 'villa', label: 'Villas' },
    { id: 'apartment', label: 'Apartments' },
    { id: 'penthouse', label: 'Penthouses' },
    { id: 'office', label: 'Offices' },
    { id: 'farmhouse', label: 'Farmhouses' },
    { id: 'plot', label: 'Plots' }
  ];

  return (
    <section id="properties" className="py-20 md:py-28 bg-soft-white scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold font-mono">
              Exclusive Portfolio
            </span>
            <h2 className="font-serif text-3.5xl md:text-5xl font-light text-charcoal tracking-tight mt-1.5 leading-tight">
              Featured <span className="italic font-normal text-gold">Properties</span>
            </h2>
            <p className="mt-3 text-sm text-charcoal/60 max-w-lg leading-relaxed">
              Explore our curated selection of ultra-luxury residential and commercial units serving discerning buyers worldwide.
            </p>
          </div>

          {/* Quick Category Tab Badges */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1.5" id="category-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-charcoal text-white shadow-sm'
                    : 'bg-light-grey text-charcoal/60 hover:text-charcoal hover:bg-beige/40'
                }`}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count and Indicator */}
        <div className="flex items-center justify-between border-b border-charcoal/5 pb-4 mb-8">
          <p className="text-xs font-semibold text-charcoal/50 uppercase tracking-widest">
            Showing <span className="text-charcoal font-bold">{filteredProperties.length}</span> Verified Units
          </p>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-xs font-bold uppercase tracking-widest text-gold hover:text-charcoal transition-colors"
            >
              Clear Category Filter
            </button>
          )}
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" id="properties-cards-grid">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          /* Empty Search Fallback */
          <div className="rounded-2xl border border-dashed border-charcoal/20 bg-light-grey/40 p-12 text-center max-w-lg mx-auto" id="no-listings-fallback">
            <Building2 className="h-12 w-12 text-charcoal/30 mx-auto mb-4" />
            <h4 className="font-display text-lg font-bold text-charcoal">
              No Listings Match Your Criteria
            </h4>
            <p className="mt-2 text-xs text-charcoal/60 leading-relaxed">
              We couldn't find any premium properties that exactly match your active search filters. Try clearing some filters or reset the panel to view the full portfolio.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-5 rounded-lg bg-charcoal px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-gold"
            >
              View Full Portfolio
            </button>
          </div>
        )}

        {/* Bottom Banner to Add/Request Listing */}
        <div className="mt-16 rounded-2xl bg-charcoal text-white p-8 md:p-12 relative overflow-hidden shadow-lg border border-white/10" id="property-footer-banner">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=40')] opacity-10 bg-cover bg-center" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-bold">
                Seeking a bespoke search?
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-white tracking-tight mt-1">
                Can't find your <span className="italic font-normal text-gold">perfect match</span>?
              </h3>
              <p className="mt-2 text-xs text-white/60 max-w-xl leading-relaxed">
                Our private acquisition desks frequently secure off-market luxury listings across Karachi, Dubai, London, and Vancouver before they reach public registries. Let us search for you.
              </p>
            </div>
            
            <a
              href="#enquiry"
              className="rounded-full bg-white text-charcoal px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all hover:bg-gold hover:text-white shrink-0 hover:shadow-lg flex items-center gap-2"
            >
              Submit Property Requirements
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
