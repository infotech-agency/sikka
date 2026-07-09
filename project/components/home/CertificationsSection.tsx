// // import { SectionHeader } from '@/components/SectionHeader';
// // import { StaggerContainer, StaggerItem } from '@/components/animations';
// // import { certifications } from '@/lib/data';
// // import { FileCheck } from 'lucide-react';
// // import Image from 'next/image';

// // export function CertificationsSection() {
// //   return (
// //     <section className="py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <SectionHeader
// //           title="Certifications & Compliance"
// //           subtitle="Quality Standards"
// //         />

        
// //         <Image src="/images/sikka-certificate.png" width={120} height={120} alt='certificate'></Image>
// //       </div>
// //     </section>
// //   );
// // }


// import { SectionHeader } from '@/components/SectionHeader';
// import { StaggerContainer, StaggerItem } from '@/components/animations';
// import { certifications } from '@/lib/data';
// import { FileCheck } from 'lucide-react';
// import Image from 'next/image';

// export function CertificationsSection() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <SectionHeader
//           title="Certifications & Compliance"
//           subtitle="Quality Standards"
//         />

//         {/* Center Container for Portrait Image */}
//         <div className="mt-12 flex justify-center items-center">
//           <div className="relative w-full max-w-md aspect-[3/4] shadow-xl rounded-xl overflow-hidden border border-gray-100">
//             <Image 
//               src="/images/sikka-certificate.png" 
//               fill
//               className="object-cover" /* pure card ko fill karne ke liye */
//               sizes="(max-w-768px) 100vw, 448px"
//               alt="Sikka Certificate"
//               priority
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

import { SectionHeader } from '@/components/SectionHeader';
import { StaggerContainer, StaggerItem } from '@/components/animations';
import { certifications } from '@/lib/data';
import { FileCheck, CheckCircle2, Calendar, ShieldCheck, Award } from 'lucide-react';
import Image from 'next/image';

export function CertificationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Certifications & Compliance"
          subtitle="Quality Standards"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Certificate Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] shadow-xl rounded-xl overflow-hidden border border-gray-100">
              <Image
                src="/images/sikka-certificate.png"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
                alt="Sikka Engineering ISO 9001:2015 Certificate"
                priority
              />
            </div>
          </div>

          {/* Right: Certificate Details */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0B2E59]/5 px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-[#EA4922]" />
              <span className="text-sm font-semibold text-[#0B2E59] tracking-wide uppercase">
                ISO 9001:2015 Certified
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#0B2E59] mb-4">
              Quality Management System
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              Sikka Engineering Company has been assessed and certified by{' '}
              <span className="font-semibold text-[#0B2E59]">
                Quality Veritas Certification Limited (UK)
              </span>{' '}
              as meeting the requirements of ISO 9001:2015 for turnkey contracts
              with railways, specializing in electrification of railway tracks
              and sub-stations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#EA4922] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold text-[#0B2E59]">Scope: </span>
                  Turnkey Contracts with Railways for Electrification of
                  Railway Tracks & Sub Stations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#EA4922] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold text-[#0B2E59]">
                    Certificate Number:{' '}
                  </span>
                  202120624
                </p>
              </div>
            </div>

            {/* Date Grid */}
            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0B2E59]/5 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-[#0B2E59]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Initial Registration
                  </p>
                  <p className="font-semibold text-[#0B2E59]">12 June 2024</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0B2E59]/5 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-5 h-5 text-[#0B2E59]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Current Certificate
                  </p>
                  <p className="font-semibold text-[#0B2E59]">12 June 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0B2E59]/5 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-[#EA4922]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Certificate Expiry
                  </p>
                  <p className="font-semibold text-[#0B2E59]">11 June 2027</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0B2E59]/5 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#EA4922]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Recertification Due
                  </p>
                  <p className="font-semibold text-[#0B2E59]">11 June 2027</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}