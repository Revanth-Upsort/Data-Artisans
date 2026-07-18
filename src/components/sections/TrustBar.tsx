import { stats } from '../../data/site';
import { StatBlock } from '../ui/StatBlock';

export function TrustBar() {
  return (
    <section className="bg-ink" aria-label="Key stats">
      <div className="border-t border-white/10">
        <ul className="container-page no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto py-6 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
          {stats.map((stat) => (
            <li key={stat.label} className="min-w-[70%] shrink-0 snap-center md:min-w-0">
              <StatBlock value={stat.value} label={stat.label} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
