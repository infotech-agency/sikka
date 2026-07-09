'use client';

import { ReactNode } from 'react';
import { Star } from 'lucide-react';

interface ServiceTileLinkProps {
  serviceId: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceTileLink({ serviceId, icon, title, description }: ServiceTileLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(serviceId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // keep the URL hash in sync without a jumpy native scroll
      window.history.pushState(null, '', `#${serviceId}`);
    }
  };

  return (
    <a
      href={`#${serviceId}`}
      onClick={handleClick}
      className="bg-[#F8FAFC] border border-gray-200 p-8 hover:border-[#C8A14A] hover:shadow-lg transition-all duration-300 group h-full block"
    >
      <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mb-6 group-hover:bg-[#1B4D8C] transition-colors">
        {icon}
      </div>
      <h3 className="text-xl text-[#111827] mb-3">{title}</h3>
      <p className="text-[#374151] text-sm leading-relaxed mb-4 line-clamp-3">{description}</p>
      <div className="flex items-center gap-2 text-[#0B2E59] font-semibold text-sm">
        <Star className="h-4 w-4 text-[#C8A14A]" />
        <span>Learn More</span>
      </div>
    </a>
  );
}