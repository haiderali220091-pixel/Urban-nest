import { Building, HeartHandshake, CalendarDays, Percent, Briefcase } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      value: '10,000+',
      label: 'Properties Listed',
      desc: 'Active residential and commercial units.',
      icon: Building
    },
    {
      value: '4,500+',
      label: 'Happy Clients',
      desc: 'Local families and offshore portfolios.',
      icon: HeartHandshake
    },
    {
      value: '20+',
      label: 'Years Experience',
      desc: 'Unwavering real estate legacy.',
      icon: CalendarDays
    },
    {
      value: '98%',
      label: 'Satisfaction Rate',
      desc: 'Honest reviews and prompt actions.',
      icon: Percent
    },
    {
      value: '150+',
      label: 'Expert Agents',
      desc: 'Licensed brokers standing by.',
      icon: Briefcase
    }
  ];

  return (
    <section id="statistics" className="relative bg-charcoal text-white overflow-hidden py-16">
      {/* Abstract Design Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=30')] opacity-5 bg-cover bg-center" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-12 translate-x-12" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-5 text-center divide-y md:divide-y-0 md:divide-x divide-white/10" id="stats-grid">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center px-4 ${
                  idx > 1 ? 'pt-8 sm:pt-0' : 'pt-0'
                }`}
              >
                {/* Visual Icon */}
                <div className="rounded-full bg-gold/10 text-gold p-2 mb-3">
                  <Icon className="h-4.5 w-4.5" />
                </div>

                {/* Big Metric Display */}
                <p className="font-display text-3xl md:text-4.5xl font-extrabold text-gold tracking-tight leading-none">
                  {stat.value}
                </p>

                {/* Metric Descriptive Metadata */}
                <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white/90 mt-2">
                  {stat.label}
                </h4>
                
                <p className="text-[10px] text-white/50 mt-1 max-w-[150px] leading-relaxed mx-auto font-medium">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
