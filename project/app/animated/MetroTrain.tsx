// // 'use client';

// // import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// // import { useRef } from 'react';
// // import Image from 'next/image';

// // export default function MetroTrain() {
// //   const sectionRef = useRef<HTMLDivElement>(null);

// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ['start start', 'end end'],
// //   });

// //   // Higher stiffness + higher damping = quick but smooth follow, no overshoot/lag.
// //   // This fixes "train bohot fast/jittery" without making scroll feel disconnected.
// //   const smoothProgress = useSpring(scrollYProgress, {
// //     stiffness: 120,
// //     damping: 30,
// //     mass: 0.5,
// //     restDelta: 0.001,
// //   });

// //   // Train travels from fully off-screen left to fully off-screen right.
// //   // Using vw consistently (not mixing % and vw) avoids jumpy math at different widths.
// //   const trainX = useTransform(smoothProgress, [0, 1], ['-100vw', '100vw']);

// //   const textY = useTransform(smoothProgress, [0, 0.5, 1], [0, -15, 0]);
// //   const textOpacity = useTransform(smoothProgress, [0, 0.1, 0.5, 0.9, 1], [1, 1, 1, 1, 1]);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative h-[200vh] bg-[#F8FAFC] dark:bg-[#111827]"
// //     >
// //       {/* Sticky Container — pins for the full 200vh scroll range, then releases */}
// //       <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4">

// //         {/* Background / Centered Company Text */}
// //         <motion.div
// //           style={{ y: textY, opacity: textOpacity }}
// //           className="absolute z-0 text-center select-none max-w-4xl pointer-events-none"
// //         >
// //           <h1 className="text-4xl md:text-7xl font-black tracking-tight text-[#0B2E59] dark:text-white uppercase leading-tight">
// //             Sikka Engineering <br />
// //             <span className="text-[#C8A14A] font-light text-2xl md:text-4xl block mt-2 tracking-[0.2em]">
// //               Pvt. Ltd.
// //             </span>
// //           </h1>
// //         </motion.div>

// //         {/* Foreground Animated Train */}
// //         <motion.div
// //           style={{ x: trainX }}
// //           className="absolute left-0 z-10 w-[320px] md:w-[750px] drop-shadow-[0_20px_50px_rgba(11,46,89,0.3)]"
// //         >
// //           <Image
// //             src="/images/metro-train.png"
// //             alt="Metro Train"
// //             width={750}
// //             height={220}
// //             priority
// //             className="w-full h-auto select-none pointer-events-none"
// //           />
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // }

// 'use client';

// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { useRef } from 'react';
// import Image from 'next/image';

// export default function MetroTrain() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start start', 'end end'],
//   });

//   // const smoothProgress = useSpring(scrollYProgress, {
//   //   stiffness: 120,
//   //   damping: 30,
//   //   mass: 0.5,
//   //   restDelta: 0.001,
//   // });
//   const smoothProgress = useSpring(scrollYProgress, {
//   stiffness: 40,      // kam kiya (pehle 120) -> zyada slow response
//   damping: 20,        // kam kiya thoda -> smoother glide
//   mass: 1.2,          // badhaya -> zyada "weight", slower feel
//   restDelta: 0.001,
// });
//   // const trainX = useTransform(smoothProgress, [0, 1], ['-100vw', '100vw']);
//   const trainX = useTransform(
//   smoothProgress,
//   [0, 1],
//   ['120vw', '-120vw']
// );
//   const textY = useTransform(smoothProgress, [0, 0.5, 1], [0, -15, 0]);
//   const textOpacity = useTransform(smoothProgress, [0, 0.1, 0.5, 0.9, 1], [1, 1, 1, 1, 1]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-[100vh] bg-[#F8FAFC] dark:bg-[#111827]"
//     >
//       <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4 sm:px-6">

//         {/* Background / Centered Company Text */}
//         <motion.div
//           style={{ y: textY, opacity: textOpacity }}
//           className="absolute z-0 text-center select-none max-w-[90vw] sm:max-w-2xl md:max-w-4xl pointer-events-none px-2"
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#0B2E59] dark:text-white uppercase leading-tight">
//             Sikka Engineering Company<br />
//             <span className="text-[#EA4922] font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl block mt-2 tracking-[0.15em] sm:tracking-[0.2em]">
//               Pvt. Ltd.
//             </span>
//           </h1>
//         </motion.div>

//         {/* Foreground Animated Train */}
//         <motion.div
//           style={{ x: trainX }}
//           className="absolute left-0 z-10 w-[200px] sm:w-[320px] md:w-[500px] lg:w-[650px] xl:w-[750px] drop-shadow-[0_20px_50px_rgba(11,46,89,0.3)]"
//         >
//           <Image
//             src="/images/train.png"
//             alt="Metro Train"
//             width={750}
//             height={220}
//             priority
//             className="w-full h-auto select-none pointer-events-none"
//           />
//         </motion.div>

//       </div>
//     </section>
//   );
// }

'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function MetroTrain() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Smooth scroll with slower response
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,      // Even slower response
    damping: 25,        // Smooth damping
    mass: 1.5,          // Heavier for slower movement
    restDelta: 0.001,
  });

  // Train moves from RIGHT to LEFT (scroll down -> train moves left)
  // [0, 0.3] -> train stays at right side (30% of scroll)
  // [0.3, 1] -> train moves from right to left (remaining 70% of scroll)
  const trainX = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    ['120vw', '80vw', '20vw', '-50vw']  // Right to Left movement
  );

  // Text fades out as train approaches
  const textOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [1, 1, 0.8, 0.3, 0]
  );

  const textY = useTransform(smoothProgress, [0, 0.3, 1], [0, -10, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] bg-[#F8FAFC] dark:bg-[#111827]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4 sm:px-6">

        {/* Background / Centered Company Text */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute z-0 text-center select-none max-w-[90vw] sm:max-w-2xl md:max-w-4xl pointer-events-none px-2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#0B2E59] dark:text-white uppercase leading-tight">
            Sikka Engineering Company<br />
            <span className="text-[#EA4922] font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl block mt-2 tracking-[0.15em] sm:tracking-[0.2em]">
              Pvt. Ltd.
            </span>
          </h1>
        </motion.div>

        {/* Foreground Animated Train - Moves Right to Left */}
        <motion.div
          style={{ x: trainX }}
          className="absolute left-0 z-10 w-[200px] sm:w-[320px] md:w-[500px] lg:w-[650px] xl:w-[750px] drop-shadow-[0_20px_50px_rgba(11,46,89,0.3)]"
        >
          <Image
            src="/images/train.png"
            alt="Metro Train"
            width={750}
            height={220}
            priority
            className="w-full h-auto select-none pointer-events-none"
          />
        </motion.div>

      </div>
    </section>
  );
}