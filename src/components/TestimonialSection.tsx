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

const testimonials = [
  {
    quote: "Specify4IT is able to provide a higher degree of certainty that the software will behave correctly under all possible inputs and conditions.",
    source: "TESTIMONIAL BY THE INDEPENDENT EXAMINER"
  },
  {
    quote: "Specify4IT would be very beneficial in developing software for safety-critical and high assurance systems, particularly in industries where the reliability and security of software is paramount.",
    source: "TESTIMONIAL BY THE INDEPENDENT EXAMINER"
  }
];

export function TestimonialSection() {
  return (
    <motion.section
      className="py-32 bg-[#040414]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="w-full px-8 md:px-12 xl:px-24">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 w-full max-w-[1400px] mx-auto" variants={containerVariants}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              variants={itemVariants}
            >
              <p className="text-[24px] font-[var(--font-space-mono)] text-white mb-6 leading-normal">
                "{item.quote}"
              </p>
              <p className="text-lg font-[var(--font-space-mono)] text-[#00B7E5] tracking-wide">
                {item.source}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
