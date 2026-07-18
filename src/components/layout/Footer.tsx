import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Mail, Phone, MapPin, Linkedin, Twitter, Github, Triangle } from 'lucide-react';
import { site, navLinks, socialLinks } from '../../data/site';
import { services } from '../../data/services';

const socialIcon = { linkedin: Linkedin, x: Twitter, github: Github } as const;

/** A footer column that collapses to a tap-to-expand accordion on mobile and is
 *  always open on desktop — pure Tailwind, no media-query JS. */
function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-2 md:border-0 md:py-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-2 text-sm font-semibold text-fg-on-ink md:pointer-events-none md:mb-3 md:py-0"
      >
        {title}
        <Plus
          size={18}
          className={`transition-transform duration-200 md:hidden ${open ? 'rotate-45' : ''}`}
        />
      </button>
      <div className={`${open ? 'block' : 'hidden'} pb-2 md:block md:pb-0`}>{children}</div>
    </div>
  );
}

export function Footer() {
  const serviceLinks = services.map((s) => ({ label: s.name, to: `/services/${s.slug}` }));
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-fg-muted">
      <div className="container-page py-14">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand + newsletter */}
          <div>
            <div className="flex items-center gap-2 text-fg-on-ink">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-accent text-ink" aria-hidden="true">
                <Triangle size={16} strokeWidth={2.5} />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">Data Artisans</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Practical IT consulting for growing businesses — from data foundations to AI that ships.
            </p>
            <form
              className="mt-6"
              action="https://formspree.io/f/your-form-id"
              method="POST"
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="text-xs uppercase tracking-wider text-fg-muted">
                Get occasional insights
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="min-w-0 flex-1 rounded-card border border-white/15 bg-white/5 px-3 py-2 text-sm text-fg-on-ink placeholder:text-fg-muted/60 focus:border-accent focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-card bg-accent px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-accent-hover"
                >
                  Join
                </button>
              </div>
            </form>
          </div>

          {/* Services */}
          <FooterColumn title="Services">
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-fg-on-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Company */}
          <FooterColumn title="Company">
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.hash ? { pathname: l.to, hash: l.hash } : l.to}
                    className="transition-colors hover:text-fg-on-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title="Contact">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-fg-on-ink">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}
                  className="transition-colors hover:text-fg-on-ink"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>{site.address}</span>
              </li>
            </ul>
          </FooterColumn>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-fg-muted">© {year} Data Artisans. All rights reserved.</p>
          <ul className="flex items-center gap-3">
            {socialLinks.map((s) => {
              const SocialIcon = socialIcon[s.icon];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="grid h-9 w-9 place-items-center rounded-card border border-white/10 text-fg-muted transition-colors hover:border-accent hover:text-accent"
                    aria-label={s.label}
                  >
                    <SocialIcon size={18} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
