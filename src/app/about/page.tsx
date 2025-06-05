import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="space-y-24">
      <section className="section-hero pt-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-8">About Specify4IT</h1>
            <p className="text-body mb-12 mx-auto max-w-2xl">
              Specify4IT is developed by Precision Design Technology Ltd, a company dedicated to 
              creating error-free software through mathematical precision.
            </p>
            <div className="relative mb-16">
              <Image
                src="/images/Connections-2-frame-1.png"
                alt="Specify4IT Technology"
                width={800}
                height={450}
                priority
                className="w-full h-auto shadow-glow rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h4 className="text-h4 mb-6">A dedicated career</h4>
            <p className="text-body mb-8">
              John Warren has spent his 50-year career dedicated to software engineering and specification, 
              resulting in him leading a successful consultancy, delivering projects to clients such as 
              British Airports Authority, British Gas, UK Department of Health, UK Department of Trade 
              and Industry, London Stock Exchange, National Grid PLC, Nuclear Electric PLC, UK Ministry 
              of Defence, and Rio Tinto PLC.
            </p>
            <p className="text-body mb-8">
              This impressive technology has been developed by leading technology expert John Warren, 
              whose work over 35 years has created a new method called "provable specification".
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkBlue/20 backdrop-blur-sm">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h4 className="text-h4 mb-6">Contact Information</h4>
            <div className="space-y-8">
              <div>
                <h5 className="text-h5 mb-4">Email</h5>
                <p className="text-body">
                  <a href="mailto:tim.warren@specify4it.com" className="hover:text-blue-400 transition-colors">
                    tim.warren@specify4it.com
                  </a>
                </p>
              </div>
              <div>
                <h5 className="text-h5 mb-4">Registered Office</h5>
                <p className="text-body">
                  Precision Design Technology Ltd<br />
                  71-75 Shelton Street<br />
                  Covent Garden<br />
                  London<br />
                  WC2H 9JQ
                </p>
              </div>
              <div>
                <h5 className="text-h5 mb-4">Additional Locations</h5>
                <p className="text-body mb-4">
                  4 Carriage Court Station Road<br />
                  Devizes, Wiltshire SN10 1AB
                </p>
                <p className="text-body">
                  Uffcott Manor<br />
                  Uffcott, Wilts, SN4 9NB
                </p>
              </div>
              <div>
                <h5 className="text-h5 mb-4">Company Details</h5>
                <p className="text-body">
                  Registered in England and Wales<br />
                  Company Number: 13743750
                </p>
                <p className="text-body mt-4">
                  &copy; 2017 to 2024 // Precision Design Technology Ltd
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
