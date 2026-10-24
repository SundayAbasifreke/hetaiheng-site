import { Quote } from 'lucide-react';
import { Section } from '@/components/Section';
import { testimonials } from '@/data/content';

export function Testimonials() {
  return (
    <Section className="bg-gradient-to-b from-white to-primary-950/5">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            Patient success stories
          </span>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
            Restored health, renewed hope
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-2xl bg-white p-8 shadow-card ring-1 ring-ink-100"
            >
              <Quote className="h-10 w-10 text-primary-200" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-ink-100 pt-5">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-primary-200"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 font-serif text-lg font-semibold text-primary-700">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-ink-900">{t.name}</div>
                  <div className="text-sm text-ink-400">{t.country}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
