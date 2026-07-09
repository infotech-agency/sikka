// // 'use client';
// // import { SectionHeader } from '@/components/SectionHeader';
// // import { FadeIn } from '@/components/animations';
// // import { clients } from '@/lib/data';

// // export function ClientsSection() {
// //   return (
// //     <section className="py-20 bg-white overflow-hidden">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <SectionHeader
// //           title="Clients & Departments"
// //           subtitle="Trusted Partners"
// //         />
// //       </div>

// //       {/* <FadeIn>
// //         <div className="relative mt-8">
// //           <div className="flex animate-marquee whitespace-nowrap">
// //             {[...clients, ...clients, ...clients].map((client, index) => (
// //               <div
// //                 key={index}
// //                 className="mx-8 flex items-center justify-center bg-[#F8FAFC] border border-gray-200 px-8 py-6 min-w-[280px]"
// //               >
// //                 <span className="text-[#374151] font-semibold text-sm truncate">{client}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </FadeIn> */}
// //       <FadeIn>
// //   <div className="relative mt-8 overflow-hidden group">
// //     {/* Soft fade gradients on left & right sides for a smoother marquee appearance */}
// //     <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
// //     <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

// //     <div className="flex animate-marquee whitespace-nowrap gap-6">
// //       {[...clients, ...clients, ...clients].map((client, index) => (
// //         <div
// //           key={index}
// //           className="inline-flex flex-col items-center justify-center bg-white border border-gray-100 shadow-sm rounded-xl px-6 py-6 w-[280px] shrink-0 transition-all duration-300 hover:border-[#C8A14A]/30 hover:shadow-md"
// //         >
// //           {/* Logo Container */}
// //           <div className="h-16 w-full flex items-center justify-center mb-3">
// //             <img
// //               src={client.logo}
// //               alt={`${client.name} logo`}
// //               className="max-h-full max-w-[85%] object-contain filter grayscale opacity-75 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
// //               onError={(e) => {
// //                 // Safe fallback string handler if image fails to load
// //                 (e.target as HTMLElement).style.display = 'none';
// //               }}
// //             />
// //           </div>
          
// //           {/* Text Identifier */}
// //           <span className="text-[#374151] font-medium text-xs tracking-wide text-center w-full truncate px-2">
// //             {client.name}
// //           </span>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // </FadeIn>
// //       <div className="max-w-7xl mx-auto px-4 mt-12">
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
// //           {[
// //             { value: '100+', label: 'Government Clients' },
// //             { value: '50+', label: 'Corporate Clients' },
// //             { value: '15+', label: 'PSU Partnerships' },
// //             { value: '100%', label: 'Repeat Business' },
// //           ].map((stat, index) => (
// //             <div key={index} className="bg-[#F8FAFC] border border-gray-200 p-6">
// //               <div className="text-2xl font-bold text-[#0B2E59] font-[Merriweather] mb-1">{stat.value}</div>
// //               <div className="text-sm text-[#374151]">{stat.label}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// 'use client';
// import { SectionHeader } from '@/components/SectionHeader';
// import { FadeIn } from '@/components/animations';
// import { clients } from '@/lib/data';

// export function ClientsSection() {
//   return (
//     <section className="py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">
//         <SectionHeader
//           title="Clients & Departments"
//           subtitle="Trusted Partners"
//         />
//       </div>

//       <FadeIn>
//         <div className="relative mt-8 overflow-hidden w-full">
//           {/* Soft fade gradients on left & right sides */}
//           <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
//           <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

//           {/* --- SPEED YAHAN SE CONTROL HORI HAI --- */}
//           {/* animationDuration ko '8s' kiya hai taaki logos ekdam fast move karein */}
//           <div 
//             className="flex w-max whitespace-nowrap gap-6 animate-marquee [animation-timing-function:linear] hover:[animation-play-state:paused]"
//             style={{ animationDuration: '8s' }} 
//           >
//             {[...clients, ...clients].map((client, index) => (
//               <div
//                 key={index}
//                 className="inline-flex flex-col items-center justify-center bg-white border border-gray-100 shadow-sm rounded-xl px-6 py-6 w-[280px] shrink-0 transition-all duration-300 hover:border-[#C8A14A]/30 hover:shadow-md mx-1"
//               >
//                 {/* Logo Container */}
//                 <div className="h-16 w-full flex items-center justify-center mb-3">
//                   <img
//                     src={client.logo}
//                     alt={`${client.name} logo`}
//                     className="max-h-full max-w-[85%] object-contain filter grayscale opacity-75 hover:filter-none hover:opacity-100 transition-all duration-300"
//                     onError={(e) => {
//                       (e.target as HTMLElement).style.display = 'none';
//                     }}
//                   />
//                 </div>
                
//                 {/* Text Identifier */}
//                 <span className="text-[#374151] font-medium text-xs tracking-wide text-center w-full truncate px-2">
//                   {client.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </FadeIn>

//       <div className="max-w-7xl mx-auto px-4 mt-12">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//           {[
//             { value: '100+', label: 'Government Clients' },
//             { value: '50+', label: 'Corporate Clients' },
//             { value: '15+', label: 'PSU Partnerships' },
//             { value: '100%', label: 'Repeat Business' },
//           ].map((stat, index) => (
//             <div key={index} className="bg-[#F8FAFC] border border-gray-200 p-6">
//               <div className="text-2xl font-bold text-[#0B2E59] font-[Merriweather] mb-1">{stat.value}</div>
//               <div className="text-sm text-[#374151]">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';
import { SectionHeader } from '@/components/SectionHeader';
import { CountUp, FadeIn } from '@/components/animations';
import { clients } from '@/lib/data';
import { BASE_URL } from '@/utils/baseUrl';
import { useEffect, useState } from "react";
export function ClientsSection() {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
  const fetchCounters = async () => {
    try {
      const res = await fetch(`${BASE_URL}/counters`, {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setCounters(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  fetchCounters();
}, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Clients & Departments"
          subtitle="Trusted Partners"
        />
      </div>

      <FadeIn>
        <div className="relative mt-8 overflow-hidden w-full">
          {/* Soft fade gradients on left & right sides */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* --- SPEED CONTROL --- */}
          <div 
            className="flex w-max whitespace-nowrap gap-6 animate-marquee [animation-timing-function:linear] hover:[animation-play-state:paused]"
            style={{ animationDuration: '8s' }} 
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="inline-flex flex-col items-center justify-center bg-white border border-gray-100 shadow-sm rounded-xl px-6 py-6 w-[280px] shrink-0 transition-all duration-300 hover:border-[#C8A14A]/30 hover:shadow-md mx-1"
              >
                {/* Logo Container */}
                <div className="h-16 w-full flex items-center justify-center mb-3">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    /* Yahan se grayscale aur opacity filter hata diya gaya hai */
                    className="max-h-full max-w-[85%] object-contain transition-all duration-300"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Text Identifier */}
                <span className="text-[#374151] font-medium text-xs tracking-wide text-center w-full truncate px-2">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

     
    </section>
  );
}