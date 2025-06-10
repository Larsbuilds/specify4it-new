import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black py-section md:py-section-lg">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
          <div className="w-full md:w-auto">
            <Link href="/" className="block">
              <Image
                src="/images/footerlogo.svg"
                alt="Specify4IT"
                width={150}
                height={35}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <Link href="/product" className="nav-link text-sm md:text-base">
                THE PRODUCT
              </Link>
            </div>
            <div>
              <Link href="/about" className="nav-link text-sm md:text-base">
                ABOUT US
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 space-y-4 md:space-y-6 text-sm md:text-base text-white/70">
          <p>
            <a
              href="mailto:tim.warren@specify4it.com?subject=Interest%20in%20Specify4IT"
              className="text-brandBlue hover:underline inline-block"
            >
              tim.warren@specify4it.com
            </a>
          </p>
          <p className="leading-relaxed md:max-w-2xl">
            4 Carriage Court Station Road Devizes Wiltshire SN10 1AB | Registered Office: Unit 2, Uffcott Farm, Uffcott, Wilts, SN4 9NB
          </p>
        </div>
      </div>
    </footer>
  );
}
