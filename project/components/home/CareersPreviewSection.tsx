// import Link from 'next/link';
// import { ArrowRight, MapPin, Briefcase, Clock } from 'lucide-react';
// import { SectionHeader } from '@/components/SectionHeader';
// import { StaggerContainer, StaggerItem } from '@/components/animations';
// import { jobs } from '@/lib/data';

// export function CareersPreviewSection() {
//   return (
//     <section className="py-20 bg-[#F8FAFC]">
//       <div className="max-w-7xl mx-auto px-4">
//         <SectionHeader
//           title="Current Openings"
//           subtitle="Join Our Team"
//         />

//         <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {jobs.slice(0, 6).map((job) => (
//             <StaggerItem key={job.id}>
//               <div className="bg-white border border-gray-200 p-6 hover:border-[#EA4922] hover:shadow-lg transition-all duration-300 h-full flex flex-col">
//                 <div className="flex items-center gap-2 mb-3">
//                   <span className="bg-[#0B2E59] text-white text-xs px-2 py-1 font-semibold">{job.department}</span>
//                   <span className="text-gray-400 text-xs">{job.posted}</span>
//                 </div>
//                 <h3 className="text-lg  text-[#111827]  mb-3">
//                   {job.title}
//                 </h3>
//                 <div className="space-y-2 text-sm mb-4 flex-grow">
//                   <div className="flex items-center gap-2 text-[#374151]">
//                     <MapPin className="h-3.5 w-3.5 text-[#EA4922]" />
//                     <span>{job.location}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-[#374151]">
//                     <Briefcase className="h-3.5 w-3.5 text-[#EA4922]" />
//                     <span>{job.experience}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-[#374151]">
//                     <Clock className="h-3.5 w-3.5 text-[#EA4922]" />
//                     <span>{job.type}</span>
//                   </div>
//                 </div>
//                 <p className="text-[#374151] text-sm mb-4 line-clamp-2">
//                   {job.description}
//                 </p>
//                 <Link
//                   href={`/careers#${job.id}`}
//                   className="inline-flex items-center gap-2 text-[#0B2E59] font-semibold text-sm hover:text-[#C8A14A] transition-colors"
//                 >
//                   Apply Now
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </div>
//             </StaggerItem>
//           ))}
//         </StaggerContainer>

//         <div className="text-center mt-12">
//           <Link
//             href="/careers"
//             className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
//           >
//             View All Openings
//             <ArrowRight className="h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from 'next/link';
import { ArrowRight, MapPin, Briefcase, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { StaggerContainer, StaggerItem } from '@/components/animations';
import { BASE_URL } from '@/utils/baseUrl';

interface Job {
  _id: string;
  designation?: string;
  jobTitle?: string;
  location?: string;
  employmentType?: string;
  jobDescription?: string;
  requirements?: string[];
  createdAt?: string;
}

async function getJobs(): Promise<Job[]> {
  try {
    const res = await fetch(`${BASE_URL}/jobs`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('Failed to fetch jobs, status:', res.status);
      return [];
    }

    const json = await res.json();
    return json.success && json.data ? json.data : [];
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
}

export async function CareersPreviewSection() {
  const jobs = await getJobs();
  const previewJobs = jobs.slice(0, 6);

  if (previewJobs.length === 0) {
    return null; // hide section entirely if no jobs, since there's nothing to preview
  }

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Current Openings"
          subtitle="Join Our Team"
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewJobs.map((job) => (
            <StaggerItem key={job._id}>
              <div className="bg-white border border-gray-200 p-6 hover:border-[#EA4922] hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#0B2E59] text-white text-xs px-2 py-1 font-semibold">
                    {job.designation || 'Engineering'}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {job.createdAt
                      ? new Date(job.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                      : 'Recently'}
                  </span>
                </div>
                <h3 className="text-lg text-[#111827] mb-3">
                  {job.jobTitle || 'Position'}
                </h3>
                <div className="space-y-2 text-sm mb-4 flex-grow">
                  <div className="flex items-center gap-2 text-[#374151]">
                    <MapPin className="h-3.5 w-3.5 text-[#EA4922]" />
                    <span>{job.location || 'Multiple Locations'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#374151]">
                    <Briefcase className="h-3.5 w-3.5 text-[#EA4922]" />
                    <span>{job.employmentType || 'Full-time'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#374151]">
                    <Clock className="h-3.5 w-3.5 text-[#EA4922]" />
                    <span>{job.employmentType || 'Full-time'}</span>
                  </div>
                </div>
                <p className="text-[#374151] text-sm mb-4 line-clamp-2">
                  {job.jobDescription || `We are looking for a skilled ${job.jobTitle || 'professional'} to join our team.`}
                </p>
                <Link
                  href={`/careers#${job._id}`}
                  className="inline-flex items-center gap-2 text-[#0B2E59] font-semibold text-sm hover:text-[#C8A14A] transition-colors"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center mt-12">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
          >
            View All Openings
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}