import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-darkBlue border-b border-darkBlue/30">
      <div className="container">
        <div className="flex justify-between items-center h-header-mobile md:h-header">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/specify4itlogo.svg"
              alt="Specify4IT"
              width={180}
              height={40}
              priority
              className="h-8 md:h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8 lg:space-x-12">
              <li>
                <Link href="/product" className="nav-link">
                  THE PRODUCT
                </Link>
              </li>
              <li>
                <Link href="/about" className="nav-link">
                  ABOUT US
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:tim.warren@specify4it.com?subject=Interest%20in%20Specify4IT" 
                  className="nav-link"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </nav>
          <button className="md:hidden p-2" aria-label="Menu">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
