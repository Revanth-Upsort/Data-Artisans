import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CTAButton } from '../ui/CTAButton';
import { HeroGraphic } from '../ui/HeroGraphic';

export function Hero() {
  return (
    <section className="bg-ink">
      <div className="container-page grid items-center gap-10 pb-16 pt-16 md:grid-cols-2 md:gap-8 md:pb-24 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-fg-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            IT consulting for growing businesses
          </p>
          <h1 className="text-hero font-medium text-fg-on-ink">
            Turn Your Data
            <br />
            Into Decisions
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-fg-muted sm:text-lg">
            Data engineering, business intelligence, cloud, and AI — delivered by a team that ships.
            We turn scattered systems into a foundation you can actually run your business on.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <CTAButton to="/contact">Book a Consultation</CTAButton>
            <Link
              to={{ pathname: '/', hash: 'services' }}
              className="text-center text-sm font-medium text-fg-on-ink underline-offset-4 transition-colors hover:text-accent hover:underline sm:text-left"
            >
              See Our Work →
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="order-first md:order-last"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <HeroGraphic className="mx-auto max-w-[16rem] sm:max-w-sm md:max-w-none" />
        </motion.div>
      </div>
    </section>
  );
}
