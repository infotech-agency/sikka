import { FadeIn } from './animations';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, className = '', light = false }: SectionHeaderProps) {
  return (
    <FadeIn className={`text-center mb-12 ${className}`}>
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px w-8 bg-[#EA4922]" />
        <span className={`text-sm font-medium uppercase tracking-wider ${light ? 'text-[#EA4922]' : 'text-[#1B4D8C]'}`}>
          {subtitle}
        </span>
        <div className="h-px w-8 bg-[#EA4922]" />
      </div>
      <h2 className={`text-3xl md:text-4xl font-bold  ${light ? 'text-white' : 'text-[#111827]'}`}>
        {title}
      </h2>
    </FadeIn>
  );
}
