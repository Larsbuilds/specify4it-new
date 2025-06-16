'use client';

import { motion, type Variants, type TargetAndTransition, type AnimationControls } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  initial?: boolean | TargetAndTransition;
  animate?: boolean | TargetAndTransition | AnimationControls;
  transition?: object;
  style?: object;
  suppressHydrationWarning?: boolean;
}

export function MotionWrapper({ children, className, variants, initial, animate, transition, style, suppressHydrationWarning, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
      style={style}
      suppressHydrationWarning={suppressHydrationWarning}
      {...props}
    >
      {children}
    </motion.div>
  );
}
