import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/specify4itlogo.svg"
              alt="Specify4IT"
              width={180}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </Link>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="nav-link">
                  THE PRODUCT
                </Link>
              </li>
              <li>
                <Link href="/about" className="nav-link">
                  ABOUT US
                </Link>
              </li>
              <li>
                <a href="mailto:info@specify4it.com" className="nav-link">
                  CONTACT US
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
