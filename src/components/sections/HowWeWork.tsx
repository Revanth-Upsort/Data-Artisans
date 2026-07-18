import { howWeWork } from '../../data/site';
import { SectionHeading } from '../ui/SectionHeading';
import { ProcessStep } from '../ui/ProcessStep';

export function HowWeWork() {
  return (
    <section className="bg-paper-dim py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="How we work"
          title="A simple, repeatable way of working"
          intro="No mystery, no lock-in. The same four steps whether we're building a pipeline or planning a three-year roadmap."
          className="mb-12"
        />
        <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
          {howWeWork.map((s, i) => (
            <ProcessStep
              key={s.step}
              index={i}
              total={howWeWork.length}
              step={s.step}
              description={s.description}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
