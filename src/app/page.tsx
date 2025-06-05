import Image from "next/image";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-8">Specification Management Software</h1>
            <p className="text-body mb-12 mx-auto max-w-2xl">
              Specify4IT is a cloud-based specification management software
              designed specifically for construction industry professionals.
            </p>
            <div className="relative">
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

      {/* Features Section */}
      <section className="section bg-black/30 backdrop-blur-sm">
        <div className="container">
          <h2 className="text-center mb-16">Why Choose Specify4IT?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center p-6 rounded-lg hover:bg-white/5 transition-colors duration-300">
              <div className="mb-6">
                <Image
                  src="/images/deduce.svg"
                  alt="Easy to Use"
                  width={48}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <h4 className="mb-4">Easy to Use</h4>
              <p className="text-white/70">
                Our intuitive interface makes it simple to create, edit, and manage
                your specifications.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-white/5 transition-colors duration-300">
              <div className="mb-6">
                <Image
                  src="/images/animate.svg"
                  alt="Cloud-Based"
                  width={48}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <h4 className="mb-4">Cloud-Based</h4>
              <p className="text-white/70">
                Access your specifications from anywhere, collaborate with your
                team in real-time.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-white/5 transition-colors duration-300">
              <div className="mb-6">
                <Image
                  src="/images/prove.svg"
                  alt="Secure"
                  width={48}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <h4 className="mb-4">Secure</h4>
              <p className="text-white/70">
                Your data is protected with enterprise-grade security and regular
                backups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta">
        <div className="container text-center">
          <h2 className="mb-8">Ready to Get Started?</h2>
          <p className="text-body mb-12 mx-auto max-w-2xl text-white/70">
            Join thousands of professionals who trust Specify4IT for their
            specification needs.
          </p>
          <Link href="/product" className="button">
            Learn More
          </Link>
        </div>
      </section>

      {/* Why Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-center mb-12">Why Specify4IT?</h2>
        <div className="max-w-4xl mx-auto">
          <h4 className="mb-6">Create code without error</h4>
          <p className="text-body mb-12">
            Creating "right first time" software for large modern programs is almost impossible, and users are continually frustrated by needing to install patches and updates. This is not an easy issue to solve as modern programs and programming languages are often too complex to be fully understood and checked by individual programmers. Often clients cannot specify their needs clearly, precisely, and unambiguously, making it difficult for the programmer to create code without errors.
          </p>
          <p className="text-body mb-16">
            Specify4IT creates error free database systems faster, mathematically provable, in exact accordance with the required specifications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Image src="/images/check.svg" alt="Check" width={64} height={64} className="mx-auto mb-4" />
              <h5>Check</h5>
              <p className="text-sm">there are no conflicts</p>
            </div>
            <div>
              <Image src="/images/animate.svg" alt="Animate" width={64} height={64} className="mx-auto mb-4" />
              <h5>Animate</h5>
              <p className="text-sm">user behaviour specification</p>
            </div>
            <div>
              <Image src="/images/deduce.svg" alt="Deduce" width={64} height={64} className="mx-auto mb-4" />
              <h5>Deduce</h5>
              <p className="text-sm">the customer requirements</p>
            </div>
            <div>
              <Image src="/images/prove.svg" alt="Prove" width={64} height={64} className="mx-auto mb-4" />
              <h5>Prove</h5>
              <p className="text-sm">the application properties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Our background</h2>
          <h4 className="mb-6">A dedicated career</h4>
          <p className="text-body mb-12">
            John Warren has spent his 50-year career dedicated to software engineering and specification, resulting in him leading a successful consultancy, delivering projects to clients such as British Airports Authority, British Gas, UK Department of Health, UK Department of Trade and Industry, London Stock Exchange, National Grid PLC, Nuclear Electric PLC, UK Ministry of Defence, and Rio Tinto PLC.
          </p>
          <Image
            src="/images/Connections-2-frame-1.png"
            alt="Connections visualization"
            width={800}
            height={450}
            className="mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
