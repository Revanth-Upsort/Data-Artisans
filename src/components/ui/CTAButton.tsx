import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface CTAButtonProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** render as a real <button> for form submits instead of a link */
  as?: 'link' | 'submit';
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-card px-5 py-3 text-sm font-medium transition-colors duration-150 ease-out-soft';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-ink hover:bg-accent-hover shadow-soft hover:shadow-lift',
  secondary: 'border border-ink/20 text-ink hover:border-ink/40',
  ghost: '!px-0 !py-1 text-ink underline-offset-4 hover:text-accent hover:underline',
};

export function CTAButton({
  to,
  children,
  variant = 'primary',
  className = '',
  as = 'link',
}: CTAButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const lift = variant === 'ghost' ? {} : { whileHover: { y: -2 }, whileTap: { y: 0 } };

  if (as === 'submit') {
    return (
      <motion.button type="submit" className={cls} {...lift}>
        {children}
      </motion.button>
    );
  }

  // "/#section" → home + hash via router (so it respects the basename); bare
  // "#anchor" and "mailto:" stay raw <a> tags.
  if (to.startsWith('/#')) {
    return (
      <motion.div {...lift} className="inline-flex">
        <Link to={{ pathname: '/', hash: to.slice(2) }} className={cls}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (to.startsWith('#') || to.startsWith('mailto:')) {
    return (
      <motion.a href={to} className={cls} {...lift}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div {...lift} className="inline-flex">
      <Link to={to} className={cls}>
        {children}
      </Link>
    </motion.div>
  );
}
