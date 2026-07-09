'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';


import { SectionHeader } from '@/components/SectionHeader';
import { FadeIn } from '@/components/animations';
import { timeline } from '@/lib/data';



export default function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.2'], // truck starts moving slightly before/after section enters/exits view
  });

  // Smooth, controlled follow — same fix as the train component
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.5,
    restDelta: 0.001,
  });

  // Truck travels from top (0%) to bottom (100%) of the timeline track
  const truckTop = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="py-20 bg-[#0B2E59] relative">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Our Journey" subtitle="Company History" light />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#C8A14A]/30 md:-translate-x-1/2" />

          {/* Animated Truck following the line */}
          {/* <motion.div
            style={{ top: truckTop }}
            className="absolute left-4 md:left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 md:-translate-x-1/2 pointer-events-none"
          >
            <Image
              src="/images/truck.png"
              alt="Truck"
              width={128}
              height={128}
              className="w-40 h-40 md:w-14 md:h-14 object-contain drop-shadow-[0_8px_16px_rgba(200,161,74,0.4)]"
              priority
            />
          </motion.div> */}
            <motion.div
  style={{ top: truckTop }}
  className="absolute left-4 md:left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 md:-translate-x-1/2 pointer-events-none"
>
  <Image
    src="/images/truck.png"
    alt="Truck"
    width={200}
    height={200}
    className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-[0_8px_16px_rgba(200,161,74,0.4)]"
    priority
  />
</motion.div>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 md:text-right pl-12 md:pl-0">
                    <div
                      className={`bg-white/5 border border-white/10 p-6 ${
                        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                      }`}
                    >
                      <div className="text-[#C8A14A] text-2xl font-bold font-[Merriweather] mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-white font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Static dot remains as a marker on the line */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white/40 border-2 border-[#0B2E59] rounded-full md:-translate-x-1/2 z-10" />

                  <div className="flex-1 hidden md:block" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}