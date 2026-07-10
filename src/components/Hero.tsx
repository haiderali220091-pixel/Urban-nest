import { motion } from 'motion/react';
import { ChevronDown, Calendar, Search } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (purpose?: string) => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  
  const handleBrowseClick = () => {
    const target = document.querySelector('#properties');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal"
    >
      {/* Fallback Luxury Image Backing */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />

      {/* Full Screen Autoplay Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-1"
        poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
        id="hero-bg-video"
      >
        <source
          src="https://player.vimeo.com/external/435674703.sd.mp4?s=7f41a12e1cb7361d140bdaaa401d434b9d12d47e&profile_id=139&oauth2_token_id=57447761"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Ultra Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90 z-2" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        
        {/* Tiny Premium Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-beige/30 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-gold animate-ping" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-beige font-semibold">
            Serving Local & International Clients
          </span>
        </motion.div>

        {/* Big Premium Titles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="font-serif text-4.5xl md:text-6.5xl font-light tracking-tight leading-none">
            Find Your <span className="italic font-normal text-beige">Dream Property</span>
          </h1>
          <p className="font-display text-lg md:text-2xl font-medium tracking-wider text-gold uppercase">
            Buy <span className="mx-2 text-white/40">•</span> Sell <span className="mx-2 text-white/40">•</span> Rent with Confidence
          </p>
        </motion.div>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-sm md:text-base text-white/70 max-w-2xl leading-relaxed"
        >
          Helping families, investors, and businesses discover exceptional real estate opportunities with trusted guidance and personalized service.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={handleBrowseClick}
            className="flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-beige hover:text-charcoal hover:shadow-xl w-full sm:w-auto"
            id="hero-browse-btn"
          >
            <Search className="h-4 w-4" />
            Browse Properties
          </button>
          
          <button
            onClick={() => onOpenConsultation('General Interest')}
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white hover:text-charcoal hover:shadow-lg w-full sm:w-auto"
            id="hero-consult-btn"
          >
            <Calendar className="h-4 w-4" />
            Book Consultation
          </button>
        </motion.div>

        {/* Floating statistics cards embedded in hero for premium denseness */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 grid grid-cols-3 gap-6 md:gap-12 border-t border-white/10 pt-8 w-full max-w-3xl text-center"
        >
          <div>
            <p className="font-display text-2xl md:text-3.5xl font-bold text-gold">$2.4B+</p>
            <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1 font-semibold">Transactions Closed</p>
          </div>
          <div className="border-x border-white/10">
            <p className="font-display text-2xl md:text-3.5xl font-bold text-white">99.4%</p>
            <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1 font-semibold">Success Delivery</p>
          </div>
          <div>
            <p className="font-display text-2xl md:text-3.5xl font-bold text-gold">150+</p>
            <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1 font-semibold">Verified Units</p>
          </div>
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-float">
        <button
          onClick={handleBrowseClick}
          className="rounded-full bg-white/5 border border-white/10 p-2 text-white/70 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Scroll down to search"
          id="scroll-indicator-btn"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
