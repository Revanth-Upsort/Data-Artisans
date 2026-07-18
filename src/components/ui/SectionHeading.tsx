import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  onInk?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  onInk = false,
  className = '',
}: SectionHeadingProps) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <Reveal className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      )}
      <h2 className={`text-section ${onInk ? 'text-fg-on-ink' : 'text-ink'}`}>{title}</h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed ${onInk ? 'text-fg-muted' : 'text-ink/70'}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
