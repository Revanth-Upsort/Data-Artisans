import { Reveal } from './Reveal';

interface ProcessStepProps {
  index: number;
  total: number;
  step: string;
  description: string;
  onInk?: boolean;
}

/**
 * One step in a process row. Renders as a left-dotted timeline item on mobile
 * and a numbered column with a connecting line on desktop. The parent supplies
 * a `md:grid-cols-N` wrapper.
 */
export function ProcessStep({ index, total, step, description, onInk = false }: ProcessStepProps) {
  const numColor = onInk ? 'text-fg-on-ink' : 'text-ink';
  const descColor = onInk ? 'text-fg-muted' : 'text-ink/70';
  const lineColor = onInk ? 'bg-white/15' : 'bg-ink/15';
  const isLast = index === total - 1;

  return (
    <Reveal as="li" delay={index * 80} className="relative pl-10 md:pl-0">
      {!isLast && (
        <span
          className={`absolute left-3.5 top-9 h-[calc(100%+2rem)] w-px md:left-0 md:top-4 md:h-px md:w-full ${lineColor}`}
          aria-hidden="true"
        />
      )}
      <span
        className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full bg-accent text-sm font-semibold text-ink md:relative"
        aria-hidden="true"
      >
        {index + 1}
      </span>
      <div className="md:mt-5">
        <h3 className={`text-base font-medium ${numColor}`}>{step}</h3>
        <p className={`mt-1.5 text-sm leading-relaxed ${descColor}`}>{description}</p>
      </div>
    </Reveal>
  );
}
