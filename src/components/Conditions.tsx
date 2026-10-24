import { Section } from '@/components/Section';
import { conditionTreatments } from '@/data/content';

export function Conditions() {
  return (
    <Section id="conditions" className="bg-primary-950/5">
      <div className="container-x space-y-24">
        {conditionTreatments.map((cond, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={cond.title}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                reversed ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div>
                <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
                  {cond.eyebrow}
                </span>
                <h2 className="font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
                  {cond.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-500">{cond.description}</p>
                <a href="#contact" className="btn-ghost mt-7 text-sm">
                  Request a consultation
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {cond.images.map((src, idx) => (
                  <div
                    key={src}
                    className={`overflow-hidden rounded-2xl shadow-card ring-1 ring-ink-100 ${
                      idx === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
                    }`}
                  >
                    <img
                      src={src}
                      alt={cond.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
