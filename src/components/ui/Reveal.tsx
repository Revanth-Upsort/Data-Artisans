import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  /** stagger delay in ms — handy for grids */
  delay?: number;
  as?: 'div' | 'li' | 'section';
}

/**
 * Scroll-entrance wrapper: fade + 12px slide-up when the element enters the
 * viewport. Respects reduced-motion automatically via Framer Motion.
 */
export function Reveal({ children, delay = 0, as = 'div', ...rest }: RevealProps) {
  // motion.li / motion.section share the same prop surface we use here; cast to
  // motion.div to keep the polymorphic `as` ergonomic without fighting the types.
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: delay / 1000 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
