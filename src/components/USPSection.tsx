'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const uspItems = [
  {
    title: "Check",
    icon: "check",
    description:
      "Check that all aspects of the specification are consistent and that there are no conflicts.",
  },
  {
    title: "Animate",
    icon: "animate",
    description:
      "Animate the behaviour embodied in the user specification, so that a user can assess what happens in all situations.",
  },
  {
    title: "Deduce",
    icon: "deduce",
    description:
      "Deduce the application requirements, for comparison with the original instructions from the customer.",
  },
  {
    title: "Prove",
    icon: "prove",
    description: "Prove the properties of the application.",
  },
];

export function USPSection() {
  return (
    <motion.section
      className="py-32 bg-[#040414]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="w-full px-8 md:px-12 xl:px-24">
        <motion.div className="sectionintro max-w-[1400px] mx-auto mb-24" variants={itemVariants}>
          <h2 className="text-[48px] font-[var(--font-zen-dots)] mb-12">
            How does Specify4IT do this?
          </h2>
          <h4 className="text-[32px] font-[var(--font-space-mono)] text-brandBlue mb-8">
            Highly innovative
          </h4>
          <p className="text-xl font-[var(--font-space-mono)] text-body mb-8 leading-relaxed">
            The Specify4IT automated toolset uses a new and innovative axiomatic reasoning theory for provable software (named Predict) to enable this revolution in software creation.
          </p>
          <p className="text-xl font-[var(--font-space-mono)] text-body leading-relaxed">
            Prior to any code generation, Specify4IT allows the user to:
          </p>
        </motion.div>

        <motion.div className="border border-[#00B7E5] p-12 mb-24 w-full max-w-[1400px] mx-auto" variants={containerVariants}>
          <div className="grid grid-cols-1 gap-12">
          {uspItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-transparent h-full"
              variants={itemVariants}
            >
              <div className="flex flex-row items-center gap-12">
                <div className="flex-shrink-0">
                  <Image
                    src={`/images/${item.icon}.svg`}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="w-24 h-24 text-[#00B7E5]"
                  />
                </div>
                <div className="itemtext flex-grow">
                  <h5 className="text-[32px] font-[var(--font-zen-dots)] text-[#00B7E5] mb-4">{item.title}</h5>
                  <p className="text-xl font-[var(--font-space-mono)] text-white leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </motion.div>

        <motion.div className="sectionintro max-w-[1400px] mx-auto" variants={itemVariants}>
          <p className="text-xl font-[var(--font-space-mono)] text-body mb-8 leading-relaxed">
            Animation, deduction, and proof of the specification are automatically completed. The actual code for the specific application is generated automatically - in a matter of minutes.
          </p>
          <p className="text-xl font-[var(--font-space-mono)] text-body leading-relaxed">
            Specify4IT ensures specifications are Complete, Consistent, Correct and Comprehensible and this has been independently verified with Imperial College London.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
