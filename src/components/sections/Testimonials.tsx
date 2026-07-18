import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function Testimonials() {
  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="In their words" title="What clients tell us" onInk className="mb-10" />
        <ul className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={t.name}
              delay={i * 80}
              className="flex min-w-[85%] shrink-0 snap-center flex-col rounded-card border border-white/10 bg-white/[0.03] p-6 sm:min-w-[60%] md:min-w-0"
            >
              <Quote size={28} className="text-accent" aria-hidden="true" />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-on-ink">{t.quote}</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm font-medium text-fg-on-ink">{t.name}</p>
                <p className="text-xs text-fg-muted">
                  {t.org} <span className="text-accent">PLACEHOLDER</span>
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
