import Link from 'next/link';

interface CTASectionProps {
  title: string;
  href: string;
  className?: string;
}

export default function CTASection({ href, title }: CTASectionProps) {
  return (
    <section className="bg-darkBlue border border-brandBlue/20 flex justify-between items-center p-12 mt-48">
      <h2 className="font-display text-[42px] tracking-[0.15em] leading-none">
        {title.toUpperCase()}<br />
        <span className="text-brandBlue">TO FIND OUT MORE</span>
      </h2>
      <div className="border border-white/20 px-4 py-2">
        <Link
          href={href}
          className="text-[13px] tracking-[0.25em] hover:opacity-80 transition-opacity"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
}
