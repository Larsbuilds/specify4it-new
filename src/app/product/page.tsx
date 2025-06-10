'use client';

import Image from 'next/image';
import CTASection from '@/components/CTASection';
import { ProductSection } from '@/components/ProductSection';
import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';

type MotionDivProps = HTMLMotionProps<"div">;

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

// Enable static generation with ISR
export const revalidate = 3600; // Revalidate every hour

export default function ProductPage() {
  return (
    <main className="mt-[70px] px-[3.1rem] md:px-16 overflow-x-hidden scrollbar-none bg-[#040414] bg-[url('/images/grids.svg')] bg-[-7.2rem_top]">
      <motion.div
        {...{
          className: "intro flex flex-col gap-12 my-12 mb-24 md:max-w-[75%] max-w-full",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.3 },
          variants: fadeInUp
        } as MotionDivProps}
      >
        <h1 className="font-['Zen_Dots'] text-[62px] font-normal leading-normal normal-case tracking-[-0.02em]">
          Create error free
          <span className="text-[#00A3D9] block">database</span>
          <span className="text-[#00A3D9] block">systems faster</span>
        </h1>
        <h3 className="text-xl md:text-2xl font-normal">
          a new and innovative axiomatic reasoning theory to create provable specifications.
        </h3>
        <a href="mailto:tim.warren@specify4it.com?subject=Interest in &quot;Specify4IT&quot;">
          <button className="relative border-none text-white text-center font-['Space_Mono'] text-base font-bold leading-normal tracking-[1.6px] uppercase py-3 px-6 bg-transparent overflow-hidden box-border shadow-[inset_0px_0px_0px_1px_#fff] transition-all duration-500 ease hover:shadow-[inset_0px_0px_0px_1px_#00A3D9] hover:text-[#00A3D9] before:absolute before:content-[''] before:h-full before:w-1/4 before:bg-[#040414] before:blur-[23px] before:right-0 before:top-0 before:z-[4] before:transition-all before:duration-500 before:ease">
            GET IN TOUCH
          </button>
        </a>
      </motion.div>

      <motion.div
        {...{
          className: "why mb-24",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.3 },
          variants: fadeInUp
        } as MotionDivProps}
      >
        <h2 className="text-4xl font-bold mb-12">Why is Specify4IT needed?</h2>
        <div className="whycontentholder">
          <div className="whycontent">
            <h3 className="text-2xl font-bold mb-4">Create code without error</h3>
            <p className="text-lg">
              Creating "right first time" software for large modern programs is almost impossible, and users are continually frustrated by needing to install patches and updates. This is not an easy issue to solve as modern programs and programming languages are often too complex to be fully understood and checked by individual programmers. Often clients cannot specify their needs clearly, precisely, and unambiguously, making it difficult for the programmer to create code without errors.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        {...{
          className: "deliver py-24",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.3 },
          variants: fadeInUp
        } as MotionDivProps}
      >
        <h2 className="text-4xl font-bold mb-8">What does Specify4IT deliver?</h2>
        <h3 className="text-2xl mb-12">
          Specify4IT creates <span className="text-[#00A3FF]">error free</span> database systems faster, mathematically provable, in exact accordance with the required specifications.
        </h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mathematical proof of correctness</h3>
            <p className="text-lg mb-6">
              This is achieved by expressing the specification in a very structured manner; defining the system as a set of processes, interconnected by rules, and triggered by events. In this way, a specification is created that can be mathematically checked for consistency, and its behaviour can be assessed, and animated to ensure correctness, and compliance to the specification can be proven. All before any code is generated.
            </p>
            <p className="text-lg mb-8">
              Specify4IT can then use this mathematically defined specification, which has been agreed by the client, and automatically generate error free code.
            </p>
            <a href="mailto:tim.warren@specify4it.com?subject=Interest in &quot;Specify4IT&quot;">
              <button className="bg-[#00A3FF] hover:bg-[#0082CC] text-white px-8 py-3 rounded transition-colors">
                Get in touch
              </button>
            </a>
          </div>
          <motion.div
            {...{
              className: "relative",
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true, amount: 0.3 },
              transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
            } as MotionDivProps}
          >
            <div className="bg-[#0A0B14] rounded-lg overflow-hidden">
              <Image
                src="/images/Connections-1.gif"
                alt="Specify4IT Process Animation"
                width={1080}
                height={1080}
                className="w-full h-auto mix-blend-lighten"
                style={{ filter: 'brightness(1.2) contrast(1.1)' }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        {...{
          className: "benefits py-24",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.3 },
          variants: fadeInUp
        } as MotionDivProps}
      >
        <h2 className="text-4xl font-bold mb-8">What are the benefits?</h2>
        <p className="text-xl mb-12">Time to deliver can be halved compared to conventional methods</p>
        <div className="space-y-8 max-w-3xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4">1. Improved productivity</h3>
            <p className="text-lg">
              The creation of high-quality database software more quickly and with significantly reduced costs, resulting in improved productivity and profitability.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">2. Error free software</h3>
            <p className="text-lg">
              The use of this new and innovative axiomatic reasoning system enables every user to create accurate specifications that result in error free software. Once specified an application can be delivered within hours of its specification being complete.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">3. Halving the time</h3>
            <p className="text-lg">
              We estimate that database projects created using Specify4IT will only require half the staff for half the time to achieve successful delivery, compared to a conventional approach.
            </p>
          </div>
        </div>
      </motion.div>

      <ProductSection />
      <CTASection 
        title="Get in touch today"
        href="mailto:tim.warren@specify4it.com?subject=Interest in &quot;Specify4IT&quot;"
      />
    </main>

  );
}
