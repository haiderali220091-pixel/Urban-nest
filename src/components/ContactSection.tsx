import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-soft-white scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold font-mono">
            Global Headquarters
          </span>
          <h2 className="font-serif text-3.5xl md:text-5xl font-light text-charcoal tracking-tight mt-1.5 leading-tight">
            Connect With Our <span className="italic font-normal text-gold">Advisory Desk</span>
          </h2>
          <p className="mt-4 text-sm text-charcoal/60 leading-relaxed">
            Reach out via our direct communication hotlines or visit our global luxury registries. We are standing by to coordinate private listings viewings worldwide.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-panel-grid">
          
          {/* Left Block: Communication Cards & Buttons */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-4">
              {/* Address card */}
              <div className="rounded-2xl bg-white border border-charcoal/5 p-5 flex gap-4 shadow-sm">
                <div className="rounded-xl bg-gold/15 text-gold p-3 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-charcoal uppercase tracking-wider">
                    Office Headquarters
                  </h4>
                  <p className="text-xs text-charcoal/60 leading-normal mt-1">
                    UrbanNest Plaza, Level 4, Block Block 4 Clifton, Karachi, Pakistan
                  </p>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mt-2 font-mono">
                    Dubai • London • Toronto desks affiliated
                  </span>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="rounded-2xl bg-white border border-charcoal/5 p-5 flex gap-4 shadow-sm">
                <div className="rounded-xl bg-gold/15 text-gold p-3 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-charcoal uppercase tracking-wider">
                    Business Hours
                  </h4>
                  <p className="text-xs text-charcoal/60 leading-normal mt-1">
                    Monday – Friday: 09:00 AM – 06:00 PM (GMT+5)<br />
                    Saturday: Private Viewings Only (Via prior booking)
                  </p>
                </div>
              </div>

              {/* Direct Hotlines Card */}
              <div className="rounded-2xl bg-white border border-charcoal/5 p-5 flex gap-4 shadow-sm">
                <div className="rounded-xl bg-gold/15 text-gold p-3 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-charcoal uppercase tracking-wider">
                    Direct Contacts
                  </h4>
                  <p className="text-xs text-charcoal/60 leading-normal mt-1 font-mono">
                    Hotline: +92 (300) 555-0192 <br />
                    Support: info@urbannestrealty.com
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Connect Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-charcoal/10">
              <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest block mb-2">
                Instant Communications
              </span>

              {/* Grid 3 buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="tel:+923005550192"
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-charcoal py-3 px-4 text-xs font-bold text-white transition-all hover:bg-gold hover:shadow-md"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  Call Now
                </a>

                <a
                  href="mailto:info@urbannestrealty.com?subject=Property Inquiry - UrbanNest Realty Portfolio&body=Hello UrbanNest, I am reviewing your premium listings portfolio and would like to coordinate an advisory."
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-charcoal/10 bg-white py-3 px-4 text-xs font-bold text-charcoal transition-all hover:bg-light-grey"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  Email Us
                </a>

                <a
                  href="https://wa.me/923005550192?text=Hello%20UrbanNest%20Realty,%20I%20am%20interested%20in%20your%20premium%20properties%20listings."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] py-3 px-4 text-xs font-bold text-white transition-all hover:bg-opacity-90 hover:shadow-md"
                >
                  <MessageSquare className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </div>
            </div>

          </div>

          {/* Right Block: Google Maps Placeholder Graphic */}
          <div className="lg:col-span-7 relative h-96 lg:h-auto min-h-[380px] rounded-3xl overflow-hidden border border-charcoal/10 shadow-lg" id="mock-map-wrapper">
            
            {/* Embedded aesthetic Map placeholder graphic */}
            <div className="absolute inset-0 bg-[#E8DCCB]/25 bg-[radial-gradient(#C7A76C_1px,transparent_1px)] [background-size:16px_16px] flex flex-col items-center justify-center text-center p-6 select-none">
              
              {/* Gold Radar Ring */}
              <div className="relative mb-4 flex items-center justify-center">
                <span className="absolute h-14 w-14 rounded-full bg-gold/15 animate-ping" />
                <span className="absolute h-8 w-8 rounded-full bg-gold/30" />
                <div className="relative rounded-full bg-charcoal text-gold p-3 border border-gold/30">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>

              <h4 className="font-display text-sm font-bold text-charcoal uppercase tracking-wider">
                UrbanNest Corporate Plaza
              </h4>
              <p className="text-[11px] text-charcoal/50 max-w-xs mt-1.5 leading-relaxed font-semibold uppercase tracking-wider">
                Clifton Block 4, Karachi, PK <br />
                Coordinates: 24.8138° N, 67.0336° E
              </p>

              {/* Aesthetic road vectors placeholder overlay */}
              <div className="absolute inset-x-0 bottom-4 text-[10px] text-charcoal/40 flex items-center justify-center gap-1.5 font-semibold">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                <span>ACTIVE HEADQUARTERS LOCATION</span>
              </div>
            </div>

            {/* Float map interface controls */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-lg p-2.5 border border-charcoal/5 shadow-md flex flex-col gap-1 z-10 text-[10px] font-bold text-charcoal max-w-[150px]">
              <span className="text-gold uppercase font-extrabold tracking-widest block border-b border-charcoal/5 pb-1 mb-1">Navigation Desk</span>
              <span>• Zoom: Street</span>
              <span>• Network: Online</span>
            </div>

            <a
              href="https://maps.google.com/?q=Clifton+Block+4+Karachi"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-charcoal text-white rounded-lg px-4 py-2 text-[10px] font-bold uppercase tracking-widest shadow-md transition-all hover:bg-gold flex items-center gap-1 z-10"
              id="google-maps-external-link"
            >
              Get Directions
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
