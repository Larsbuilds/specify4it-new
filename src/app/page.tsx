import Image from 'next/image';
import { AnimatedVideo } from '@/components/AnimatedVideo';
import { DynamicFeatureCard, DynamicCTASection } from '@/utils/dynamicImports';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="section-hero pt-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-8">Specification Management Software</h1>
            <p className="text-body mb-12 mx-auto max-w-2xl">
              The automated reasoning toolset creates error free code from provable specifications. 
              Specify4IT™ is an innovative product conceived, designed and built specifically for developers 
              who want to create relational database software right first time.
            </p>
            <div className="relative mb-16">
              <AnimatedVideo
                webmSrc="/videos/Connections-1.webm"
                mp4Src="/videos/Connections-1.mp4"
                fallbackSrc="/images/Connections-1.gif"
                width={800}
                height={450}
                alt="Specify4IT Demo"
                className="w-full h-auto shadow-glow rounded-lg mx-auto"
              />
            </div>
            <div className="max-w-3xl mx-auto">
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
      <section className="py-24 bg-darkBlue/20 backdrop-blur-sm">
        <div className="container">
          <h2 className="text-h2 text-center mb-16">Why Specify4IT?</h2>
          <div className="max-w-3xl mx-auto mb-16">
            <h4 className="text-h4 mb-6">Create code without error</h4>
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
      <section className="py-24">
        <div className="container">
          <h2 className="text-h2 text-center mb-16">Our background</h2>
          <div className="max-w-3xl mx-auto">
            <h4 className="text-h4 mb-6">A dedicated career</h4>
            <p className="text-body mb-12">
              John Warren has spent his 50-year career dedicated to software engineering and specification, 
              resulting in him leading a successful consultancy, delivering projects to clients such as 
              British Airports Authority, British Gas, UK Department of Health, UK Department of Trade 
              and Industry, London Stock Exchange, National Grid PLC, Nuclear Electric PLC, UK Ministry 
              of Defence, and Rio Tinto PLC.
            </p>
            <div className="relative">
              <AnimatedVideo
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
    </div>
  );
}
