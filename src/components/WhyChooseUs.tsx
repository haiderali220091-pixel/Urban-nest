import { Award, ShieldCheck, Scale, Eye, TrendingUp, Headphones, Zap, Lock } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      title: 'Trusted Property Experts',
      description: 'Our licensed, highly seasoned private brokers have closed billions in luxury transactions globally with absolute professionalism.',
      icon: Award
    },
    {
      title: 'Verified Listings Only',
      description: 'Every single listing is physically audited and legally double-checked before upload to prevent fraudulent entries.',
      icon: ShieldCheck
    },
    {
      title: 'Full Legal Assistance',
      description: 'In-house property attorneys compile deeds, clear taxes, draft escrow, and guide seamless transfers with zero hassle.',
      icon: Scale
    },
    {
      title: 'Transparent Pricing',
      description: 'We strictly mandate zero hidden broker surcharges, upfront pricing disclosure, and direct, honest deal negotiation.',
      icon: Eye
    },
    {
      title: 'Investment Guidance',
      description: 'Receive quantitative portfolio growth models, compound annual yield projections, and detailed capital gains tax support.',
      icon: TrendingUp
    },
    {
      title: '24/7 Premium Support',
      description: 'A dedicated, hyper-responsive client assistance desk reachable via phone, email, or direct WhatsApp around the clock.',
      icon: Headphones
    },
    {
      title: 'Fast Property Matching',
      description: 'Advanced automated filtering and exclusive off-market listings locate units matching your specific checklist inside hours.',
      icon: Zap
    },
    {
      title: 'Secure Transactions',
      description: 'Fully compliant, regulated banking channels, secure escrow holdings, and strict encryption protect your investment capital.',
      icon: Lock
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold font-mono">
            Integrity First
          </span>
          <h2 className="font-serif text-3.5xl md:text-5xl font-light text-charcoal tracking-tight mt-1.5 leading-tight">
            Why Choose <span className="italic font-normal text-gold">UrbanNest Realty</span>
          </h2>
          <p className="mt-4 text-sm text-charcoal/60 leading-relaxed">
            We transcend standard real estate transactions, offering a highly personalized, secure, and luxury acquisition process built on global service standards.
          </p>
        </div>

        {/* Why Us Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" id="why-choose-us-grid">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-charcoal/5 bg-light-grey/40 p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-gold/30 flex flex-col h-full"
              >
                {/* Icon Container */}
                <div className="rounded-xl bg-gold/10 text-gold p-3.5 w-fit mb-5 group-hover:bg-charcoal group-hover:text-white transition-all duration-300">
                  <Icon className="h-5.5 w-5.5" />
                </div>

                {/* Content */}
                <h3 className="font-display text-sm font-bold text-charcoal tracking-tight mb-2 uppercase group-hover:text-gold transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-charcoal/60 leading-relaxed flex-1">
                  {card.description}
                </p>

                {/* Visual hover accent bar */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
