import { useEffect, useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { hospital, navLinks } from '@/data/content';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3" aria-label={hospital.name}>
          <img
            src={hospital.logo}
            alt={`${hospital.name} logo`}
            className="h-11 w-11 rounded-full object-cover ring-2 ring-primary-300/40"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span
              className={`font-serif text-lg font-semibold transition-colors ${
                scrolled ? 'text-primary-800' : 'text-white'
              }`}
            >
              Hetaiheng
            </span>
            <span
              className={`text-[0.65rem] font-medium uppercase tracking-[0.18em] transition-colors ${
                scrolled ? 'text-ink-400' : 'text-white/70'
              }`}
            >
              Kidney Care Center
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-ink-700 hover:bg-primary-50 hover:text-primary-700'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={hospital.phoneHref}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? 'text-ink-700 hover:text-primary-700' : 'text-white/90 hover:text-white'
            }`}
          >
            <Phone className="h-4 w-4" />
            <span>{hospital.phone}</span>
          </a>
          <a href="#contact" className="btn-primary text-sm">
            <MessageCircle className="h-4 w-4" />
            Book Consultation
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className={`lg:hidden ${scrolled ? 'text-ink-800' : 'text-white'}`}
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink-950/50 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink-100 px-6 py-5">
            <span className="font-serif text-lg font-semibold text-primary-800">Menu</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-ink-500 hover:text-ink-900">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink-700 hover:bg-primary-50 hover:text-primary-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto space-y-3 border-t border-ink-100 px-6 py-5">
            <a href={hospital.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-ink-700">
              <Phone className="h-4 w-4 text-primary-600" />
              {hospital.phone}
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
