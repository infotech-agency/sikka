"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface LifeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isExternal?: boolean;
  delay?: number;
}

export const LifeAtLT: React.FC = () => {
  // Animation variants for the left text block
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  return (
    <section className="relative bg-[#071630] bg-gradient-to-br from-[#0B2E59] via-[#071630] to-[#040C1A] py-16 px-4 md:px-8 lg:px-16 overflow-hidden min-h-[600px] flex items-center">
      
      {/* Background Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '16px 16px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* LEFT COLUMN: Animated Intro Text */}
        <motion.div 
          className="lg:col-span-5 flex flex-col justify-center text-white pr-0 lg:pr-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Jab 100px element screen me aayega tbhi animate hoga
          variants={textVariants}
        >
          <h2 className="text-3xl font-black tracking-wide uppercase mb-6">
            Life At Sikka Engineering Pvt. Ltd.
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 ">
            L&T is a team of more than 50,000 professionals spread across the globe. We combine 
            a proven track record, complex and exciting projects integrated with new-age 
            technologies, woven together with a culture of nurturing and trust. Consistently rated 
            among the best employers in the country, L&T offers diverse opportunities for growth 
            and unmatched leadership.
          </p>
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#0B2E59] font-semibold text-sm rounded-full hover:bg-gray-100 transition-colors duration-300 group"
            >
              Know More
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Grid System with Staggered Card Animations */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Big Vertical Card (Diversity) */}
          <div className="md:row-span-2">
            <InteractiveCard 
              title="Diversity"
              description="L&T has beautifully woven a rich and colourful fabric which includes not just India but multiple countries as well. Multiculturality is an integral part of our ethos,"
              imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              delay={0.1} // First card delay
            />
          </div>

          {/* Top Right Card (Learning & Development) */}
          <InteractiveCard 
            title="Learning & Development"
            description="With an average age of 35 years, L&T is a young and agile company that stands proud on its legacy of over eight decades."
            imageUrl="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=600&q=80"
            delay={0.3} // Second card delay
          />

          {/* Bottom Right Card (L&Teers) */}
          <InteractiveCard 
            title="L&Teers - Making a difference"
            description="Through our employee volunteering programmes, L&T-ites teach children, mentor young students, plant trees, help with beach clean-ups and more..."
            imageUrl="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80"
            isExternal={true}
            delay={0.5} // Third card delay
          />

        </div>
      </div>
    </section>
  );
};

{/* Reusable Sub-Component with Animation */}
const InteractiveCard: React.FC<LifeCardProps> = ({ title, description, imageUrl, isExternal, delay = 0 }) => {
  // Fade up entry animation variant
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut', delay: delay } 
    }
  };

  return (
    <motion.div 
      className="group relative w-full overflow-hidden rounded-sm cursor-pointer shadow-lg bg-slate-900 border border-white/5 flex flex-col h-[280px] md:h-auto md:min-h-[250px] justify-end"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }} // Trigger animation when card crosses viewport boundary
      variants={cardVariants}
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[15%] group-hover:grayscale-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

      {/* Content wrapper */}
      <div className="relative z-10 p-5 md:p-6 w-full text-white">
        <h3 className="text-lg font-bold font-sans tracking-wide mb-2 group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
        
        <hr className="border-t border-white/30 my-2 w-full" />
        
        <div className="flex justify-between items-end gap-4 mt-2">
          <p className="text-gray-300 text-xs md:text-sm line-clamp-3 leading-relaxed font-sans flex-1">
            {description}
          </p>

          {/* Icon Circle */}
          <div className="w-8 h-8 md:w-9 md:h-9 bg-white rounded-full flex items-center justify-center text-[#0B2E59] flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300 shadow-md">
            {isExternal ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LifeAtLT;