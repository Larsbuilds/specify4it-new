'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

interface CTASectionProps {
  title: string;
  href: string;
  className?: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function CTASection({ href, title }: CTASectionProps) {
  return (
    <motion.section
      className="relative border border-[#00A3D9] p-12 sm:p-16 md:p-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="absolute inset-0 bg-[#040414]" />
      <motion.div 
        className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12"
        variants={containerVariants}
      >
        <motion.div 
          className="flex-1 w-full sm:w-auto"
          variants={fadeInUp}
        >
          <h2 className="font-[var(--font-zen-dots)] text-[42px] sm:text-[52px] md:text-[72px] leading-[1.1] text-white">
            {title}
            <motion.span 
              className="block text-[#00A3D9] mt-2"
              variants={fadeInUp}
            >
              Find out more
            </motion.span>
          </h2>
        </motion.div>
        <motion.div
          variants={fadeInUp}
        >
          <Link
            href={href}
            className="relative text-white font-[var(--font-space-mono)] text-base leading-normal tracking-[1.6px] uppercase py-3 px-6 bg-transparent overflow-hidden shadow-[inset_0px_0px_0px_1px_#fff] transition-all duration-500 ease-in-out hover:shadow-[inset_0px_0px_0px_1px_#00A3D9] hover:text-[#00A3D9] border-none whitespace-nowrap"
          >
            CONTACT US
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
