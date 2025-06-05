import Image from 'next/image';
import CTASection from '@/components/CTASection';

export default function ProductPage() {
  return (
    <div className="space-y-24">
      <section className="section-hero pt-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-8">Create error free database systems faster</h1>
            <p className="text-body mb-12 mx-auto max-w-2xl">
              A new and innovative axiomatic reasoning theory to create provable specifications.
            </p>
            <div className="relative mb-16">
              <Image
                src="/images/Connections-1.gif"
                alt="Specify4IT Demo"
                width={800}
                height={450}
                priority
                className="w-full h-auto shadow-glow rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkBlue/20 backdrop-blur-sm">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h4 className="text-h4 mb-6">What does Specify4IT deliver?</h4>
            <p className="text-body mb-8">
              Specify4IT creates error free database systems faster, mathematically provable, 
              in exact accordance with the required specifications.
            </p>
            <h5 className="text-h5 mb-4">Mathematical proof of correctness</h5>
            <p className="text-body">
              This is achieved by expressing the specification in a very structured manner; 
              defining the system as a set of processes, interconnected by rules, and triggered 
              by events. In this way, a specification is created that can be mathematically 
              checked for consistency, and its behaviour can be assessed, and animated to ensure 
              correctness, and compliance to the specification can be proven. All before any code 
              is generated.
            </p>
            <p className="text-body mt-4 mb-12">
              Specify4IT can then use this mathematically defined specification, which has been 
              agreed by the client, and automatically generate error free code.
            </p>

            <h4 className="text-h4 mb-6">What are the benefits?</h4>
            <p className="text-body mb-8">
              Time to deliver can be halved compared to conventional methods
            </p>
            <div className="space-y-8">
              <div>
                <h5 className="text-h5 mb-4">1. Improved productivity</h5>
                <p className="text-body">
                  The creation of high-quality database software more quickly and with significantly 
                  reduced costs, resulting in improved productivity and profitability.
                </p>
              </div>
              <div>
                <h5 className="text-h5 mb-4">2. Error free software</h5>
                <p className="text-body">
                  The use of this new and innovative axiomatic reasoning system enables every user 
                  to create accurate specifications that result in error free software. Once specified 
                  an application can be delivered within hours of its specification being complete.
                </p>
              </div>
              <div>
                <h5 className="text-h5 mb-4">3. Halving the time</h5>
                <p className="text-body">
                  We estimate that database projects created using Specify4IT will only require half 
                  the staff for half the time to achieve successful delivery, compared to a conventional 
                  approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to eliminate software errors?"
        href="mailto:tim.warren@specify4it.com?subject=Interest%20in%20Specify4IT"
      />
    </div>
  );
}
