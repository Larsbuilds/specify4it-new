'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { motion, Variants } from 'framer-motion';
import { zenDots } from '@/app/fonts';

interface AnimatedVideoProps {
  webmSrc: string;
  mp4Src: string;
  fallbackSrc: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

interface CTASectionProps {
  title: string;
  href: string;
  className?: string;
}

const DynamicAnimatedVideo = dynamic<AnimatedVideoProps>(() => import('@/components/AnimatedVideo'), {
  ssr: false,
  loading: () => <div className="w-full aspect-video animate-pulse bg-gray-800 rounded" />
});

const DynamicFeatureCard = dynamic<FeatureCardProps>(() => import('@/components/FeatureCard'), {
  ssr: false,
  loading: () => <div className="w-full h-24 animate-pulse bg-gray-800 rounded" />
});

const DynamicCTASection = dynamic<CTASectionProps>(() => import('@/components/CTASection'), {
  ssr: false,
  loading: () => <div className="w-full h-24 animate-pulse bg-gray-800 rounded" />
});

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      <motion.section 
        className="relative w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        <motion.div
          className="flex flex-col gap-8 sm:gap-10 md:gap-14 py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } }
          }}
        >
          <div className="relative">
            <div 
              className="absolute inset-0 pointer-events-none select-none opacity-0"
              aria-hidden="true"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              <h1 className="text-responsive-h1 leading-[1.1] tracking-[-0.02em] text-left">
                <span className="block text-white min-h-[1.1em]">Innovative technology.</span>
                <span className="block text-brandBlue mb-4 min-h-[1.1em]">A powerful new</span>
                <span className="block text-brandBlue min-h-[1.1em]">software solution.</span>
              </h1>
            </div>
            <h1 className={`text-responsive-h1 leading-[1.1] tracking-[-0.02em] text-left ${zenDots.className}`}>
              <span className="block text-white min-h-[1.1em]">Innovative technology.</span>
              <span className="block text-brandBlue mb-4 min-h-[1.1em]">A powerful new</span>
              <span className="block text-brandBlue min-h-[1.1em]">software solution.</span>
            </h1>
          </div>

          <motion.p
            className="text-responsive-body leading-relaxed max-w-3xl text-white/80"
            variants={itemVariants}
          >
            The Specify4IT automated reasoning toolset creates error free code from provable specifications. 
            Specify4IT™ is an innovative product conceived, designed and built specifically for developers 
            who want to create relational database software right first time.
          </motion.p>

          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mt-12">
            <div className="max-w-[2000px] mx-auto">
              <Suspense
                fallback={
                  <div className="w-full aspect-video animate-pulse bg-gray-800 rounded-none sm:rounded-lg" />
                }
              >
                <DynamicAnimatedVideo
                  webmSrc="/videos/Connections-1.webm"
                  mp4Src="/videos/Connections-1.mp4"
                  fallbackSrc="/images/Connections-1.gif"
                  width={1600}
                  height={900}
                  alt="Specify4IT Demo"
                  className="w-full rounded-none sm:rounded-lg mx-auto aspect-video"
                />
              </Suspense>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <section className="section-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-[90rem] mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-body mb-8"
          >
            This automated toolset enables a user to specify software in a structured way, 
            resulting in provable specifications that can be checked and animated prior to 
            generating any code. As the specifications are created mathematically using 
            axiomatic reasoning, the subsequent code generation can be done automatically in minutes.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-body mb-8"
          >
            The result of this is error-free code, created at the click of a button; 
            estimated to take half the time and with half the workforce of conventional methods.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-body"
          >
            This impressive technology has been developed by leading technology expert John Warren, 
            whose work over 35 years has created a new method called "provable specification".
          </motion.p>
        </div>
      </section>

      {/* Why Section */}
      <motion.section 
        className="py-32 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className={`text-responsive-h2 text-center mb-16 ${zenDots.className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Why Specify4IT?
          </motion.h2>
          <motion.h3 
            className="text-h3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Create code without error
          </motion.h3>
          <motion.p 
            className="text-body mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Creating "right first time" software for large modern programs is almost impossible, 
            and users are continually frustrated by needing to install patches and updates. 
            This is not an easy issue to solve as modern programs and programming languages 
            are often too complex to be fully understood and checked by individual programmers. 
            Often clients cannot specify their needs clearly, precisely, and unambiguously, 
            making it difficult for the programmer to create code without errors.
          </motion.p>
          <motion.p 
            className="text-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Specify4IT creates error free database systems faster, mathematically provable, 
            in exact accordance with the required specifications.
          </motion.p>

          <motion.div 
            className="relative border border-[#00A3D9] p-12 sm:p-16 md:p-20 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <Suspense fallback={<div className="w-full h-24 animate-pulse bg-gray-800 rounded" />}>
                  <DynamicFeatureCard
                    icon="/images/check.svg"
                    title="Check"
                    description="there are no conflicts"
                  />
                </Suspense>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Suspense fallback={<div className="w-full h-24 animate-pulse bg-gray-800 rounded" />}>
                  <DynamicFeatureCard
                    icon="/images/animate.svg"
                    title="Animate"
                    description="user behaviour specification"
                  />
                </Suspense>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Suspense fallback={<div className="w-full h-24 animate-pulse bg-gray-800 rounded" />}>
                  <DynamicFeatureCard
                    icon="/images/deduce.svg"
                    title="Deduce"
                    description="the customer requirements"
                  />
                </Suspense>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Suspense fallback={<div className="w-full h-24 animate-pulse bg-gray-800 rounded" />}>
                  <DynamicFeatureCard
                    icon="/images/prove.svg"
                    title="Prove"
                    description="the application properties"
                  />
                </Suspense>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Background Section */}
      <motion.section 
        className="py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.h2 
            className={`text-responsive-h2 text-center mb-16 ${zenDots.className}`}
            variants={itemVariants}
          >
            Our background
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <h3 className="text-h3 mb-6">A dedicated career</h3>
            <p className="text-body mb-12">
              John Warren has spent his 50-year career dedicated to software engineering and specification, 
              resulting in him leading a successful consultancy, delivering projects to clients such as 
              British Airports Authority, British Gas, UK Department of Health, UK Department of Trade 
              and Industry, London Stock Exchange, National Grid PLC, Nuclear Electric PLC, UK Ministry 
              of Defence, and Rio Tinto PLC.
            </p>
            <div className="relative">
              <Suspense fallback={<div className="w-full aspect-video animate-pulse bg-gray-800 rounded" />}>
                <DynamicAnimatedVideo
                  webmSrc="/videos/Connections-2.webm"
                  mp4Src="/videos/Connections-2.mp4"
                  fallbackSrc="/images/Connections-2-frame-1.png"
                  alt="Connections Visualization"
                  width={1080}
                  height={1080}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
