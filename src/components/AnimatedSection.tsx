'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type MotionSectionProps = HTMLMotionProps<"section">;

interface AnimatedSectionProps extends Omit<MotionSectionProps, 'initial' | 'whileInView' | 'viewport' | 'variants'> {
  children: React.ReactNode;
  className?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function AnimatedSection({ children, className, ...props }: AnimatedSectionProps) {
  return (
    <motion.section 
      {...props}
      {...{
        className,
        initial: "initial",
        whileInView: "animate",
        viewport: { once: true },
        variants: fadeInUp
      } as MotionSectionProps}
    >
      {children}
    </motion.section>
  );
}
