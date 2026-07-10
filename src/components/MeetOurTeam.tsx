import { AGENTS } from '../data';
import { Phone, Mail, Linkedin, Twitter, Instagram, Sparkles } from 'lucide-react';

export default function MeetOurTeam() {
  return (
    <section id="team" className="py-20 md:py-28 bg-soft-white scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold font-mono">
            Direct Representation
          </span>
          <h2 className="font-serif text-3.5xl md:text-5xl font-light text-charcoal tracking-tight mt-1.5 leading-tight">
            Meet Our <span className="italic font-normal text-gold">Executive Partners</span>
          </h2>
          <p className="mt-4 text-sm text-charcoal/60 leading-relaxed">
            Our principal brokers combine extensive regional expertise with international compliance benchmarks to represent your investments seamlessly.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" id="team-agents-grid">
          {AGENTS.map((agent) => (
            <div
              key={agent.id}
              className="group rounded-2xl border border-charcoal/5 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gold/30 flex flex-col h-full"
            >
              {/* Agent Photo Layer */}
              <div className="relative h-72 w-full overflow-hidden bg-light-grey">
                <img
                  src={agent.photo}
                  alt={agent.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-75 group-hover:scale-102"
                />
                
                {/* Dark Overlay on Hover for Social Widget */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 z-10" />

                {/* Floating Social Icons (appears on card hover) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                  {agent.socials.linkedin && (
                    <a
                      href={agent.socials.linkedin}
                      className="rounded-full bg-white text-charcoal p-2 hover:bg-gold hover:text-white transition-colors"
                      aria-label={`${agent.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {agent.socials.twitter && (
                    <a
                      href={agent.socials.twitter}
                      className="rounded-full bg-white text-charcoal p-2 hover:bg-gold hover:text-white transition-colors"
                      aria-label={`${agent.name}'s Twitter`}
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {agent.socials.instagram && (
                    <a
                      href={agent.socials.instagram}
                      className="rounded-full bg-white text-charcoal p-2 hover:bg-gold hover:text-white transition-colors"
                      aria-label={`${agent.name}'s Instagram`}
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  )}
                </div>

                {/* Corner Experience Ribbon */}
                <div className="absolute top-4 right-4 bg-charcoal/95 border border-white/10 text-[9px] font-bold text-beige tracking-wider uppercase px-2.5 py-1 rounded shadow-md flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-gold" />
                  Partner
                </div>
              </div>

              {/* Agent Metadata */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-gold font-bold font-mono">
                    {agent.experience}
                  </p>
                  <h3 className="font-display text-base font-bold text-charcoal tracking-tight group-hover:text-gold transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-xs text-charcoal/60 leading-tight">
                    {agent.position}
                  </p>
                </div>

                {/* Contact Dial buttons */}
                <div className="mt-5 pt-4 border-t border-charcoal/5 space-y-2">
                  <a
                    href={`tel:${agent.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-xs font-mono text-charcoal/70 hover:text-gold transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span>{agent.phone}</span>
                  </a>
                  
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center gap-2 text-xs text-charcoal/70 hover:text-gold transition-colors break-all"
                  >
                    <Mail className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span>{agent.email}</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
