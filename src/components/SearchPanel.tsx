import React, { useState, useEffect } from 'react';
import { SearchFilters } from '../types';
import { Search, MapPin, Building2, Tag, DollarSign, Bed, Bath, Maximize2, RefreshCw } from 'lucide-react';

interface SearchPanelProps {
  onFilterChange: (filters: SearchFilters) => void;
}

export default function SearchPanel({ onFilterChange }: SearchPanelProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    type: 'all',
    purpose: 'all',
    budget: 'all',
    bedrooms: 'all',
    bathrooms: 'all',
    area: 'all'
  });

  // Handle updates dispatched from Navbar clicks (e.g. Navbar Buy vs Rent clicks)
  useEffect(() => {
    const handlePurposeFilterEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        const newFilters = { ...filters, purpose: customEvent.detail as 'all' | 'buy' | 'rent' };
        setFilters(newFilters);
        onFilterChange(newFilters);
      }
    };

    window.addEventListener('filter-purpose', handlePurposeFilterEvent);
    return () => window.removeEventListener('filter-purpose', handlePurposeFilterEvent);
  }, [filters, onFilterChange]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedFilters = {
      ...filters,
      [name]: value
    };
    setFilters(updatedFilters);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  const handleReset = () => {
    const resetValues: SearchFilters = {
      location: '',
      type: 'all',
      purpose: 'all',
      budget: 'all',
      bedrooms: 'all',
      bathrooms: 'all',
      area: 'all'
    };
    setFilters(resetValues);
    onFilterChange(resetValues);
  };

  return (
    <div className="relative -mt-20 md:-mt-24 z-30 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="search-panel-container">
      <div className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-2xl md:p-8">
        
        {/* Purpose Selector Tabs */}
        <div className="flex border-b border-charcoal/10 pb-4 mb-6">
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'All Listings' },
              { id: 'buy', label: 'Buy Property' },
              { id: 'rent', label: 'Rent Property' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  const updated = { ...filters, purpose: tab.id as 'all' | 'buy' | 'rent' };
                  setFilters(updated);
                  onFilterChange(updated);
                }}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                  filters.purpose === tab.id
                    ? 'bg-charcoal text-white shadow-md'
                    : 'bg-light-grey text-charcoal/60 hover:text-charcoal hover:bg-beige/30'
                }`}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Input Grid */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" id="search-portal-form">
          
          {/* Location filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/50 mb-1.5 flex items-center gap-1" htmlFor="search-location">
              <MapPin className="h-3 w-3 text-gold" />
              Location
            </label>
            <select
              name="location"
              id="search-location"
              value={filters.location}
              onChange={handleChange}
              className="w-full rounded-lg border border-charcoal/10 bg-light-grey/40 py-2.5 px-3 text-xs font-semibold text-charcoal outline-none transition-all focus:border-gold focus:bg-white"
            >
              <option value="">Any Premium District</option>
              <option value="Karachi">Karachi, Pakistan</option>
              <option value="Lahore">Lahore, Pakistan</option>
              <option value="Islamabad">Islamabad, Pakistan</option>
              <option value="Dubai">Downtown Dubai, UAE</option>
              <option value="London">London, UK</option>
              <option value="Toronto">Toronto, Canada</option>
              <option value="Vancouver">Vancouver, Canada</option>
              <option value="Malibu">Malibu, USA</option>
            </select>
          </div>

          {/* Property Type Filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/50 mb-1.5 flex items-center gap-1" htmlFor="search-type">
              <Building2 className="h-3 w-3 text-gold" />
              Property Type
            </label>
            <select
              name="type"
              id="search-type"
              value={filters.type}
              onChange={handleChange}
              className="w-full rounded-lg border border-charcoal/10 bg-light-grey/40 py-2.5 px-3 text-xs font-semibold text-charcoal outline-none transition-all focus:border-gold focus:bg-white"
            >
              <option value="all">All Architecture</option>
              <option value="villa">Luxury Villas</option>
              <option value="apartment">Modern Apartments</option>
              <option value="office">Commercial Offices</option>
              <option value="farmhouse">Farmhouses</option>
              <option value="penthouse">Penthouses</option>
              <option value="retail">Retail Shops</option>
              <option value="townhouse">Townhouses</option>
              <option value="plot">Plots / Land</option>
              <option value="vacation">Vacation Homes</option>
            </select>
          </div>

          {/* Budget Limit Filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/50 mb-1.5 flex items-center gap-1" htmlFor="search-budget">
              <DollarSign className="h-3 w-3 text-gold" />
              Budget limit
            </label>
            <select
              name="budget"
              id="search-budget"
              value={filters.budget}
              onChange={handleChange}
              className="w-full rounded-lg border border-charcoal/10 bg-light-grey/40 py-2.5 px-3 text-xs font-semibold text-charcoal outline-none transition-all focus:border-gold focus:bg-white"
            >
              <option value="all">Unlimited Budget</option>
              <option value="under-15k">Under $15,000 / month</option>
              <option value="under-500k">Under $500,000</option>
              <option value="500k-1m">$500,000 - $1,000,000</option>
              <option value="1m-3m">$1,000,000 - $3,000,000</option>
              <option value="over-3m">Over $3,000,000</option>
            </select>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/50 mb-1.5 flex items-center gap-1" htmlFor="search-bedrooms">
                <Bed className="h-3 w-3 text-gold" />
                Bedrooms
              </label>
              <select
                name="bedrooms"
                id="search-bedrooms"
                value={filters.bedrooms}
                onChange={handleChange}
                className="w-full rounded-lg border border-charcoal/10 bg-light-grey/40 py-2.5 px-3 text-xs font-semibold text-charcoal outline-none transition-all focus:border-gold focus:bg-white"
              >
                <option value="all">Any</option>
                <option value="0">Studio / 0</option>
                <option value="3">3+ Beds</option>
                <option value="4">4+ Beds</option>
                <option value="5">5+ Beds</option>
              </select>
            </div>
            
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/50 mb-1.5 flex items-center gap-1" htmlFor="search-bathrooms">
                <Bath className="h-3 w-3 text-gold" />
                Bathrooms
              </label>
              <select
                name="bathrooms"
                id="search-bathrooms"
                value={filters.bathrooms}
                onChange={handleChange}
                className="w-full rounded-lg border border-charcoal/10 bg-light-grey/40 py-2.5 px-3 text-xs font-semibold text-charcoal outline-none transition-all focus:border-gold focus:bg-white"
              >
                <option value="all">Any</option>
                <option value="2">2+ Baths</option>
                <option value="4">4+ Baths</option>
                <option value="6">6+ Baths</option>
              </select>
            </div>
          </div>

          {/* Area Filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/50 mb-1.5 flex items-center gap-1" htmlFor="search-area">
              <Maximize2 className="h-3 w-3 text-gold" />
              Area Size
            </label>
            <select
              name="area"
              id="search-area"
              value={filters.area}
              onChange={handleChange}
              className="w-full rounded-lg border border-charcoal/10 bg-light-grey/40 py-2.5 px-3 text-xs font-semibold text-charcoal outline-none transition-all focus:border-gold focus:bg-white"
            >
              <option value="all">Any Size</option>
              <option value="under-3000">Under 3,000 Sq Ft</option>
              <option value="3000-6000">3,000 - 6,000 Sq Ft</option>
              <option value="over-6000">Over 6,000 Sq Ft</option>
            </select>
          </div>

          {/* Blank space for alignment */}
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>

          {/* Action Buttons */}
          <div className="flex gap-2 items-end pt-2 sm:col-span-2 lg:col-span-1">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center justify-center gap-2 rounded-lg bg-light-grey border border-charcoal/5 text-charcoal/70 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all hover:bg-beige/30 hover:text-charcoal"
              title="Reset Search Filters"
              id="reset-search-btn"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Reset
            </button>
            
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-charcoal text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all hover:bg-gold hover:shadow-md"
              id="submit-search-btn"
            >
              <Search className="h-4 w-4" />
              Search Registry
            </button>
          </div>

        </form>

        {/* Informative Sub-Indicator */}
        <p className="mt-4 text-[10px] font-medium text-charcoal/40 text-center uppercase tracking-widest">
          All listings are verified, legally cleared, and updated for 2026.
        </p>
      </div>
    </div>
  );
}
