import { CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const pillars = [
    {
      title: 'Uncompromising Integrity',
      text: 'Every statement we make, every contract we draft, and every fee we structure is built on honest, clear disclosures.'
    },
    {
      title: 'Total Transparency',
      text: 'No surprise broker margins or speculative markup. We match buyers and sellers openly for peer-to-peer clarity.'
    },
    {
      title: 'Personalized Support',
      text: 'We do not treat you like a deal number. Our brokers provide custom-fit advisory matched to your specific timeline.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-soft-white scroll-mt-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Graphic Overlapping Image Stack */}
          <div className="lg:col-span-5 relative" id="about-image-layers">
            {/* Background Decorative Gold Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-gold/40 translate-x-2 translate-y-2 hidden sm:block" />
            
            {/* Primary Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 border border-charcoal/10 aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
                alt="Luxury architectural interior"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>

            {/* Tiny Overlapping Badge Card */}
            <div className="absolute bottom-6 -right-4 bg-white rounded-xl shadow-xl p-5 border border-charcoal/5 max-w-[240px] z-20 hidden sm:block">
              <span className="text-[10px] font-bold text-gold uppercase tracking-widest font-mono block mb-1">
                Global Standards
              </span>
              <p className="font-display text-xs font-semibold text-charcoal leading-snug">
                "Servicing high-net-worth portfolios across Pakistan, GCC, North America, and Europe."
              </p>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6" id="about-narrative">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold font-mono">
                About Our Firm
              </span>
              <h2 className="font-serif text-3.5xl md:text-5xl font-light text-charcoal tracking-tight mt-1.5 leading-tight">
                Crafting Legacies Through <br />
                <span className="italic font-normal text-gold">Premium Real Estate</span>
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-charcoal/70">
              UrbanNest Realty is committed to delivering exceptional real estate services through integrity, transparency, and personalized support. Whether you're buying your dream home, selling an investment, or searching for rental opportunities, our experienced team helps you make confident decisions with ease.
            </p>

            <p className="text-sm leading-relaxed text-charcoal/70">
              Our bespoke, high-touch advisory model ensures that both local homeowners in Lahore, Karachi, or Islamabad, and international investors in London, Dubai, or Toronto receive premium, verified service tailored precisely to local tax and cross-border regulatory codes.
            </p>

            {/* Core Pillars Accordion List */}
            <div className="space-y-4 pt-4 border-t border-charcoal/10">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="rounded-full bg-gold/15 p-1 text-gold shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-charcoal uppercase tracking-wider">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-charcoal/60 leading-relaxed mt-0.5">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
