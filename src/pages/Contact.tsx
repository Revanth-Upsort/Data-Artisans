import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Reveal } from '../components/ui/Reveal';
import { site } from '../data/site';
import { services } from '../data/services';

export default function Contact() {
  const details = [
    { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, '')}` },
    { icon: MapPin, label: 'Office', value: site.address, href: null },
  ];

  return (
    <PageLayout>
      <section className="bg-ink py-16 md:py-20">
        <div className="container-page max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent">Contact</p>
          <h1 className="text-hero font-medium text-fg-on-ink">Let's talk about your data</h1>
          <p className="mt-6 text-lg leading-relaxed text-fg-muted">
            Book a free 30-minute consultation. No pitch deck, no obligation — just a straight
            conversation about where your systems can take you.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-page grid gap-12 md:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <Reveal>
            <h2 className="text-section text-ink">Send us a message</h2>
            <p className="mt-2 text-sm text-ink/60">
              We reply within one business day.{' '}
              <span className="text-accent">(Replace form action with your Formspree endpoint.)</span>
            </p>

            {/* Static-friendly: posts to Formspree; swap the action URL before launch. */}
            <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-ink">Name</span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="mt-1.5 w-full rounded-card border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-accent focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink">Work email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="mt-1.5 w-full rounded-card border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-accent focus:outline-none"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-medium text-ink">Company</span>
                <input
                  name="company"
                  type="text"
                  placeholder="Company Inc."
                  className="mt-1.5 w-full rounded-card border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-accent focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-ink">What can we help with?</span>
                <select
                  name="interest"
                  className="mt-1.5 w-full rounded-card border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
                >
                  <option>Not sure yet — let's talk</option>
                  {services.map((s) => (
                    <option key={s.slug}>{s.name}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-ink">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us a little about your situation and goals."
                  className="mt-1.5 w-full rounded-card border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-accent focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-card bg-accent px-6 py-3 text-sm font-medium text-ink transition-colors duration-150 hover:bg-accent-hover"
              >
                Send message
                <ArrowRight size={18} />
              </button>
            </form>
          </Reveal>

          {/* Details */}
          <Reveal className="md:pt-14">
            <div className="rounded-2xl bg-paper-dim p-6 sm:p-8">
              <h2 className="text-base font-medium text-ink">Prefer to reach out directly?</h2>
              <ul className="mt-6 space-y-5">
                {details.map((d) => {
                  const DetailIcon = d.icon;
                  return (
                    <li key={d.label} className="flex items-start gap-3">
                      <span
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-card bg-white text-accent shadow-soft"
                        aria-hidden="true"
                      >
                        <DetailIcon size={20} />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-ink/50">{d.label}</p>
                        {d.href ? (
                          <a href={d.href} className="text-sm text-ink transition-colors hover:text-accent">
                            {d.value}
                          </a>
                        ) : (
                          <p className="text-sm text-ink">{d.value}</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-6 border-t border-ink/10 pt-4 text-xs text-accent">
                PLACEHOLDER — contact details are placeholders; swap for real ones before launch.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
