import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../../data/services';

interface ServiceCardProps {
  service: Service;
  index?: number;
  /** bento variant: featured tiles are dark + span 2 cols and show a description */
  variant?: 'bento' | 'related';
}

export function ServiceCard({ service, index = 0, variant = 'bento' }: ServiceCardProps) {
  const { slug, name, icon: Icon, featured, cardDescription } = service;
  const isFeatured = variant === 'bento' && featured;

  const layout =
    variant === 'related'
      ? 'bg-white border border-ink/10 p-6'
      : isFeatured
        ? 'bg-ink text-fg-on-ink p-7 sm:p-8 min-h-[200px]'
        : 'bg-paper-dim text-ink p-5 sm:p-6 min-h-[92px] sm:min-h-[150px]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (index * 80) / 1000 }}
      whileHover={{ y: -4 }}
      className={variant === 'bento' && isFeatured ? 'sm:col-span-2' : ''}
    >
      <Link
        to={`/services/${slug}`}
        className={`group flex h-full flex-col justify-between rounded-card shadow-soft transition-shadow duration-200 hover:shadow-lift ${layout}`}
      >
        <div className="flex items-center justify-between gap-3">
          <span
            className={`grid place-items-center rounded-md ${
              isFeatured ? 'h-11 w-11 bg-accent/20 text-accent' : 'h-9 w-9 bg-ink/10 text-ink'
            }`}
            aria-hidden="true"
          >
            <Icon size={isFeatured ? 24 : 20} strokeWidth={1.6} />
          </span>
          <ArrowRight
            size={20}
            className={`transition-transform duration-200 group-hover:translate-x-1 ${
              isFeatured ? 'text-accent' : 'text-ink/40'
            }`}
          />
        </div>

        <div className={isFeatured ? 'mt-6' : 'mt-4'}>
          <h3 className={`font-medium ${isFeatured ? 'text-xl sm:text-2xl' : 'text-[15px] sm:text-base'}`}>
            {name}
          </h3>
          {(isFeatured || variant === 'related') && cardDescription && (
            <p
              className={`mt-2 max-w-md text-sm leading-relaxed ${
                isFeatured ? 'text-fg-muted' : 'text-ink/60'
              }`}
            >
              {cardDescription}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
