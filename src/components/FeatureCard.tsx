import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="feature-card p-6 rounded-lg bg-darkBlue/30 backdrop-blur-sm hover:bg-darkBlue/40 transition-all">
      <div className="mb-4">
        <Image src={icon} alt={title} width={48} height={48} className="w-12 h-12" />
      </div>
      <h5 className="text-h5 mb-3">{title}</h5>
      <p className="text-body">{description}</p>
    </div>
  );
}
