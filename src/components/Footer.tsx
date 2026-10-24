import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { hospital, navLinks, footerConditions, footerTreatments } from '@/data/content';

export function Footer() {
  return (
    <footer className="bg-ink-950 text-white/70">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={hospital.logo}
                alt={`${hospital.name} logo`}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-primary-400/30"
              />
              <div className="leading-tight">
                <div className="font-serif text-lg font-semibold text-white">{hospital.shortName}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/50">Kidney Care Center</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {hospital.name}, Shijiazhuang, Hebei, China. A premier international TCM institution
              specializing in advanced kidney care.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={hospital.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-primary-300">
                <MessageCircle className="h-4 w-4 text-primary-400" />
                WhatsApp: {hospital.whatsapp}
              </a>
              <a href={hospital.phoneHref} className="flex items-center gap-3 transition-colors hover:text-primary-300">
                <Phone className="h-4 w-4 text-primary-400" />
                Call: {hospital.phone}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                <span>{hospital.address.join(', ')}</span>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white">Quick links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-primary-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white">Treatments</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerTreatments.map((t) => (
                <li key={t}>
                  <a href="#treatments" className="transition-colors hover:text-primary-300">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white">Conditions</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerConditions.map((c) => (
                <li key={c}>
                  <a href="#conditions" className="transition-colors hover:text-primary-300">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          &copy; 2026 {hospital.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
