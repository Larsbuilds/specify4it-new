import Link from 'next/link';

interface CTASectionProps {
  title: string;
  href: string;
  className?: string;
}

export default function CTASection({ title, href, className = '' }: CTASectionProps) {
  return (
    <section className={`py-24 text-center ${className}`}>
      <Link 
        href={href}
        className="inline-block hover:opacity-80 transition-opacity"
      >
        <h2 className="text-h2 mb-4">{title}</h2>
        <p className="text-body">Get in touch today to find out more</p>
      </Link>
    </section>
  );
}
