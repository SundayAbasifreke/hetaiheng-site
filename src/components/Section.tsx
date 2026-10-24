import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className = '', children }: SectionProps) {
  const { ref, visible } = useReveal();
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
        {children}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl ${alignment} ${align === 'center' ? 'flex flex-col items-center' : ''}`}>
      {eyebrow && (
        <span
          className={`mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-primary-200' : 'text-primary-600'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-4xl font-semibold leading-[1.15] sm:text-5xl ${
          light ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-white/80' : 'text-ink-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
