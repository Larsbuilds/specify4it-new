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
      staggerChildren: 0.2,
      delayChildren: 0.4,
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const itemVariants: Variants = {
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
      {...{
        className: "sectionr",
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
        variants: containerVariants
      } as MotionDivProps}
    >
      <Accordion type="single" defaultValue="item-0" className="w-full divide-y divide-brandBlue/50">
        {accordionData.map((accordionItem, index) => (
          <motion.div
            key={index}
            {...{
              variants: itemVariants
            } as MotionDivProps}
          >
              <AccordionItem
                value={`item-${index}`}
                className="mb-0 rounded-lg hover:bg-gray-50/5 transition-colors duration-200"
              >
                <AccordionTrigger className="hover:no-underline py-2 text-left">
                  <h3 className="text-h3 font-display text-brandBlue">{accordionItem.title}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-body">{accordionItem.content}</p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
    </motion.div>
  );
}
