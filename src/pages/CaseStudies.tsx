import { PageLayout } from '../components/layout/PageLayout';
import { CaseStudyCard } from '../components/ui/CaseStudyCard';
import { CTABanner } from '../components/sections/CTABanner';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  return (
    <PageLayout>
      <section className="bg-ink py-16 md:py-20">
        <div className="container-page max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent">Case Studies</p>
          <h1 className="text-hero font-medium text-fg-on-ink">Proof, not promises</h1>
          <p className="mt-6 text-lg leading-relaxed text-fg-muted">
            A selection of recent engagements, anonymized to protect our clients. Every figure below
            is illustrative until we publish verified results — look for the{' '}
            <span className="text-accent">PLACEHOLDER</span> tags.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  );
}
