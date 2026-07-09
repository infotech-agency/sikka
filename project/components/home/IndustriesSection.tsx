// import { Landmark, Route, Cog, Factory, Sun, Droplets } from 'lucide-react';
// import { SectionHeader } from '@/components/SectionHeader';
// import { StaggerContainer, StaggerItem } from '@/components/animations';
// import { industries } from '@/lib/data';

// const iconMap: Record<string, React.ReactNode> = {
//   Landmark: <Landmark className="h-10 w-10" />,
//   Road: <Route className="h-10 w-10" />,
//   Cog: <Cog className="h-10 w-10" />,
//   Factory: <Factory className="h-10 w-10" />,
//   Sun: <Sun className="h-10 w-10" />,
//   Droplets: <Droplets className="h-10 w-10" />,
// };

// export function IndustriesSection() {
//   return (
//     <section className="py-20 bg-[#F8FAFC]">
//       <div className="max-w-7xl mx-auto px-4">
//         <SectionHeader
//           title="Industries We Serve"
//           subtitle="Our Expertise"
//         />

//         <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {industries.map((industry, index) => (
//             <StaggerItem key={industry.id}>
//               <div className="bg-white p-8 border border-gray-200 hover:border-[#C8A14A] hover:shadow-lg transition-all duration-300 group h-full flex flex-col items-center text-center">
//                 <div className="w-20 h-20 bg-[#0B2E59]/5 text-[#0B2E59] flex items-center justify-center mb-6 group-hover:bg-[#0B2E59] group-hover:text-white transition-colors">
//                   {iconMap[industry.icon]}
//                 </div>
//                 <h3 className="text-xl font-bold text-[#111827] font-[Merriweather] mb-3">
//                   {industry.title}
//                 </h3>
//                 <p className="text-[#374151] text-sm leading-relaxed">
//                   {industry.description}
//                 </p>
//               </div>
//             </StaggerItem>
//           ))}
//         </StaggerContainer>
//       </div>
//     </section>
//   );
// }


'use client';

import { Landmark, Map, Cog, Factory, Sun, Droplets,  Train, Zap, } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { StaggerContainer, StaggerItem } from '@/components/animations';
import { industries } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  // Landmark: <Landmark className="h-10 w-10" />,
  // Route: <Map className="h-10 w-10" />,
  // Cog: <Cog className="h-10 w-10" />,
  // Factory: <Factory className="h-10 w-10" />,
  // Sun: <Sun className="h-10 w-10" />,
  // Droplets: <Droplets className="h-10 w-10" />,
  // Railway:<RailSymbolIcon className='h-10 w-10'/>
  Train: <Train className="h-10 w-10" />,
  Factory: <Factory className="h-10 w-10" />,
  Zap: <Zap className="h-10 w-10" />,
};

export function IndustriesSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Video & Overlay Container */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          // अपनी वीडियो फाइल का पाथ यहाँ डालें (e.g., public/videos/ folder)
          src="/videos/bg3.mp4"
        />
        {/* लाइट थीम को बनाए रखने और कार्ड्स को साफ़ दिखाने के लिए 92% ओपेसिटी वाला ओवरले */}
        {/* साथ ही ऊपर और नीचे से हल्का डार्क ग्रेडिएंट टच दिया है ताकि सेक्शन ब्रेक साफ़ दिखे */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/40 via-[#F8FAFC]/94 to-gray-200/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Our Expertise"
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <StaggerItem key={industry.id}>

              <div className="bg-white/90 backdrop-blur-[4px] p-8 border border-gray-200 hover:border-[#EA4922] hover:shadow-lg transition-all duration-300 group h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#0B2E59]/5 text-[#0B2E59] flex items-center justify-center mb-6 group-hover:bg-[#EA4922] group-hover:text-white transition-colors">
                  {iconMap[industry.icon]}
                </div>
                <h3 className="text-xl  text-[#111827]  mb-3">
                  {industry.title}
                </h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}