'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sliderImages = [
  'https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1545186070-de624ed19875?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const ConstructionBg = () => {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  }, []);

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  useEffect(() => {
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="relative w-full min-h-[60vh] md:min-h-screen overflow-hidden">
      {/* Fixed background — same as before */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.jdmagicbox.com/v2/comp/navi_mumbai/a9/022pxx22.xx22.220521091933.c2a9/catalogue/bg-shirke-construction-taloja-navi-mumbai-construction-companies-wD1HbG8afV.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[#0B2E59]/70" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen px-4 py-12">
        {/* Heading above the slider */}
        <div className="text-center text-white mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#EA4922]" />
            <span className="text-[#EA4922] text-xs md:text-sm font-semibold uppercase tracking-wider">
              Our Work
            </span>
            <div className="h-px w-8 bg-[#EA4922]" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold">
            A Glimpse of Our Engineering Work
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-200 max-w-xl mx-auto">
            From foundation to completion — see how we bring infrastructure projects to life across India.
          </p>
        </div>

        {/* Slider */}
        <div className="relative w-full max-w-3xl">
          <div className="relative w-full h-[260px] sm:h-[360px] md:h-[480px] overflow-hidden rounded-lg shadow-2xl border border-white/10">
            {sliderImages.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === current ? 'w-6 bg-[#EA4922]' : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionBg;