
// import { timeline, leadership, certifications } from '@/lib/data';
// import { SectionHeader } from '@/components/SectionHeader';
// import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
// import { Target, Eye, Award, Building2, Shield, Users, Handshake, Lightbulb } from 'lucide-react';
// import Journey from '../animated/Journey';


// export const metadata = {
//   title: 'About Us | Bharat Engineering & Infrastructure Limited',
//   description: 'Learn about Bharat Engineering & Infrastructure Limited - our history, vision, mission, leadership team, and corporate values.',
// };



// export default function AboutPage() {
//   return (
//     <div>
//       {/* Page Banner */}
//       <section className="relative py-24 bg-[#0B2E59]">
//         <div className="absolute inset-0 opacity-20">
//           <img
//             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=500&fit=crop"
//             alt="About banner"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="relative max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-2 mb-4">
//             <div className="h-px w-10 bg-[#EA4922]" />
//             <span className="text-[#EA4922] text-sm font-semibold uppercase tracking-wider">Who We Are</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-medium text-white  mb-4">
//             About Our Company
//           </h1>
//           <p className="text-gray-300 max-w-2xl">
//             Two decades of engineering excellence, serving government and private sectors with integrity and innovation.
//           </p>
//         </div>
//       </section>

//       {/* Company Overview */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <FadeIn>
//               <div className="relative">
//                 <img
//                   src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
//                   alt="Construction site"
//                   className="w-full h-[500px] object-cover"
//                 />
//                 <div className="absolute top-0 right-0 bg-[#EA4922] text-[#0B2E59] p-6">
//                   <div className="text-3xl font-bold ">20+</div>
//                   <div className="text-sm font-semibold">Years of Service</div>
//                 </div>
//               </div>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="h-px w-10 bg-[#EA4922]" />
//                 <span className="text-[#1B4D8C] text-sm font-semibold uppercase tracking-wider">Company Overview</span>
//               </div>
//               <h2 className="text-3xl font-medium text-[#111827]  mb-6">
//                 Building India&apos;s Infrastructure Since 2004
//               </h2>
//               <p className="text-[#374151] leading-relaxed mb-4">
//                 Bharat Engineering & Infrastructure Limited was founded with a singular vision - to contribute to the nation&apos;s infrastructure development through engineering excellence and ethical business practices.
//               </p>
//               <p className="text-[#374151] leading-relaxed mb-4">
//                 Over the past two decades, we have grown from a small engineering consultancy to a full-service EPC contractor executing projects worth hundreds of crores for government departments, PSUs, and private enterprises.
//               </p>
//               <p className="text-[#374151] leading-relaxed mb-6">
//                 Our commitment to quality, safety, and timely delivery has earned us the trust of clients across the country and a reputation as one of the most reliable engineering partners in the industry.
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-[#F8FAFC] p-4 border border-gray-200">
//                   <div className="text-2xl font-bold text-[#0B2E59] ">850+</div>
//                   <div className="text-sm text-[#374151]">Skilled Professionals</div>
//                 </div>
//                 <div className="bg-[#F8FAFC] p-4 border border-gray-200">
//                   <div className="text-2xl font-bold text-[#0B2E59] ">25+</div>
//                   <div className="text-sm text-[#374151]">Cities Covered</div>
//                 </div>
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </section>

//       {/* Vision & Mission */}
//       <section className="py-20 bg-[#F8FAFC]">
//         <div className="max-w-7xl mx-auto px-4">
//           <SectionHeader title="Vision & Mission" subtitle="Our Purpose" />
//           <div className="grid md:grid-cols-2 gap-8">
//             <FadeIn>
//               <div className="bg-white p-8 border border-gray-200 h-full">
//                 <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mb-6">
//                   <Eye className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#111827] font-[Merriweather] mb-4">Our Vision</h3>
//                 <p className="text-[#374151] leading-relaxed">
//                   To be India&apos;s most trusted engineering and infrastructure partner, recognized for delivering excellence in every project we undertake. We aspire to be the preferred EPC contractor for government and private sector clients through innovation, integrity, and sustainable practices.
//                 </p>
//               </div>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <div className="bg-white p-8 border border-gray-200 h-full">
//                 <div className="w-16 h-16 bg-[#EA4922] text-white flex items-center justify-center mb-6">
//                   <Target className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#111827]   mb-4">Our Mission</h3>
//                 <p className="text-[#374151] leading-relaxed">
//                   To deliver world-class engineering solutions that transform infrastructure and industrial landscapes. We are committed to executing projects with the highest standards of quality, safety, and environmental responsibility while creating value for our stakeholders and contributing to national development.
//                 </p>
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </section>

//       {/* Corporate Values */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <SectionHeader title="Corporate Values" subtitle="What We Stand For" />
//           <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: <Shield className="h-6 w-6" />, title: 'Integrity', description: 'We conduct business with the highest ethical standards, transparency, and accountability in all our dealings.' },
//               { icon: <Award className="h-6 w-6" />, title: 'Excellence', description: 'We pursue excellence in every aspect of our work, from engineering design to project execution and client service.' },
//               { icon: <Users className="h-6 w-6" />, title: 'People First', description: 'We value our employees, clients, and communities, fostering a culture of respect, safety, and continuous growth.' },
//               { icon: <Lightbulb className="h-6 w-6" />, title: 'Innovation', description: 'We embrace new technologies and methodologies to deliver efficient, sustainable, and future-ready solutions.' },
//             ].map((value, index) => (
//               <StaggerItem key={index}>
//                 <div className="bg-[#F8FAFC] border border-gray-200 p-6 text-center hover:border-[#EA4922] transition-colors h-full">
//                   <div className="w-14 h-14 bg-[#EA4922] text-white flex items-center justify-center mx-auto mb-4">
//                     {value.icon}
//                   </div>
//                   <h3 className="text-lg font-bold text-[#111827]  mb-2">{value.title}</h3>
//                   <p className="text-[#374151] text-sm leading-relaxed">{value.description}</p>
//                 </div>
//               </StaggerItem>
//             ))}
//           </StaggerContainer>
//         </div>
//       </section>

//       {/* Timeline */}
//       {/* <section className="py-20 bg-[#0B2E59]">
//         <div className="max-w-7xl mx-auto px-4">
//           <SectionHeader title="Our Journey" subtitle="Company History" light />
//           <div className="relative">
//             <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#C8A14A]/30 md:-translate-x-1/2" />
//             <div className="space-y-12">
//               {timeline.map((item, index) => (
//                 <FadeIn key={index} delay={index * 0.1}>
//                   <div className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
//                     <div className="flex-1 md:text-right pl-12 md:pl-0">
//                       <div className={`bg-white/5 border border-white/10 p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
//                         <div className="text-[#C8A14A] text-2xl font-bold font-[Merriweather] mb-2">{item.year}</div>
//                         <h4 className="text-white font-bold mb-2">{item.title}</h4>
//                         <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
//                       </div>
//                     </div>
//                     <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#C8A14A] border-4 border-[#0B2E59] md:-translate-x-1/2" />
//                     <div className="flex-1 hidden md:block" />
//                   </div>
//                 </FadeIn>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section> */}
//       <Journey/>
//       {/* Leadership Team */}
//       <section className="py-20 bg-[#F8FAFC]">
//         <div className="max-w-7xl mx-auto px-4">
//           <SectionHeader title="Leadership Team" subtitle="Our Directors" />
//           <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {leadership.map((member, index) => (
//               <StaggerItem key={index}>
//                 <div className="bg-white border border-gray-200 overflow-hidden group">
//                   <div className="h-64 overflow-hidden">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-lg font-medium text-[#111827]  mb-1">{member.name}</h3>
//                     <div className="text-[#C8A14A] text-sm font-semibold mb-3">{member.designation}</div>
//                     <p className="text-[#374151] text-sm leading-relaxed">{member.bio}</p>
//                   </div>
//                 </div>
//               </StaggerItem>
//             ))}
//           </StaggerContainer>
//         </div>
//       </section>

//       {/* Infrastructure & Certifications */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <SectionHeader title="Infrastructure & Certifications" subtitle="Our Capabilities" />
//           <div className="grid lg:grid-cols-2 gap-12">
//             <FadeIn>
//               <div className="mb-8">
//                 <h3 className="text-xl  text-[#111827]  mb-4 flex items-center gap-3">
//                   <Building2 className="h-6 w-6 text-[#C8A14A]" />
//                   Infrastructure Facilities
//                 </h3>
//                 <div className="space-y-4">
//                   {[
//                     { title: 'Corporate Headquarters', desc: 'State-of-the-art office in Gurugram with modern design and planning facilities' },
//                     { title: 'Regional Offices', desc: 'Fully operational offices in Mumbai, Chennai, Kolkata, and Hyderabad' },
//                     { title: 'Equipment Yard', desc: 'Extensive fleet of construction equipment and machinery at strategic locations' },
//                     { title: 'Fabrication Workshop', desc: 'In-house fabrication facility for structural steel and precast components' },
//                     { title: 'Testing Laboratory', desc: 'NABL accredited testing laboratory for material quality assurance' },
//                   ].map((facility, index) => (
//                     <div key={index} className="flex items-start gap-4 bg-[#F8FAFC] p-4 border border-gray-200">
//                       <div className="w-8 h-8 bg-[#0B2E59] text-white flex items-center justify-center text-sm font-bold shrink-0">{index + 1}</div>
//                       <div>
//                         <h4 className="font-semibold text-[#111827] text-sm mb-1">{facility.title}</h4>
//                         <p className="text-[#374151] text-sm">{facility.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <div>
//                 <h3 className="text-xl font-bold text-[#111827] font-[Merriweather] mb-4 flex items-center gap-3">
//                   <Award className="h-6 w-6 text-[#C8A14A]" />
//                   Certifications & Accreditations
//                 </h3>
//                 <div className="space-y-4">
//                   {certifications.map((cert, index) => (
//                     <div key={index} className="bg-[#F8FAFC] border border-gray-200 p-4 flex items-start gap-4">
//                       <div className="w-12 h-12 bg-[#0B2E59] text-white flex items-center justify-center shrink-0">
//                         <Award className="h-6 w-6" />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-[#111827] text-sm mb-1">{cert.name}</h4>
//                         <p className="text-[#374151] text-sm">{cert.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="mt-6 bg-[#0B2E59] text-white p-6">
//                   <h4 className="font-bold font-[Merriweather] mb-2">Government Registrations</h4>
//                   <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
//                     <div className="flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 bg-[#C8A14A]" />
//                       <span>CPWD Registered</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 bg-[#C8A14A]" />
//                       <span>NHAI Approved</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 bg-[#C8A14A]" />
//                       <span>IRCON Empanelled</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 bg-[#C8A14A]" />
//                       <span>NBCC Registered</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 bg-[#C8A14A]" />
//                       <span>RITES Approved</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 bg-[#C8A14A]" />
//                       <span>NSIC Registered</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import { timeline, leadership, certifications } from '@/lib/data';
// import { SectionHeader } from '@/components/SectionHeader';
// import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
// import { Target, Eye, Award, Building2, Shield, Users, Handshake, Lightbulb, Factory, Briefcase, Wrench, BarChart3 } from 'lucide-react';
// import Journey from '../animated/Journey';
// import { BASE_URL } from '@/utils/baseUrl';

// export const metadata = {
//   title: 'About Us | Sikka Engineering Company',
//   description: 'Learn about Sikka Engineering Company - our history, vision, mission, leadership team, and corporate values.',
// };


// interface AboutData {
//   title: string;
//   description: string;
//   values: string[];
// }

// async function getAboutData(): Promise<AboutData | null> {
//   try {
//     const res = await fetch(`${BASE_URL}/about`, {
//       cache: 'no-store',
//     });

//     if (!res.ok) {
//       console.error('Failed to fetch about data, status:', res.status);
//       return null;
//     }

//     const json = await res.json();
//     return json.success ? json.data : null;
//   } catch (error) {
//     console.error('Error fetching about data:', error);
//     return null;
//   }
// }

// export default async function AboutPage() {
//   const about = await getAboutData();
//   console.log("ab->",about);
//   return (
//     <div>
//       {/* Page Banner */}
//       <section className="relative py-24 bg-[#0B2E59]">
//         <div className="absolute inset-0 opacity-20">
//           <img
//             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=500&fit=crop"
//             alt="About banner"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="relative max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-2 mb-4">
//             <div className="h-px w-10 bg-[#EA4922]" />
//             <span className="text-[#EA4922] text-sm font-semibold uppercase tracking-wider">Who We Are</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
//             About Our Company
//           </h1>
//           <p className="text-gray-300 max-w-2xl">
//              Three decades of engineering excellence, serving the Indian Railways and infrastructure sector with integrity and innovation.
//           </p>
//         </div>
//       </section>

//       {/* Company Overview */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <FadeIn>
//               <div className="relative">
//                 <img
//                   src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
//                   alt="Construction site"
//                   className="w-full h-[500px] object-cover"
//                 />
//                 <div className="absolute top-0 right-0 bg-[#EA4922] text-[#0B2E59] p-6">
//                   <div className="text-3xl font-bold">30+</div>
//                   <div className="text-sm font-semibold">Years of Service</div>
//                 </div>
//               </div>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="h-px w-10 bg-[#EA4922]" />
//                 <span className="text-[#1B4D8C] text-sm font-semibold uppercase tracking-wider">Company Overview</span>
//               </div>
//               <h2 className="text-3xl font-medium text-[#111827] mb-6">
//                 {/* Powering India&apos;s Infrastructure Since 1992 */}
//                 {about?.title || "Powering India's Infrastructure Since 1992"}
//               </h2>
//               <p className="text-[#374151] leading-relaxed mb-4">
//                 Sikka Engineering Company was formed in 1992 by Shri S.L Sikka, Mr. Ravi Sikka, and Mr. Sanjay Sikka to undertake electrical engineering projects. Since then, we have grown into a trusted name in the infrastructure sector.
//               </p>
//               <p className="text-[#374151] leading-relaxed mb-4">
//                 We specialize in Railway Overhead Equipment (OHE) work, with the Indian Railways as our primary client. Our long-standing relationship with the Indian Railways is a testament to our reliability, quality, and commitment to excellence.
//               </p>
//               <p className="text-[#374151] leading-relaxed mb-6">
//                 SEC has earned its position as one of the most trusted and experienced contractors in the industry of OHE projects, delivering exceptional results across the country.
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-[#F8FAFC] p-4 border border-gray-200">
//                   <div className="text-2xl font-bold text-[#0B2E59]">350+</div>
//                   <div className="text-sm text-[#374151]">Skilled Employees</div>
//                 </div>
//                 <div className="bg-[#F8FAFC] p-4 border border-gray-200">
//                   <div className="text-2xl font-bold text-[#0B2E59]">₹80 Cr+</div>
//                   <div className="text-sm text-[#374151]">Annual Turnover</div>
//                 </div>
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </section>

//       {/* Vision & Mission */}
//       <section className="py-20 bg-[#F8FAFC]">
//         <div className="max-w-7xl mx-auto px-4">
//           <SectionHeader title="Vision & Mission" subtitle="Our Purpose" />
//           <div className="grid md:grid-cols-2 gap-8">
//             <FadeIn>
//               <div className="bg-white p-8 border border-gray-200 h-full">
//                 <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mb-6">
//                   <Eye className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#111827] mb-4">Our Vision</h3>
//                 <p className="text-[#374151] leading-relaxed">
//                   To be India&apos;s most trusted railway infrastructure partner, recognized for delivering excellence in Overhead Equipment projects. We aspire to set new benchmarks in quality, safety, and innovation while strengthening our legacy with the Indian Railways.
//                 </p>
//               </div>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <div className="bg-white p-8 border border-gray-200 h-full">
//                 <div className="w-16 h-16 bg-[#EA4922] text-white flex items-center justify-center mb-6">
//                   <Target className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#111827] mb-4">Our Mission</h3>
//                 <p className="text-[#374151] leading-relaxed">
//                   To deliver world-class railway electrification and infrastructure solutions that power India&apos;s growth. We are committed to executing projects with the highest standards of quality, safety, and environmental responsibility while creating value for our stakeholders.
//                 </p>
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <SectionHeader title="Our Services" subtitle="What We Offer" />
//           <StaggerContainer className="grid md:grid-cols-3 gap-6">
//             <StaggerItem>
//               <div className="bg-[#F8FAFC] border border-gray-200 p-8 text-center hover:border-[#EA4922] transition-colors h-full">
//                 <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mx-auto mb-4">
//                   <Factory className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#111827] mb-3">Industrial Projects</h3>
//                 <p className="text-[#374151] text-sm leading-relaxed">
//                   We undertake EPC and Design, Supply, Erection, Testing, and Commissioning works of Railway OHE and Substations.
//                 </p>
//               </div>
//             </StaggerItem>
//             <StaggerItem>
//               <div className="bg-[#F8FAFC] border border-gray-200 p-8 text-center hover:border-[#EA4922] transition-colors h-full">
//                 <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mx-auto mb-4">
//                   <Briefcase className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#111827] mb-3">Consultancy</h3>
//                 <p className="text-[#374151] text-sm leading-relaxed">
//                   We act as consultants and take up Project Management for companies undertaking any Railway Project.
//                 </p>
//               </div>
//             </StaggerItem>
//             <StaggerItem>
//               <div className="bg-[#F8FAFC] border border-gray-200 p-8 text-center hover:border-[#EA4922] transition-colors h-full">
//                 <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mx-auto mb-4">
//                   <Wrench className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#111827] mb-3">Engineers</h3>
//                 <p className="text-[#374151] text-sm leading-relaxed">
//                   We have an in-house engineering department that caters to all design and drawing functions.
//                 </p>
//               </div>
//             </StaggerItem>
//           </StaggerContainer>
//         </div>
//       </section>

//       {/* Corporate Values */}
//       <section className="py-20 bg-[#F8FAFC]">
//         <div className="max-w-7xl mx-auto px-4">
//           <SectionHeader title="Corporate Values" subtitle="What We Stand For" />
//           <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: <Shield className="h-6 w-6" />, title: 'Integrity', description: 'We conduct business with the highest ethical standards, transparency, and accountability in all our dealings.' },
//               { icon: <Award className="h-6 w-6" />, title: 'Excellence', description: 'We pursue excellence in every aspect of our work, from engineering design to project execution and client service.' },
//               { icon: <Users className="h-6 w-6" />, title: 'People First', description: 'We value our employees, clients, and communities, fostering a culture of respect, safety, and continuous growth.' },
//               { icon: <Lightbulb className="h-6 w-6" />, title: 'Innovation', description: 'We embrace new technologies and methodologies to deliver efficient, sustainable, and future-ready solutions.' },
//             ].map((value, index) => (
//               <StaggerItem key={index}>
//                 <div className="bg-white border border-gray-200 p-6 text-center hover:border-[#EA4922] transition-colors h-full">
//                   <div className="w-14 h-14 bg-[#EA4922] text-white flex items-center justify-center mx-auto mb-4">
//                     {value.icon}
//                   </div>
//                   <h3 className="text-lg font-bold text-[#111827] mb-2">{value.title}</h3>
//                   <p className="text-[#374151] text-sm leading-relaxed">{value.description}</p>
//                 </div>
//               </StaggerItem>
//             ))}
//           </StaggerContainer>
//         </div>
//       </section>

//       {/* Timeline - Commented out for now */}
//       <Journey />

//       {/* Leadership Team */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <SectionHeader title="Leadership Team" subtitle="Our Founders" />
//           <StaggerContainer className="grid md:grid-cols-3 gap-6">
//             {leadership.map((member, index) => (
//               <StaggerItem key={index}>
//                 <div className="bg-[#F8FAFC] border border-gray-200 overflow-hidden group">
//                   <div className="h-64 overflow-hidden">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-lg font-medium text-[#111827] mb-1">{member.name}</h3>
//                     <div className="text-[#EA4922] text-sm font-semibold mb-3">{member.designation}</div>
//                     <p className="text-[#374151] text-sm leading-relaxed">{member.bio}</p>
//                   </div>
//                 </div>
//               </StaggerItem>
//             ))}
//           </StaggerContainer>
//         </div>
//       </section>

//       {/* Infrastructure & Certifications */}
//       <section className="py-20 bg-[#F8FAFC]">
//         <div className="max-w-7xl mx-auto px-4">
//           <SectionHeader title="Infrastructure & Certifications" subtitle="Our Capabilities" />
//           <div className="grid lg:grid-cols-2 gap-12">
//             <FadeIn>
//               <div className="mb-8">
//                 <h3 className="text-xl text-[#111827] mb-4 flex items-center gap-3">
//                   <Building2 className="h-6 w-6 text-[#EA4922]" />
//                   Infrastructure Facilities
//                 </h3>
//                 <div className="space-y-4">
//                   {[
//                     { title: 'Corporate Headquarters', desc: 'Strategic office location with modern design and planning facilities' },
//                     { title: 'Regional Offices', desc: 'Operational offices at key locations to serve projects across India' },
//                     { title: 'Equipment Yard', desc: 'Comprehensive fleet of specialized railway OHE equipment and machinery' },
//                     { title: 'Fabrication Workshop', desc: 'In-house fabrication facility for railway electrification components' },
//                     { title: 'Design Centre', desc: 'In-house engineering department for all design and drawing functions' },
//                   ].map((facility, index) => (
//                     <div key={index} className="flex items-start gap-4 bg-white p-4 border border-gray-200">
//                       <div className="w-8 h-8 bg-[#0B2E59] text-white flex items-center justify-center text-sm font-bold shrink-0">{index + 1}</div>
//                       <div>
//                         <h4 className="font-semibold text-[#111827] text-sm mb-1">{facility.title}</h4>
//                         <p className="text-[#374151] text-sm">{facility.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <div>
//                 <h3 className="text-xl text-[#111827] mb-4 flex items-center gap-3">
//                   <Award className="h-6 w-6 text-[#EA4922]" />
//                   Certifications & Accreditations
//                 </h3>
//                 <div className="space-y-4">
//                   {certifications.map((cert, index) => (
//                     <div key={index} className="bg-white border border-gray-200 p-4 flex items-start gap-4">
//                       <div className="w-12 h-12 bg-[#0B2E59] text-white flex items-center justify-center shrink-0">
//                         <Award className="h-6 w-6" />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-[#111827] text-sm mb-1">{cert.name}</h4>
//                         <p className="text-[#374151] text-sm">{cert.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="mt-6 bg-[#0B2E59] text-white p-6">
//                   <h4 className="font-bold mb-2">Key Clients & Partners</h4>
//                   <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
//                     <div className="flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 bg-[#EA4922]" />
//                       <span>Indian Railways</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 bg-[#EA4922]" />
//                       <span>Railway Electrification</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 bg-[#EA4922]" />
//                       <span>OHE Projects</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 bg-[#EA4922]" />
//                       <span>Railway Infrastructure</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import { timeline, leadership, certifications } from '@/lib/data';
import { SectionHeader } from '@/components/SectionHeader';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Target, Eye, Award, Building2, Shield, Users, Handshake, Lightbulb, Factory, Briefcase, Wrench, BarChart3 } from 'lucide-react';
import Journey from '../animated/Journey';
import { BASE_URL } from '@/utils/baseUrl';
import { getAllTeams } from '@/lib/team';
import { getAllDirectors } from '@/lib/directors';
import { CertificationsSection } from '@/components/home/CertificationsSection';

export const metadata = {
  title: 'About Us | Sikka Engineering Company',
  description: 'Learn about Sikka Engineering Company - our history, vision, mission, leadership team, and corporate values.',
};

interface AboutData {
  title: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
}
interface TeamMember {
  _id: string;
  name: string;
  designation: string;
  department?: string;
  displayOrder?: number;
  imageUrl: string;
  description: string;
  featuredMember?: boolean;
}
async function getAboutData(): Promise<AboutData | null> {
  try {
    const res = await fetch(`${BASE_URL}/about`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('Failed to fetch about data, status:', res.status);
      return null;
    }

    const json = await res.json();
    return json.success ? json.data : null;
  } catch (error) {
    console.error('Error fetching about data:', error);
    return null;
  }
}

export default async function AboutPage() {
  const about = await getAboutData();
  // const teams = await getAllTeams();
    const teamsRes = await getAllTeams();
  const team: TeamMember[] = teamsRes?.success && teamsRes?.data
    ? [...teamsRes.data].sort((a: TeamMember, b: TeamMember) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0))
    : [];
  // console.log("team",teams);

  const directorRes = await getAllDirectors();
  const director: TeamMember[] = directorRes?.success && directorRes?.data
    ? [...directorRes.data].sort((a: TeamMember, b: TeamMember) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0))
    : [];
    console.log("director",director);
  const title = about?.title || "Powering India's Infrastructure Since 1992";
  const paragraphs = about?.description
    ? about.description.split('\n\n').filter(Boolean)
    : [
        'Sikka Engineering Company was formed in 1992 by Shri S.L Sikka, Mr. Ravi Sikka, and Mr. Sanjay Sikka to undertake electrical engineering projects. Since then, we have grown into a trusted name in the infrastructure sector.',
        'We specialize in Railway Overhead Equipment (OHE) work, with the Indian Railways as our primary client. Our long-standing relationship with the Indian Railways is a testament to our reliability, quality, and commitment to excellence.',
        'SEC has earned its position as one of the most trusted and experienced contractors in the industry of OHE projects, delivering exceptional results across the country.',
      ];
  const vision = about?.vision ||
    "To be India's most trusted railway infrastructure partner, recognized for delivering excellence in Overhead Equipment projects. We aspire to set new benchmarks in quality, safety, and innovation while strengthening our legacy with the Indian Railways.";
  const mission = about?.mission ||
    "To deliver world-class railway electrification and infrastructure solutions that power India's growth. We are committed to executing projects with the highest standards of quality, safety, and environmental responsibility while creating value for our stakeholders.";

  return (
    <div>
      {/* Page Banner */}
      <section className="relative py-24 bg-[#0B2E59]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=500&fit=crop"
            alt="About banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#EA4922]" />
            <span className="text-[#EA4922] text-sm font-semibold uppercase tracking-wider">Who We Are</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
            About Our Company
          </h1>
          <p className="text-gray-300 max-w-2xl">
             Three decades of engineering excellence, serving the Indian Railways and infrastructure sector with integrity and innovation.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
                  alt="Construction site"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute top-0 right-0 bg-[#EA4922] text-[#0B2E59] p-6">
                  <div className="text-3xl font-bold">35+</div>
                  <div className="text-sm font-semibold">Years of Service</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-10 bg-[#EA4922]" />
                <span className="text-[#1B4D8C] text-sm font-semibold uppercase tracking-wider">Company Overview</span>
              </div>
              <h2 className="text-3xl font-medium text-[#111827] mb-6">
                {title}
              </h2>
              {paragraphs.map((para, index) => (
                <p
                  key={index}
                  className={`text-[#374151] leading-relaxed ${
                    index === paragraphs.length - 1 ? 'mb-6' : 'mb-4'
                  }`}
                >
                  {para}
                </p>
              ))}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F8FAFC] p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-[#0B2E59]">350+</div>
                  <div className="text-sm text-[#374151]">Skilled Employees</div>
                </div>
                {/* <div className="bg-[#F8FAFC] p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-[#0B2E59]">₹80 Cr+</div>
                  <div className="text-sm text-[#374151]">Annual Turnover</div>
                </div> */}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Vision & Mission" subtitle="Our Purpose" />
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-white p-8 border border-gray-200 h-full">
                <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-4">Our Vision</h3>
                <p className="text-[#374151] leading-relaxed">
                  {vision}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 border border-gray-200 h-full">
                <div className="w-16 h-16 bg-[#EA4922] text-white flex items-center justify-center mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-4">Our Mission</h3>
                <p className="text-[#374151] leading-relaxed">
                  {mission}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Our Services" subtitle="What We Offer" />
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="bg-[#F8FAFC] border border-gray-200 p-8 text-center hover:border-[#EA4922] transition-colors h-full">
                <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">Industrial Projects</h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  We undertake EPC and Design, Supply, Erection, Testing, and Commissioning works of Railway OHE and Substations.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#F8FAFC] border border-gray-200 p-8 text-center hover:border-[#EA4922] transition-colors h-full">
                <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">Consultancy</h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  We act as consultants and take up Project Management for companies undertaking any Railway Project.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#F8FAFC] border border-gray-200 p-8 text-center hover:border-[#EA4922] transition-colors h-full">
                <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">Engineers</h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  We have an in-house engineering department that caters to all design and drawing functions.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Corporate Values" subtitle="What We Stand For" />
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="h-6 w-6" />, title: 'Integrity', description: 'We conduct business with the highest ethical standards, transparency, and accountability in all our dealings.' },
              { icon: <Award className="h-6 w-6" />, title: 'Excellence', description: 'We pursue excellence in every aspect of our work, from engineering design to project execution and client service.' },
              { icon: <Users className="h-6 w-6" />, title: 'People First', description: 'We value our employees, clients, and communities, fostering a culture of respect, safety, and continuous growth.' },
              { icon: <Lightbulb className="h-6 w-6" />, title: 'Innovation', description: 'We embrace new technologies and methodologies to deliver efficient, sustainable, and future-ready solutions.' },
            ].map((value, index) => (
              <StaggerItem key={index}>
                <div className="bg-white border border-gray-200 p-6 text-center hover:border-[#EA4922] transition-colors h-full">
                  <div className="w-14 h-14 bg-[#EA4922] text-white flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-2">{value.title}</h3>
                  <p className="text-[#374151] text-sm leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline - Commented out for now */}
      <Journey />

      {/* Leadership Team */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Leadership Team" subtitle="Our Founders" />
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {leadership.map((member, index) => (
              <StaggerItem key={index}>
                <div className="bg-[#F8FAFC] border border-gray-200 overflow-hidden group">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-[#111827] mb-1">{member.name}</h3>
                    <div className="text-[#EA4922] text-sm font-semibold mb-3">{member.designation}</div>
                    <p className="text-[#374151] text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}
  {/* Leadership Team */}

        {/* Directors Section */}
        <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <SectionHeader title="Directors" subtitle="Our Founders" />

    {director.length === 0 ? (
      <p className="text-center text-[#374151]">Team information is currently unavailable.</p>
    ) : (
      <StaggerContainer className="grid md:grid-cols-3 gap-6">
        {director.map((member) => (
          <StaggerItem key={member._id}>
            <div className="bg-[#F8FAFC] border border-gray-200 overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-[#111827] mb-1">{member.name}</h3>
                <div className="text-[#EA4922] text-sm font-semibold mb-3">{member.designation}</div>
                <p className="text-[#374151] text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    )}
  </div>
</section>



<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <SectionHeader title="Leadership Team" subtitle="Our Team" />

    {team.length === 0 ? (
      <p className="text-center text-[#374151]">Team information is currently unavailable.</p>
    ) : (
      <StaggerContainer className="grid md:grid-cols-3 gap-6">
        {team.map((member) => (
          <StaggerItem key={member._id}>
            <div className="bg-[#F8FAFC] border border-gray-200 overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-[#111827] mb-1">{member.name}</h3>
                <div className="text-[#EA4922] text-sm font-semibold mb-3">{member.designation}</div>
                <p className="text-[#374151] text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    )}
  </div>
</section>
 <CertificationsSection />
      {/* Infrastructure & Certifications */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Infrastructure & Certifications" subtitle="Our Capabilities" />
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="mb-8">
                <h3 className="text-xl text-[#111827] mb-4 flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-[#EA4922]" />
                  Infrastructure Facilities
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Corporate Headquarters', desc: 'Strategic office location with modern design and planning facilities' },
                    { title: 'Regional Offices', desc: 'Operational offices at key locations to serve projects across India' },
                    { title: 'Equipment Yard', desc: 'Comprehensive fleet of specialized railway OHE equipment and machinery' },
                    { title: 'Fabrication Workshop', desc: 'In-house fabrication facility for railway electrification components' },
                    { title: 'Design Centre', desc: 'In-house engineering department for all design and drawing functions' },
                  ].map((facility, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white p-4 border border-gray-200">
                      <div className="w-8 h-8 bg-[#0B2E59] text-white flex items-center justify-center text-sm font-bold shrink-0">{index + 1}</div>
                      <div>
                        <h4 className="font-semibold text-[#111827] text-sm mb-1">{facility.title}</h4>
                        <p className="text-[#374151] text-sm">{facility.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-xl text-[#111827] mb-4 flex items-center gap-3">
                  <Award className="h-6 w-6 text-[#EA4922]" />
                  Certifications & Accreditations
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-white border border-gray-200 p-4 flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#0B2E59] text-white flex items-center justify-center shrink-0">
                        <Award className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-sm mb-1">{cert.name}</h4>
                        <p className="text-[#374151] text-sm">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-[#0B2E59] text-white p-6">
                  <h4 className="font-bold mb-2">Key Clients & Partners</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#EA4922]" />
                      <span>Indian Railways</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#EA4922]" />
                      <span>Railway Electrification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#EA4922]" />
                      <span>OHE Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#EA4922]" />
                      <span>Railway Infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}