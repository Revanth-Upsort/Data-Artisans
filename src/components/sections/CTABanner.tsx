import { Link } from 'react-router-dom';
import { Reveal } from '../ui/Reveal';
import { CTAButton } from '../ui/CTAButton';

interface CTABannerProps {
  heading?: string;
  sub?: string;
  cta?: string;
  to?: string;
}

export function CTABanner({
  heading = "Ready to modernize your IT strategy? Let's talk.",
  sub = 'Book a free 30-minute consultation. No pitch deck, no obligation — just a straight conversation about where your data and systems can take you.',
  cta = 'Book a Consultation',
  to = '/contact',
}: CTABannerProps) {
  return (
    <section className="bg-paper py-16 md:py-20">
      <div className="container-page">
        <Reveal className="overflow-hidden rounded-2xl bg-ink px-6 py-14 text-center sm:px-12 md:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-section text-fg-on-ink">{heading}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-fg-muted">{sub}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton to={to}>{cta}</CTAButton>
              <Link
                to="/case-studies"
                className="text-sm text-fg-muted underline-offset-4 transition-colors hover:text-fg-on-ink hover:underline"
              >
                See our work →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
