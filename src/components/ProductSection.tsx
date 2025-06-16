'use client';

import { motion, type HTMLMotionProps, type Variants } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ProductAccordion"

type MotionDivProps = HTMLMotionProps<"div">;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      delayChildren: 0.1,
      staggerChildren: 0.05
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const accordionData = [
  {
    title: "Testing the code",
    content:
      "For database systems, existing methods rely on testing the final code to ensure that it complies with the specification. However, this can require hundreds of hours of coding to be completed before any error is found. Fixing the errors also requires significant time and cost. Even then clients may change their minds when they see the system working!",
  },
  {
    title: "Testing is not proof of correctness",
    content: `We should note Professor Dijkstra's warning that: "Testing can show the presence of errors but never their absence".

The fact is that programming is a complex, labour-intensive and error-prone process. If a specification cannot be proven to be correct, the resulting software cannot be proven to comply with the specification.`,
  },
  {
    title: "Formal methods",
    content:
      "An alternative would be to use Formal Methods, such as Z or B languages. However, these are really only in the domain of highly qualified experts with formal maths and logic training.",
  },
  {
    title: "A better way",
    content:
      "What if there was a way that a software specification could be created that was proven to be correct, validated by the customer, and the system behaviour checked prior to any code being generated, and accessible to all programmers?",
  },
]

export function ProductSection() {
  return (
    <motion.div
      className="py-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="px-8 md:px-12 xl:px-16">
        <div className="bg-[#0A0B14] rounded-lg p-8">
          <motion.h3 
            className="text-[32px] font-display text-brandBlue mb-6"
            variants={itemVariants}
          >
            Why are existing methods inadequate?
          </motion.h3>
          <motion.h4 
            className="text-[24px] font-[var(--font-space-mono)] text-white mb-8 normal-case tracking-[1.6px]"
            variants={itemVariants}
          >
            Current challenges in software development:
          </motion.h4>
          <Accordion type="single" defaultValue="item-0" className="w-full divide-y divide-brandBlue/20">
            {accordionData.map((accordionItem, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
              >
                <AccordionItem value={`item-${index}`} className={index === 0 ? "border-t border-brandBlue/20" : ""}>
                  <AccordionTrigger>{accordionItem.title}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-lg text-body">{accordionItem.content}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
}
