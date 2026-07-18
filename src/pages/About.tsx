import { PageLayout } from '../components/layout/PageLayout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProcessStep } from '../components/ui/ProcessStep';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { CTABanner } from '../components/sections/CTABanner';
import { Reveal } from '../components/ui/Reveal';

const values = [
  { title: 'Independent by design', body: "We don't resell software or take referral fees. Our advice reflects your interests, full stop." },
  { title: 'Right-sized, always', body: "We build the smallest thing that solves the problem — no enterprise overhead you don't need." },
  { title: 'Built to hand over', body: "Everything we build is documented and maintainable. You're never locked to us." },
  { title: 'Honest about fit', body: "If AI isn't the answer, or a tool you have already works, we'll tell you." },
];

const principles = [
  { step: 'Listen first', description: 'We understand the business before we touch the technology.' },
  { step: 'Prove early', description: 'You see something working fast, not a spec you have to imagine.' },
  { step: 'Ship reliably', description: 'We deliver in small, tested increments you can trust.' },
  { step: 'Stay accountable', description: 'We measure outcomes and stand behind what we deliver.' },
];

const faqs = [
  { question: 'How big is your team?', answer: "We're a focused senior team of engineers and consultants (PLACEHOLDER). You work directly with the people building your solution, not a rotating cast of juniors." },
  { question: 'What size businesses do you work with?', answer: 'Primarily small-to-medium businesses — typically 10 to 500 people. Big enough to have real technology needs, small enough that every decision matters.' },
  { question: 'Do you work on retainer or per project?', answer: 'Both. Many clients start with a defined project and move to an ongoing advisory or support arrangement once trust is established.' },
  { question: 'Where are you based?', answer: 'We work with clients remotely and on-site as needed (PLACEHOLDER). Location is rarely a barrier to the way we work.' },
];

export default function About() {
  return (
    <PageLayout>
      <section className="bg-ink py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent">About Data Artisans</p>
          <h1 className="text-hero font-medium text-fg-on-ink">
            Craftspeople for the messy middle of technology
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-fg-muted">
            Data Artisans exists for businesses caught between off-the-shelf software that doesn't
            quite fit and enterprise consultancies that don't quite care. We bring senior,
            independent expertise to the systems your business runs on.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Our story" title="Why we started" />
          <Reveal className="space-y-4 text-base leading-relaxed text-ink/75">
            <p>
              We kept meeting the same business: growing steadily, drowning in tools nobody fully
              understood, and unsure which technology advice to trust because everyone selling it had
              something to sell.
            </p>
            <p>
              So we built the firm we wished those businesses could hire — one that stays on their
              side of the table, recommends only what genuinely helps, and builds things that keep
              working after the invoice is paid.
            </p>
            <p className="text-sm text-accent">
              PLACEHOLDER — replace with real company history and founding details.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-dim py-16 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="What we believe" title="Principles we don't bend on" className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 70}
                className="rounded-card border border-ink/10 bg-white p-6 shadow-soft"
              >
                <h3 className="text-base font-medium text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="How we operate" title="The way we work with you" className="mb-12" />
          <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
            {principles.map((p, i) => (
              <ProcessStep key={p.step} index={i} total={principles.length} step={p.step} description={p.description} />
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper-dim py-16 md:py-24">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="FAQ" title="Good to know" />
          <Reveal>
            <FAQAccordion faqs={faqs} />
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  );
}
