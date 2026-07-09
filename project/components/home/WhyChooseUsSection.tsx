// // import { Award, Users, Shield, Clock } from 'lucide-react';
// // import { SectionHeader } from '@/components/SectionHeader';
// // import { StaggerContainer, StaggerItem } from '@/components/animations';

// // const reasons = [
// //   {
// //     icon: <Award className="h-8 w-8" />,
// //     title: 'Engineering Expertise',
// //     description: 'Deep technical knowledge across civil, structural, electrical, and mechanical engineering disciplines with proven project delivery.',
// //   },
// //   {
// //     icon: <Users className="h-8 w-8" />,
// //     title: 'Experienced Team',
// //     description: '850+ skilled professionals including engineers, project managers, and technical specialists with average 15+ years experience.',
// //   },
// //   {
// //     icon: <Shield className="h-8 w-8" />,
// //     title: 'Quality Assurance',
// //     description: 'Rigorous quality control systems, ISO certified processes, and adherence to international engineering standards on every project.',
// //   },
// //   {
// //     icon: <Clock className="h-8 w-8" />,
// //     title: 'Timely Delivery',
// //     description: 'Proven track record of completing projects within schedule and budget through efficient planning and resource management.',
// //   },
// // ];

// // export function WhyChooseUsSection() {
// //   return (
// //     <section className="py-20 bg-[#0B2E59]">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <SectionHeader
// //           title="Why Choose Us"
// //           subtitle="Our Strengths"
// //           light
// //         />

// //         <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {reasons.map((reason, index) => (
// //             <StaggerItem key={index}>
// //               <div className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors h-full">
// //                 <div className="w-16 h-16 bg-[#C8A14A] text-[#0B2E59] flex items-center justify-center mx-auto mb-6">
// //                   {reason.icon}
// //                 </div>
// //                 <h3 className="text-lg font-bold text-white font-[Merriweather] mb-3">
// //                   {reason.title}
// //                 </h3>
// //                 <p className="text-gray-300 text-sm leading-relaxed">
// //                   {reason.description}
// //                 </p>
// //               </div>
// //             </StaggerItem>
// //           ))}
// //         </StaggerContainer>
// //       </div>
// //     </section>
// //   );
// // }

// import { Award, Users, Shield, Clock } from 'lucide-react';
// import { SectionHeader } from '@/components/SectionHeader';
// import { StaggerContainer, StaggerItem } from '@/components/animations';

// const reasons = [
//   {
//     icon: <Award className="h-8 w-8" />,
//     title: 'Engineering Expertise',
//     description: 'Deep technical knowledge across civil, structural, electrical, and mechanical engineering disciplines with proven project delivery.',
//   },
//   {
//     icon: <Users className="h-8 w-8" />,
//     title: 'Experienced Team',
//     description: '850+ skilled professionals including engineers, project managers, and technical specialists with average 15+ years experience.',
//   },
//   {
//     icon: <Shield className="h-8 w-8" />,
//     title: 'Quality Assurance',
//     description: 'Rigorous quality control systems, ISO certified processes, and adherence to international engineering standards on every project.',
//   },
//   {
//     icon: <Clock className="h-8 w-8" />,
//     title: 'Timely Delivery',
//     description: 'Proven track record of completing projects within schedule and budget through efficient planning and resource management.',
//   },
// ];

// export function WhyChooseUsSection() {
//   return (
//     <section className="relative py-20 overflow-hidden">
//       {/* Background Image Container */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1670912461796-81819c1e525b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Engineering and architecture blueprint tracking"
//           className="w-full h-full object-cover"
//         />
//         {/* Deep navy overlay matching your #0B2E59 brand theme with high opacity */}
//         <div className="absolute inset-0 bg-[#0B2E59]/92" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 z-10">
//         <SectionHeader
//           title="Why Choose Us"
//           subtitle="Our Strengths"
//           light
//         />

//         <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {reasons.map((reason, index) => (
//             <StaggerItem key={index}>
//               <div className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors h-full backdrop-blur-[2px]">
//                 <div className="w-16 h-16 bg-[#C8A14A] text-[#0B2E59] flex items-center justify-center mx-auto mb-6">
//                   {reason.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-white font-[Merriweather] mb-3">
//                   {reason.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">
//                   {reason.description}
//                 </p>
//               </div>
//             </StaggerItem>
//           ))}
//         </StaggerContainer>
//       </div>
//     </section>
//   );
// }

import { Award, Users, Shield, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { StaggerContainer, StaggerItem } from '@/components/animations';

const reasons = [
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Engineering Expertise',
    description: 'Deep technical knowledge across civil, structural, electrical, and mechanical engineering disciplines with proven project delivery.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Experienced Team',
    description: '350+ skilled professionals including engineers, project managers, and technical specialists with average 15+ years experience.',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Quality Assurance',
    description: 'Rigorous quality control systems, ISO certified processes, and adherence to international engineering standards on every project.',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Timely Delivery',
    description: 'Proven track record of completing projects within schedule and budget through efficient planning and resource management.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Video & Gradient Overlay Layer */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          // Replace this path with your local video asset from your public folder
          src="/videos/bg2.mp4"
          // Optional: Keeps your old image as a placeholder preview while the video streams/buffers
          poster="https://images.unsplash.com/photo-1670912461796-81819c1e525b?q=80&w=1170&auto=format&fit=crop"
        />
        {/* Dark vertical gradient overlay wrapping your brand #0B2E59 color down into deep navy-black */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#011126]/95 via-[#0B2E59]/90 to-[#011126]/95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <SectionHeader
          title="Why Choose Us"
          subtitle="Our Strengths"
          light
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <StaggerItem key={index}>
              <div className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors h-full backdrop-blur-[2px]">
                <div className="w-16 h-16 bg-[#EA4922] text-[#0B2E59] flex items-center justify-center mx-auto mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-lg  text-white  mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}