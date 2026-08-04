import { useRef, type ReactNode } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { fadeUp } from '@/animations/variants';

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li';
  once?: boolean;
}

/**
 * Wraps children in a scroll-triggered reveal animation. Centralizing this
 * keeps the "animate once, respect reduced motion" behaviour consistent
 * across every section of the site instead of re-implementing useInView everywhere.
 */
export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  as = 'div',
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-80px 0px' });
  const animationProps = {
    initial: 'hidden' as const,
    animate: isInView ? ('visible' as const) : ('hidden' as const),
    variants,
    transition: { delay },
    className,
  };

  if (as === 'section') {
    return (
      <motion.section ref={ref} {...animationProps}>
        {children}
      </motion.section>
    );
  }

  if (as === 'li') {
    return (
      <motion.li ref={ref} {...animationProps}>
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div ref={ref} {...animationProps}>
      {children}
    </motion.div>
  );
}
