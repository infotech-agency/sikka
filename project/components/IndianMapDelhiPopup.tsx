// // // // // // // // "use client";
// // // // // // // // import React from 'react';

// // // // // // // // const IndianMapDelhiPopup: React.FC = () => {
// // // // // // // //   return (
// // // // // // // //     <section className="w-full py-12 bg-slate-950 flex items-center justify-center overflow-hidden">
// // // // // // // //       {/* 
// // // // // // // //         Main Container: Iska aspect-ratio aur background design 
// // // // // // // //         bilkul "image_49f3bc.png" ke theme se matched hai.
// // // // // // // //       */}
// // // // // // // //       <div className="relative w-full max-w-[650px] aspect-square rounded-3xl overflow-hidden border border-slate-800/80 bg-[#020d1b] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex items-center justify-center p-4">
        
// // // // // // // //         {/* Relative wrapper jo pure image aur elements ko bound rakhega */}
// // // // // // // //         <div className="relative w-full h-full flex items-center justify-center">
          
// // // // // // // //           {/* 
// // // // // // // //             Aapki core image file ka direct render.
// // // // // // // //             Isse map ki quality, boundaries (#0B2E59 color) bilkul perfect rahenge.
// // // // // // // //           */}
// // // // // // // //           <img 
// // // // // // // //             src="https://simplemaps.com/static/svg/country/in/admin1/in.svg" 
// // // // // // // //             alt="India Map Base" 
// // // // // // // //             className="w-full h-full object-contain select-none pointer-events-none"
// // // // // // // //           />

// // // // // // // //           {/* 
// // // // // // // //             DELHI NCR DYNAMIC OVERLAY NODE
// // // // // // // //             image_49f3bc.png ke visual alignment ke hisab se exact top aur left coordinates pinned hain.
// // // // // // // //           */}
// // // // // // // //           <div className="absolute top-[29.5%] left-[36.6%] -translate-x-1/2 -translate-y-1/2 z-20">
            
// // // // // // // //             {/* Pure CSS Animations loop transition ke liye */}
// // // // // // // //             <style jsx global>{`
// // // // // // // //               @keyframes premiumRadar {
// // // // // // // //                 0% { transform: scale(0.4); opacity: 0.6; }
// // // // // // // //                 50% { opacity: 0.9; }
// // // // // // // //                 100% { transform: scale(2.2); opacity: 0; }
// // // // // // // //               }
// // // // // // // //               @keyframes pinGently {
// // // // // // // //                 0%, 100% { transform: translateY(0); }
// // // // // // // //                 50% { transform: translateY(-4px); }
// // // // // // // //               }
// // // // // // // //               @keyframes popoverShow {
// // // // // // // //                 0% { opacity: 0; transform: translate(-50%, 8px) scale(0.96); }
// // // // // // // //                 100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
// // // // // // // //               }
// // // // // // // //               .animate-radar-wave { animation: premiumRadar 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
// // // // // // // //               .animate-pin-bob { animation: pinGently 2.5s ease-in-out infinite; }
// // // // // // // //               .animate-popover-reveal { animation: popoverShow 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
// // // // // // // //             `}</style>

// // // // // // // //             {/* Glowing Radar & Pulse Core Effect */}
// // // // // // // //             <span className="absolute inline-flex h-24 w-24 rounded-full bg-cyan-400/30 animate-radar-wave -left-10 -top-10 pointer-events-none" />
// // // // // // // //             <span className="absolute inline-flex h-10 w-10 rounded-full bg-cyan-500/20 animate-pulse -left-3 -top-3 pointer-events-none" />

// // // // // // // //             {/* Glowing Map Pin Locator */}
// // // // // // // //             <div className="relative cursor-pointer animate-pin-bob">
// // // // // // // //               <svg className="w-5 h-7 filter drop-shadow-[0_4px_10px_rgba(34,211,238,0.7)]" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // // // //                 <path d="M10 0C4.477 0 0 4.477 0 10c0 7 10 18 10 18s10-11 10-18c0-5.523-4.477-10-10-10z" fill="url(#cyanGradientPin)"/>
// // // // // // // //                 <circle cx="10" cy="10" r="3" fill="#041224"/>
// // // // // // // //                 <defs>
// // // // // // // //                   <linearGradient id="cyanGradientPin" x1="0%" y1="0%" x2="100%" y2="100%">
// // // // // // // //                     <stop offset="0%" stopColor="#22d3ee" />
// // // // // // // //                     <stop offset="100%" stopColor="#0891b2" />
// // // // // // // //                   </linearGradient>
// // // // // // // //                 </defs>
// // // // // // // //               </svg>
// // // // // // // //             </div>

// // // // // // // //             {/* Auto Floating Pop-Up Card Display Panel (Exactly like image_49f3bc.png) */}
// // // // // // // //             <div className="animate-popover-reveal absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-44 bg-[#081526]/95 backdrop-blur-md border border-cyan-500/30 p-3 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.75)] text-center pointer-events-none">
              
// // // // // // // //               {/* Card Arrow Anchor point */}
// // // // // // // //               <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 rotate-45 bg-[#081526] border-r border-b border-cyan-500/30" />
              
// // // // // // // //               <h4 className="text-xs font-bold text-cyan-400 tracking-wider uppercase mb-0.5">Delhi NCR</h4>
// // // // // // // //               <p className="text-[10px] text-slate-300 font-medium leading-tight">Primary Location</p>
              
// // // // // // // //               {/* Dynamic Status Engine */}
// // // // // // // //               <div className="mt-2 flex items-center justify-center gap-1.5">
// // // // // // // //                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
// // // // // // // //                 <span className="text-[9px] text-slate-400 font-bold tracking-wider">LIVE HUB</span>
// // // // // // // //               </div>

// // // // // // // //             </div>

// // // // // // // //           </div>

// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default IndianMapDelhiPopup;

// // // // // // // "use client";
// // // // // // // import React from 'react';
// // // // // // // import { motion } from 'framer-motion';

// // // // // // // interface LocationNode {
// // // // // // //   id: string;
// // // // // // //   name: string;
// // // // // // //   top: string;
// // // // // // //   left: string;
// // // // // // // }

// // // // // // // const IndianMapDelhiPopup: React.FC = () => {
// // // // // // //   // Mumbai, Delhi, aur Hyderabad ki pinpointed placements
// // // // // // //   const locations: LocationNode[] = [
// // // // // // //     { id: 'delhi', name: 'Delhi NCR', top: '29.5%', left: '36.6%' },
// // // // // // //     { id: 'mumbai', name: 'Mumbai', top: '56.0%', left: '26.5%' },
// // // // // // //     { id: 'hyderabad', name: 'Hyderabad', top: '61.5%', left: '41.0%' }
// // // // // // //   ];

// // // // // // //   // Framer Motion Variants container ke liye (viewport check trigger ke sath)
// // // // // // //   const containerVariants = {
// // // // // // //     hidden: {},
// // // // // // //     visible: {
// // // // // // //       transition: {
// // // // // // //         staggerChildren: 0.4, // Ek ke baad ek location automatic reveal hogi
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Har ek individual pin ke pop-up scales
// // // // // // //   const pinVariants = {
// // // // // // //     hidden: { scale: 0, opacity: 0 },
// // // // // // //     visible: { 
// // // // // // //       scale: 1, 
// // // // // // //       opacity: 1,
// // // // // // //       transition: { type: "spring", stiffness: 120, damping: 14 }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <section className="w-full py-12 bg-slate-950 flex items-center justify-center overflow-hidden">
// // // // // // //       {/* Dynamic Main Container tailored to match image_49f3bc.png dimensions */}
// // // // // // //       <div className="relative w-full max-w-[650px] aspect-square rounded-3xl overflow-hidden border border-slate-800/80 bg-[#020d1b] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex items-center justify-center p-4">
        
// // // // // // //         {/* Relative wrapper jo map image aur dynamic locations ko overlap karega */}
// // // // // // //         <div className="relative w-full h-full flex items-center justify-center">
          
// // // // // // //           {/* Base Map Image Asset */}
// // // // // // //           <img 
// // // // // // //             src="https://simplemaps.com/static/svg/country/in/admin1/in.svg" 
// // // // // // //             alt="India Map Base" 
// // // // // // //             className="w-full h-full object-contain select-none pointer-events-none opacity-90 filter brightness-95"
// // // // // // //           />

// // // // // // //           {/* Radar waves loop ke liye simple globally injected styles */}
// // // // // // //           <style jsx global>{`
// // // // // // //             @keyframes multiRadar {
// // // // // // //               0% { transform: scale(0.4); opacity: 0.7; }
// // // // // // //               50% { opacity: 0.9; }
// // // // // // //               100% { transform: scale(2.4); opacity: 0; }
// // // // // // //             }
// // // // // // //             @keyframes pinBobbing {
// // // // // // //               0%, 100% { transform: translateY(0); }
// // // // // // //               50% { transform: translateY(-4px); }
// // // // // // //             }
// // // // // // //             .animate-radar-ring { animation: multiRadar 2.5s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
// // // // // // //             .animate-pin-bob { animation: pinBobbing 2.2s ease-in-out infinite; }
// // // // // // //           `}</style>

// // // // // // //           {/* Sequential Location Engine (Triggered on Scroll) */}
// // // // // // //           <motion.div 
// // // // // // //             className="absolute inset-0 w-full h-full pointer-events-none"
// // // // // // //             variants={containerVariants}
// // // // // // //             initial="hidden"
// // // // // // //             whileInView="visible"
// // // // // // //             viewport={{ once: true, amount: 0.3 }} // User jab 30% section scroll karega tab animation chalegi
// // // // // // //           >
// // // // // // //             {locations.map((loc) => (
// // // // // // //               <motion.div
// // // // // // //                 key={loc.id}
// // // // // // //                 variants={pinVariants}
// // // // // // //                 className="absolute z-20 pointer-events-auto"
// // // // // // //                 style={{ top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}
// // // // // // //               >
// // // // // // //                 {/* Core Wrapper Anchor */}
// // // // // // //                 <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                  
// // // // // // //                   {/* Glowing Radar Rings */}
// // // // // // //                   <span className="absolute inline-flex h-20 w-20 rounded-full bg-cyan-400/30 animate-radar-ring" />
// // // // // // //                   <span className="absolute inline-flex h-8 w-8 rounded-full bg-cyan-500/20 animate-pulse" />

// // // // // // //                   {/* Cyber Map Pin Node */}
// // // // // // //                   <div className="relative cursor-pointer animate-pin-bob">
// // // // // // //                     <svg className="w-5 h-7 filter drop-shadow-[0_4px_10px_rgba(34,211,238,0.7)]" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // // //                       <path d="M10 0C4.477 0 0 4.477 0 10c0 7 10 18 10 18s10-11 10-18c0-5.523-4.477-10-10-10z" fill="url(#cyanPinGrad)"/>
// // // // // // //                       <circle cx="10" cy="10" r="3" fill="#020d1b"/>
// // // // // // //                       <defs>
// // // // // // //                         <linearGradient id="cyanPinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
// // // // // // //                           <stop offset="0%" stopColor="#22d3ee" />
// // // // // // //                           <stop offset="100%" stopColor="#0891b2" />
// // // // // // //                         </linearGradient>
// // // // // // //                       </defs>
// // // // // // //                     </svg>
// // // // // // //                   </div>

// // // // // // //                 </div>
// // // // // // //               </motion.div>
// // // // // // //             ))}
// // // // // // //           </motion.div>

// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default IndianMapDelhiPopup;


// // // // // // "use client";
// // // // // // import React from 'react';
// // // // // // import { motion } from 'framer-motion';

// // // // // // interface LocationNode {
// // // // // //   id: string;
// // // // // //   name: string;
// // // // // //   top: string;
// // // // // //   left: string;
// // // // // // }

// // // // // // const IndianMapDelhiPopup: React.FC = () => {
// // // // // //   // Pinpointed placements matching the SVG layout perfectly
// // // // // //   const locations: LocationNode[] = [
// // // // // //     { id: 'delhi', name: 'Delhi NCR', top: '29.5%', left: '36.6%' },
// // // // // //     { id: 'mumbai', name: 'Mumbai', top: '56.0%', left: '26.5%' },
// // // // // //     { id: 'hyderabad', name: 'Hyderabad', top: '61.5%', left: '41.0%' }
// // // // // //   ];

// // // // // //   // Container fade-in dynamic orchestrator
// // // // // //   const sectionVariants = {
// // // // // //     hidden: { opacity: 0 },
// // // // // //     visible: {
// // // // // //       opacity: 1,
// // // // // //       transition: { staggerChildren: 0.25, delayChildren: 0.1 }
// // // // // //     }
// // // // // //   };

// // // // // //   // Left text animation engine
// // // // // //   const textVariants = {
// // // // // //     hidden: { opacity: 0, x: -40 },
// // // // // //     visible: { 
// // // // // //       opacity: 1, 
// // // // // //       x: 0, 
// // // // // //       transition: { type: "spring", stiffness: 80, damping: 16 } 
// // // // // //     }
// // // // // //   };

// // // // // //   // Map box entry engine
// // // // // //   const mapContainerVariants = {
// // // // // //     hidden: { opacity: 0, scale: 0.95, x: 30 },
// // // // // //     visible: { 
// // // // // //       opacity: 1, 
// // // // // //       scale: 1, 
// // // // // //       x: 0, 
// // // // // //       transition: { type: "spring", stiffness: 60, damping: 15 } 
// // // // // //     }
// // // // // //   };

// // // // // //   // Individual map dot reveals
// // // // // //   const pinVariants = {
// // // // // //     hidden: { scale: 0, opacity: 0 },
// // // // // //     visible: { 
// // // // // //       scale: 1, 
// // // // // //       opacity: 1,
// // // // // //       transition: { type: "spring", stiffness: 120, damping: 14 }
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <section className="w-full py-20 bg-[#020d1b] flex items-center justify-center overflow-hidden border-b border-slate-900">
// // // // // //       <motion.div 
// // // // // //         className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
// // // // // //         variants={sectionVariants}
// // // // // //         initial="hidden"
// // // // // //         whileInView="visible"
// // // // // //         viewport={{ once: true, amount: 0.25 }}
// // // // // //       >
        
// // // // // //         {/* ================= LEFT SIDE: BRAND CONTENT PANEL ================= */}
// // // // // //         <motion.div className="lg:col-span-5 flex flex-col justify-center space-y-6" variants={textVariants}>
          
// // // // // //           {/* Accent Gold Badge */}
// // // // // //           <div className="inline-flex items-center space-x-2 bg-[#C8A14A]/10 border border-[#C8A14A]/30 px-3 py-1.5 rounded-full w-fit">
// // // // // //             <span className="w-2 h-2 rounded-full bg-[#C8A14A] animate-pulse" />
// // // // // //             <span className="text-xs uppercase font-semibold tracking-widest text-[#C8A14A] font-sans">
// // // // // //               Our Footprint
// // // // // //             </span>
// // // // // //           </div>

// // // // // //           {/* Heading using premium 'Merriweather' serif token */}
// // // // // //           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
// // // // // //             Where We Are <span className="text-[#C8A14A]">Located</span>
// // // // // //           </h2>

// // // // // //           {/* Subtext description using 'Inter' body token */}
// // // // // //           <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans max-w-md">
// // // // // //             Strategically positioned across India's primary high-growth commercial zones. 
// // // // // //             Our regional hubs drive operational agility, seamlessly servicing enterprises with 
// // // // // //             uncompromised regional compliance and local tech architecture support.
// // // // // //           </p>

// // // // // //           {/* Premium City Indicator Pill Grid */}
// // // // // //           <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80 max-w-sm">
// // // // // //             {locations.map((loc) => (
// // // // // //               <div key={loc.id} className="flex flex-col space-y-1">
// // // // // //                 <span className="text-[11px] font-bold tracking-wider text-[#C8A14A] uppercase font-sans">
// // // // // //                   {loc.name.split(' ')[0]}
// // // // // //                 </span>
// // // // // //                 <span className="text-[10px] text-slate-500 font-medium font-sans">
// // // // // //                   Operational Hub
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //         </motion.div>

// // // // // //         {/* ================= RIGHT SIDE: PREMIUM INTERACTIVE MAP ================= */}
// // // // // //         <motion.div className="lg:col-span-7 flex justify-center lg:justify-end" variants={mapContainerVariants}>
// // // // // //           <div className="relative w-full max-w-[540px] aspect-square rounded-3xl overflow-hidden border border-slate-800/60 bg-[#041122]/40 backdrop-blur-sm shadow-[0_30px_70px_-20px_rgba(0,0,0,0.95)] flex items-center justify-center p-6">
            
// // // // // //             <div className="relative w-full h-full flex items-center justify-center">
              
// // // // // //               {/* Base Map Asset Source */}
// // // // // //               <img 
// // // // // //                 src="https://simplemaps.com/static/svg/country/in/admin1/in.svg" 
// // // // // //                 alt="India Map Base Layout" 
// // // // // //                 className="w-full h-full object-contain select-none pointer-events-none opacity-85 filter brightness-[0.4] contrast-125 saturate-50 sepia-[20%] hue-rotate-[195deg]"
// // // // // //               />

// // // // // //               {/* Scoped CSS Loops */}
// // // // // //               <style jsx global>{`
// // // // // //                 @keyframes multiRadar {
// // // // // //                   0% { transform: scale(0.4); opacity: 0.7; }
// // // // // //                   50% { opacity: 0.85; }
// // // // // //                   100% { transform: scale(2.5); opacity: 0; }
// // // // // //                 }
// // // // // //                 @keyframes pinBobbing {
// // // // // //                   0%, 100% { transform: translateY(0); }
// // // // // //                   50% { transform: translateY(-4px); }
// // // // // //                 }
// // // // // //                 .animate-radar-ring { animation: multiRadar 2.6s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
// // // // // //                 .animate-pin-bob { animation: pinBobbing 2.2s ease-in-out infinite; }
// // // // // //               `}</style>

// // // // // //               {/* Internal Map Node Sequencer Wrapper */}
// // // // // //               <motion.div 
// // // // // //                 className="absolute inset-0 w-full h-full pointer-events-none"
// // // // // //                 transition={{ staggerChildren: 0.4 }} // Smooth delay chain across dots
// // // // // //               >
// // // // // //                 {locations.map((loc) => (
// // // // // //                   <motion.div
// // // // // //                     key={loc.id}
// // // // // //                     variants={pinVariants}
// // // // // //                     className="absolute z-20 pointer-events-auto"
// // // // // //                     style={{ top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}
// // // // // //                   >
// // // // // //                     <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                      
// // // // // //                       {/* Premium Core Radar Rings using Gold/Cyan blending variables */}
// // // // // //                       <span className="absolute inline-flex h-20 w-20 rounded-full bg-cyan-400/20 animate-radar-ring" />
// // // // // //                       <span className="absolute inline-flex h-8 w-8 rounded-full bg-[#C8A14A]/15 animate-pulse" />

// // // // // //                       {/* Map Pins */}
// // // // // //                       <div className="relative cursor-pointer animate-pin-bob">
// // // // // //                         <svg className="w-5 h-7 filter drop-shadow-[0_4px_12px_rgba(200,161,74,0.45)]" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // //                           <path d="M10 0C4.477 0 0 4.477 0 10c0 7 10 18 10 18s10-11 10-18c0-5.523-4.477-10-10-10z" fill="url(#brandGradientPin)"/>
// // // // // //                           <circle cx="10" cy="10" r="3" fill="#041122"/>
// // // // // //                           <defs>
// // // // // //                             <linearGradient id="brandGradientPin" x1="0%" y1="0%" x2="100%" y2="100%">
// // // // // //                               <stop offset="0%" stopColor="#C8A14A" />
// // // // // //                               <stop offset="100%" stopColor="#1B4D8C" />
// // // // // //                             </linearGradient>
// // // // // //                           </defs>
// // // // // //                         </svg>
// // // // // //                       </div>

// // // // // //                     </div>
// // // // // //                   </motion.div>
// // // // // //                 ))}
// // // // // //               </motion.div>

// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </motion.div>

// // // // // //       </motion.div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default IndianMapDelhiPopup;

// // // // // // "use client";
// // // // // // import React from 'react';
// // // // // // import { motion } from 'framer-motion';

// // // // // // interface LocationNode {
// // // // // //   id: string;
// // // // // //   name: string;
// // // // // //   top: string;
// // // // // //   left: string;
// // // // // //   delay: number; // Har city ka apna unique trigger delay duration
// // // // // // }

// // // // // // const IndianMapDelhiPopup: React.FC = () => {
// // // // // //   // Mumbai, Delhi, aur Hyderabad with explicit sequential delays
// // // // // //   const locations: LocationNode[] = [
// // // // // //     { id: 'delhi', name: 'Delhi NCR', top: '29.5%', left: '36.6%', delay: 0.2 },
// // // // // //     { id: 'mumbai', name: 'Mumbai', top: '56.0%', left: '26.5%', delay: 0.7 },
// // // // // //     { id: 'hyderabad', name: 'Hyderabad', top: '61.5%', left: '41.0%', delay: 1.2 }
// // // // // //   ];

// // // // // //   // Left text layout display transitions
// // // // // //   const textVariants = {
// // // // // //     hidden: { opacity: 0, x: -40 },
// // // // // //     visible: { 
// // // // // //       opacity: 1, 
// // // // // //       x: 0, 
// // // // // //       transition: { type: "spring", stiffness: 70, damping: 15 } 
// // // // // //     }
// // // // // //   };

// // // // // //   // Base map container box animation
// // // // // //   const mapBoxVariants = {
// // // // // //     hidden: { opacity: 0, scale: 0.95 },
// // // // // //     visible: { 
// // // // // //       opacity: 1, 
// // // // // //       scale: 1, 
// // // // // //       transition: { duration: 0.6, ease: "easeOut" } 
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <section className="w-full py-20 bg-[#0B2E59] flex items-center justify-center overflow-hidden border-b border-slate-900">
// // // // // //       <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
// // // // // //         {/* ================= LEFT SIDE: BRAND CONTENT PANEL ================= */}
// // // // // //         <motion.div 
// // // // // //           className="lg:col-span-5 flex flex-col justify-center space-y-6"
// // // // // //           variants={textVariants}
// // // // // //           initial="hidden"
// // // // // //           whileInView="visible"
// // // // // //           viewport={{ once: true, amount: 0.3 }}
// // // // // //         >
// // // // // //           {/* Accent Gold Badge */}
// // // // // //           <div className="inline-flex items-center space-x-2 bg-[#C8A14A]/10 border border-[#C8A14A]/30 px-3 py-1.5 rounded-full w-fit">
// // // // // //             <span className="w-2 h-2 rounded-full bg-[#EA4922] animate-pulse" />
// // // // // //             <span className="text-xs uppercase font-semibold tracking-widest text-[#EA4922] font-sans">
// // // // // //               Our Footprint
// // // // // //             </span>
// // // // // //           </div>

// // // // // //           {/* Heading (Merriweather Typography) */}
// // // // // //           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
// // // // // //             Where We Are <span className="text-[#EA4922]">Located</span>
// // // // // //           </h2>

// // // // // //           {/* Subtext description (Inter Typography) */}
// // // // // //           <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans max-w-md">
// // // // // //             Strategically positioned across India's primary high-growth commercial zones. 
// // // // // //             Our regional hubs drive operational agility and robust tech architecture support.
// // // // // //           </p>

// // // // // //           {/* Premium City Indicator Pill Grid */}
// // // // // //           <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80 max-w-sm">
// // // // // //             {locations.map((loc) => (
// // // // // //               <div key={loc.id} className="flex flex-col space-y-1">
// // // // // //                 <span className="text-[11px] font-bold tracking-wider text-[#EA4922] uppercase font-sans">
// // // // // //                   {loc.name.split(' ')[0]}
// // // // // //                 </span>
// // // // // //                 <span className="text-[10px] text-slate-500 font-medium font-sans">
// // // // // //                   Operational Hub
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </motion.div>

// // // // // //         {/* ================= RIGHT SIDE: PREMIUM INTERACTIVE MAP ================= */}
// // // // // //         <motion.div 
// // // // // //           className="lg:col-span-7 flex justify-center lg:justify-end"
// // // // // //           variants={mapBoxVariants}
// // // // // //           initial="hidden"
// // // // // //           whileInView="visible"
// // // // // //           viewport={{ once: true, amount: 0.3 }}
// // // // // //         >
// // // // // //           <div className="relative w-full max-w-[540px] aspect-square rounded-3xl overflow-hidden flex items-center justify-center p-6">
            
// // // // // //             <div className="relative w-full h-full flex items-center justify-center">
              
// // // // // //               {/* Base Map Asset Source */}
// // // // // //               <img 
// // // // // //                 src="https://simplemaps.com/static/svg/country/in/admin1/in.svg" 
// // // // // //                 alt="India Map Base Layout" 
// // // // // //                 className="w-full h-full object-contain select-none pointer-events-none opacity-85 filter brightness-[0.4] contrast-125 saturate-50 sepia-[20%] hue-rotate-[195deg]"
// // // // // //               />

// // // // // //               {/* Scoped Keyframe Effects */}
// // // // // //               <style jsx global>{`
// // // // // //                 @keyframes multiRadar {
// // // // // //                   0% { transform: scale(0.4); opacity: 0.7; }
// // // // // //                   50% { opacity: 0.85; }
// // // // // //                   100% { transform: scale(2.5); opacity: 0; }
// // // // // //                 }
// // // // // //                 @keyframes pinBobbing {
// // // // // //                   0%, 100% { transform: translateY(0); }
// // // // // //                   50% { transform: translateY(-4px); }
// // // // // //                 }
// // // // // //                 .animate-radar-ring { animation: multiRadar 2.6s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
// // // // // //                 .animate-pin-bob { animation: pinBobbing 2.2s ease-in-out infinite; }
// // // // // //               `}</style>

// // // // // //               {/* 
// // // // // //                 ONE BY ONE SCROLL ENGINE:
// // // // // //                 Har location node ka apna personal scroll-viewport checker hai 
// // // // // //                 jo custom 'delay' sequence timing ko strictly execute karta hai.
// // // // // //               */}
// // // // // //               {locations.map((loc) => (
// // // // // //                 <motion.div
// // // // // //                   key={loc.id}
// // // // // //                   initial={{ scale: 0, opacity: 0 }}
// // // // // //                   whileInView={{ scale: 1, opacity: 1 }}
// // // // // //                   viewport={{ once: true, amount: 0.2 }}
// // // // // //                   transition={{ 
// // // // // //                     type: "spring", 
// // // // // //                     stiffness: 100, 
// // // // // //                     damping: 12, 
// // // // // //                     delay: loc.delay // individual delay blocks
// // // // // //                   }}
// // // // // //                   className="absolute z-20 pointer-events-auto"
// // // // // //                   style={{ top: loc.top, left: loc.left }}
// // // // // //                 >
// // // // // //                   {/* Pin Content alignment center point adjustment */}
// // // // // //                   <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                    
// // // // // //                     {/* Premium Core Radar Rings using Gold/Cyan blending variables */}
// // // // // //                     <span className="absolute inline-flex h-20 w-20 rounded-full bg-cyan-400/20 animate-radar-ring" />
// // // // // //                     <span className="absolute inline-flex h-8 w-8 rounded-full bg-[#C8A14A]/15 animate-pulse" />

// // // // // //                     {/* Map Pins */}
// // // // // //                     <div className="relative cursor-pointer animate-pin-bob">
// // // // // //                       <svg className="w-5 h-7 filter drop-shadow-[0_4px_12px_rgba(200,161,74,0.45)]" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // //                         <path d="M10 0C4.477 0 0 4.477 0 10c0 7 10 18 10 18s10-11 10-18c0-5.523-4.477-10-10-10z" fill="url(#brandGradientPin)"/>
// // // // // //                         <circle cx="10" cy="10" r="3" fill="#041122"/>
// // // // // //                         <defs>
// // // // // //                           <linearGradient id="brandGradientPin" x1="0%" y1="0%" x2="100%" y2="100%">
// // // // // //                             <stop offset="0%" stopColor="#C8A14A" />
// // // // // //                             <stop offset="100%" stopColor="#1B4D8C" />
// // // // // //                           </linearGradient>
// // // // // //                         </defs>
// // // // // //                       </svg>
// // // // // //                     </div>

// // // // // //                   </div>
// // // // // //                 </motion.div>
// // // // // //               ))}

// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </motion.div>

// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default IndianMapDelhiPopup;

// // // // // // "use client";
// // // // // // import React, { useState } from 'react';
// // // // // // import { motion, AnimatePresence } from 'framer-motion';

// // // // // // interface LocationNode {
// // // // // //   id: string;
// // // // // //   name: string;
// // // // // //   top: string;
// // // // // //   left: string;
// // // // // //   description: string;
// // // // // //   status: 'COMPLETED' | 'ONGOING';
// // // // // // }

// // // // // // const IndianMapDelhiPopup: React.FC = () => {
// // // // // //   // Active selected city state track karne ke liye (Click management)
// // // // // //   const [activeLocation, setActiveLocation] = useState<string | null>(null);

// // // // // //   const locations: LocationNode[] = [
// // // // // //     { 
// // // // // //       id: 'delhi', 
// // // // // //       name: 'Delhi NCR', 
// // // // // //       top: '29.5%', 
// // // // // //       left: '36.6%', 
// // // // // //       description: 'Major infrastructure revamp & corporate hub setup.',
// // // // // //       status: 'ONGOING' 
// // // // // //     },
// // // // // //     { 
// // // // // //       id: 'mumbai', 
// // // // // //       name: 'Mumbai', 
// // // // // //       top: '56.0%', 
// // // // // //       left: '26.5%', 
// // // // // //       description: 'Premium commercial complex & structural engineering work.',
// // // // // //       status: 'COMPLETED' 
// // // // // //     },
// // // // // //     { 
// // // // // //       id: 'hyderabad', 
// // // // // //       name: 'Hyderabad', 
// // // // // //       top: '61.5%', 
// // // // // //       left: '41.0%', 
// // // // // //       description: 'Tech park development & smart workspace automation.',
// // // // // //       status: 'ONGOING' 
// // // // // //     }
// // // // // //   ];

// // // // // //   // Main Header Scroll animation
// // // // // //   const headerVariants = {
// // // // // //     hidden: { opacity: 0, y: -30 },
// // // // // //     visible: { 
// // // // // //       opacity: 1, 
// // // // // //       y: 0, 
// // // // // //       transition: { type: "spring", stiffness: 60, damping: 15 } 
// // // // // //     }
// // // // // //   };

// // // // // //   // Center Map Box Entry animation on Scroll
// // // // // //   const mapBoxVariants = {
// // // // // //     hidden: { opacity: 0, scale: 0.95, y: 30 },
// // // // // //     visible: { 
// // // // // //       opacity: 1, 
// // // // // //       scale: 1, 
// // // // // //       y: 0, 
// // // // // //       transition: { type: "spring", stiffness: 50, damping: 16, delay: 0.2 } 
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <section className="w-full py-20 bg-[#0B2E59] flex items-center justify-center overflow-hidden border-b border-slate-900">
// // // // // //       <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        
// // // // // //         {/* ================= TOP CENTER: BRAND CONTENT PANEL ================= */}
// // // // // //         <motion.div 
// // // // // //           className="flex flex-col items-center space-y-4 mb-12 max-w-2xl"
// // // // // //           variants={headerVariants}
// // // // // //           initial="hidden"
// // // // // //           whileInView="visible"
// // // // // //           viewport={{ once: true, amount: 0.5 }}
// // // // // //         >
// // // // // //           {/* Accent Gold Badge */}
// // // // // //           <div className="inline-flex items-center space-x-2 bg-[#C8A14A]/10 border border-[#C8A14A]/30 px-3 py-1.5 rounded-full w-fit">
// // // // // //             <span className="w-2 h-2 rounded-full bg-[#EA4922] animate-pulse" />
// // // // // //             <span className="text-xs uppercase font-semibold tracking-widest text-[#EA4922] font-sans">
// // // // // //               Our Footprint
// // // // // //             </span>
// // // // // //           </div>

// // // // // //           {/* New Requested Heading (Merriweather Typography) */}
// // // // // //           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.25]">
// // // // // //             Here Some of the Places We Worked & <span className="text-[#EA4922]">Ongoing Projects</span>
// // // // // //           </h2>
          
// // // // // //           <p className="text-slate-300 text-xs md:text-sm font-sans tracking-wide opacity-80 max-w-md">
// // // // // //             Click on the active pins below to see details of our completed milestones and live updates on ongoing sites.
// // // // // //           </p>
// // // // // //         </motion.div>

// // // // // //         {/* ================= CENTER PLACE: PREMIUM INTERACTIVE MAP ================= */}
// // // // // //         <motion.div 
// // // // // //           className="w-full flex justify-center items-center"
// // // // // //           variants={mapBoxVariants}
// // // // // //           initial="hidden"
// // // // // //           whileInView="visible"
// // // // // //           viewport={{ once: true, amount: 0.3 }}
// // // // // //         >
// // // // // //           <div className="relative w-full max-w-[540px] aspect-square rounded-3xl overflow-visible  flex items-center justify-center p-6">
            
// // // // // //             <div className="relative w-full h-full flex items-center justify-center overflow-visible">
              
// // // // // //               {/* Base Map Asset Source */}
// // // // // //               <img 
// // // // // //                 src="https://simplemaps.com/static/svg/country/in/admin1/in.svg" 
// // // // // //                 alt="India Map Base Layout" 
// // // // // //                 className="w-full h-full object-contain select-none pointer-events-none opacity-85 filter brightness-[0.4] contrast-125 saturate-50 sepia-[20%] hue-rotate-[195deg]"
// // // // // //               />

// // // // // //               {/* Scoped Keyframe Effects */}
// // // // // //               <style jsx global>{`
// // // // // //                 @keyframes multiRadar {
// // // // // //                   0% { transform: scale(0.4); opacity: 0.7; }
// // // // // //                   50% { opacity: 0.85; }
// // // // // //                   100% { transform: scale(2.5); opacity: 0; }
// // // // // //                 }
// // // // // //                 @keyframes pinBobbing {
// // // // // //                   0%, 100% { transform: translateY(0); }
// // // // // //                   50% { transform: translateY(-4px); }
// // // // // //                 }
// // // // // //                 .animate-radar-ring { animation: multiRadar 2.6s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
// // // // // //                 .animate-pin-bob { animation: pinBobbing 2.2s ease-in-out infinite; }
// // // // // //               `}</style>

// // // // // //               {/* Map Pins Loop with Dynamic On-Click Interaction */}
// // // // // //               {locations.map((loc) => {
// // // // // //                 const isSelected = activeLocation === loc.id;
                
// // // // // //                 return (
// // // // // //                   <div
// // // // // //                     key={loc.id}
// // // // // //                     className="absolute z-20"
// // // // // //                     style={{ top: loc.top, left: loc.left }}
// // // // // //                   >
// // // // // //                     {/* Main Node Anchor Point */}
// // // // // //                     <div className="relative flex items-center justify-center">
                      
// // // // // //                       {/* Active Trigger Hotspot Layer */}
// // // // // //                       <button 
// // // // // //                         onClick={() => setActiveLocation(isSelected ? null : loc.id)}
// // // // // //                         className="absolute w-10 h-10 -mt-3 rounded-full bg-transparent z-30 cursor-pointer focus:outline-none"
// // // // // //                         aria-label={`Toggle info for ${loc.name}`}
// // // // // //                       />

// // // // // //                       {/* Glowing Waves Layer */}
// // // // // //                       <span className="absolute inline-flex h-16 w-16 rounded-full bg-cyan-400/20 animate-radar-ring pointer-events-none" />
// // // // // //                       <span className="absolute inline-flex h-7 w-7 rounded-full bg-[#C8A14A]/15 animate-pulse pointer-events-none" />

// // // // // //                       {/* Map Pin Graphic Element */}
// // // // // //                       <div className={`relative animate-pin-bob pointer-events-none transition-transform duration-300 ${isSelected ? 'scale-125' : 'scale-100'}`}>
// // // // // //                         <svg className="w-5 h-7 filter drop-shadow-[0_4px_12px_rgba(200,161,74,0.45)]" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // //                           <path d="M10 0C4.477 0 0 4.477 0 10c0 7 10 18 10 18s10-11 10-18c0-5.523-4.477-10-10-10z" fill="url(#brandGradientPin)"/>
// // // // // //                           <circle cx="10" cy="10" r="3" fill={isSelected ? "#EA4922" : "#041122"} className="transition-colors duration-300"/>
// // // // // //                           <defs>
// // // // // //                             <linearGradient id="brandGradientPin" x1="0%" y1="0%" x2="100%" y2="100%">
// // // // // //                               <stop offset="0%" stopColor={isSelected ? "#EA4922" : "#C8A14A"} />
// // // // // //                               <stop offset="100%" stopColor={isSelected ? "#C8A14A" : "#1B4D8C"} />
// // // // // //                             </linearGradient>
// // // // // //                           </defs>
// // // // // //                         </svg>
// // // // // //                       </div>

// // // // // //                       {/* ON-CLICK DYNAMIC POPUP INFOWINDOW PANEL */}
// // // // // //                       <AnimatePresence>
// // // // // //                         {isSelected && (
// // // // // //                           <motion.div
// // // // // //                             initial={{ opacity: 0, scale: 0.9, y: 10, x: "-50%" }}
// // // // // //                             animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
// // // // // //                             exit={{ opacity: 0, scale: 0.9, y: 10, x: "-50%" }}
// // // // // //                             transition={{ type: "spring", stiffness: 300, damping: 20 }}
// // // // // //                             className="absolute bottom-full mb-3 left-1/2 w-48 bg-[#041122]/95 backdrop-blur-md border border-[#C8A14A]/40 p-3 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.85)] text-center z-50 pointer-events-auto"
// // // // // //                           >
// // // // // //                             {/* Little Arrow Node Anchor */}
// // // // // //                             <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 rotate-45 bg-[#041122] border-r border-b border-[#C8A14A]/40" />
                            
// // // // // //                             <h4 className="text-xs font-bold text-[#C8A14A] tracking-wider uppercase mb-0.5 font-sans">
// // // // // //                               {loc.name}
// // // // // //                             </h4>
// // // // // //                             <p className="text-[10px] text-slate-300 font-medium leading-tight font-sans mb-2">
// // // // // //                               {loc.description}
// // // // // //                             </p>
                            
// // // // // //                             {/* Dynamic Tag Status Engine */}
// // // // // //                             <div className="mt-1 flex items-center justify-center gap-1.5">
// // // // // //                               <span className={`w-1.5 h-1.5 rounded-full ${loc.status === 'ONGOING' ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
// // // // // //                               <span className={`text-[8px] font-bold tracking-widest font-sans ${loc.status === 'ONGOING' ? 'text-amber-400' : 'text-emerald-400'}`}>
// // // // // //                                 {loc.status}
// // // // // //                               </span>
// // // // // //                             </div>
// // // // // //                           </motion.div>
// // // // // //                         )}
// // // // // //                       </AnimatePresence>

// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 );
// // // // // //               })}

// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </motion.div>

// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default IndianMapDelhiPopup;

// // // // // "use client";
// // // // // import React, { useState } from 'react';
// // // // // import { motion, AnimatePresence } from 'framer-motion';

// // // // // interface LocationNode {
// // // // //   id: string;
// // // // //   name: string;
// // // // //   top: string;
// // // // //   left: string;
// // // // //   description: string;
// // // // //   status: 'COMPLETED' | 'ONGOING';
// // // // //   // which side the popup should open toward on small screens, so it never clips off the map
// // // // //   popupAlign: 'left' | 'center' | 'right';
// // // // // }

// // // // // const IndianMapDelhiPopup: React.FC = () => {
// // // // //   // Tracks which city pin is currently open (click to toggle)
// // // // //   const [activeLocation, setActiveLocation] = useState<string | null>(null);

// // // // //   const locations: LocationNode[] = [
// // // // //     {
// // // // //       id: 'delhi',
// // // // //       name: 'Delhi NCR',
// // // // //       top: '29.5%',
// // // // //       left: '36.6%',
// // // // //       description: 'Major infrastructure revamp & corporate hub setup.',
// // // // //       status: 'ONGOING',
// // // // //       popupAlign: 'center',
// // // // //     },
// // // // //     {
// // // // //       id: 'mumbai',
// // // // //       name: 'Mumbai',
// // // // //       top: '56.0%',
// // // // //       left: '26.5%',
// // // // //       description: 'Premium commercial complex & structural engineering work.',
// // // // //       status: 'COMPLETED',
// // // // //       popupAlign: 'right',
// // // // //     },
// // // // //     {
// // // // //       id: 'hyderabad',
// // // // //       name: 'Hyderabad',
// // // // //       top: '61.5%',
// // // // //       left: '41.0%',
// // // // //       description: 'Tech park development & smart workspace automation.',
// // // // //       status: 'ONGOING',
// // // // //       popupAlign: 'center',
// // // // //     },
// // // // //   ];

// // // // //   // Header entry animation
// // // // //   const headerVariants = {
// // // // //     hidden: { opacity: 0, y: -30 },
// // // // //     visible: {
// // // // //       opacity: 1,
// // // // //       y: 0,
// // // // //       transition: { type: "spring", stiffness: 60, damping: 15 },
// // // // //     },
// // // // //   };

// // // // //   // Map panel entry animation
// // // // //   const mapBoxVariants = {
// // // // //     hidden: { opacity: 0, scale: 0.95, y: 30 },
// // // // //     visible: {
// // // // //       opacity: 1,
// // // // //       scale: 1,
// // // // //       y: 0,
// // // // //       transition: { type: "spring", stiffness: 50, damping: 16, delay: 0.2 },
// // // // //     },
// // // // //   };

// // // // //   // Popup alignment classes — keeps the card on-screen instead of always centering
// // // // //   // on the pin, which clips near the map edges on small viewports.
// // // // //   const popupAlignClasses: Record<LocationNode['popupAlign'], string> = {
// // // // //     left: 'left-0 translate-x-0',
// // // // //     center: 'left-1/2 -translate-x-1/2',
// // // // //     right: 'right-0 translate-x-0 left-auto',
// // // // //   };

// // // // //   const arrowAlignClasses: Record<LocationNode['popupAlign'], string> = {
// // // // //     left: 'left-4',
// // // // //     center: 'left-1/2 -translate-x-1/2',
// // // // //     right: 'right-4 left-auto',
// // // // //   };

// // // // //   return (
// // // // //     <section className="w-full py-14 sm:py-20 bg-[#0B2E59] flex items-center justify-center overflow-hidden border-b border-slate-900">
// // // // //       <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">

// // // // //         {/* ================= HEADER ================= */}
// // // // //         <motion.div
// // // // //           className="flex flex-col items-center space-y-4 mb-10 sm:mb-12 max-w-2xl"
// // // // //           variants={headerVariants}
// // // // //           initial="hidden"
// // // // //           whileInView="visible"
// // // // //           viewport={{ once: true, amount: 0.5 }}
// // // // //         >
// // // // //           <div className="inline-flex items-center space-x-2 bg-[#C8A14A]/10 border border-[#C8A14A]/30 px-3 py-1.5 rounded-full w-fit">
// // // // //             <span className="w-2 h-2 rounded-full bg-[#EA4922] animate-pulse" />
// // // // //             <span className="text-xs uppercase font-semibold tracking-widest text-[#EA4922] font-sans">
// // // // //               Our Footprint
// // // // //             </span>
// // // // //           </div>

// // // // //           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.25]">
// // // // //             Where We&apos;ve Built & <span className="text-[#EA4922]">Where We&apos;re Building Now</span>
// // // // //           </h2>

// // // // //           <p className="text-slate-300 text-xs sm:text-sm font-sans tracking-wide opacity-80 max-w-md">
// // // // //             Tap a pin to see what we delivered there, and what&apos;s in progress today.
// // // // //           </p>
// // // // //         </motion.div>

// // // // //         {/* ================= MAP ================= */}
// // // // //         <motion.div
// // // // //           className="w-full flex justify-center items-center"
// // // // //           variants={mapBoxVariants}
// // // // //           initial="hidden"
// // // // //           whileInView="visible"
// // // // //           viewport={{ once: true, amount: 0.3 }}
// // // // //         >
// // // // //           <div className="relative w-full max-w-[540px] aspect-square rounded-3xl overflow-visible flex items-center justify-center p-3 sm:p-6">

// // // // //             <div className="relative w-full h-full flex items-center justify-center overflow-visible">

// // // // //               <img
// // // // //                 src="https://simplemaps.com/static/svg/country/in/admin1/in.svg"
// // // // //                 alt="Map of India highlighting our project locations"
// // // // //                 className="w-full h-full object-contain select-none pointer-events-none opacity-85 filter brightness-[0.4] contrast-125 saturate-50 sepia-[20%] hue-rotate-[195deg]"
// // // // //               />

// // // // //               <style jsx global>{`
// // // // //                 @keyframes multiRadar {
// // // // //                   0% { transform: scale(0.4); opacity: 0.7; }
// // // // //                   50% { opacity: 0.85; }
// // // // //                   100% { transform: scale(2.5); opacity: 0; }
// // // // //                 }
// // // // //                 @keyframes pinBobbing {
// // // // //                   0%, 100% { transform: translateY(0); }
// // // // //                   50% { transform: translateY(-4px); }
// // // // //                 }
// // // // //                 .animate-radar-ring { animation: multiRadar 2.6s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
// // // // //                 .animate-pin-bob { animation: pinBobbing 2.2s ease-in-out infinite; }

// // // // //                 @media (prefers-reduced-motion: reduce) {
// // // // //                   .animate-radar-ring,
// // // // //                   .animate-pin-bob {
// // // // //                     animation: none !important;
// // // // //                   }
// // // // //                 }
// // // // //               `}</style>

// // // // //               {locations.map((loc) => {
// // // // //                 const isSelected = activeLocation === loc.id;

// // // // //                 return (
// // // // //                   <div
// // // // //                     key={loc.id}
// // // // //                     className="absolute z-20"
// // // // //                     style={{ top: loc.top, left: loc.left }}
// // // // //                   >
// // // // //                     <div className="relative flex items-center justify-center">

// // // // //                       {/* Tap target — sized for fingers, not just cursors */}
// // // // //                       <button
// // // // //                         onClick={() => setActiveLocation(isSelected ? null : loc.id)}
// // // // //                         className="absolute w-11 h-11 -mt-3 rounded-full bg-transparent z-30 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A14A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2E59]"
// // // // //                         aria-label={`${loc.name}: ${isSelected ? 'hide' : 'show'} project details`}
// // // // //                         aria-expanded={isSelected}
// // // // //                       />

// // // // //                       <span className="absolute inline-flex h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-cyan-400/20 animate-radar-ring pointer-events-none" />
// // // // //                       <span className="absolute inline-flex h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-[#C8A14A]/15 animate-pulse pointer-events-none" />

// // // // //                       <div className={`relative animate-pin-bob pointer-events-none transition-transform duration-300 ${isSelected ? 'scale-125' : 'scale-100'}`}>
// // // // //                         <svg className="w-4 h-6 sm:w-5 sm:h-7 filter drop-shadow-[0_4px_12px_rgba(200,161,74,0.45)]" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // //                           <path d="M10 0C4.477 0 0 4.477 0 10c0 7 10 18 10 18s10-11 10-18c0-5.523-4.477-10-10-10z" fill="url(#brandGradientPin)" />
// // // // //                           <circle cx="10" cy="10" r="3" fill={isSelected ? "#EA4922" : "#041122"} className="transition-colors duration-300" />
// // // // //                           <defs>
// // // // //                             <linearGradient id="brandGradientPin" x1="0%" y1="0%" x2="100%" y2="100%">
// // // // //                               <stop offset="0%" stopColor={isSelected ? "#EA4922" : "#C8A14A"} />
// // // // //                               <stop offset="100%" stopColor={isSelected ? "#C8A14A" : "#1B4D8C"} />
// // // // //                             </linearGradient>
// // // // //                           </defs>
// // // // //                         </svg>
// // // // //                       </div>

// // // // //                       {/* Popup card — alignment varies by pin so it stays on-screen on mobile */}
// // // // //                       <AnimatePresence>
// // // // //                         {isSelected && (
// // // // //                           <motion.div
// // // // //                             initial={{ opacity: 0, scale: 0.9, y: 10 }}
// // // // //                             animate={{ opacity: 1, scale: 1, y: 0 }}
// // // // //                             exit={{ opacity: 0, scale: 0.9, y: 10 }}
// // // // //                             transition={{ type: "spring", stiffness: 300, damping: 20 }}
// // // // //                             className={`absolute bottom-full mb-3 w-40 sm:w-48 max-w-[80vw] bg-[#041122]/95 backdrop-blur-md border border-[#C8A14A]/40 p-3 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.85)] text-center z-50 pointer-events-auto ${popupAlignClasses[loc.popupAlign]}`}
// // // // //                           >
// // // // //                             <div className={`absolute top-full -mt-1 w-2 h-2 rotate-45 bg-[#041122] border-r border-b border-[#C8A14A]/40 ${arrowAlignClasses[loc.popupAlign]}`} />

// // // // //                             <h4 className="text-xs font-bold text-[#C8A14A] tracking-wider uppercase mb-0.5 font-sans">
// // // // //                               {loc.name}
// // // // //                             </h4>
// // // // //                             <p className="text-[10px] text-slate-300 font-medium leading-tight font-sans mb-2">
// // // // //                               {loc.description}
// // // // //                             </p>

// // // // //                             <div className="mt-1 flex items-center justify-center gap-1.5">
// // // // //                               <span className={`w-1.5 h-1.5 rounded-full ${loc.status === 'ONGOING' ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
// // // // //                               <span className={`text-[8px] font-bold tracking-widest font-sans ${loc.status === 'ONGOING' ? 'text-amber-400' : 'text-emerald-400'}`}>
// // // // //                                 {loc.status}
// // // // //                               </span>
// // // // //                             </div>
// // // // //                           </motion.div>
// // // // //                         )}
// // // // //                       </AnimatePresence>

// // // // //                     </div>
// // // // //                   </div>
// // // // //                 );
// // // // //               })}

// // // // //             </div>
// // // // //           </div>
// // // // //         </motion.div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default IndianMapDelhiPopup;

// // // // "use client";
// // // // import React, { useState } from 'react';
// // // // import { motion, AnimatePresence } from 'framer-motion';

// // // // interface LocationNode {
// // // //   id: string;
// // // //   name: string;
// // // //   top: string;
// // // //   left: string;
// // // //   description: string;
// // // //   status: 'COMPLETED' | 'ONGOING';
// // // //   // which side the popup should open toward on small screens, so it never clips off the map
// // // //   popupAlign: 'left' | 'center' | 'right';
// // // // }

// // // // const IndianMapDelhiPopup: React.FC = () => {
// // // //   // Tracks which city pin is currently open (click to toggle)
// // // //   const [activeLocation, setActiveLocation] = useState<string | null>(null);

// // // //   const locations: LocationNode[] = [
// // // //     {
// // // //       id: 'delhi',
// // // //       name: 'Delhi NCR',
// // // //       top: '29.5%',
// // // //       left: '36.6%',
// // // //       description: 'Major infrastructure revamp & corporate hub setup.',
// // // //       status: 'ONGOING',
// // // //       popupAlign: 'center',
// // // //     },
// // // //     {
// // // //       id: 'mumbai',
// // // //       name: 'Mumbai',
// // // //       top: '56.0%',
// // // //       left: '26.5%',
// // // //       description: 'Premium commercial complex & structural engineering work.',
// // // //       status: 'COMPLETED',
// // // //       popupAlign: 'right',
// // // //     },
// // // //     {
// // // //       id: 'hyderabad',
// // // //       name: 'Hyderabad',
// // // //       top: '61.5%',
// // // //       left: '41.0%',
// // // //       description: 'Tech park development & smart workspace automation.',
// // // //       status: 'ONGOING',
// // // //       popupAlign: 'center',
// // // //     },
// // // //   ];

// // // //   // Header entry animation
// // // //   const headerVariants = {
// // // //     hidden: { opacity: 0, y: -30 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       transition: { type: "spring", stiffness: 60, damping: 15 },
// // // //     },
// // // //   };

// // // //   // Map panel entry animation
// // // //   const mapBoxVariants = {
// // // //     hidden: { opacity: 0, scale: 0.95, y: 30 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       scale: 1,
// // // //       y: 0,
// // // //       transition: { type: "spring", stiffness: 50, damping: 16, delay: 0.2 },
// // // //     },
// // // //   };

// // // //   // Popup alignment classes — keeps the card on-screen instead of always centering
// // // //   // on the pin, which clips near the map edges on small viewports.
// // // //   const popupAlignClasses: Record<LocationNode['popupAlign'], string> = {
// // // //     left: 'left-0 translate-x-0',
// // // //     center: 'left-1/2 -translate-x-1/2',
// // // //     right: 'right-0 translate-x-0 left-auto',
// // // //   };

// // // //   const arrowAlignClasses: Record<LocationNode['popupAlign'], string> = {
// // // //     left: 'left-4',
// // // //     center: 'left-1/2 -translate-x-1/2',
// // // //     right: 'right-4 left-auto',
// // // //   };

// // // //   return (
// // // //     <section className="w-full py-14 sm:py-20 bg-[#0B2E59] flex items-center justify-center overflow-hidden border-b border-slate-900">
// // // //       <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">

// // // //         {/* ================= HEADER ================= */}
// // // //         <motion.div
// // // //           className="flex flex-col items-center space-y-4 mb-10 sm:mb-12 max-w-2xl"
// // // //           variants={headerVariants}
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ once: true, amount: 0.5 }}
// // // //         >
// // // //           <div className="inline-flex items-center space-x-2 bg-[#C8A14A]/10 border border-[#C8A14A]/30 px-3 py-1.5 rounded-full w-fit">
// // // //             <span className="w-2 h-2 rounded-full bg-[#EA4922] animate-pulse" />
// // // //             <span className="text-xs uppercase font-semibold tracking-widest text-[#EA4922] font-sans">
// // // //               Our Footprint
// // // //             </span>
// // // //           </div>

// // // //           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.25]">
// // // //             Where We&apos;ve Built
// // // //           </h2>

// // // //           <p className="text-slate-300 text-xs sm:text-sm font-sans tracking-wide opacity-80 max-w-md">
// // // //             Tap a pin to see what we delivered there, and what&apos;s in progress today.
// // // //           </p>
// // // //         </motion.div>

// // // //         {/* ================= MAP ================= */}
// // // //         <motion.div
// // // //           className="w-full flex justify-center items-center"
// // // //           variants={mapBoxVariants}
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ once: true, amount: 0.3 }}
// // // //         >
// // // //           <div className="relative w-full max-w-[540px] aspect-square rounded-3xl overflow-visible flex items-center justify-center p-3 sm:p-6">

// // // //             {/* Fixed aspect-ratio wrapper matching the SVG's natural proportions
// // // //                 (~0.88 w:h for India's admin1 outline) so object-contain doesn't
// // // //                 letterbox unevenly and shift the map off-center. Pin % coordinates
// // // //                 are measured against THIS box, not the outer square. */}
// // // //             <div className="relative h-full w-full mx-auto overflow-visible" style={{ aspectRatio: '0.88 / 1' }}>

// // // //               <img
// // // //                 src="https://simplemaps.com/static/svg/country/in/admin1/in.svg"
// // // //                 alt="Map of India highlighting our project locations"
// // // //                 className="w-full h-full object-contain select-none pointer-events-none opacity-85 filter brightness-[0.4] contrast-125 saturate-50 sepia-[20%] hue-rotate-[195deg]"
// // // //               />

// // // //               <style jsx global>{`
// // // //                 @keyframes multiRadar {
// // // //                   0% { transform: scale(0.4); opacity: 0.7; }
// // // //                   50% { opacity: 0.85; }
// // // //                   100% { transform: scale(2.5); opacity: 0; }
// // // //                 }
// // // //                 @keyframes pinBobbing {
// // // //                   0%, 100% { transform: translateY(0); }
// // // //                   50% { transform: translateY(-4px); }
// // // //                 }
// // // //                 .animate-radar-ring { animation: multiRadar 2.6s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
// // // //                 .animate-pin-bob { animation: pinBobbing 2.2s ease-in-out infinite; }

// // // //                 @media (prefers-reduced-motion: reduce) {
// // // //                   .animate-radar-ring,
// // // //                   .animate-pin-bob {
// // // //                     animation: none !important;
// // // //                   }
// // // //                 }
// // // //               `}</style>

// // // //               {locations.map((loc) => {
// // // //                 const isSelected = activeLocation === loc.id;

// // // //                 return (
// // // //                   <div
// // // //                     key={loc.id}
// // // //                     className="absolute z-20"
// // // //                     style={{ top: loc.top, left: loc.left }}
// // // //                   >
// // // //                     <div className="relative flex items-center justify-center">

// // // //                       {/* Tap target — sized for fingers, not just cursors */}
// // // //                       <button
// // // //                         onClick={() => setActiveLocation(isSelected ? null : loc.id)}
// // // //                         className="absolute w-11 h-11 -mt-3 rounded-full bg-transparent z-30 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A14A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2E59]"
// // // //                         aria-label={`${loc.name}: ${isSelected ? 'hide' : 'show'} project details`}
// // // //                         aria-expanded={isSelected}
// // // //                       />

// // // //                       <span className="absolute inline-flex h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-cyan-400/20 animate-radar-ring pointer-events-none" />
// // // //                       <span className="absolute inline-flex h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-[#C8A14A]/15 animate-pulse pointer-events-none" />

// // // //                       <div className={`relative animate-pin-bob pointer-events-none transition-transform duration-300 ${isSelected ? 'scale-125' : 'scale-100'}`}>
// // // //                         <svg className="w-4 h-6 sm:w-5 sm:h-7 filter drop-shadow-[0_4px_12px_rgba(200,161,74,0.45)]" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // //                           <path d="M10 0C4.477 0 0 4.477 0 10c0 7 10 18 10 18s10-11 10-18c0-5.523-4.477-10-10-10z" fill="url(#brandGradientPin)" />
// // // //                           <circle cx="10" cy="10" r="3" fill={isSelected ? "#EA4922" : "#041122"} className="transition-colors duration-300" />
// // // //                           <defs>
// // // //                             <linearGradient id="brandGradientPin" x1="0%" y1="0%" x2="100%" y2="100%">
// // // //                               <stop offset="0%" stopColor={isSelected ? "#EA4922" : "#C8A14A"} />
// // // //                               <stop offset="100%" stopColor={isSelected ? "#C8A14A" : "#1B4D8C"} />
// // // //                             </linearGradient>
// // // //                           </defs>
// // // //                         </svg>
// // // //                       </div>

// // // //                       {/* Popup card — alignment varies by pin so it stays on-screen on mobile */}
// // // //                       <AnimatePresence>
// // // //                         {isSelected && (
// // // //                           <motion.div
// // // //                             initial={{ opacity: 0, scale: 0.9, y: 10 }}
// // // //                             animate={{ opacity: 1, scale: 1, y: 0 }}
// // // //                             exit={{ opacity: 0, scale: 0.9, y: 10 }}
// // // //                             transition={{ type: "spring", stiffness: 300, damping: 20 }}
// // // //                             className={`absolute bottom-full mb-3 w-40 sm:w-48 max-w-[80vw] bg-[#041122]/95 backdrop-blur-md border border-[#C8A14A]/40 p-3 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.85)] text-center z-50 pointer-events-auto ${popupAlignClasses[loc.popupAlign]}`}
// // // //                           >
// // // //                             <div className={`absolute top-full -mt-1 w-2 h-2 rotate-45 bg-[#041122] border-r border-b border-[#C8A14A]/40 ${arrowAlignClasses[loc.popupAlign]}`} />

// // // //                             <h4 className="text-xs font-bold text-[#C8A14A] tracking-wider uppercase mb-0.5 font-sans">
// // // //                               {loc.name}
// // // //                             </h4>
// // // //                             <p className="text-[10px] text-slate-300 font-medium leading-tight font-sans mb-2">
// // // //                               {loc.description}
// // // //                             </p>

// // // //                             <div className="mt-1 flex items-center justify-center gap-1.5">
// // // //                               <span className={`w-1.5 h-1.5 rounded-full ${loc.status === 'ONGOING' ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
// // // //                               <span className={`text-[8px] font-bold tracking-widest font-sans ${loc.status === 'ONGOING' ? 'text-amber-400' : 'text-emerald-400'}`}>
// // // //                                 {loc.status}
// // // //                               </span>
// // // //                             </div>
// // // //                           </motion.div>
// // // //                         )}
// // // //                       </AnimatePresence>

// // // //                     </div>
// // // //                   </div>
// // // //                 );
// // // //               })}

// // // //             </div>
// // // //           </div>
// // // //         </motion.div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default IndianMapDelhiPopup;


// // // "use client";
// // // import React, { useState } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';

// // // interface LocationNode {
// // //   id: string;
// // //   name: string;
// // //   top: string;
// // //   left: string;
// // //   description: string;
// // //   status: 'COMPLETED' | 'ONGOING';
// // //   // which side the popup should open toward on small screens, so it never clips off the map
// // //   popupAlign: 'left' | 'center' | 'right';
// // // }

// // // const IndianMapDelhiPopup: React.FC = () => {
// // //   // Tracks which city pin is currently open (click to toggle)
// // //   const [activeLocation, setActiveLocation] = useState<string | null>(null);

// // //   const locations: LocationNode[] = [
// // //     {
// // //       id: 'delhi',
// // //       name: 'Delhi NCR',
// // //       top: '29.5%',
// // //       left: '36.6%',
// // //       description: 'Major infrastructure revamp & corporate hub setup.',
// // //       status: 'ONGOING',
// // //       popupAlign: 'center',
// // //     },
// // //     {
// // //       id: 'mumbai',
// // //       name: 'Mumbai',
// // //       top: '56.0%',
// // //       left: '26.5%',
// // //       description: 'Premium commercial complex & structural engineering work.',
// // //       status: 'COMPLETED',
// // //       popupAlign: 'right',
// // //     },
// // //     {
// // //       id: 'hyderabad',
// // //       name: 'Hyderabad',
// // //       top: '61.5%',
// // //       left: '41.0%',
// // //       description: 'Tech park development & smart workspace automation.',
// // //       status: 'ONGOING',
// // //       popupAlign: 'center',
// // //     },
// // //   ];

// // //   // Header entry animation
// // //   const headerVariants = {
// // //     hidden: { opacity: 0, y: -30 },
// // //     visible: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: { type: "spring", stiffness: 60, damping: 15 },
// // //     },
// // //   };

// // //   // Map panel entry animation
// // //   const mapBoxVariants = {
// // //     hidden: { opacity: 0, scale: 0.95, y: 30 },
// // //     visible: {
// // //       opacity: 1,
// // //       scale: 1,
// // //       y: 0,
// // //       transition: { type: "spring", stiffness: 50, damping: 16, delay: 0.2 },
// // //     },
// // //   };

// // //   // Popup alignment classes — keeps the card on-screen instead of always centering
// // //   // on the pin, which clips near the map edges on small viewports.
// // //   const popupAlignClasses: Record<LocationNode['popupAlign'], string> = {
// // //     left: 'left-0 translate-x-0',
// // //     center: 'left-1/2 -translate-x-1/2',
// // //     right: 'right-0 translate-x-0 left-auto',
// // //   };

// // //   const arrowAlignClasses: Record<LocationNode['popupAlign'], string> = {
// // //     left: 'left-4',
// // //     center: 'left-1/2 -translate-x-1/2',
// // //     right: 'right-4 left-auto',
// // //   };

// // //   return (
// // //     <section className="w-full overflow-hidden border-b border-slate-900">
// // //       <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch">

// // //         {/* ================= LEFT: CONTENT PANEL (white) ================= */}
// // //         <motion.div
// // //           className="w-full  lg:w-2/5 bg-[#0B2E59] flex flex-col items-start justify-center text-left  sm:px-10 lg:px-12 py-12 sm:py-16 lg:py-0 space-y-4 order-1 lg:order-1"
// // //           variants={headerVariants}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.5 }}
// // //         >
// // //           <div className="inline-flex items-center space-x-2 bg-[#C8A14A]/10 border border-[#C8A14A]/30 px-3 py-1.5 rounded-full w-fit">
// // //             <span className="w-2 h-2 rounded-full bg-[#EA4922] animate-pulse" />
// // //             <span className="text-xs uppercase font-semibold tracking-widest text-[#EA4922] font-sans">
// // //               Our Footprint
// // //             </span>
// // //           </div>

// // //           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.25]">
// // //             Where We&apos;ve Built
// // //           </h2>

// // //           <p className="text-[#EA4922] text-sm font-sans tracking-wide max-w-md leading-relaxed">
// // //             Tap a pin to see what we delivered there, and what&apos;s in progress today.
// // //           </p>

// // //           <div className="w-12 h-1 rounded-full bg-[#EA4922] !mt-6" />

// // //           <p className="text-slate-500 text-xs font-sans tracking-wide max-w-sm">
// // //             From Delhi NCR to Mumbai and Hyderabad, our sites span the country&apos;s key business hubs.
// // //           </p>
// // //         </motion.div>

// // //         {/* ================= RIGHT: MAP PANEL (navy) ================= */}
// // //         <motion.div
// // //           className="w-full lg:w-3/5 bg-white flex justify-center items-center px-4 sm:px-8 py-10 sm:py-14 lg:py-16 order-2 lg:order-2"
// // //           variants={mapBoxVariants}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.3 }}
// // //         >
// // //           <div className="relative w-full max-w-[680px] aspect-square rounded-3xl overflow-visible flex items-center justify-center p-3 sm:p-6">

// // //             {/* Fixed aspect-ratio wrapper matching the SVG's natural proportions
// // //                 (~0.88 w:h for India's admin1 outline) so object-contain doesn't
// // //                 letterbox unevenly and shift the map off-center. Pin % coordinates
// // //                 are measured against THIS box, not the outer square. */}
// // //             <div className="relative h-full mx-auto overflow-visible" style={{ aspectRatio: '0.88 / 1' }}>

// // //               <img
// // //                 // src="https://c7.alamy.com/comp/2TC985Y/line-map-of-india-vector-illustration-icon-indian-map-2TC985Y.jpg"
// // //                 src="/images/india.jpg"
// // //                 alt="Map of India highlighting our project locations"
// // //                 className="w-full h-full object-contain select-none pointer-events-none opacity-85 filter  contrast-125 saturate-50 sepia-[20%] hue-rotate-[195deg]"
// // //               />

// // //               <style jsx global>{`
// // //                 @keyframes multiRadar {
// // //                   0% { transform: scale(0.4); opacity: 0.7; }
// // //                   50% { opacity: 0.85; }
// // //                   100% { transform: scale(2.5); opacity: 0; }
// // //                 }
// // //                 @keyframes pinBobbing {
// // //                   0%, 100% { transform: translateY(0); }
// // //                   50% { transform: translateY(-4px); }
// // //                 }
// // //                 .animate-radar-ring { animation: multiRadar 2.6s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
// // //                 .animate-pin-bob { animation: pinBobbing 2.2s ease-in-out infinite; }

// // //                 @media (prefers-reduced-motion: reduce) {
// // //                   .animate-radar-ring,
// // //                   .animate-pin-bob {
// // //                     animation: none !important;
// // //                   }
// // //                 }
// // //               `}</style>

// // //               {locations.map((loc) => {
// // //                 const isSelected = activeLocation === loc.id;

// // //                 return (
// // //                   <div
// // //                     key={loc.id}
// // //                     className="absolute z-20"
// // //                     style={{ top: loc.top, left: loc.left }}
// // //                   >
// // //                     <div className="relative flex items-center justify-center">

// // //                       {/* Tap target — sized for fingers, not just cursors */}
// // //                       <button
// // //                         onClick={() => setActiveLocation(isSelected ? null : loc.id)}
// // //                         className="absolute w-11 h-11 -mt-3 rounded-full bg-transparent z-30 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A14A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2E59]"
// // //                         aria-label={`${loc.name}: ${isSelected ? 'hide' : 'show'} project details`}
// // //                         aria-expanded={isSelected}
// // //                       />

// // //                       <span className="absolute inline-flex h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-cyan-400/20 animate-radar-ring pointer-events-none" />
// // //                       <span className="absolute inline-flex h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-[#C8A14A]/15 animate-pulse pointer-events-none" />

// // //                       <div className={`relative animate-pin-bob pointer-events-none transition-transform duration-300 ${isSelected ? 'scale-125' : 'scale-100'}`}>
// // //                         <svg className="w-4 h-6 sm:w-5 sm:h-7 filter drop-shadow-[0_4px_12px_rgba(200,161,74,0.45)]" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                           <path d="M10 0C4.477 0 0 4.477 0 10c0 7 10 18 10 18s10-11 10-18c0-5.523-4.477-10-10-10z" fill="url(#brandGradientPin)" />
// // //                           <circle cx="10" cy="10" r="3" fill={isSelected ? "#EA4922" : "#041122"} className="transition-colors duration-300" />
// // //                           <defs>
// // //                             <linearGradient id="brandGradientPin" x1="0%" y1="0%" x2="100%" y2="100%">
// // //                               <stop offset="0%" stopColor={isSelected ? "#EA4922" : "#C8A14A"} />
// // //                               <stop offset="100%" stopColor={isSelected ? "#C8A14A" : "#1B4D8C"} />
// // //                             </linearGradient>
// // //                           </defs>
// // //                         </svg>
// // //                       </div>

// // //                       {/* Popup card — alignment varies by pin so it stays on-screen on mobile */}
// // //                       <AnimatePresence>
// // //                         {isSelected && (
// // //                           <motion.div
// // //                             initial={{ opacity: 0, scale: 0.9, y: 10 }}
// // //                             animate={{ opacity: 1, scale: 1, y: 0 }}
// // //                             exit={{ opacity: 0, scale: 0.9, y: 10 }}
// // //                             transition={{ type: "spring", stiffness: 300, damping: 20 }}
// // //                             className={`absolute bottom-full mb-3 w-40 sm:w-48 max-w-[80vw] bg-[#041122]/95 backdrop-blur-md border border-[#C8A14A]/40 p-3 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.85)] text-center z-50 pointer-events-auto ${popupAlignClasses[loc.popupAlign]}`}
// // //                           >
// // //                             <div className={`absolute top-full -mt-1 w-2 h-2 rotate-45 bg-[#041122] border-r border-b border-[#C8A14A]/40 ${arrowAlignClasses[loc.popupAlign]}`} />

// // //                             <h4 className="text-xs font-bold text-[#C8A14A] tracking-wider uppercase mb-0.5 font-sans">
// // //                               {loc.name}
// // //                             </h4>
// // //                             <p className="text-[10px] text-slate-300 font-medium leading-tight font-sans mb-2">
// // //                               {loc.description}
// // //                             </p>

// // //                             <div className="mt-1 flex items-center justify-center gap-1.5">
// // //                               <span className={`w-1.5 h-1.5 rounded-full ${loc.status === 'ONGOING' ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
// // //                               <span className={`text-[8px] font-bold tracking-widest font-sans ${loc.status === 'ONGOING' ? 'text-amber-400' : 'text-emerald-400'}`}>
// // //                                 {loc.status}
// // //                               </span>
// // //                             </div>
// // //                           </motion.div>
// // //                         )}
// // //                       </AnimatePresence>

// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}

// // //             </div>
// // //           </div>
// // //         </motion.div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default IndianMapDelhiPopup;


// // // "use client";
// // // import React, { useState } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';

// // // interface LocationNode {
// // //   id: string;
// // //   name: string;
// // //   top: string;
// // //   left: string;
// // //   description: string;
// // //   status: 'COMPLETED' | 'ONGOING';
// // //   popupAlign: 'left' | 'center' | 'right';
// // // }

// // // const IndianMapDelhiPopup: React.FC = () => {
// // //   const [activeLocation, setActiveLocation] = useState<string | null>(null);

// // //   const locations: LocationNode[] = [
// // //     {
// // //       id: 'delhi',
// // //       name: 'Delhi NCR',
// // //       top: '29.5%',
// // //       left: '36.6%',
// // //       description: 'Major infrastructure revamp & corporate hub setup.',
// // //       status: 'ONGOING',
// // //       popupAlign: 'center',
// // //     },
// // //     {
// // //       id: 'mumbai',
// // //       name: 'Mumbai',
// // //       top: '56.0%',
// // //       left: '26.5%',
// // //       description: 'Premium commercial complex & structural engineering work.',
// // //       status: 'COMPLETED',
// // //       popupAlign: 'right',
// // //     },
// // //     {
// // //       id: 'hyderabad',
// // //       name: 'Hyderabad',
// // //       top: '61.5%',
// // //       left: '41.0%',
// // //       description: 'Tech park development & smart workspace automation.',
// // //       status: 'ONGOING',
// // //       popupAlign: 'center',
// // //     },
// // //   ];

// // //   const headerVariants = {
// // //     hidden: { opacity: 0, y: -30 },
// // //     visible: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: { type: "spring", stiffness: 60, damping: 15 },
// // //     },
// // //   };

// // //   const mapBoxVariants = {
// // //     hidden: { opacity: 0, scale: 0.95, y: 30 },
// // //     visible: {
// // //       opacity: 1,
// // //       scale: 1,
// // //       y: 0,
// // //       transition: { type: "spring", stiffness: 50, damping: 16, delay: 0.2 },
// // //     },
// // //   };

// // //   const popupAlignClasses: Record<LocationNode['popupAlign'], string> = {
// // //     left: 'left-0 translate-x-0',
// // //     center: 'left-1/2 -translate-x-1/2',
// // //     right: 'right-0 translate-x-0 left-auto',
// // //   };

// // //   const arrowAlignClasses: Record<LocationNode['popupAlign'], string> = {
// // //     left: 'left-4',
// // //     center: 'left-1/2 -translate-x-1/2',
// // //     right: 'right-4 left-auto',
// // //   };

// // //   return (
// // //     <section className="w-full overflow-hidden border-b border-slate-900 bg-white">
// // //       <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">

// // //         {/* ================= LEFT: CONTENT PANEL ================= */}
// // //         <motion.div
// // //           className="w-full lg:w-[30%] bg-[#0B2E59] flex flex-col items-start justify-center text-left px-6 sm:px-10 lg:px-12 py-16 lg:py-0 space-y-4 order-1 lg:order-1"
// // //           variants={headerVariants}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.5 }}
// // //         >
// // //           <div className="inline-flex items-center space-x-2 bg-[#C8A14A]/10 border border-[#C8A14A]/30 px-3 py-1.5 rounded-full w-fit">
// // //             <span className="w-2 h-2 rounded-full bg-[#EA4922] animate-pulse" />
// // //             <span className="text-xs uppercase font-semibold tracking-widest text-[#EA4922] font-sans">
// // //               Our Footprint
// // //             </span>
// // //           </div>

// // //           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.25]">
// // //             Where We&apos;ve Built
// // //           </h2>

// // //           <p className="text-[#EA4922] text-sm font-sans tracking-wide max-w-md leading-relaxed">
// // //             Tap a pin to see what we delivered there, and what&apos;s in progress today.
// // //           </p>

// // //           <div className="w-12 h-1 rounded-full bg-[#EA4922] !mt-6" />

// // //           <p className="text-slate-400 text-xs font-sans tracking-wide max-w-sm">
// // //             From Delhi NCR to Mumbai and Hyderabad, our sites span the country&apos;s key business hubs.
// // //           </p>
// // //         </motion.div>

// // //         {/* ================= RIGHT: MASSIVE MAP PANEL ================= */}
// // //         <motion.div
// // //           className="w-full lg:w-[70%] bg-white flex justify-center items-center p-0 order-2 lg:order-2"
// // //           variants={mapBoxVariants}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.3 }}
// // //         >
// // //           <div className="relative w-full max-w-[850px] aspect-square overflow-visible flex items-center justify-center p-4 sm:p-8">
// // //             <div className="relative w-full h-full mx-auto overflow-visible" style={{ aspectRatio: '0.88 / 1' }}>

// // //               {/* ✨ Wapas Original Colors par la diya hai */}
// // //               <img
// // //                 src="/images/india.jpg"
// // //                 alt="Map of India highlighting our project locations"
// // //                 className="w-full h-full object-contain select-none pointer-events-none opacity-85 filter contrast-125 saturate-50 sepia-[20%] hue-rotate-[195deg]"
// // //               />

// // //               <style jsx global>{`
// // //                 @keyframes multiRadar {
// // //                   0% { transform: scale(0.4); opacity: 0.7; }
// // //                   50% { opacity: 0.85; }
// // //                   100% { transform: scale(2.5); opacity: 0; }
// // //                 }
// // //                 @keyframes pinBobbing {
// // //                   0%, 100% { transform: translateY(0); }
// // //                   50% { transform: translateY(-4px); }
// // //                 }
// // //                 .animate-radar-ring { animation: multiRadar 2.6s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
// // //                 .animate-pin-bob { animation: pinBobbing 2.2s ease-in-out infinite; }
// // //               `}</style>

// // //               {locations.map((loc) => {
// // //                 const isSelected = activeLocation === loc.id;

// // //                 return (
// // //                   <div
// // //                     key={loc.id}
// // //                     className="absolute z-20"
// // //                     style={{ top: loc.top, left: loc.left }}
// // //                   >
// // //                     <div className="relative flex items-center justify-center w-0 h-0 overflow-visible">

// // //                       {/* Click Target Layer */}
// // //                       <button
// // //                         onClick={(e) => {
// // //                           e.stopPropagation();
// // //                           setActiveLocation(isSelected ? null : loc.id);
// // //                         }}
// // //                         className="absolute w-12 h-12 rounded-full bg-transparent z-30 cursor-pointer focus:outline-none -translate-y-3"
// // //                         aria-label={`Toggle details for ${loc.name}`}
// // //                       />

// // //                       {/* Waves Layer */}
// // //                       <span className="absolute inline-flex h-14 w-14 sm:h-20 sm:w-20 rounded-full bg-cyan-400/20 animate-radar-ring pointer-events-none -translate-y-3" />
// // //                       <span className="absolute inline-flex h-6 w-6 sm:h-9 sm:w-9 rounded-full bg-[#C8A14A]/15 animate-pulse pointer-events-none -translate-y-3" />

// // //                       {/* Pins */}
// // //                       <div className={`relative animate-pin-bob pointer-events-none transition-transform duration-300 ${isSelected ? 'scale-135' : 'scale-110'}`}>
// // //                         <svg className="w-5 h-7 sm:w-6 sm:h-8 filter drop-shadow-[0_4px_14px_rgba(200,161,74,0.5)] -translate-y-4" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                           <path d="M10 0C4.477 0 0 4.477 0 10c0 7 10 18 10 18s10-11 10-18c0-5.523-4.477-10-10-10z" fill="url(#brandGradientPin)" />
// // //                           <circle cx="10" cy="10" r="3" fill={isSelected ? "#EA4922" : "#041122"} className="transition-colors duration-300" />
// // //                           <defs>
// // //                             <linearGradient id="brandGradientPin" x1="0%" y1="0%" x2="100%" y2="100%">
// // //                               <stop offset="0%" stopColor={isSelected ? "#EA4922" : "#C8A14A"} />
// // //                               <stop offset="100%" stopColor={isSelected ? "#C8A14A" : "#1B4D8C"} />
// // //                             </linearGradient>
// // //                           </defs>
// // //                         </svg>
// // //                       </div>

// // //                       {/* Dynamic Popup Card */}
// // //                       <AnimatePresence>
// // //                         {isSelected && (
// // //                           <motion.div
// // //                             initial={{ opacity: 0, scale: 0.9, y: -10 }}
// // //                             animate={{ opacity: 1, scale: 1, y: -24 }}
// // //                             exit={{ opacity: 0, scale: 0.9, y: -10 }}
// // //                             transition={{ type: "spring", stiffness: 300, damping: 20 }}
// // //                             className={`absolute bottom-0 mb-4 w-44 sm:w-52 max-w-[80vw] bg-[#041122]/95 backdrop-blur-md border border-[#C8A14A]/40 p-3.5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-center z-50 pointer-events-auto ${popupAlignClasses[loc.popupAlign]}`}
// // //                           >
// // //                             <div className={`absolute top-full -mt-1 w-2 h-2 rotate-45 bg-[#041122] border-r border-b border-[#C8A14A]/40 ${arrowAlignClasses[loc.popupAlign]}`} />

// // //                             <h4 className="text-xs sm:text-sm font-bold text-[#C8A14A] tracking-wider uppercase mb-1 font-sans">
// // //                               {loc.name}
// // //                             </h4>
// // //                             <p className="text-[10px] sm:text-xs text-slate-300 font-medium leading-tight font-sans mb-2.5">
// // //                               {loc.description}
// // //                             </p>

// // //                             <div className="mt-1 flex items-center justify-center gap-1.5">
// // //                               <span className={`w-1.5 h-1.5 rounded-full ${loc.status === 'ONGOING' ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
// // //                               <span className={`text-[9px] font-bold tracking-widest font-sans ${loc.status === 'ONGOING' ? 'text-amber-400' : 'text-emerald-400'}`}>
// // //                                 {loc.status}
// // //                               </span>
// // //                             </div>
// // //                           </motion.div>
// // //                         )}
// // //                       </AnimatePresence>

// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}

// // //             </div>
// // //           </div>
// // //         </motion.div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default IndianMapDelhiPopup;

// // "use client";
// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';

// // interface LocationNode {
// //   id: string;
// //   name: string;
// //   top: string;
// //   left: string;
// //   description: string;
// //   status: 'COMPLETED' | 'ONGOING';
// //   popupAlign: 'left' | 'center' | 'right';
// // }

// // const IndianMapDelhiPopup: React.FC = () => {
// //   const [activeLocation, setActiveLocation] = useState<string | null>(null);

// //   const locations: LocationNode[] = [
// //     {
// //       id: 'delhi',
// //       name: 'Delhi NCR',
// //       top: '29.5%',
// //       left: '36.6%',
// //       description: 'Major infrastructure revamp & corporate hub setup.',
// //       status: 'ONGOING',
// //       popupAlign: 'center',
// //     },
// //     {
// //       id: 'mumbai',
// //       name: 'Mumbai',
// //       top: '56.0%',
// //       left: '26.5%',
// //       description: 'Premium commercial complex & structural engineering work.',
// //       status: 'COMPLETED',
// //       popupAlign: 'right',
// //     },
// //     {
// //       id: 'hyderabad',
// //       name: 'Hyderabad',
// //       top: '61.5%',
// //       left: '41.0%',
// //       description: 'Tech park development & smart workspace automation.',
// //       status: 'ONGOING',
// //       popupAlign: 'center',
// //     },
// //   ];

// //   const headerVariants = {
// //     hidden: { opacity: 0, y: -30 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { type: "spring", stiffness: 60, damping: 15 },
// //     },
// //   };

// //   const mapBoxVariants = {
// //     hidden: { opacity: 0, scale: 0.95, y: 30 },
// //     visible: {
// //       opacity: 1,
// //       scale: 1,
// //       y: 0,
// //       transition: { type: "spring", stiffness: 50, damping: 16, delay: 0.2 },
// //     },
// //   };

// //   const popupAlignClasses: Record<LocationNode['popupAlign'], string> = {
// //     left: 'left-0 translate-x-0',
// //     center: 'left-1/2 -translate-x-1/2',
// //     right: 'right-0 translate-x-0 left-auto',
// //   };

// //   const arrowAlignClasses: Record<LocationNode['popupAlign'], string> = {
// //     left: 'left-4',
// //     center: 'left-1/2 -translate-x-1/2',
// //     right: 'right-4 left-auto',
// //   };

// //   return (
// //     <section className="w-full overflow-hidden border-b border-slate-900 bg-white">
// //       {/* max-w-full karke items-stretch kiya taaki corner gaps na bachein */}
// //       <div className="w-full max-w-full mx-auto flex flex-col lg:flex-row items-stretch">

// //         {/* ================= LEFT: CONTENT PANEL (50% Width) ================= */}
// //         <motion.div
// //           className="w-full lg:w-1/2 bg-[#0B2E59] flex flex-col items-start justify-center text-left px-8 sm:px-16 lg:px-20 py-20 lg:py-0 space-y-5 order-1 lg:order-1"
// //           variants={headerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.5 }}
// //         >
// //           <div className="inline-flex items-center space-x-2 bg-[#C8A14A]/10 border border-[#C8A14A]/30 px-3 py-1.5 rounded-full w-fit">
// //             <span className="w-2 h-2 rounded-full bg-[#EA4922] animate-pulse" />
// //             <span className="text-xs uppercase font-semibold tracking-widest text-[#EA4922] font-sans">
// //               Our Footprint
// //             </span>
// //           </div>

// //           <h2 className="text-5xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.2]">
// //             Where We&apos;ve Built
// //           </h2>

// //           <p className="text-[#EA4922] text-base font-sans tracking-wide max-w-md leading-relaxed">
// //             Tap a pin to see what we delivered there, and what&apos;s in progress today.
// //           </p>

// //           <div className="w-16 h-1 rounded-full bg-[#EA4922] !mt-6" />

// //           <p className="text-slate-300 text-sm font-sans tracking-wide max-w-md">
// //             From Delhi NCR to Mumbai and Hyderabad, our sites span the country&apos;s key business hubs.
// //           </p>
// //         </motion.div>

// //         {/* ================= RIGHT: MAP PANEL (50% Width) ================= */}
// //         <motion.div
// //           className="w-full lg:w-1/2 bg-white flex justify-center items-center p-4 sm:p-10 lg:p-12 order-2 lg:order-2"
// //           variants={mapBoxVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.3 }}
// //         >
// //           {/* Container limits handled perfectly to occupy maximum box layout */}
// //           <div className="relative w-full max-w-[720px] aspect-square overflow-visible flex items-center justify-center">
// //             <div className="relative w-full h-full mx-auto overflow-visible" style={{ aspectRatio: '0.88 / 1' }}>

// //               {/* ✨ Map Original Colors with proper scaling aspect ratio */}
// //               <img
// //                 src="/images/india.jpg"
// //                 alt="Map of India highlighting our project locations"
// //                 className="w-full h-full object-contain select-none pointer-events-none opacity-85 filter contrast-125 saturate-50 sepia-[20%] hue-rotate-[195deg]"
// //               />

// //               <style jsx global>{`
// //                 @keyframes multiRadar {
// //                   0% { transform: scale(0.4); opacity: 0.7; }
// //                   50% { opacity: 0.85; }
// //                   100% { transform: scale(2.5); opacity: 0; }
// //                 }
// //                 @keyframes pinBobbing {
// //                   0%, 100% { transform: translateY(0); }
// //                   50% { transform: translateY(-4px); }
// //                 }
// //                 .animate-radar-ring { animation: multiRadar 2.6s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
// //                 .animate-pin-bob { animation: pinBobbing 2.2s ease-in-out infinite; }
// //               `}</style>

// //               {locations.map((loc) => {
// //                 const isSelected = activeLocation === loc.id;

// //                 return (
// //                   <div
// //                     key={loc.id}
// //                     className="absolute z-20"
// //                     style={{ top: loc.top, left: loc.left }}
// //                   >
// //                     <div className="relative flex items-center justify-center w-0 h-0 overflow-visible">

// //                       {/* Click Target Layer */}
// //                       <button
// //                         onClick={(e) => {
// //                           e.stopPropagation();
// //                           setActiveLocation(isSelected ? null : loc.id);
// //                         }}
// //                         className="absolute w-12 h-12 rounded-full bg-transparent z-30 cursor-pointer focus:outline-none -translate-y-3"
// //                         aria-label={`Toggle details for ${loc.name}`}
// //                       />

// //                       {/* Waves Layer */}
// //                       <span className="absolute inline-flex h-14 w-14 sm:h-20 sm:w-20 rounded-full bg-cyan-400/20 animate-radar-ring pointer-events-none -translate-y-3" />
// //                       <span className="absolute inline-flex h-6 w-6 sm:h-9 sm:w-9 rounded-full bg-[#C8A14A]/15 animate-pulse pointer-events-none -translate-y-3" />

// //                       {/* Pins */}
// //                       <div className={`relative animate-pin-bob pointer-events-none transition-transform duration-300 ${isSelected ? 'scale-135' : 'scale-110'}`}>
// //                         <svg className="w-5 h-7 sm:w-6 sm:h-8 filter drop-shadow-[0_4px_14px_rgba(200,161,74,0.5)] -translate-y-4" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                           <path d="M10 0C4.477 0 0 4.477 0 10c0 7 10 18 10 18s10-11 10-18c0-5.523-4.477-10-10-10z" fill="url(#brandGradientPin)" />
// //                           <circle cx="10" cy="10" r="3" fill={isSelected ? "#EA4922" : "#041122"} className="transition-colors duration-300" />
// //                           <defs>
// //                             <linearGradient id="brandGradientPin" x1="0%" y1="0%" x2="100%" y2="100%">
// //                               <stop offset="100%" stopColor={isSelected ? "#DC2810" : "#DC2810"} />
// //                               <stop offset="100%" stopColor={isSelected ? "#DC2810" : "#DC2810"} />
// //                             </linearGradient>
// //                           </defs>
// //                         </svg>
// //                       </div>

// //                       {/* Dynamic Popup Card */}
// //                       <AnimatePresence>
// //                         {isSelected && (
// //                           <motion.div
// //                             initial={{ opacity: 0, scale: 0.9, y: -10 }}
// //                             animate={{ opacity: 1, scale: 1, y: -24 }}
// //                             exit={{ opacity: 0, scale: 0.9, y: -10 }}
// //                             transition={{ type: "spring", stiffness: 300, damping: 20 }}
// //                             className={`absolute bottom-0 mb-4 w-44 sm:w-52 max-w-[80vw] bg-[#041122]/95 backdrop-blur-md border border-[#C8A14A]/40 p-3.5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-center z-50 pointer-events-auto ${popupAlignClasses[loc.popupAlign]}`}
// //                           >
// //                             <div className={`absolute top-full -mt-1 w-2 h-2 rotate-45 bg-[#041122] border-r border-b border-[#C8A14A]/40 ${arrowAlignClasses[loc.popupAlign]}`} />

// //                             <h4 className="text-xs sm:text-sm font-bold text-[#C8A14A] tracking-wider uppercase mb-1 font-sans">
// //                               {loc.name}
// //                             </h4>
// //                             <p className="text-[10px] sm:text-xs text-slate-300 font-medium leading-tight font-sans mb-2.5">
// //                               {loc.description}
// //                             </p>

// //                             <div className="mt-1 flex items-center justify-center gap-1.5">
// //                               <span className={`w-1.5 h-1.5 rounded-full ${loc.status === 'ONGOING' ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
// //                               <span className={`text-[9px] font-bold tracking-widest font-sans ${loc.status === 'ONGOING' ? 'text-amber-400' : 'text-emerald-400'}`}>
// //                                 {loc.status}
// //                               </span>
// //                             </div>
// //                           </motion.div>
// //                         )}
// //                       </AnimatePresence>

// //                     </div>
// //                   </div>
// //                 );
// //               })}

// //             </div>
// //           </div>
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default IndianMapDelhiPopup;


// "use client";
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// interface LocationNode {
//   id: string;
//   name: string;
//   top: string;
//   left: string;
//   description: string;
//   status: 'COMPLETED' | 'ONGOING';
//   popupAlign: 'left' | 'center' | 'right';
// }

// const IndianMapDelhiPopup: React.FC = () => {
//   const [activeLocation, setActiveLocation] = useState<string | null>(null);

//   const locations: LocationNode[] = [
//     {
//       id: 'delhi',
//       name: 'Delhi NCR',
//       top: '29.5%',
//       left: '36.6%',
//       description: 'Major infrastructure revamp & corporate hub setup.',
//       status: 'ONGOING',
//       popupAlign: 'center',
//     },
//     {
//       id: 'mumbai',
//       name: 'Mumbai',
//       top: '56.0%',
//       left: '26.5%',
//       description: 'Premium commercial complex & structural engineering work.',
//       status: 'COMPLETED',
//       popupAlign: 'right',
//     },
//     {
//       id: 'hyderabad',
//       name: 'Hyderabad',
//       top: '61.5%',
//       left: '41.0%',
//       description: 'Tech park development & smart workspace automation.',
//       status: 'ONGOING',
//       popupAlign: 'center',
//     },
//   ];

//   const headerVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 60, damping: 15 },
//     },
//   };

//   const mapBoxVariants = {
//     hidden: { opacity: 0, scale: 0.95, y: 30 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 50, damping: 16, delay: 0.2 },
//     },
//   };

//   const popupAlignClasses: Record<LocationNode['popupAlign'], string> = {
//     left: 'left-0 translate-x-0',
//     center: 'left-1/2 -translate-x-1/2',
//     right: 'right-0 translate-x-0 left-auto',
//   };

//   const arrowAlignClasses: Record<LocationNode['popupAlign'], string> = {
//     left: 'left-4',
//     center: 'left-1/2 -translate-x-1/2',
//     right: 'right-4 left-auto',
//   };

//   return (
//     <section className="w-full overflow-hidden border-b border-slate-900 bg-white">
//       {/* max-w-full karke items-stretch kiya taaki corner gaps na bachein */}
//       <div className="w-full max-w-full mx-auto flex flex-col lg:flex-row items-stretch">

//         {/* ================= LEFT: CONTENT PANEL (50% Width) ================= */}
//         <motion.div
//           className="w-full lg:w-1/2 bg-[#0B2E59] flex flex-col items-start justify-center text-left px-8 sm:px-16 lg:px-20 py-20 lg:py-0 space-y-5 order-1 lg:order-1"
//           variants={headerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           <div className="inline-flex items-center space-x-2 bg-[#C8A14A]/10 border border-[#C8A14A]/30 px-3 py-1.5 rounded-full w-fit">
//             <span className="w-2 h-2 rounded-full bg-[#EA4922] animate-pulse" />
//             <span className="text-xs uppercase font-semibold tracking-widest text-[#EA4922] font-sans">
//               Our Footprint
//             </span>
//           </div>

//           <h2 className="text-5xl sm:text-5xl lg:text-7xl  tracking-tight text-white leading-[1.2]">
//             Where We&apos;ve Built
//           </h2>

//           <p className="text-[#EA4922] text-base font-sans tracking-wide max-w-md leading-relaxed">
//             Tap a pin to see what we delivered there, and what&apos;s in progress today.
//           </p>

//           <div className="w-16 h-1 rounded-full bg-[#EA4922] !mt-6" />

//           <p className="text-slate-300 text-sm font-sans tracking-wide max-w-md">
//             From Delhi NCR to Mumbai and Hyderabad, our sites span the country&apos;s key business hubs.
//           </p>
//         </motion.div>

//         {/* ================= RIGHT: MAP PANEL (50% Width) ================= */}
//         <motion.div
//           className="w-full lg:w-1/2 bg-white flex justify-center items-center p-4 sm:p-10 lg:p-12 order-2 lg:order-2"
//           variants={mapBoxVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {/* Container limits handled perfectly to occupy maximum box layout */}
//           <div className="relative w-full max-w-[720px] aspect-square overflow-visible flex items-center justify-center">
//             <div className="relative w-full h-full mx-auto overflow-visible" style={{ aspectRatio: '0.88 / 1' }}>

//               {/* ✨ Map Original Colors with proper scaling aspect ratio */}
//               <img
//                 src="/images/india.jpg"
//                 alt="Map of India highlighting our project locations"
//                 className="w-full h-full object-contain select-none pointer-events-none opacity-85 filter contrast-125 saturate-50 sepia-[20%] hue-rotate-[195deg]"
//               />

//               <style jsx global>{`
//                 @keyframes multiRadar {
//                   0% { transform: scale(0.4); opacity: 0.7; }
//                   50% { opacity: 0.85; }
//                   100% { transform: scale(2.5); opacity: 0; }
//                 }
//                 @keyframes pinBobbing {
//                   0%, 100% { transform: translateY(0); }
//                   50% { transform: translateY(-4px); }
//                 }
//                 .animate-radar-ring { animation: multiRadar 2.6s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
//                 .animate-pin-bob { animation: pinBobbing 2.2s ease-in-out infinite; }
//               `}</style>

//               {locations.map((loc) => {
//                 const isSelected = activeLocation === loc.id;

//                 return (
//                   <div
//                     key={loc.id}
//                     className="absolute z-20"
//                     style={{ top: loc.top, left: loc.left }}
//                   >
//                     <div className="relative flex items-center justify-center w-0 h-0 overflow-visible">

//                       {/* Click Target Layer */}
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setActiveLocation(isSelected ? null : loc.id);
//                         }}
//                         className="absolute w-12 h-12 rounded-full bg-transparent z-30 cursor-pointer focus:outline-none -translate-y-3"
//                         aria-label={`Toggle details for ${loc.name}`}
//                       />

//                       {/* Waves Layer */}
//                       <span className="absolute inline-flex h-14 w-14 sm:h-20 sm:w-20 rounded-full bg-cyan-400/20 animate-radar-ring pointer-events-none -translate-y-3" />
//                       <span className="absolute inline-flex h-6 w-6 sm:h-9 sm:w-9 rounded-full bg-[#C8A14A]/15 animate-pulse pointer-events-none -translate-y-3" />

//                       {/* Pins */}
//                       <div className={`relative animate-pin-bob pointer-events-none transition-transform duration-300 ${isSelected ? 'scale-135' : 'scale-110'}`}>
//                         <svg className="w-5 h-7 sm:w-6 sm:h-8 filter drop-shadow-[0_4px_14px_rgba(200,161,74,0.5)] -translate-y-4" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           {/* Changed fill to solid color #DC290F */}
//                           <path d="M10 0C4.477 0 0 4.477 0 10c0 7 10 18 10 18s10-11 10-18c0-5.523-4.477-10-10-10z" fill="#DC290F" />
//                           <circle cx="10" cy="10" r="3" fill={isSelected ? "#EA4922" : "#041122"} className="transition-colors duration-300" />
//                         </svg>
//                       </div>

//                       {/* Dynamic Popup Card */}
//                       <AnimatePresence>
//                         {isSelected && (
//                           <motion.div
//                             initial={{ opacity: 0, scale: 0.9, y: -10 }}
//                             animate={{ opacity: 1, scale: 1, y: -24 }}
//                             exit={{ opacity: 0, scale: 0.9, y: -10 }}
//                             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                             className={`absolute bottom-0 mb-4 w-44 sm:w-52 max-w-[80vw] bg-[#041122]/95 backdrop-blur-md border border-[#C8A14A]/40 p-3.5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-center z-50 pointer-events-auto ${popupAlignClasses[loc.popupAlign]}`}
//                           >
//                             <div className={`absolute top-full -mt-1 w-2 h-2 rotate-45 bg-[#041122] border-r border-b border-[#C8A14A]/40 ${arrowAlignClasses[loc.popupAlign]}`} />

//                             <h4 className="text-xs sm:text-sm font-bold text-[#C8A14A] tracking-wider uppercase mb-1 font-sans">
//                               {loc.name}
//                             </h4>
//                             <p className="text-[10px] sm:text-xs text-slate-300 font-medium leading-tight font-sans mb-2.5">
//                               {loc.description}
//                             </p>

//                             <div className="mt-1 flex items-center justify-center gap-1.5">
//                               <span className={`w-1.5 h-1.5 rounded-full ${loc.status === 'ONGOING' ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
//                               <span className={`text-[9px] font-bold tracking-widest font-sans ${loc.status === 'ONGOING' ? 'text-amber-400' : 'text-emerald-400'}`}>
//                                 {loc.status}
//                               </span>
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>

//                     </div>
//                   </div>
//                 );
//               })}

//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default IndianMapDelhiPopup;


"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BASE_URL } from '@/utils/baseUrl';

interface LocationNode {
  id: string;
  name: string;
  top: string;
  left: string;
  popupAlign: 'left' | 'center' | 'right';
}

interface Project {
  _id: string;
  id: string;
  projectTitle: string;
  projectImage: string;
  status?: string;
}

const IndianMapDelhiPopup: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [locationProjects, setLocationProjects] = useState<Record<string, Project>>({});

  const locations: LocationNode[] = [
    {
      id: 'delhi',
      name: 'Delhi NCR',
      top: '29.5%',
      left: '36.6%',
      popupAlign: 'center',
    },
    {
      id: 'mumbai',
      name: 'Mumbai',
      top: '56.0%',
      left: '26.5%',
      popupAlign: 'right',
    },
    {
      id: 'hyderabad',
      name: 'Hyderabad',
      top: '61.5%',
      left: '41.0%',
      popupAlign: 'center',
    },
  ];

  // Fetch projects once
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${BASE_URL}/projects`);
        const data = await res.json();
        if (data?.success && Array.isArray(data.data)) {
          setProjects(data.data);
        }
      } catch (err) {
        console.error('Error fetching projects for map:', err);
      }
    };
    fetchProjects();
  }, []);

  // Once projects are loaded, assign a random project to each pin (stable per page load)
  useEffect(() => {
    if (projects.length === 0) return;

    const assigned: Record<string, Project> = {};
    locations.forEach((loc) => {
      const randomProject = projects[Math.floor(Math.random() * projects.length)];
      assigned[loc.id] = randomProject;
    });
    setLocationProjects(assigned);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects]);

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  const mapBoxVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 16, delay: 0.2 },
    },
  };

  const popupAlignClasses: Record<LocationNode['popupAlign'], string> = {
    left: 'left-0 translate-x-0',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-0 translate-x-0 left-auto',
  };

  const arrowAlignClasses: Record<LocationNode['popupAlign'], string> = {
    left: 'left-4',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-4 left-auto',
  };

  return (
    <section className="w-full overflow-hidden border-b border-slate-900 bg-white">
      {/* max-w-full karke items-stretch kiya taaki corner gaps na bachein */}
      <div className="w-full max-w-full mx-auto flex flex-col lg:flex-row items-stretch">

        {/* ================= LEFT: CONTENT PANEL (50% Width) ================= */}
        <motion.div
          className="w-full lg:w-1/2 bg-[#0B2E59] flex flex-col items-start justify-center text-left px-8 sm:px-16 lg:px-20 py-20 lg:py-0 space-y-5 order-1 lg:order-1"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 bg-[#C8A14A]/10 border border-[#C8A14A]/30 px-3 py-1.5 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-[#EA4922] animate-pulse" />
            <span className="text-xs uppercase font-semibold tracking-widest text-[#EA4922] font-sans">
              Our Footprint
            </span>
          </div>

          <h2 className="text-5xl sm:text-5xl lg:text-7xl  tracking-tight text-white leading-[1.2]">
            Where We&apos;ve Built
          </h2>

          <p className="text-[#EA4922] text-base font-sans tracking-wide max-w-md leading-relaxed">
            Tap a pin to see a project we delivered there.
          </p>

          <div className="w-16 h-1 rounded-full bg-[#EA4922] !mt-6" />

          <p className="text-slate-300 text-sm font-sans tracking-wide max-w-md">
            From Delhi NCR to Mumbai and Hyderabad, our sites span the country&apos;s key business hubs.
          </p>
        </motion.div>

        {/* ================= RIGHT: MAP PANEL (50% Width) ================= */}
        <motion.div
          className="w-full lg:w-1/2 bg-white flex justify-center items-center p-4 sm:p-10 lg:p-12 order-2 lg:order-2"
          variants={mapBoxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Container limits handled perfectly to occupy maximum box layout */}
          <div className="relative w-full max-w-[720px] aspect-square overflow-visible flex items-center justify-center">
            <div className="relative w-full h-full mx-auto overflow-visible" style={{ aspectRatio: '0.88 / 1' }}>

              {/* ✨ Map Original Colors with proper scaling aspect ratio */}
              <img
                src="/images/india.jpg"
                alt="Map of India highlighting our project locations"
                className="w-full h-full object-contain select-none pointer-events-none opacity-85 filter contrast-125 saturate-50 sepia-[20%] hue-rotate-[195deg]"
              />

              <style jsx global>{`
                @keyframes multiRadar {
                  0% { transform: scale(0.4); opacity: 0.7; }
                  50% { opacity: 0.85; }
                  100% { transform: scale(2.5); opacity: 0; }
                }
                @keyframes pinBobbing {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-4px); }
                }
                .animate-radar-ring { animation: multiRadar 2.6s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
                .animate-pin-bob { animation: pinBobbing 2.2s ease-in-out infinite; }
              `}</style>

              {locations.map((loc) => {
                const isSelected = activeLocation === loc.id;
                const project = locationProjects[loc.id];

                return (
                  <div
                    key={loc.id}
                    className="absolute z-20"
                    style={{ top: loc.top, left: loc.left }}
                  >
                    <div className="relative flex items-center justify-center w-0 h-0 overflow-visible">

                      {/* Click Target Layer */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveLocation(isSelected ? null : loc.id);
                        }}
                        className="absolute w-12 h-12 rounded-full bg-transparent z-30 cursor-pointer focus:outline-none -translate-y-3"
                        aria-label={`Toggle details for ${loc.name}`}
                      />

                      {/* Waves Layer */}
                      <span className="absolute inline-flex h-14 w-14 sm:h-20 sm:w-20 rounded-full bg-cyan-400/20 animate-radar-ring pointer-events-none -translate-y-3" />
                      <span className="absolute inline-flex h-6 w-6 sm:h-9 sm:w-9 rounded-full bg-[#C8A14A]/15 animate-pulse pointer-events-none -translate-y-3" />

                      {/* Pins */}
                      <div className={`relative animate-pin-bob pointer-events-none transition-transform duration-300 ${isSelected ? 'scale-135' : 'scale-110'}`}>
                        <svg className="w-5 h-7 sm:w-6 sm:h-8 filter drop-shadow-[0_4px_14px_rgba(200,161,74,0.5)] -translate-y-4" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Changed fill to solid color #DC290F */}
                          <path d="M10 0C4.477 0 0 4.477 0 10c0 7 10 18 10 18s10-11 10-18c0-5.523-4.477-10-10-10z" fill="#DC290F" />
                          <circle cx="10" cy="10" r="3" fill={isSelected ? "#EA4922" : "#041122"} className="transition-colors duration-300" />
                        </svg>
                      </div>

                      {/* Dynamic Popup Card - shows a random project (image + title) */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: -24 }}
                            exit={{ opacity: 0, scale: 0.9, y: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={`absolute bottom-0 mb-4 w-48 sm:w-56 max-w-[80vw] bg-[#041122]/95 backdrop-blur-md border border-[#C8A14A]/40 p-3 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-center z-50 pointer-events-auto ${popupAlignClasses[loc.popupAlign]}`}
                          >
                            <div className={`absolute top-full -mt-1 w-2 h-2 rotate-45 bg-[#041122] border-r border-b border-[#C8A14A]/40 ${arrowAlignClasses[loc.popupAlign]}`} />

                            <h4 className="text-xs sm:text-sm font-bold text-[#C8A14A] tracking-wider uppercase mb-2 font-sans">
                              {loc.name}
                            </h4>

                            {project ? (
                              <>
                                <div className="w-full h-20 sm:h-24 rounded-lg overflow-hidden mb-2 border border-white/10">
                                  <img
                                    src={project.projectImage}
                                    alt={project.projectTitle}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <p className="text-[10px] sm:text-xs text-slate-200 font-medium leading-tight font-sans line-clamp-2">
                                  {project.projectTitle}
                                </p>
                              </>
                            ) : (
                              <p className="text-[10px] sm:text-xs text-slate-400 font-sans">
                                Loading project...
                              </p>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default IndianMapDelhiPopup;