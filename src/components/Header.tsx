import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/specify4itlogo.svg"
            alt="Specify4IT"
            width={180}
            height={40}
            priority
          />
        </Link>
        <nav>
          <ul className="flex gap-8 items-center">
            <li>
              <Link href="/product" className="font-zen-dots text-white hover:text-[#00A3D9]">
                THE PRODUCT
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-zen-dots text-white hover:text-[#00A3D9]">
                ABOUT US
              </Link>
            </li>
            <li>
              <a
                href="mailto:tim.warren@specify4it.com?subject=Interest%20in%20Specify4IT"
                className="bg-[#00A3D9] text-white px-6 py-2 rounded hover:bg-[#0082AD] transition-colors"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
