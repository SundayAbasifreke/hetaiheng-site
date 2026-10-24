import { useState, type FormEvent } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Section } from '@/components/Section';
import { hospital } from '@/data/content';
import { FORM_ENDPOINT, FORM_ACCESS_KEY } from '@/config';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim() || null,
      country: String(data.get('country') || '').trim() || null,
      condition: String(data.get('condition') || '').trim() || null,
      message: String(data.get('message') || '').trim() || null,
    };

    if (!payload.name || !payload.email) {
      setStatus('error');
      setErrorMsg('Please provide at least your name and email.');
      return;
    }

    if (!FORM_ENDPOINT) {
      setStatus('error');
      setErrorMsg('The contact form is not connected yet. Please reach us via WhatsApp or email.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...(FORM_ACCESS_KEY ? { access_key: FORM_ACCESS_KEY } : {}),
          ...payload,
          _subject: `New consultation request from ${payload.name}`,
          _template: 'table',
          _captcha: 'false',
          _gotcha: String(data.get('_gotcha') || ''),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong while sending your request. Please try again or contact us via WhatsApp.');
      return;
    }

    setStatus('success');
    form.reset();
  };

  return (
    <Section id="contact" className="relative overflow-hidden bg-primary-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/idmvpeay/image/upload/f_auto,q_auto,c_limit,w_1200/about-us-img3_ebehx5.jpg"
          alt="Hospital view"
          loading="lazy"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/90 to-primary-950/95" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">
            Get in touch
          </span>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Book your consultation
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Send your medical reports and our specialists will review your case and respond with a
            personalized treatment plan.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-500/20 text-primary-200">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Address</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    {hospital.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={hospital.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-primary-400/40 hover:bg-white/10"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-500/20 text-primary-200">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">WhatsApp</h3>
                <p className="mt-0.5 text-sm text-white/70">{hospital.whatsapp}</p>
              </div>
            </a>

            <a
              href={hospital.phoneHref}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-primary-400/40 hover:bg-white/10"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-500/20 text-primary-200">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <p className="mt-0.5 text-sm text-white/70">{hospital.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${hospital.email}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-primary-400/40 hover:bg-white/10"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-500/20 text-primary-200">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="mt-0.5 break-all text-sm text-white/70">{hospital.email}</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-white p-8 shadow-2xl sm:p-10">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-100 text-success-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink-900">Request received</h3>
                <p className="mt-3 max-w-sm text-ink-500">
                  Thank you. Our kidney specialists will review your case and reach out to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-ghost mt-8 text-sm"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required placeholder="Your name" />
                  <Field label="Email" name="email" type="email" required placeholder="you@email.com" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone / WhatsApp" name="phone" placeholder="+..." />
                  <Field label="Country" name="country" placeholder="Your country" />
                </div>
                <Field label="Kidney condition" name="condition" placeholder="e.g. High creatinine, CKD stage 4" />
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-700">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your condition and recent lab results..."
                    className="w-full rounded-xl border border-ink-200 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-200"
                  />
                </div>

                {status === 'error' && (
                  <p className="rounded-xl bg-error-50 px-4 py-3 text-sm text-error-700">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full text-base disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send consultation request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

function Field({ label, name, type = 'text', required, placeholder }: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-700">
        {label}
        {required && <span className="text-error-500"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-200 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-200"
      />
    </div>
  );
}
