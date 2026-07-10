import { SERVICES } from '../data';
import { Search, TrendingUp, Key, Building2, BarChart3, ShieldCheck, FileText, DollarSign, Settings, LucideIcon } from 'lucide-react';

// Map icon string identifiers to actual imported Lucide component elements
const iconMap: Record<string, LucideIcon> = {
  Search,
  TrendingUp,
  Key,
  Building2,
  BarChart3,
  ShieldCheck,
  FileText,
  DollarSign,
  Settings
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold font-mono">
            Professional Offerings
          </span>
          <h2 className="font-serif text-3.5xl md:text-5xl font-light text-charcoal tracking-tight mt-1.5 leading-tight">
            Comprehensive <span className="italic font-normal text-gold">Elite Services</span>
          </h2>
          <p className="mt-4 text-sm text-charcoal/60 leading-relaxed">
            From cross-border investor acquisitions to post-purchase property management, our fully integrated suite of real estate advisory guarantees exceptional results.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" id="services-grid">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Settings;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl border border-charcoal/5 bg-light-grey/30 p-6 md:p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-gold/30 flex flex-col h-full"
              >
                {/* Visual Accent Corner Ornament */}
                <div className="absolute top-0 right-0 h-10 w-10 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 h-4 w-4 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 -translate-y-2 rotate-45" />
                </div>

                {/* Icon Circle */}
                <div className="rounded-xl bg-gold/15 text-gold p-4 w-fit mb-6 group-hover:bg-charcoal group-hover:text-white transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Typography details */}
                <h3 className="font-display text-base font-bold text-charcoal tracking-tight mb-3 uppercase group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs text-charcoal/60 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Bottom link line decoration */}
                <div className="mt-5 flex items-center text-xs font-bold uppercase tracking-widest text-gold group-hover:text-charcoal transition-colors">
                  <span className="mr-1.5">Learn more</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
