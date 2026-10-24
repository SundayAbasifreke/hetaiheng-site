import { Award, HeartPulse, Leaf, ShieldCheck } from 'lucide-react';
import { Section } from '@/components/Section';
import { aboutImages } from '@/data/content';

const pillars = [
  { icon: Leaf, title: 'Root-cause recovery', text: 'Non-invasive Chinese medicine therapies that repair damaged nephrons rather than mask symptoms.' },
  { icon: ShieldCheck, title: '40,000m² campus', text: 'Luxury villa-style wards in a serene, professional environment built for healing.' },
  { icon: Award, title: '20+ national experts', text: 'Led by Professor Zhang Daning, Master of Chinese Medicine, with world-class specialists.' },
  { icon: HeartPulse, title: '148 countries served', text: 'A dedicated International Consultation Center supporting patients across the globe.' },
];

export function About() {
  return (
    <Section id="about" className="bg-gradient-to-b from-primary-950/5 to-white">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-ink-100 aspect-[3/4]">
                <img src={aboutImages[0]} alt="Hospital facilities" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-ink-100 aspect-square">
                <img src={aboutImages[1]} alt="Patient-centered environment" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-ink-100 aspect-square">
                <img src={aboutImages[2]} alt="Hospital facilities" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-ink-100 aspect-[3/4]">
                <img src={aboutImages[3]} alt="Patient-centered environment" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
              About Us
            </span>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
              A premier international TCM institution specializing in advanced kidney care
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              Shijiazhuang Hetaiheng Hospital is a premier international TCM institution specializing
              in advanced kidney care, spanning 40,000 square meters with luxury villa-style wards.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              Our clinical excellence is driven by the Experts of the International Consultation
              Center, led by Professor Zhang Daning, Master of Chinese Medicine. Our distinguished
              team includes world-class experts such as Professor Yang Hongtao, Cheng Xiaohong, Liu
              Xusheng, Professor Deng Yueyi, Professor Wang Yi, and representatives from the World
              Federation of Acupuncture-Moxibustion Societies.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              Supported by over 20 national-level experts like Professors Zhang Youkang, Zheng
              Falei, Liu Guangzhen, and Sun Wei, we combine modern research with traditional wisdom
              to provide non-invasive, root-cause recovery for chronic diseases in a serene,
              professional environment.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink-900">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-500">{p.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
