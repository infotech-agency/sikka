// import { FadeIn, CountUp } from '@/components/animations';

// const stats = [
//   { value: 20, suffix: '+', label: 'Years Experience', description: 'Since 2004' },
//   { value: 500, suffix: '+', label: 'Projects Delivered', description: 'Across India' },
//   { value: 100, suffix: '+', label: 'Clients Served', description: 'Government & Private' },
//   { value: 25, suffix: '+', label: 'Cities', description: 'Pan-India Presence' },
// ];

// export function StatsSection() {
//   return (
//     <section className="py-16 bg-[#0B2E59]">
//       <div className="max-w-7xl mx-auto px-4">
//         <FadeIn>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="bg-white/5 border border-white/10 p-8 text-center"
//               >
//                 <div className="text-4xl md:text-5xl font-bold text-[#302f2d] font-[Merriweather] mb-2">
//                   <CountUp end={stat.value} suffix={stat.suffix} />
//                 </div>
//                 <div className="text-white font-semibold mb-1">{stat.label}</div>
//                 <div className="text-gray-400 text-sm">{stat.description}</div>
//               </div>
//             ))}
//           </div>
//         </FadeIn>
//       </div>
//     </section>
//   );
// }
"use client"
import { useEffect, useState } from "react";
import { FadeIn, CountUp } from '@/components/animations';
import { BASE_URL } from '@/utils/baseUrl';

const stats = [
  { value: 35, suffix: '+', label: 'Years Experience', description: 'Since 2004' },
  { value: 100, suffix: '+', label: 'Projects Completed', description: 'Across India' },
  { value: 100, suffix: '+', label: 'Clients Served', description: 'Government & Private' },
  { value: 25, suffix: '+', label: 'Cities', description: 'Pan-India Presence' },
];

export function StatsSection() {

  const [stats, setStats] = useState([]);
  useEffect(() => {
  const fetchCounters = async () => {
    try {
      const res = await fetch(`${BASE_URL}/counters`, {
        cache: "no-store",
      });

      const data = await res.json();
      console.log(data);
      if (data.success) {
        setStats(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  fetchCounters();
}, []);
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="Engineering site construction"
          className="w-full h-full object-cover"
        />
        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-[#0B2E59]/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-8 text-center backdrop-blur-sm"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#EA4922]  mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
              </div>
            ))} */}
            {stats.map((stat) => (
  <div
    key={stat._id}
    className="bg-white/5 border border-white/10 p-8 text-center backdrop-blur-sm"
  >
    <div className="text-4xl md:text-5xl font-bold text-[#EA4922] mb-2">
      <CountUp
        end={Number(stat.number)}
        suffix={stat.prefix || ""}
      />
    </div>

    <div className="text-white font-semibold mb-1">
      {stat.label}
    </div>

    <div className="text-gray-300 text-sm">
      {stat.description}
    </div>
  </div>
))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}