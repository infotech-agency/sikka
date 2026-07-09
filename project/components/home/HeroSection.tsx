// // 'use client';

// // import Link from 'next/link';
// // import { motion } from 'framer-motion';
// // import { ChevronRight, ArrowRight } from 'lucide-react';
// // import { companyInfo } from '@/lib/data';
// // import { CountUp } from '@/components/animations';

// // const achievements = [
// //   { value: 20, suffix: '+', label: 'Years Experience' },
// //   { value: 500, suffix: '+', label: 'Projects' },
// //   { value: 100, suffix: '+', label: 'Clients' },
// //   { value: 50, suffix: '+', label: 'Engineers' },
// // ];

// // export function HeroSection() {
// //   return (
// //     <section className="relative min-h-[85vh] flex items-center overflow-hidden">
// //       {/* Background Image */}
// //       <div className="absolute inset-0">
// //         <img
// //           src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
// //           alt="Engineering infrastructure"
// //           className="w-full h-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-[#0B2E59]/85" />
// //       </div>

// //       <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// //           {/* Left Content */}
// //           <div>
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6 }}
// //               className="flex items-center gap-2 mb-6"
// //             >
// //               <div className="h-px w-10 bg-[#C8A14A]" />
// //               <span className="text-[#C8A14A] text-sm font-semibold uppercase tracking-wider">
// //                 Government Approved EPC Contractor
// //               </span>
// //             </motion.div>

// //             <motion.h1
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.1 }}
// //               className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[Merriweather] leading-tight mb-6"
// //             >
// //               {companyInfo.tagline}
// //             </motion.h1>

// //             <motion.p
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //               className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed"
// //             >
// //               {companyInfo.description}
// //             </motion.p>

// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.3 }}
// //               className="flex flex-wrap gap-4"
// //             >
// //               <Link
// //                 href="/projects"
// //                 className="inline-flex items-center gap-2 bg-[#C8A14A] text-[#0B2E59] px-6 py-3 text-sm font-semibold hover:bg-[#b8923f] transition-colors"
// //               >
// //                 Explore Projects
// //                 <ArrowRight className="h-4 w-4" />
// //               </Link>
// //               <Link
// //                 href="/contact"
// //                 className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-[#0B2E59] transition-colors"
// //               >
// //                 Contact Us
// //                 <ChevronRight className="h-4 w-4" />
// //               </Link>
// //             </motion.div>
// //           </div>

// //           {/* Right - Achievement Cards */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 40 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.7, delay: 0.4 }}
// //             className="grid grid-cols-2 gap-4"
// //           >
// //             {achievements.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center"
// //               >
// //                 <div className="text-3xl md:text-4xl font-bold text-[#C8A14A] font-[Merriweather] mb-2">
// //                   <CountUp end={item.value} suffix={item.suffix} />
// //                 </div>
// //                 <div className="text-sm text-gray-300">{item.label}</div>
// //               </div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // 'use client';

// // import Link from 'next/link';
// // import { motion } from 'framer-motion';
// // import { ChevronRight, ArrowRight } from 'lucide-react';
// // import { companyInfo } from '@/lib/data';
// // import { CountUp } from '@/components/animations';

// // const achievements = [
// //   { value: 20, suffix: '+', label: 'Years Experience' },
// //   { value: 500, suffix: '+', label: 'Projects' },
// //   { value: 100, suffix: '+', label: 'Clients' },
// //   { value: 50, suffix: '+', label: 'Engineers' },
// // ];

// // export function HeroSection() {
// //   return (
// //     <section className="relative min-h-[85vh] flex items-center overflow-hidden">
// //       {/* Background Video Loop */}
// //       <div className="absolute inset-0">
// //         <video
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //           className="w-full h-full object-cover"
// //           // Replace with your actual video path (e.g., in your public folder)
// //           src="/videos/bg1.mp4" 
// //           // Optional placeholder image while video loads
// //           poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
// //         />
// //         {/* Semi-transparent Overlay to keep text readable */}
// //         <div className="absolute inset-0 bg-[#0B2E59]/85" />
// //       </div>

// //       <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// //           {/* Left Content */}
// //           <div>
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6 }}
// //               className="flex items-center gap-2 mb-6"
// //             >
// //               <div className="h-px w-10 bg-[#0B2E59]" />
// //               <span className="text-[#0B2E59] text-sm font-semibold uppercase tracking-wider">
// //                 Government Approved EPC Contractor
// //               </span>
// //             </motion.div>

// //             <motion.h1
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.1 }}
// //               className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[Merriweather] leading-tight mb-6"
// //             >
// //               {companyInfo.tagline}
// //             </motion.h1>

// //             <motion.p
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //               className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed"
// //             >
// //               {companyInfo.description}
// //             </motion.p>

// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.3 }}
// //               className="flex flex-wrap gap-4"
// //             >
// //               <Link
// //                 href="/projects"
// //                 className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-6 py-3 text-sm font-semibold hover:bg-[#b8923f] transition-colors"
// //               >
// //                 Explore Projects
// //                 <ArrowRight className="h-4 w-4" />
// //               </Link>
// //               <Link
// //                 href="/contact"
// //                 className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-[#0B2E59] transition-colors"
// //               >
// //                 Contact Us
// //                 <ChevronRight className="h-4 w-4" />
// //               </Link>
// //             </motion.div>
// //           </div>

// //           {/* Right - Achievement Cards */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 40 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.7, delay: 0.4 }}
// //             className="grid grid-cols-2 gap-4"
// //           >
// //             {achievements.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center"
// //               >
// //                 <div className="text-3xl md:text-4xl font-bold text-[#C8A14A] font-[Merriweather] mb-2">
// //                   <CountUp end={item.value} suffix={item.suffix} />
// //                 </div>
// //                 <div className="text-sm text-gray-300">{item.label}</div>
// //               </div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// 'use client';

// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { ChevronRight, ArrowRight } from 'lucide-react';
// import { companyInfo } from '@/lib/data';
// import { CountUp } from '@/components/animations';

// const achievements = [
//   { value: 20, suffix: '+', label: 'Years Experience' },
//   { value: 500, suffix: '+', label: 'Projects' },
//   { value: 100, suffix: '+', label: 'Clients' },
//   { value: 50, suffix: '+', label: 'Engineers' },
// ];

// export function HeroSection() {
//   return (
//     <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0B2E59]">
//       {/* Background Video Loop */}
//       <div className="absolute inset-0">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="w-full h-full object-cover" // Video pure 100% opacity par dikhegi
//           src="/videos/bg1.mp4" 
//           poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
//         />
//         {/* --- BALANCED OVERLAY --- */}
//         {/* Sirf ek single layer jo video ko translucent navy blue tone degi (Bina video chhupaye) */}
//         <div className="absolute inset-0 bg-[#0B2E59]/75 mix-blend-multiply" />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/48 via-transparent to-black/20" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="flex items-center gap-2 mb-6"
//             >
//               <div className="h-px w-10 bg-[#EA4922]" />
//               <span className="text-[#EA4922] text-sm font-semibold uppercase tracking-wider">
//                 Government Approved EPC Contractor
//               </span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[Merriweather] leading-tight mb-6"
//             >
//               {companyInfo.tagline}
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-lg text-gray-200 mb-8 max-w-xl leading-relaxed"
//             >
//               {companyInfo.description}
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="flex flex-wrap gap-4"
//             >
//               <Link
//                 href="/projects"
//                 className="inline-flex items-center gap-2 bg-[#EA4922] text-white px-6 py-3 text-sm font-bold hover:bg-white hover:text-[#0B2E59] transition-colors"
//               >
//                 Explore Projects
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-[#0B2E59] transition-colors"
//               >
//                 Contact Us
//                 <ChevronRight className="h-4 w-4" />
//               </Link>
//             </motion.div>
//           </div>

//           {/* Right - Achievement Cards */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: 0.4 }}
//             className="grid grid-cols-2 gap-4"
//           >
//             {achievements.map((item, index) => (
//               <div
//                 key={index}
//                 // Glassmorphism background jo video ko piche se transparently show karega
//                 className="bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center rounded-sm"
//               >
//                 <div className="text-3xl md:text-4xl font-bold text-[#EA4922] font-[Merriweather] mb-2">
//                   <CountUp end={item.value} suffix={item.suffix} />
//                 </div>
//                 <div className="text-sm text-gray-200 font-medium">{item.label}</div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { companyInfo } from '@/lib/data';
import { CountUp } from '@/components/animations';
import { useEffect, useState } from 'react';
import { BASE_URL } from '@/utils/baseUrl';

// const achievements = [
//   { value: 20, suffix: '+', label: 'Years Experience' },
//   { value: 500, suffix: '+', label: 'Projects' },
//   { value: 100, suffix: '+', label: 'Clients' },
//   { value: 50, suffix: '+', label: 'Engineers' },
// ];

export function HeroSection() {
  const [heroVideo, setHeroVideo] = useState("/videos/bg1.mp4");
  const [achievements, setAchievements] = useState([]);
  useEffect(() => {
  const fetchHeroVideo = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/hero-video`,
        {
          cache: "no-store",
        }
      );

      const data = await res.json();
      console.log(data?.data);
      if (data?.data?.video) {
        setHeroVideo(data.data.video);
      }
    } catch (error) {
      console.error("Failed to fetch hero video", error);
    }
  };

  fetchHeroVideo();
}, []);

  useEffect(() => {
  const fetchCounters = async () => {
    try {
      const res = await fetch(`${BASE_URL}/counters`, {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setAchievements(data.data);
      }
    } catch (err) {
      console.error("Failed to fetch counters", err);
    }
  };

  fetchCounters();
}, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0B2E59]">
      {/* Background Video Loop */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover" 
          src={`${heroVideo}` || "/videos/bg1.mp4"}
          poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
        />
        {/* --- BALANCED OVERLAY --- */}
        <div className="absolute inset-0 bg-[#0B2E59]/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/48 via-transparent to-black/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-10 bg-[#EA4922]" />
              {/* UPDATED: text-sm trailing text ko uppercase rakha hai custom design touch ke liye */}
              <span className="text-[#EA4922] text-sm font-semibold uppercase tracking-wider">
                Government Approved EPC Contractor
              </span>
            </motion.div>

            {/* FIXED: 'font-[Merriweather]' ko hata kar ab ye global h1 font (SCHABO Condensed) pakdega */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl  text-white leading-tight mb-6 tracking-wide"
            >
              {companyInfo.tagline}
            </motion.h1>

            {/* FIXED: Body copy by default global Inter font hi use karega standard reading ke liye */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-200 mb-8 max-w-xl leading-relaxed"
            >
              {companyInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-[#EA4922] text-white px-6 py-3 text-sm font-bold hover:bg-white hover:text-[#0B2E59] transition-colors"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-[#0B2E59] transition-colors"
              >
                Contact Us
                <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right - Achievement Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {achievements.slice(0,4).map((item:any)=> (
              // <div
              //   key={index}
              //   className="bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center rounded-sm"
              // >
              //   {/* FIXED: Yahan se bhi 'font-[Merriweather]' remove kar diya hai taaki counter numbers condensed bold look mein aayein */}
              //   <div className="text-3xl md:text-4xl font-bold text-[#EA4922] mb-2 tracking-wide">
              //     <CountUp end={item.value} suffix={item.suffix} />
              //   </div>
              //   <div className="text-sm text-gray-200 font-medium">{item.label}</div>
              // </div>
              <div
  key={item._id}
  className="bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center rounded-sm"
>
  <div className="text-3xl md:text-4xl font-bold text-[#EA4922] mb-2 tracking-wide">
    <CountUp
      end={Number(item.number || item.counter)}
      suffix={item.prefix || ""}
    />
  </div>

  <div className="text-sm text-gray-200 font-medium">
    {item.label}
  </div>
</div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}