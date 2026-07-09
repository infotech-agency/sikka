'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'BUSINESSES',
    iconSrc: 'https://www.svgrepo.com/show/456987/tower-eiffel.svg', 
  },
  {
    title: 'PROJECTS',
    iconSrc: 'https://www.svgrepo.com/show/420581/light-lights-rail.svg', 
  },
  {
    title: 'SERVICES',
    iconSrc: 'https://www.svgrepo.com/show/357211/services.svg', 
  },
];

export function NavigationCardsSection() {
  return (
    <section className="relative min-h-[600px] w-full bg-white pt-20 pb-40 overflow-hidden flex flex-col justify-start">
      
      {/* Top Cards Grid */}
   

      {/* Bottom Industrial Building SVG Vector */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[180px] sm:h-[240px] md:h-[300px] bg-bottom bg-no-repeat bg-contain pointer-events-none z-0"
        style={{ backgroundImage: `url('/images/construction3.png')` }} 
      />
    </section>
  );
}