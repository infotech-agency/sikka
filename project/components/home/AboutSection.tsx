// import Link from 'next/link';
// import { ArrowRight, CheckCircle } from 'lucide-react';
// import { FadeIn, SlideIn } from '@/components/animations';

// const highlights = [
//   '25+ Years of Engineering Excellence',
//   'Government & Private Sector Projects',
//   'ISO 9001:2015 Certified Organization',
//   'CRISIL A1 Credit Rating',
//   '850+ Skilled Professionals',
//   'Pan-India Presence',
// ];

// export function AboutSection() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left - Image */}
//           <SlideIn>
//             <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
//                 alt="Corporate building"
//                 className="w-full h-[500px] object-cover"
//               />
//               <div className="absolute bottom-0 left-0 bg-[#EA4922] text-white p-6">
//                 <div className="text-3xl font-bold text-[] font-[Merriweather]">20+</div>
//                 <div className="text-sm text-gray-300">Years of Excellence</div>
//               </div>
//             </div>
//           </SlideIn>

//           {/* Right - Content */}
//           <FadeIn delay={0.2}>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="h-px w-10 bg-[#EA4922]" />
//               <span className="text-[#1B4D8C] text-sm font-semibold uppercase tracking-wider">About Our Company</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#111827] font-[Merriweather] mb-6 leading-tight">
//               Trusted Engineering Partner for Nation Building
//             </h2>
//             <p className="text-[#374151] leading-relaxed mb-6">
//               Bharat Engineering & Infrastructure Limited is a premier engineering and infrastructure company serving government and private sector clients across India. With over two decades of experience, we have established ourselves as a trusted partner for complex infrastructure projects.
//             </p>
//             <p className="text-[#374151] leading-relaxed mb-8">
//               Our expertise spans engineering consultancy, infrastructure development, project management, and industrial construction. We are committed to delivering excellence through innovation, quality, and timely execution.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
//               {highlights.map((item, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                   <CheckCircle className="h-4 w-4 text-[#EA4922] shrink-0" />
//                   <span className="text-sm text-[#374151]">{item}</span>
//                 </div>
//               ))}
//             </div>

//             <Link
//               href="/about"
//               className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
//             >
//               Read More About Us
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </FadeIn>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Link from 'next/link';
// import { ArrowRight, CheckCircle } from 'lucide-react';
// import { FadeIn, SlideIn } from '@/components/animations';

// const highlights = [
//   '30+ Years of Engineering Excellence',
//   'Specialized in Railway OHE Projects',
//   'Trusted Partner of Indian Railways',
//   '350+ Skilled Professionals',
//   '₹80+ Crore Annual Turnover',
//   'Infrastructure & Electrical Engineering',
// ];

// export function AboutSection() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left - Image */}
//           <SlideIn>
//             <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
//                 alt="Corporate building"
//                 className="w-full h-[500px] object-cover"
//               />
//               <div className="absolute bottom-0 left-0 bg-[#EA4922] text-white p-6">
//                 <div className="text-3xl font-bold font-[Merriweather]">30+</div>
//                 <div className="text-sm text-gray-300">Years of Excellence</div>
//               </div>
//             </div>
//           </SlideIn>

//           {/* Right - Content */}
//           <FadeIn delay={0.2}>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="h-px w-10 bg-[#EA4922]" />
//               <span className="text-[#1B4D8C] text-sm font-semibold uppercase tracking-wider">About Our Company</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#111827] font-[Merriweather] mb-6 leading-tight">
//               Trusted Partner in Railway Infrastructure
//             </h2>
//             <p className="text-[#374151] leading-relaxed mb-6">
//               Sikka Engineering Company was formed in 1992 by Shri S.L Sikka, Mr. Ravi Sikka, and Mr. Sanjay Sikka to undertake electrical engineering projects. With over three decades of experience, we have established ourselves as a premier contractor in the industry.
//             </p>
//             <p className="text-[#374151] leading-relaxed mb-8">
//               We specialize in infrastructure projects, particularly Railway Overhead Equipment (OHE) work. Our long-standing relationship with Indian Railways stands as a testament to our reliability, quality, and expertise. SEC has earned its reputation as one of the most trusted and experienced contractors in the OHE sector.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
//               {highlights.map((item, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                   <CheckCircle className="h-4 w-4 text-[#EA4922] shrink-0" />
//                   <span className="text-sm text-[#374151]">{item}</span>
//                 </div>
//               ))}
//             </div>

//             <Link
//               href="/about"
//               className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
//             >
//               Read More About Us
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </FadeIn>
//         </div>
//       </div>
//     </section>
//   );
// }



// import Link from 'next/link';
// import { ArrowRight, CheckCircle } from 'lucide-react';
// import { FadeIn, SlideIn } from '@/components/animations';

// const highlights = [
//   '30+ Years of Engineering Excellence',
//   'Specialized in Railway OHE Projects',
//   'Trusted Partner of Indian Railways',
//   '350+ Skilled Professionals',
//   '₹80+ Crore Annual Turnover',
//   'Infrastructure & Electrical Engineering',
// ];

// export function AboutSection() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left - Image */}
//           <SlideIn>
//             <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
//                 alt="Corporate building"
//                 className="w-full h-[500px] object-cover"
//               />
//               {/* Orangey Red background badal diya aur font-[Merriweather] hata kar default global text badal diya */}
//               <div className="absolute bottom-0 left-0 bg-[#EA4922] text-white p-6">
//                 <div className="text-3xl font-bold tracking-wide">30+</div>
//                 <div className="text-sm text-gray-200 font-medium">Years of Excellence</div>
//               </div>
//             </div>
//           </SlideIn>

//           {/* Right - Content */}
//           <FadeIn delay={0.2}>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="h-px w-10 bg-[#EA4922]" />
//               {/* Color updated to Deep Sapphire (#0B2E59) for high priority brand presence */}
//               <span className="text-[#0B2E59] text-sm font-bold uppercase tracking-wider">
//                 About Our Company
//               </span>
//             </div>
            
//             {/* FIXED: font-[Merriweather] removed so it matches SCHABO Condensed global configuration */}
//             <h2 className="text-3xl md:text-4xl  text-[#0B2E59] mb-6 leading-tight tracking-wide">
//               Trusted Partner in Railway Infrastructure
//             </h2>
            
//             {/* Text colors mapped dynamically with clean structure */}
//             <p className="text-slate-700 leading-relaxed mb-6 font-medium">
//               Sikka Engineering Company was formed in 1992 by Shri S.L Sikka, Mr. Ravi Sikka, and Mr. Sanjay Sikka to undertake electrical engineering projects. With over three decades of experience, we have established ourselves as a premier contractor in the industry.
//             </p>
//             <p className="text-slate-600 leading-relaxed mb-8">
//               We specialize in infrastructure projects, particularly Railway Overhead Equipment (OHE) work. Our long-standing relationship with Indian Railways stands as a testament to our reliability, quality, and expertise. SEC has earned its reputation as one of the most trusted and experienced contractors in the OHE sector.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
//               {highlights.map((item, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                   <CheckCircle className="h-4 w-4 text-[#EA4922] shrink-0" />
//                   <span className="text-sm text-slate-700 font-medium">{item}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Main Primary Button styled elegantly with Deep Sapphire (#0B2E59) */}
//             <Link
//               href="/about"
//               className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-6 py-3 text-sm font-bold hover:bg-[#EA4922] transition-colors rounded-sm shadow-sm"
//             >
//               Read More About Us
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </FadeIn>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { FadeIn, SlideIn } from '@/components/animations';
import { BASE_URL } from '@/utils/baseUrl';

interface AboutData {
  title: string;
  description: string;
  values: string[];
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

export async function AboutSection() {
  const about = await getAboutData();

  // Fallback values if API fails, so section doesn't break
  const title = about?.title || 'Trusted Partner in Railway Infrastructure';
  const paragraphs = about?.description
    ? about.description.split('\n\n').filter(Boolean)
    : [
        'Sikka Engineering Company was formed in 1992 by Shri S.L Sikka, Mr. Ravi Sikka, and Mr. Sanjay Sikka to undertake electrical engineering projects. With over three decades of experience, we have established ourselves as a premier contractor in the industry.',
        'We specialize in infrastructure projects, particularly Railway Overhead Equipment (OHE) work. Our long-standing relationship with Indian Railways stands as a testament to our reliability, quality, and expertise. SEC has earned its reputation as one of the most trusted and experienced contractors in the OHE sector.',
      ];
  const highlights = about?.values && about.values.length > 0
    ? about.values
    : [
        '30+ Years of Engineering Excellence',
        'Specialized in Railway OHE Projects',
        'Trusted Partner of Indian Railways',
        '350+ Skilled Professionals',
        '₹80+ Crore Annual Turnover',
        'Infrastructure & Electrical Engineering',
      ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <SlideIn>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                alt="Corporate building"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-[#EA4922] text-white p-6">
                <div className="text-3xl font-bold tracking-wide">35+</div>
                <div className="text-sm text-gray-200 font-medium">Years of Excellence</div>
              </div>
            </div>
          </SlideIn>

          {/* Right - Content */}
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-10 bg-[#EA4922]" />
              <span className="text-[#0B2E59] text-sm font-bold uppercase tracking-wider">
                About Our Company
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl text-[#0B2E59] mb-6 leading-tight tracking-wide">
              {title}
            </h2>

            {paragraphs.map((para, index) => (
              <p
                key={index}
                className={`${index === 0 ? 'text-slate-700 font-medium' : 'text-slate-600'} leading-relaxed ${
                  index === paragraphs.length - 1 ? 'mb-8' : 'mb-6'
                }`}
              >
                {para}
              </p>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#EA4922] shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-6 py-3 text-sm font-bold hover:bg-[#EA4922] transition-colors rounded-sm shadow-sm"
            >
              Read More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}