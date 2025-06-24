import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="feature-card flex flex-col items-center text-center transition-transform duration-300 hover:scale-110">
      <div className="mb-8">
        <Image src={icon} alt={title} width={64} height={64} className="w-16 h-16 text-[#00A3D9]" />
      </div>
      <h3 className="mb-4 font-display text-[28px] text-white tracking-wider">{title}</h3>
      <p className="text-body font-[var(--font-space-mono)] text-base leading-normal tracking-[1.6px] text-white">{description}</p>
    </div>
  );
}
