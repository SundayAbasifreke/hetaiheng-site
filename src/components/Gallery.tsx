import { Section } from '@/components/Section';
import { galleryImages } from '@/data/content';

export function Gallery() {
  // Bento layout pattern
  const spans = [
    'col-span-2 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-2',
    'col-span-2 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-2 row-span-1',
    'col-span-1 row-span-1',
  ];

  return (
    <Section id="gallery" className="bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            Our work
          </span>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
            A clear mind, a steady hand, and the quiet machinery of recovery
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((src, i) => (
            <div
              key={src}
              className={`group relative overflow-hidden rounded-2xl shadow-card ring-1 ring-ink-100 ${spans[i % spans.length]}`}
            >
              <img
                src={src}
                alt="Clinical facilities and patient care at an international kidney hospital"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
