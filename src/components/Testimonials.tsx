import { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTest = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-soft-white scroll-mt-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold font-mono">
            Client Success
          </span>
          <h2 className="font-serif text-3.5xl md:text-5xl font-light text-charcoal tracking-tight mt-1.5 leading-tight">
            Endorsements of <span className="italic font-normal text-gold">Elite Trust</span>
          </h2>
          <p className="mt-4 text-sm text-charcoal/60 leading-relaxed">
            Discover first-hand experiences of families, institutional partners, and global investors who achieved confidence and transparency with our advisory.
          </p>
        </div>

        {/* Premium Testimonial Slider Frame */}
        <div className="relative max-w-4xl mx-auto" id="testimonials-slider">
          
          {/* Big Background Quote Graphic */}
          <div className="absolute -top-10 -left-6 text-beige/30 z-0 select-none">
            <Quote className="h-28 w-28 fill-beige/10 rotate-180" />
          </div>

          <div className="relative z-10 bg-white rounded-3xl border border-charcoal/5 shadow-xl p-8 md:p-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTest.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                
                {/* Profile Image & Rating Col */}
                <div className="md:col-span-4 flex flex-col items-center text-center">
                  <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden border-2 border-gold/40 shadow-md p-1 bg-white mb-4">
                    <img
                      src={activeTest.image}
                      alt={activeTest.name}
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>

                  <h3 className="font-display text-base font-bold text-charcoal">
                    {activeTest.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-gold font-medium mt-1">
                    {activeTest.role}
                  </p>
                  <p className="text-xs text-charcoal/40 font-mono mt-0.5">
                    {activeTest.location}
                  </p>

                  {/* 5-Star Rating Indicators */}
                  <div className="flex gap-1 mt-4">
                    {[...Array(activeTest.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>

                {/* Review Message Text Col */}
                <div className="md:col-span-8 flex flex-col justify-center">
                  <p className="font-serif text-base md:text-lg leading-relaxed text-charcoal/80 italic">
                    "{activeTest.quote}"
                  </p>
                  
                  {/* Visual trust pillars mentioned in text highlight */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {['Professionalism', 'Transparency', 'Vetted Documentation', 'Excellent Communication'].map((item, idx) => (
                      <span key={idx} className="rounded-full bg-light-grey px-3 py-1 text-[9px] uppercase tracking-wider font-semibold text-charcoal/60">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Previous/Next Controller Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 -mx-4 md:-mx-12 flex justify-between pointer-events-none z-20">
            <button
              onClick={handlePrev}
              className="pointer-events-auto rounded-full bg-charcoal text-white hover:bg-gold p-3 shadow-lg hover:scale-110 transition-all cursor-pointer"
              aria-label="Previous Testimonial"
              id="prev-testimonial-btn"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto rounded-full bg-charcoal text-white hover:bg-gold p-3 shadow-lg hover:scale-110 transition-all cursor-pointer"
              aria-label="Next Testimonial"
              id="next-testimonial-btn"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

        {/* Paginated Dots navigation */}
        <div className="flex justify-center gap-1.5 mt-8" id="testimonials-dots">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-6 bg-gold' : 'w-2 bg-charcoal/20 hover:bg-charcoal/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
