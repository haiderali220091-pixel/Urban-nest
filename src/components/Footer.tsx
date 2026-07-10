import React, { useState } from 'react';
import { Mail, Linkedin, Twitter, Instagram, ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const quickLinks = [
    { name: 'Home Portfolio', href: '#home' },
    { name: 'Featured Listings', href: '#properties' },
    { name: 'Global Services', href: '#services' },
    { name: 'Why UrbanNest', href: '#why-us' },
    { name: 'Executive Team', href: '#team' },
    { name: 'Registry FAQs', href: '#faq' },
    { name: 'Inquire Desk', href: '#enquiry' },
    { name: 'Connect Desk', href: '#contact' }
  ];

  const servicesLinks = [
    { name: 'Buying Assistance', href: '#services' },
    { name: 'Property Selling', href: '#services' },
    { name: 'Rental Services', href: '#services' },
    { name: 'Commercial Desk', href: '#services' },
    { name: 'Asset Management', href: '#services' },
    { name: 'Legal transferred deeds', href: '#services' }
  ];

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 relative overflow-hidden" id="main-footer">
      {/* Visual Accent top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-beige via-gold to-beige" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Segment: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Presentation */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="flex flex-col group w-fit">
              <span className="font-display text-2xl font-bold uppercase tracking-wider">
                Urban<span className="text-gold">Nest</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-white/50 -mt-1">
                International Realty
              </span>
            </a>
            
            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Helping families, investors, and businesses discover exceptional real estate opportunities with trusted guidance and personalized service.
            </p>

            {/* Social Icons Row */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' }
              ].map((soc, i) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.href}
                    className="rounded-full bg-white/5 border border-white/10 p-2 text-white/60 hover:text-white hover:bg-gold hover:border-gold transition-all"
                    aria-label={`Follow us on ${soc.label}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter subscription form */}
          <div className="lg:col-span-7 space-y-4" id="footer-newsletter-section">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold font-mono">
                Exclusive Registry Onboarding
              </span>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                Subscribe to Off-Market Briefings
              </h4>
              <p className="text-xs text-white/50 max-w-md leading-normal">
                Receive private portfolio catalog updates, global taxation briefs, and off-market listings sent directly to your inbox.
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-lg" id="newsletter-form">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white/30">
                    <Mail className="h-4 w-4" />
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-xs font-semibold text-white outline-none transition-all placeholder:text-white/30 focus:border-gold focus:bg-white/10 focus:ring-2 focus:ring-gold/15"
                  />
                </div>
                
                <button
                  type="submit"
                  className="rounded-lg bg-gold text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-charcoal cursor-pointer shrink-0"
                >
                  Onboard
                </button>
              </form>
            ) : (
              <div className="rounded-lg bg-gold/10 border border-gold/30 p-3 flex gap-2.5 items-center max-w-lg" id="newsletter-success">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                <p className="text-xs font-semibold text-gold leading-none">
                  Thank you! You have been subscribed to off-market updates.
                </p>
              </div>
            )}
          </div>

        </div>

        {/* Middle Segment: Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 text-xs text-white/60">
          
          {/* Quick links */}
          <div className="space-y-4">
            <h5 className="font-display font-bold uppercase tracking-wider text-white border-b border-white/5 pb-2">
              Quick Directory
            </h5>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-gold flex items-center gap-1 transition-colors">
                    <ChevronRight className="h-3 w-3 text-gold/60" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h5 className="font-display font-bold uppercase tracking-wider text-white border-b border-white/5 pb-2">
              Our Advisory Desks
            </h5>
            <ul className="space-y-2.5">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-gold flex items-center gap-1 transition-colors">
                    <ChevronRight className="h-3 w-3 text-gold/60" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional hubs */}
          <div className="space-y-4">
            <h5 className="font-display font-bold uppercase tracking-wider text-white border-b border-white/5 pb-2">
              Regional Desks
            </h5>
            <ul className="space-y-2 font-semibold">
              <li className="text-white/80">Karachi Head Office <span className="block text-[10px] text-white/40 font-normal">Clifton, Block 4</span></li>
              <li className="text-white/80">Lahore Desk <span className="block text-[10px] text-white/40 font-normal">Gulberg III Boulevard</span></li>
              <li className="text-white/80">Dubai Desk <span className="block text-[10px] text-white/40 font-normal">Downtown Dubai Marina</span></li>
              <li className="text-white/80">London Desk <span className="block text-[10px] text-white/40 font-normal">Knightsbridge Belgravia</span></li>
            </ul>
          </div>

          {/* International compliance registries */}
          <div className="space-y-4">
            <h5 className="font-display font-bold uppercase tracking-wider text-white border-b border-white/5 pb-2">
              Registry Licenses
            </h5>
            <p className="leading-normal text-white/40 text-[11px]">
              UrbanNest Realty is licensed by the Authority of Real Estate Regulators. All listings represented hold verified legal compliance and registered clean title deeds.
            </p>
            <div className="flex gap-1.5 flex-wrap pt-2">
              <span className="border border-white/10 rounded px-2 py-0.5 text-[9px] uppercase tracking-wider font-bold">RERA UAE Approved</span>
              <span className="border border-white/10 rounded px-2 py-0.5 text-[9px] uppercase tracking-wider font-bold">LDA Verified</span>
            </div>
          </div>

        </div>

        {/* Bottom Segment: Copyright & Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-white/40 font-mono font-semibold uppercase tracking-widest">
          
          <p className="text-center md:text-left">
            © 2026 UrbanNest Realty. All rights reserved. Built for demonstration excellence.
          </p>

          {/* Legal Links */}
          <div className="flex gap-4">
            <a href="#about" className="hover:text-gold flex items-center gap-0.5">
              Privacy Policy
              <ArrowUpRight className="h-2.5 w-2.5 text-gold/60" />
            </a>
            <span>•</span>
            <a href="#about" className="hover:text-gold flex items-center gap-0.5">
              Terms & Conditions
              <ArrowUpRight className="h-2.5 w-2.5 text-gold/60" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
