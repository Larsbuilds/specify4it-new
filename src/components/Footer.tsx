import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">
          <div>
            <Link href="/">
              <Image
                src="/images/footerlogo.svg"
                alt="Specify4IT"
                width={150}
                height={35}
              />
            </Link>
          </div>
          <div className="flex gap-12">
            <div>
              <Link href="/product" className="text-white hover:text-[#00A3D9]">
                THE PRODUCT
              </Link>
            </div>
            <div>
              <Link href="/about" className="text-white hover:text-[#00A3D9]">
                ABOUT US
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-400">
          <p>
            <a
              href="mailto:tim.warren@specify4it.com?subject=Interest%20in%20Specify4IT"
              className="text-[#00A3D9] hover:underline"
            >
              tim.warren@specify4it.com
            </a>
          </p>
          <p className="mt-2">
            4 Carriage Court Station Road Devizes Wiltshire SN10 1AB | Registered Office: Unit 2, Uffcott Farm, Uffcott, Wilts, SN4 9NB
          </p>
        </div>
      </div>
    </footer>
  );
}
