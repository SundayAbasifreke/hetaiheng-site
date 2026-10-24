import { Section } from '@/components/Section';
import { experts } from '@/data/content';

export function Experts() {
  return (
    <Section id="experts" className="bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            Our team
          </span>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
            Meet our experts
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            A team of distinguished kidney specialists dedicated to restoring your health with
            natural treatments.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {experts.map((expert) => (
            <article
              key={expert.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink-100 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-serif text-lg font-semibold text-white">{expert.name}</h3>
                  <p className="mt-0.5 text-xs font-medium text-primary-100">{expert.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
