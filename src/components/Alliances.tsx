import { Section } from '@/components/Section';
import { alliances } from '@/data/content';

export function Alliances() {
  // Duplicate for seamless marquee
  const loop = [...alliances, ...alliances];

  return (
    <Section className="bg-primary-950 overflow-hidden py-20 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">
            Hospital development cooperation
          </span>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            The alliances that sharpen our edge against kidney disease
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Embassies, ministries of health and university hospitals across the Middle East, Africa
            and Asia work with us to bring non-invasive renal care to their citizens.
          </p>
        </div>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-primary-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-primary-950 to-transparent" />
        <div className="flex w-max animate-marquee gap-5 px-5">
          {loop.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-40 w-56 shrink-0 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10"
            >
              <img
                src={src}
                alt="International medical cooperation and healthcare partnership"
                loading="lazy"
                className="h-full w-full object-cover opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
