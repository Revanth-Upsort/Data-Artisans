interface HeroGraphicProps {
  className?: string;
}

/**
 * Abstract "data flow" network — geometric nodes + animated connecting paths
 * in the accent color. Pure SVG/CSS, no illustration or stock art.
 */
export function HeroGraphic({ className = '' }: HeroGraphicProps) {
  const edges = [
    'M70 90 L210 60 L340 120',
    'M70 90 L150 200 L300 250',
    'M210 60 L150 200',
    'M340 120 L300 250',
    'M150 200 L340 120',
    'M70 260 L150 200',
    'M70 260 L300 250',
  ];
  const nodes = [
    { cx: 70, cy: 90, r: 5 },
    { cx: 210, cy: 60, r: 5 },
    { cx: 340, cy: 120, r: 5 },
    { cx: 150, cy: 200, r: 6 },
    { cx: 300, cy: 250, r: 5 },
    { cx: 70, cy: 260, r: 5 },
  ];

  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 420 360" fill="none" className="h-full w-full" role="presentation">
        <defs>
          <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#D8823A" stopOpacity="0.15" />
            <stop offset="1" stopColor="#D8823A" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <g stroke="url(#edgeGrad)" strokeWidth="1.5">
          {edges.map((d, i) => (
            <path key={i} d={d} className="flow-edge" />
          ))}
        </g>
        <g fill="#D8823A">
          {nodes.map((n, i) => (
            <circle
              key={i}
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              className="flow-node"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </g>
        <rect
          x="18"
          y="18"
          width="384"
          height="324"
          rx="14"
          stroke="#D8823A"
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
