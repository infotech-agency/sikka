// import { SectionHeader } from '@/components/SectionHeader';
// import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
// import { services } from '@/lib/data';
// import { Compass, Building2, ClipboardList, Factory, Zap, Landmark, ArrowRight, CheckCircle, Star } from 'lucide-react';

// export const metadata = {
//   title: 'Our Services | Bharat Engineering & Infrastructure Limited',
//   description: 'Comprehensive engineering services including consultancy, infrastructure development, project management, industrial construction, MEP solutions, and government contract execution.',
// };

// const iconMap: Record<string, React.ReactNode> = {
//   Compass: <Compass className="h-10 w-10" />,
//   Building2: <Building2 className="h-10 w-10" />,
//   ClipboardList: <ClipboardList className="h-10 w-10" />,
//   Factory: <Factory className="h-10 w-10" />,
//   Zap: <Zap className="h-10 w-10" />,
//   Landmark: <Landmark className="h-10 w-10" />,
// };

// const serviceDetails = [
//   {
//     id: 'engineering-consultancy',
//     title: 'Engineering Consultancy',
//     capabilities: [
//       'Feasibility Studies & Project Reports',
//       'Detailed Engineering Design',
//       'Structural Analysis & Design',
//       'Geotechnical Investigation',
//       'Environmental Impact Assessment',
//       'Value Engineering',
//     ],
//     projects: 'Completed 200+ consultancy projects for government and private clients',
//     image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=500&fit=crop',
//   },
//   {
//     id: 'infrastructure-development',
//     title: 'Infrastructure Development',
//     capabilities: [
//       'Roads & Highways Construction',
//       'Bridges & Flyovers',
//       'Railway Infrastructure',
//       'Urban Development Projects',
//       'Water Supply Systems',
//       'Sewerage & Drainage',
//     ],
//     projects: 'Executed 150+ infrastructure projects across 15 states',
//     image: 'https://images.unsplash.com/photo-1590642916589-592bca10dfbf?w=800&h=500&fit=crop',
//   },
//   {
//     id: 'project-management',
//     title: 'Project Management',
//     capabilities: [
//       'Project Planning & Scheduling',
//       'Cost Estimation & Control',
//       'Quality Assurance Systems',
//       'Risk Management',
//       'Contract Administration',
//       'Stakeholder Coordination',
//     ],
//     projects: 'Managing 50+ concurrent projects worth over INR 1000 Crores',
//     image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
//   },
//   {
//     id: 'industrial-construction',
//     title: 'Industrial Construction',
//     capabilities: [
//       'Factory Buildings & Warehouses',
//       'Power Plant Construction',
//       'Processing Facilities',
//       'Industrial Pipelines',
//       'Equipment Foundations',
//       'Plant Maintenance',
//     ],
//     projects: 'Built 80+ industrial facilities for major corporations',
//     image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=500&fit=crop',
//   },
//   {
//     id: 'mep-solutions',
//     title: 'MEP Solutions',
//     capabilities: [
//       'HVAC System Design & Installation',
//       'Electrical Distribution Systems',
//       'Fire Fighting Systems',
//       'Plumbing & Drainage',
//       'Building Automation',
//       'Energy Management',
//     ],
//     projects: 'Delivered MEP solutions for 100+ commercial and industrial buildings',
//     image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=500&fit=crop',
//   },
//   {
//     id: 'government-contracts',
//     title: 'Government Contract Execution',
//     capabilities: [
//       'Tender Preparation & Bidding',
//       'PSU Project Execution',
//       'Regulatory Compliance',
//       'Documentation & Reporting',
//       'Quality Audits',
//       'Final Handover',
//     ],
//     projects: 'Executed 120+ government contracts with 100% compliance record',
//     image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=500&fit=crop',
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <div>
//       {/* Page Banner */}
//       <section className="relative py-24 bg-[#0B2E59]">
//         <div className="absolute inset-0 opacity-20">
//           <img
//             src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=500&fit=crop"
//             alt="Services banner"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="relative max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-2 mb-4">
//             <div className="h-px w-10 bg-[#C8A14A]" />
//             <span className="text-[#C8A14A] text-sm font-semibold uppercase tracking-wider">What We Do</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-white  mb-4">
//             Our Services
//           </h1>
//           <p className="text-gray-300 max-w-2xl">
//             Comprehensive engineering and infrastructure solutions delivered with excellence, precision, and unwavering commitment to quality.
//           </p>
//         </div>
//       </section>

//       {/* Services Overview */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <SectionHeader title="Service Overview" subtitle="Complete Solutions" />
//           <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((service, index) => (
//               <StaggerItem key={service.id}>
//                 <div className="bg-[#F8FAFC] border border-gray-200 p-8 hover:border-[#C8A14A] hover:shadow-lg transition-all duration-300 group h-full">
//                   <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mb-6 group-hover:bg-[#1B4D8C] transition-colors">
//                     {iconMap[service.icon]}
//                   </div>
//                   <h3 className="text-xl  text-[#111827]  mb-3">
//                     {service.title}
//                   </h3>
//                   <p className="text-[#374151] text-sm leading-relaxed mb-4">
//                     {service.description}
//                   </p>
//                   <div className="flex items-center gap-2 text-[#0B2E59] font-semibold text-sm">
//                     <Star className="h-4 w-4 text-[#C8A14A]" />
//                     <span>Learn More</span>
//                   </div>
//                 </div>
//               </StaggerItem>
//             ))}
//           </StaggerContainer>
//         </div>
//       </section>

//       {/* Service Details */}
//       <section className="py-20 bg-[#F8FAFC]">
//         <div className="max-w-7xl mx-auto px-4">
//           <SectionHeader title="Service Capabilities" subtitle="Detailed Overview" />
//           <div className="space-y-16">
//             {serviceDetails.map((service, index) => (
//               <FadeIn key={service.id}>
//                 <div id={service.id} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
//                   <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-[400px] object-cover"
//                     />
//                   </div>
//                   <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
//                     <div className="flex items-center gap-2 mb-4">
//                       <div className="h-px w-10 bg-[#C8A14A]" />
//                       <span className="text-[#1B4D8C] text-sm font-semibold uppercase tracking-wider">Service Detail</span>
//                     </div>
//                     <h3 className="text-2xl  text-[#111827]  mb-4">
//                       {service.title}
//                     </h3>
//                     <p className="text-[#374151] leading-relaxed mb-6">
//                       {services.find(s => s.id === service.id)?.description}
//                     </p>
//                     <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-3">Key Capabilities</h4>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
//                       {service.capabilities.map((cap, i) => (
//                         <div key={i} className="flex items-center gap-2 text-sm text-[#374151]">
//                           <CheckCircle className="h-4 w-4 text-[#C8A14A] shrink-0" />
//                           <span>{cap}</span>
//                         </div>
//                       ))}
//                     </div>
//                     <div className="bg-[#0B2E59] text-white p-4">
//                       <div className="flex items-center gap-2 mb-1">
//                         <Star className="h-4 w-4 text-[#C8A14A]" />
//                         <span className="text-sm font-semibold">Project Experience</span>
//                       </div>
//                       <p className="text-sm text-gray-300">{service.projects}</p>
//                     </div>
//                   </div>
//                 </div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { SectionHeader } from '@/components/SectionHeader';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { BASE_URL } from '@/utils/baseUrl';
import { Compass, Building2, ClipboardList, Factory, Zap, Landmark, CheckCircle, Star } from 'lucide-react';

export const metadata = {
  title: 'Our Services | Bharat Engineering & Infrastructure Limited',
  description: 'Comprehensive engineering services including consultancy, infrastructure development, project management, industrial construction, MEP solutions, and government contract execution.',
};

const iconList = [Compass, Building2, ClipboardList, Factory, Zap, Landmark];

interface Service {
  _id: string;
  id: string;
  title: string;
  description: string;
  image: string;
  keyCapabilities: string[];
}

interface ServicesApiResponse {
  success: boolean;
  message: string;
  total: number;
  page: number;
  pages: number;
  data: Service[];
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function getServices(): Promise<Service[]> {
  try {
    const res = await fetch(`${BASE_URL}/services`, {
      cache: 'no-store',
    });

    console.log("res",res);

    if (!res.ok) {
      console.error('Failed to fetch services, status:', res.status);
      return [];
    }

    const json: ServicesApiResponse = await res.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div>
      {/* Page Banner */}
      <section className="relative py-24 bg-[#0B2E59]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=500&fit=crop"
            alt="Services banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#C8A14A]" />
            <span className="text-[#C8A14A] text-sm font-semibold uppercase tracking-wider">What We Do</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Comprehensive engineering and infrastructure solutions delivered with excellence, precision, and unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Service Overview" subtitle="Complete Solutions" />

          {services.length === 0 ? (
            <p className="text-center text-[#374151]">No services available right now.</p>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = iconList[index % iconList.length];
                return (
                  <StaggerItem key={service.id}>
                    
                    <a  href={`#${service.id}`}
                      className="bg-[#F8FAFC] border border-gray-200 p-8 hover:border-[#C8A14A] hover:shadow-lg transition-all duration-300 group h-full block"
                    >
                      <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mb-6 group-hover:bg-[#1B4D8C] transition-colors">
                        <Icon className="h-10 w-10" />
                      </div>
                      <h3 className="text-xl text-[#111827] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-[#374151] text-sm leading-relaxed mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-[#0B2E59] font-semibold text-sm">
                        <Star className="h-4 w-4 text-[#C8A14A]" />
                        <span>Learn More</span>
                      </div>
                    </a>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Service Details */}
      {services.length > 0 && (
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Service Capabilities" subtitle="Detailed Overview" />
            <div className="space-y-16">
              {services.map((service, index) => (
                <FadeIn key={service.id}>
                  <div id={service.id} className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-px w-10 bg-[#C8A14A]" />
                        <span className="text-[#1B4D8C] text-sm font-semibold uppercase tracking-wider">Service Detail</span>
                      </div>
                      <h3 className="text-2xl text-[#111827] mb-4">
                        {service.title}
                      </h3>
                      <p className="text-[#374151] leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-3">
                        Key Capabilities
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[...new Set(service.keyCapabilities)].map((cap, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-[#374151]">
                            <CheckCircle className="h-4 w-4 text-[#C8A14A] shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}