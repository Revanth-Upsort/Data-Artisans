import { motion } from 'framer-motion';
import type { CaseStudy } from '../../data/caseStudies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
}

export function CaseStudyCard({ caseStudy, index = 0 }: CaseStudyCardProps) {
  const { client, industry, challenge, metric, metricLabel } = caseStudy;
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (index * 80) / 1000 }}
      whileHover={{ y: -4 }}
      className="flex h-full flex-col rounded-card border border-ink/10 bg-white p-6 shadow-soft transition-shadow duration-200 hover:shadow-lift"
    >
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">{industry}</p>
      <h3 className="mt-2 text-base font-medium text-ink">{client}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{challenge}</p>
      <div className="mt-5 border-t border-ink/10 pt-5">
        <p className="text-3xl font-semibold tracking-tight text-ink">
          {metric}
          <span className="ml-1 align-middle text-xs font-normal text-accent">PLACEHOLDER</span>
        </p>
        <p className="mt-1 text-sm text-ink/60">{metricLabel}</p>
      </div>
    </motion.article>
  );
}
