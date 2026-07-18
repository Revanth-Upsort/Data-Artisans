import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, CalendarCheck, Triangle } from 'lucide-react';
import { navLinks } from '../../data/site';
import { CTAButton } from '../ui/CTAButton';

export function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // close the mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/80">
      <nav className="container-page flex h-16 items-center justify-between gap-6" aria-label="Primary">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2 text-fg-on-ink" aria-label="Data Artisans — home">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-accent text-ink" aria-hidden="true">
            <Triangle size={16} strokeWidth={2.5} />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">Data Artisans</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.hash ? { pathname: link.to, hash: link.hash } : link.to}
                className="text-sm text-fg-muted transition-colors hover:text-fg-on-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <CTAButton to="/contact" className="!py-2.5">
            Book a Consultation
          </CTAButton>
        </div>

        {/* Mobile: pinned CTA (always visible) + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <Link
            to="/contact"
            className="grid h-10 w-10 place-items-center rounded-card bg-accent text-ink"
            aria-label="Book a consultation"
          >
            <CalendarCheck size={20} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-card text-fg-on-ink"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden border-t border-white/10 bg-ink md:hidden"
          >
            <ul className="container-page space-y-1 py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.hash ? { pathname: link.to, hash: link.hash } : link.to}
                    className="block rounded-card px-3 py-3 text-base text-fg-on-ink transition-colors hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <CTAButton to="/contact" className="w-full">
                  Book a Consultation
                </CTAButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
