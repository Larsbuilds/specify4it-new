'use client';

import Image from "next/image";
import { Accordion as ProductAccordion, AccordionItem as ProductAccordionItem, AccordionTrigger as ProductAccordionTrigger, AccordionContent as ProductAccordionContent } from "@/components/ProductAccordion";
import CTASection from '@/components/CTASection';

// Enable static generation with ISR
export const revalidate = 3600; // Revalidate every hour

export default function ProductPage() {
  return (
    <div className="mt-[70px] px-[3.1rem] md:px-16 overflow-x-hidden scrollbar-none bg-[#040414] relative">
      <Image 
        src="/images/grids.svg"
        alt="Background grid"
        fill
        priority
        className="object-cover z-[-1] opacity-50"
      />
      <div className="flex flex-col gap-12 my-12 mb-24">
        <div className="md:max-w-[75%] max-w-full">
          <h1 
            className="font-[Arial] text-[62px] font-bold leading-normal normal-case tracking-[-0.02em] mb-6"
            style={{ fontFamily: 'var(--font-zen-dots), Arial Black, Arial, sans-serif' }}
          >
            Create error free
            <span className="text-[#00A3D9] block">database</span>
            <span className="text-[#00A3D9] block">systems faster</span>
          </h1>
          <h3 className="text-xl md:text-2xl font-normal">
            a new and innovative axiomatic reasoning theory to create provable specifications.
          </h3>
        </div>
        <div>
          <a href="mailto:tim.warren@specify4it.com?subject=Interest in &quot;Specify4IT&quot;">
            <button className="relative border-none text-white text-center font-['Space_Mono'] text-base font-bold leading-normal tracking-[1.6px] uppercase py-3 px-6 bg-transparent overflow-hidden box-border shadow-[inset_0px_0px_0px_1px_#fff] transition-all duration-500 ease hover:shadow-[inset_0px_0px_0px_1px_#00A3D9] hover:text-[#00A3D9] before:absolute before:content-[''] before:h-full before:w-1/4 before:bg-[#040414] before:blur-[23px] before:right-0 before:top-0 before:z-[4] before:transition-all before:duration-500 before:ease">
              GET IN TOUCH
            </button>
          </a>
        </div>
      </div>

      <div className="why mb-24">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-normal">Why Specify4IT?</h2>
          <p className="text-xl text-gray-400">
            Traditional approaches to database design are error-prone and time-consuming.
          </p>
        </div>
      </div>

      <div className="deliver py-24">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-normal">What We Deliver</h2>
            <p className="text-xl text-gray-400">
              We help you create error-free database systems faster.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-[#040414] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-normal mb-4">Automated Testing</h3>
              <p className="text-gray-400">
                Automatically test your database design against your specifications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="benefits py-24 bg-[#040414]">
        <h2 className="text-4xl font-normal mb-12">Key Benefits</h2>
        <ProductAccordion type="single" collapsible className="w-full">
          <ProductAccordionItem value="item-1">
            <ProductAccordionTrigger>Automated Verification</ProductAccordionTrigger>
            <ProductAccordionContent>
              Automatically verify your database design against your specifications.
            </ProductAccordionContent>
          </ProductAccordionItem>
        </ProductAccordion>
      </div>

      <CTASection 
        title="Ready to get started?"
        href="mailto:tim.warren@specify4it.com?subject=Interest in Specify4IT"
      />
    </div>
  );
}
