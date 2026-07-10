import React from 'react';
import { Property } from '../types';
import { Bed, Bath, Maximize2, Car, MapPin } from 'lucide-react';

interface PropertyCardProps {
  key?: string;
  property: Property;
  onViewDetails: (property: Property) => void;
}

export default function PropertyCard({ property, onViewDetails }: PropertyCardProps) {
  return (
    <div
      onClick={() => onViewDetails(property)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-charcoal/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gold/30 flex flex-col h-full"
      id={`property-card-${property.id}`}
    >
      {/* Property Media Frame */}
      <div className="relative h-56 w-full overflow-hidden bg-light-grey">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Purpose Badge (Buy vs Rent) */}
        <div className="absolute top-4 left-4 flex gap-1.5">
          <span className="rounded bg-charcoal/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
            {property.purpose === 'buy' ? 'For Sale' : 'For Rent'}
          </span>
          <span className="rounded bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
            {property.type}
          </span>
        </div>
      </div>

      {/* Property Core Specs & Info */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        
        <div className="space-y-2">
          {/* Price Label */}
          <p className="font-display text-xl font-bold text-gold">
            {property.price}
          </p>

          {/* Title and Location */}
          <div>
            <h4 className="font-display text-base font-semibold text-charcoal leading-snug tracking-tight group-hover:text-gold transition-colors line-clamp-1">
              {property.title}
            </h4>
            <p className="flex items-center text-xs text-charcoal/50 mt-1">
              <MapPin className="h-3.5 w-3.5 mr-1 text-gold shrink-0" />
              <span className="truncate">{property.location}</span>
            </p>
          </div>

          {/* Short Narrative */}
          <p className="text-xs text-charcoal/60 leading-relaxed line-clamp-2 pt-1">
            {property.description}
          </p>
        </div>

        {/* Dynamic Metric Grid */}
        <div className="mt-4 pt-4 border-t border-charcoal/5">
          <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-[11px] text-charcoal/70">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1.5">
                <Bed className="h-3.5 w-3.5 text-gold shrink-0" />
                <span><strong>{property.bedrooms}</strong> Bedrooms</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1.5">
                <Bath className="h-3.5 w-3.5 text-gold shrink-0" />
                <span><strong>{property.bathrooms}</strong> Bathrooms</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
              <Maximize2 className="h-3.5 w-3.5 text-gold shrink-0" />
              <span className="truncate"><strong>{property.area.split('/')[0]}</strong></span>
            </div>
            {property.parking > 0 && (
              <div className="flex items-center gap-1.5">
                <Car className="h-3.5 w-3.5 text-gold shrink-0" />
                <span><strong>{property.parking}</strong> Parking</span>
              </div>
            )}
          </div>

          {/* Button View Details */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(property);
            }}
            className="mt-5 w-full rounded-lg bg-light-grey py-2.5 text-center text-xs font-bold uppercase tracking-wider text-charcoal transition-all group-hover:bg-charcoal group-hover:text-white"
            id={`view-details-btn-${property.id}`}
          >
            View Details
          </button>
        </div>

      </div>
    </div>
  );
}
