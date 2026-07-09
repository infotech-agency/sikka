// // // 'use client';

// // // import { Compass, Building2, ClipboardList, Factory, Zap, Landmark } from 'lucide-react';
// // // import { SectionHeader } from '@/components/SectionHeader';
// // // import { StaggerContainer, StaggerItem } from '@/components/animations';
// // // import { services } from '@/lib/data';

// // // const iconMap: Record<string, React.ReactNode> = {
// // //   Compass: <Compass className="h-8 w-8" />,
// // //   Building2: <Building2 className="h-8 w-8" />,
// // //   ClipboardList: <ClipboardList className="h-8 w-8" />,
// // //   Factory: <Factory className="h-8 w-8" />,
// // //   Zap: <Zap className="h-8 w-8" />,
// // //   Landmark: <Landmark className="h-8 w-8" />,
// // // };

// // // export function ServicesSection() {
// // //   return (
// // //     <section className="py-20 bg-[#F8FAFC]">
// // //       <div className="max-w-7xl mx-auto px-4">
// // //         <SectionHeader
// // //           title="Our Services"
// // //           subtitle="What We Offer"
// // //         />
// // //         <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {services.map((service) => (
// // //             <StaggerItem key={service.id}>
// // //               <div className="bg-white p-8 border border-gray-200 hover:border-[#EA4922] hover:shadow-lg transition-all duration-300 group h-full">
// // //                 <div className="w-14 h-14 bg-[#0B2E59] text-white flex items-center justify-center mb-6 group-hover:bg-[#EA4922] transition-colors">
// // //                   {iconMap[service.icon]}
// // //                 </div>
// // //                 <h3 className="text-xl font-bold text-[#111827] font-[Merriweather] mb-3">
// // //                   {service.title}
// // //                 </h3>
// // //                 <p className="text-[#374151] text-sm leading-relaxed">
// // //                   {service.description}
// // //                 </p>
// // //               </div>
// // //             </StaggerItem>
// // //           ))}
// // //         </StaggerContainer>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // 'use client';

// // import { Compass, Building2, ClipboardList, Factory, Zap, Landmark, Train, Wrench, Target } from 'lucide-react';
// // import { SectionHeader } from '@/components/SectionHeader';
// // import { StaggerContainer, StaggerItem } from '@/components/animations';

// // const servicesData = [
// //   {
// //     id: 1,
// //     title: 'Railway OHE Works',
// //     description: 'Expertise in Overhead Equipment (OHE) installation, maintenance, and modernization for Indian Railways across the country.',
// //     icon: 'Train',
// //   },
// //   {
// //     id: 2,
// //     title: 'Electrical Engineering',
// //     description: 'Comprehensive electrical infrastructure solutions including power distribution, substations, and industrial electrification.',
// //     icon: 'Zap',
// //   },
// //   {
// //     id: 3,
// //     title: 'Infrastructure Development',
// //     description: 'End-to-end infrastructure projects including civil works, structural development, and project management.',
// //     icon: 'Building2',
// //   },
// //   {
// //     id: 4,
// //     title: 'Project Management',
// //     description: 'Professional project planning, execution, and monitoring services ensuring timely delivery and quality standards.',
// //     icon: 'ClipboardList',
// //   },
// //   {
// //     id: 5,
// //     title: 'Railway Signaling & Telecommunication',
// //     description: 'Advanced signaling systems and telecommunication solutions for safe and efficient railway operations.',
// //     icon: 'Compass',
// //   },
// //   {
// //     id: 6,
// //     title: 'Turnkey Contracting',
// //     description: 'Complete turnkey solutions from concept to commissioning, tailored to meet specific client requirements and industry standards.',
// //     icon: 'Target',
// //   },
// // ];

// // const iconMap: Record<string, React.ReactNode> = {
// //   Compass: <Compass className="h-8 w-8" />,
// //   Building2: <Building2 className="h-8 w-8" />,
// //   ClipboardList: <ClipboardList className="h-8 w-8" />,
// //   Factory: <Factory className="h-8 w-8" />,
// //   Zap: <Zap className="h-8 w-8" />,
// //   Landmark: <Landmark className="h-8 w-8" />,
// //   Train: <Train className="h-8 w-8" />,
// //   Wrench: <Wrench className="h-8 w-8" />,
// //   Target: <Target className="h-8 w-8" />,
// // };

// // export function ServicesSection() {
// //   return (
// //     <section className="py-20 bg-[#F8FAFC]">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <SectionHeader
// //           title="Our Services"
// //           subtitle="What We Offer"
// //         />
// //         <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {servicesData.map((service) => (
// //             <StaggerItem key={service.id}>
// //               <div className="bg-white p-8 border border-gray-200 hover:border-[#EA4922] hover:shadow-lg transition-all duration-300 group h-full">
// //                 <div className="w-14 h-14 bg-[#0B2E59] text-white flex items-center justify-center mb-6 group-hover:bg-[#EA4922] transition-colors">
// //                   {iconMap[service.icon]}
// //                 </div>
// //                 <h3 className="text-xl font-bold text-[#111827] font-[Merriweather] mb-3">
// //                   {service.title}
// //                 </h3>
// //                 <p className="text-[#374151] text-sm leading-relaxed">
// //                   {service.description}
// //                 </p>
// //               </div>
// //             </StaggerItem>
// //           ))}
// //         </StaggerContainer>
// //       </div>
// //     </section>
// //   );
// // }


// 'use client';

// import { Compass, Building2, ClipboardList, Factory, Zap, Landmark, Train, Wrench, Target, PenTool, Briefcase } from 'lucide-react';
// import { SectionHeader } from '@/components/SectionHeader';
// import { StaggerContainer, StaggerItem } from '@/components/animations';
// import { useEffect, useState } from 'react';
// import { BASE_URL } from '@/utils/baseUrl';

// const servicesData = [
//   {
//     id: 1,
//     title: 'Industrial Projects',
//     description: 'We undertake EPC and Design, Supply, Erection, Testing, and Commissioning works of Railway OHE and Substations.',
//     icon: 'Factory',
//   },
//   {
//     id: 2,
//     title: 'Consultancy',
//     description: 'We act as consultants and take up Project Management for companies undertaking any Railway Project.',
//     icon: 'ClipboardList',
//   },
//   {
//     id: 3,
//     title: 'Engineers',
//     description: 'We have an in-house engineering department that caters to all design and drawing functions.',
//     icon: 'Wrench',
//   },
//   {
//     id: 4,
//     title: 'EPC Solutions',
//     description: 'End-to-end Engineering, Procurement, and Construction services for railway infrastructure projects.',
//     icon: 'Target',
//   },
//   {
//     id: 5,
//     title: 'Substation Works',
//     description: 'Design, supply, erection, testing, and commissioning of railway substations and power distribution systems.',
//     icon: 'Zap',
//   },
//   {
//     id: 6,
//     title: 'Railway Infrastructure',
//     description: 'Comprehensive railway infrastructure development including OHE, signaling, and telecommunication systems.',
//     icon: 'Train',
//   },
// ];




// const iconMap: Record<string, React.ReactNode> = {
//   Compass: <Compass className="h-8 w-8" />,
//   Building2: <Building2 className="h-8 w-8" />,
//   ClipboardList: <ClipboardList className="h-8 w-8" />,
//   Factory: <Factory className="h-8 w-8" />,
//   Zap: <Zap className="h-8 w-8" />,
//   Landmark: <Landmark className="h-8 w-8" />,
//   Train: <Train className="h-8 w-8" />,
//   Wrench: <Wrench className="h-8 w-8" />,
//   Target: <Target className="h-8 w-8" />,
//   PenTool: <PenTool className="h-8 w-8" />,
//   Briefcase: <Briefcase className="h-8 w-8" />,
// };

// export  function ServicesSection() {
//   const[services,setServices] = useState([]);

//   const getServicesData = async()=>{
//     const res = await fetch(`${BASE_URL}/services`);
//     const data = await res.json();
//     setServices(data)
//     console.log(data);
//   } 
//   useEffect(()=>{
//     getServicesData();
//   },[])

//   return (
//     <section className="py-20 bg-[#F8FAFC]">
//       <div className="max-w-7xl mx-auto px-4">
//         <SectionHeader
//           title="Our Services"
//           subtitle="What We Offer"
//         />
//         <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {servicesData.map((service) => (
//             <StaggerItem key={service.id}>
//               <div className="bg-white p-8 border border-gray-200 hover:border-[#EA4922] hover:shadow-lg transition-all duration-300 group h-full">
//                 <div className="w-14 h-14 bg-[#0B2E59] text-white flex items-center justify-center mb-6 group-hover:bg-[#EA4922] transition-colors">
//                   {iconMap[service.icon]}
//                 </div>
//                 <h3 className="text-xl  text-[#111827]  mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-[#374151] text-sm leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>
//             </StaggerItem>
//           ))}
//         </StaggerContainer>
//       </div>
//     </section>
//   );
// }

import { Compass, Building2, ClipboardList, Factory, Zap, Landmark, Train, Wrench, Target, PenTool, Briefcase } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { StaggerContainer, StaggerItem } from '@/components/animations';
import { BASE_URL } from '@/utils/baseUrl';

interface Service {
  _id: string;
  id: string;
  title: string;
  description: string;
  image?: string;
  keyCapabilities?: string[];
}

// API doesn't return an icon field, so we rotate through this list based on index
const iconList = [
  <Factory className="h-8 w-8" key="Factory" />,
  <ClipboardList className="h-8 w-8" key="ClipboardList" />,
  <Wrench className="h-8 w-8" key="Wrench" />,
  <Target className="h-8 w-8" key="Target" />,
  <Zap className="h-8 w-8" key="Zap" />,
  <Train className="h-8 w-8" key="Train" />,
  <Building2 className="h-8 w-8" key="Building2" />,
  <Compass className="h-8 w-8" key="Compass" />,
  <Landmark className="h-8 w-8" key="Landmark" />,
  <PenTool className="h-8 w-8" key="PenTool" />,
  <Briefcase className="h-8 w-8" key="Briefcase" />,
];

async function getServicesData(): Promise<Service[]> {
  try {
    const res = await fetch(`${BASE_URL}/services`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('Failed to fetch services, status:', res.status);
      return [];
    }

    const data = await res.json();
    return data.success && data.data ? data.data : [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function ServicesSection() {
  const services = await getServicesData();

  if (services.length === 0) {
    return null; // hide section if no data, avoids empty section on homepage
  }

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Our Services"
          subtitle="What We Offer"
        />
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <StaggerItem key={service.id || service._id}>
              <div className="bg-white p-8 border border-gray-200 hover:border-[#EA4922] hover:shadow-lg transition-all duration-300 group h-full">
                <div className="w-14 h-14 bg-[#0B2E59] text-white flex items-center justify-center mb-6 group-hover:bg-[#EA4922] transition-colors">
                  {iconList[index % iconList.length]}
                </div>
                <h3 className="text-xl text-[#111827] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}