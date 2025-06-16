import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Zen_Dots } from 'next/font/google';

const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

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

// Force static generation for this page
export const metadata = {
  dynamic: 'force-static',
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-darkBlue">
      <section className="flex flex-col gap-12 my-12 md:my-12 lg:my-24 max-w-[75%] mx-auto overflow-hidden">
        <div className="w-full">
          <div className="w-full">
            <div className="relative">
              <div className="w-full">
                <MotionWrapper
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="font-display antialiased max-w-[1400px]"
                  suppressHydrationWarning
                  style={{
                    textRendering: 'optimizeLegibility',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                  }}
                >
                  <h1 className={`text-[62px] leading-[1.1] tracking-[-0.02em] text-left ${zenDots.className}`}>
                    <span className="block text-white">Innovative technology.</span>
                    <span className="block text-brandBlue mb-4">A powerful new</span>
                    <span className="block text-brandBlue">software solution.</span>
                  </h1>
                </MotionWrapper>
                <MotionWrapper 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="text-xl sm:text-2xl lg:text-3xl leading-relaxed max-w-3xl text-white/80 mt-12 lg:mt-16"
                >
                  The Specify4IT automated reasoning toolset creates error free code from provable specifications. 
                  Specify4IT™ is an innovative product conceived, designed and built specifically for developers 
                  who want to create relational database software right first time.
                </MotionWrapper>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
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
                    className="w-full shadow-glow rounded-none sm:rounded-lg mx-auto aspect-video"
                  />
                </Suspense>
              </div>
            </div>
          </div>

          <div className="w-full mt-24">
            <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
                <MotionWrapper
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-3xl mx-auto"
                >
                  <p className="text-body mb-8">
                    This automated toolset enables a user to specify software in a structured way, 
                    resulting in provable specifications that can be checked and animated prior to 
                    generating any code. As the specifications are created mathematically using 
                    axiomatic reasoning, the subsequent code generation can be done automatically in minutes.
                  </p>
                  <p className="text-body mb-8">
                    The result of this is error-free code, created at the click of a button; 
                    estimated to take half the time and with half the workforce of conventional methods.
                  </p>
                  <p className="text-body">
                    This impressive technology has been developed by leading technology expert John Warren, 
                    whose work over 35 years has created a new method called "provable specification".
                  </p>
                </MotionWrapper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <DynamicCTASection 
        title="Get in touch today to find out more"
        href="mailto:tim.warren@specify4it.com?subject=Interest%20in%20Specify4IT"
      />

      {/* Why Section */}
      <section className="py-32 bg-darkBlue/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-h2 text-center mb-16">Why Specify4IT?</h2>
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-h3 mb-6">Create code without error</h3>
            <p className="text-body mb-8">
              Creating "right first time" software for large modern programs is almost impossible, 
              and users are continually frustrated by needing to install patches and updates. 
              This is not an easy issue to solve as modern programs and programming languages 
              are often too complex to be fully understood and checked by individual programmers. 
              Often clients cannot specify their needs clearly, precisely, and unambiguously, 
              making it difficult for the programmer to create code without errors.
            </p>
            <p className="text-body">
              Specify4IT creates error free database systems faster, mathematically provable, 
              in exact accordance with the required specifications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DynamicFeatureCard
              icon="/images/check.svg"
              title="Check"
              description="there are no conflicts"
            />
            <DynamicFeatureCard
              icon="/images/animate.svg"
              title="Animate"
              description="user behaviour specification"
            />
            <DynamicFeatureCard
              icon="/images/deduce.svg"
              title="Deduce"
              description="the customer requirements"
            />
            <DynamicFeatureCard
              icon="/images/prove.svg"
              title="Prove"
              description="the application properties"
            />
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-h2 text-center mb-16">Our background</h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-h3 mb-6">A dedicated career</h3>
            <p className="text-body mb-12">
              John Warren has spent his 50-year career dedicated to software engineering and specification, 
              resulting in him leading a successful consultancy, delivering projects to clients such as 
              British Airports Authority, British Gas, UK Department of Health, UK Department of Trade 
              and Industry, London Stock Exchange, National Grid PLC, Nuclear Electric PLC, UK Ministry 
              of Defence, and Rio Tinto PLC.
            </p>
            <div className="relative">
              <DynamicAnimatedVideo
                webmSrc="/videos/Connections-2.webm"
                mp4Src="/videos/Connections-2.mp4"
                fallbackSrc="/images/Connections-2-frame-1.png"
                alt="Connections Visualization"
                width={1080}
                height={1080}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
