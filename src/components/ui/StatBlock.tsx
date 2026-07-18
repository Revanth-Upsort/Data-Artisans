interface StatBlockProps {
  value: string;
  label: string;
  /** show the PLACEHOLDER marker (stats are illustrative until verified) */
  placeholder?: boolean;
  onInk?: boolean;
}

export function StatBlock({ value, label, placeholder = true, onInk = true }: StatBlockProps) {
  return (
    <div className={onInk ? 'text-center md:text-left' : 'text-center md:text-left'}>
      <p
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
          onInk ? 'text-fg-on-ink' : 'text-ink'
        }`}
      >
        {value}
        {placeholder && (
          <span className="ml-1 align-top text-[10px] font-normal text-accent">PLACEHOLDER</span>
        )}
      </p>
      <p className={`mt-1 text-sm ${onInk ? 'text-fg-muted' : 'text-ink/60'}`}>{label}</p>
    </div>
  );
}
