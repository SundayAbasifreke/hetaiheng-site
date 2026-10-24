import { ArrowRight, Globe2, Building2, Stethoscope } from 'lucide-react';
import { hospital, stats } from '@/data/content';

const statIcons = [Globe2, Building2, Stethoscope];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={hospital.hero}
          alt="Shijiazhuang Hetaiheng Hospital — Premium Traditional Chinese Medicine Kidney Care Center"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950/85 via-ink-900/65 to-primary-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-ink-950/30" />
      </div>

      {/* Content */}
      <div className="container-x relative flex min-h-screen flex-col justify-center pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="animate-fade-in mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-300" />
            International TCM Kidney Hospital
          </span>

          <h1 className="animate-fade-up font-serif text-5xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            Shijiazhuang Hetaiheng Hospital
          </h1>

          <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl" style={{ animationDelay: '0.1s' }}>
            Our Systematic Chinese Medicine Treatment has helped numerous renal failure patients
            from 148 countries to significantly lower their creatinine, promote GFR, and avoid
            dialysis.
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '0.2s' }}>
            <a href="#contact" className="btn-primary text-base">
              Contact Our Expert Kidney Specialist
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#treatments" className="btn-outline text-base">
              Explore Treatments
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-fade-up mt-16 grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-3" style={{ animationDelay: '0.35s' }}>
          {stats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <div key={stat.label} className="flex items-center gap-4 px-6 py-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-400/20 text-primary-200">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-serif text-3xl font-semibold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
