import { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white scroll-mt-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold font-mono">
            Direct Answers
          </span>
          <h2 className="font-serif text-3.5xl md:text-5xl font-light text-charcoal tracking-tight mt-1.5 leading-tight">
            Frequently Asked <span className="italic font-normal text-gold">Questions</span>
          </h2>
          <p className="mt-4 text-sm text-charcoal/60 leading-relaxed">
            Obtain immediate clarity on legal transfers, overseas purchasing frameworks, listing validations, and property showing structures.
          </p>
        </div>

        {/* Accordions Frame */}
        <div className="space-y-4" id="faq-accordions-group">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-gold/35 bg-light-grey/25 shadow-md'
                    : 'border-charcoal/5 bg-white hover:border-gold/20'
                }`}
              >
                {/* Header click bar */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between py-5 px-6 text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                  id={`faq-toggle-${faq.id}`}
                >
                  <div className="flex gap-3.5 items-center pr-4">
                    <HelpCircle className={`h-4.5 w-4.5 shrink-0 ${
                      isOpen ? 'text-gold' : 'text-charcoal/30 group-hover:text-gold'
                    } transition-colors`} />
                    <span className="font-display text-sm md:text-base font-semibold text-charcoal tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Indicator arrows */}
                  <div className={`rounded-full p-1 bg-light-grey text-charcoal/50 ${
                    isOpen ? 'bg-gold/15 text-gold' : ''
                  }`}>
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Animated expand body */}
                {isOpen && (
                  <div className="px-6 pb-6 text-xs md:text-sm text-charcoal/70 leading-relaxed border-t border-charcoal/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Callback Support */}
        <div className="mt-12 text-center text-xs text-charcoal/50 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
          <span>Still hold specific queries?</span>
          <a href="#contact" className="text-gold hover:text-charcoal border-b border-gold/40 pb-0.5 transition-colors">
            Contact advisory desk
          </a>
        </div>

      </div>
    </section>
  );
}
