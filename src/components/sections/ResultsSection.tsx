import { caseStudies } from '../../data/caseStudies';
import { SectionHeading } from '../ui/SectionHeading';
import { CaseStudyCard } from '../ui/CaseStudyCard';
import { CTAButton } from '../ui/CTAButton';

export function ResultsSection() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="container-page">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Proof of work"
            title="Results, not promises"
            intro="Anonymized snapshots of recent engagements. Numbers are illustrative until we publish verified figures."
          />
          <CTAButton to="/case-studies" variant="secondary" className="hidden sm:inline-flex">
            All case studies
          </CTAButton>
        </div>
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {caseStudies.map((cs, i) => (
            <div key={cs.slug} className="min-w-[85%] shrink-0 snap-center sm:min-w-[60%] md:min-w-0">
              <CaseStudyCard caseStudy={cs} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
