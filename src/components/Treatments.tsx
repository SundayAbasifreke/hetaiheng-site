import { Sparkles } from 'lucide-react';
import { Section } from '@/components/Section';
import { treatmentAreas } from '@/data/content';

export function Treatments() {
  return (
    <Section id="treatments" className="bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            Alternative Dialysis Treatment
          </span>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
            Alternative Dialysis Treatment
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            We have developed a series of specific treatments for kidney patients. For example,
            systematic Chinese medicine Toxin-Removing Treatment, an alternative to dialysis. This
            approach can treat the damaged kidneys from the root.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {treatmentAreas.map((area, i) => (
            <article
              key={area.title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink-100 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary-500/90 text-white shadow-lg backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-primary-800">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{area.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
