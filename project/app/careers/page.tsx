// "use client"
// import Link from 'next/link';
// import { SectionHeader } from '@/components/SectionHeader';
// import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
// import { jobs } from '@/lib/data';
// import { MapPin, Briefcase, Clock, ArrowRight, CheckCircle, Award } from 'lucide-react';
// import { CareersForm } from '@/components/CareersForm';
// import { BASE_URL } from '@/utils/baseUrl';
// import { useEffect, useRef, useState } from 'react';

// // export const metadata = {
// //   title: 'Careers | Bharat Engineering & Infrastructure Limited',
// //   description: 'Join Bharat Engineering & Infrastructure Limited. Explore current job openings in engineering, project management, and construction.',
// // };

// export default function CareersPage() {
//   const[jobOpenings,setJobOpenings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const load = false;
// const [error, setError] = useState<string | null>(null);
// const [selectedJob, setSelectedJob] = useState<string>('');
// const formRef = useRef<HTMLDivElement>(null);
//  const getJobOpenings = async () => {
//   try {
//     setLoading(true);
//     setError(null);
//     const res = await fetch(`${BASE_URL}/jobs`);
//     const data = await res.json();
//     console.log(data);
    
//     if (data.success && data.data) {
//       const transformedJobs = data.data.map((item: any) => ({
//         ...item,
//         posted: item.createdAt ? new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently',
//       }));
//       setJobOpenings(transformedJobs);
//     } else {
//       setError('Failed to load job openings');
//     }
//   } catch (err) {
//     console.error('Error fetching jobs:', err);
//     setError('Failed to load job openings');
//   } finally {
//     setLoading(false);
//   }
// };
//   useEffect(()=>{
//     getJobOpenings();
//   },[])

//   return (
//     <div>
//       {/* Page Banner */}
//       <section className="relative py-24 bg-[#0B2E59]">
//         <div className="absolute inset-0 opacity-20">
//           <img
//             src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=500&fit=crop"
//             alt="Careers banner"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="relative max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-2 mb-4">
//             <div className="h-px w-10 bg-[#C8A14A]" />
//             <span className="text-[#C8A14A] text-sm font-semibold uppercase tracking-wider">Join Our Team</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl  text-white  mb-4">
//             Careers
//           </h1>
//           <p className="text-gray-300 max-w-2xl">
//             Be part of a team that builds the nation. We are always looking for talented engineers, managers, and professionals.
//           </p>
//         </div>
//       </section>

//       {/* Why Join Us */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <SectionHeader title="Why Join Sikka E&IL" subtitle="Work With Us" />
//           <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: <Award className="h-6 w-6" />, title: 'Growth Opportunities', desc: 'Clear career progression paths and leadership development programs.' },
//               { icon: <CheckCircle className="h-6 w-6" />, title: 'Stable Employment', desc: 'Strong order book ensures job security and long-term career stability.' },
//               { icon: <Briefcase className="h-6 w-6" />, title: 'Challenging Projects', desc: 'Work on large-scale government and infrastructure projects across India.' },
//               { icon: <MapPin className="h-6 w-6" />, title: 'Pan-India Presence', desc: 'Opportunities to work in multiple cities with relocation support.' },
//             ].map((item, index) => (
//               <StaggerItem key={index}>
//                 <div className="bg-[#F8FAFC] border border-gray-200 p-6 text-center hover:border-[#C8A14A] transition-colors h-full">
//                   <div className="w-14 h-14 bg-[#0B2E59] text-white flex items-center justify-center mx-auto mb-4">
//                     {item.icon}
//                   </div>
//                   <h3 className="text-lg font-medium text-[#111827]  mb-2">{item.title}</h3>
//                   <p className="text-[#374151] text-sm">{item.desc}</p>
//                 </div>
//               </StaggerItem>
//             ))}
//           </StaggerContainer>
//         </div>
//       </section>

//       {/* Job Listings */}
//       <section className="py-20 bg-[#F8FAFC]">
//         <div className="max-w-7xl mx-auto px-4">
//           <SectionHeader title="Current Openings" subtitle="Job Opportunities" />
//           <StaggerContainer className="grid md:grid-cols-2 gap-6">
//             {jobs.map((job) => (
//               <StaggerItem key={job.id}>
//                 <div id={job.id} className="bg-white border border-gray-200 p-6 hover:border-[#C8A14A] hover:shadow-lg transition-all duration-300">
//                   <div className="flex items-center gap-3 mb-3 flex-wrap">
//                     <span className="bg-[#0B2E59] text-white text-xs px-3 py-1 font-semibold">{job.department}</span>
//                     <span className="text-gray-400 text-xs">{job.posted}</span>
//                   </div>
//                   <h3 className="text-xl  text-[#111827]  mb-3">
//                     {job.title}
//                   </h3>
//                   <div className="flex flex-wrap gap-4 text-sm mb-4">
//                     <div className="flex items-center gap-1.5 text-[#374151]">
//                       <MapPin className="h-3.5 w-3.5 text-[#C8A14A]" />
//                       <span>{job.location}</span>
//                     </div>
//                     <div className="flex items-center gap-1.5 text-[#374151]">
//                       <Briefcase className="h-3.5 w-3.5 text-[#C8A14A]" />
//                       <span>{job.experience}</span>
//                     </div>
//                     <div className="flex items-center gap-1.5 text-[#374151]">
//                       <Clock className="h-3.5 w-3.5 text-[#C8A14A]" />
//                       <span>{job.type}</span>
//                     </div>
//                   </div>
//                   <p className="text-[#374151] text-sm leading-relaxed mb-6">
//                     {job.description}
//                   </p>
//                   <div className="border-t border-gray-200 pt-4">
//                     <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-3">Requirements</h4>
//                     <div className="space-y-2 mb-4">
//                       <div className="flex items-center gap-2 text-sm text-[#374151]">
//                         <CheckCircle className="h-4 w-4 text-[#C8A14A]" />
//                         <span>Relevant degree in Engineering or related field</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-[#374151]">
//                         <CheckCircle className="h-4 w-4 text-[#C8A14A]" />
//                         <span>{job.experience} of relevant industry experience</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-[#374151]">
//                         <CheckCircle className="h-4 w-4 text-[#C8A14A]" />
//                         <span>Strong technical and project management skills</span>
//                       </div>
//                     </div>
//                     <Link
//                       href={`/apply`}
//                       className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
//                     >
//                       Apply Now
//                       <ArrowRight className="h-4 w-4" />
//                     </Link>
//                   </div>
//                 </div>
//               </StaggerItem>
//             ))}
//           </StaggerContainer>
//         </div>
//       </section>
// {load ? <section className="py-20 bg-[#F8FAFC]">
//   <div className="max-w-7xl mx-auto px-4">
//     <SectionHeader title="Current Openings" subtitle="Job Opportunities" />
    
//     {loading ? (
//       <div className="text-center py-12">
//         <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#0B2E59] border-r-transparent"></div>
//         <p className="mt-4 text-gray-600">Loading job openings...</p>
//       </div>
//     ) : error ? (
//       <div className="text-center py-12">
//         <p className="text-red-600 mb-4">{error}</p>
//         <button 
//           onClick={getJobOpenings}
//           className="px-6 py-2 bg-[#0B2E59] text-white rounded hover:bg-[#1B4D8C] transition-colors"
//         >
//           Retry
//         </button>
//       </div>
//     ) : jobOpenings.length === 0 ? (
//       <div className="text-center py-12">
//         <p className="text-gray-600">No job openings available at the moment. Please check back later.</p>
//       </div>
//     ) : (
//       <StaggerContainer className="grid md:grid-cols-2 gap-6">
//         {jobOpenings.map((job) => (
//           <StaggerItem key={job._id}>
//             <div className="bg-white border border-gray-200 p-6 hover:border-[#C8A14A] hover:shadow-lg transition-all duration-300">
//               <div className="flex items-center gap-3 mb-3 flex-wrap">
//                 <span className="bg-[#0B2E59] text-white text-xs px-3 py-1 font-semibold">
//                   {job.designation || 'Engineering'}
//                 </span>
//                 <span className="text-gray-400 text-xs">
//                   {job.createdAt ? new Date(job.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently'}
//                 </span>
//               </div>
//               <h3 className="text-xl text-[#111827] mb-3">
//                 {job.jobTitle || job.positionAppliedFor || 'Position'}
//               </h3>
//               <div className="flex flex-wrap gap-4 text-sm mb-4">
//                 <div className="flex items-center gap-1.5 text-[#374151]">
//                   <MapPin className="h-3.5 w-3.5 text-[#C8A14A]" />
//                   <span>{job.location || 'Multiple Locations'}</span>
//                 </div>
//                 {/* <div className="flex items-center gap-1.5 text-[#374151]">
//                   <Briefcase className="h-3.5 w-3.5 text-[#C8A14A]" />
//                   <span>{job.employmentType || 'Full-time'}</span>
//                 </div> */}
//                 <div className="flex items-center gap-1.5 text-[#374151]">
//                   <Clock className="h-3.5 w-3.5 text-[#C8A14A]" />
//                   <span>{job.employmentType || 'Full-time'}</span>
//                 </div>
//               </div>
//               <p className="text-[#374151] text-sm leading-relaxed mb-6">
//                 {job.jobDescription || `We are looking for a skilled ${job.jobTitle || 'professional'} to join our team at Bharat E&IL.`}
//               </p>
//               <div className="border-t border-gray-200 pt-4">
//                 <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-3">Requirements</h4>
//                 <div className="space-y-2 mb-4">
//                   {job.requirements && job.requirements.length > 0 ? (
//                     job.requirements.map((req, index) => (
//                       <div key={index} className="flex items-center gap-2 text-sm text-[#374151]">
//                         <CheckCircle className="h-4 w-4 text-[#C8A14A]" />
//                         <span>{req}</span>
//                       </div>
//                     ))
//                   ) : (
//                     <>
//                       <div className="flex items-center gap-2 text-sm text-[#374151]">
//                         <CheckCircle className="h-4 w-4 text-[#C8A14A]" />
//                         <span>Relevant degree in Engineering or related field</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-[#374151]">
//                         <CheckCircle className="h-4 w-4 text-[#C8A14A]" />
//                         <span>3-5 years of relevant industry experience</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-[#374151]">
//                         <CheckCircle className="h-4 w-4 text-[#C8A14A]" />
//                         <span>Strong technical and project management skills</span>
//                       </div>
//                     </>
//                   )}
//                 </div>
//                 <button
//                   onClick={() => {
//                     setSelectedJob(job.jobTitle || job.positionAppliedFor);
//                     formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                   }}
//                   className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
//                 >
//                   Apply Now
//                   <ArrowRight className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           </StaggerItem>
//         ))}
//       </StaggerContainer>
//     )}
//   </div>
// </section> : " "}
      

//       {/* Application Form */}
//       <section ref={formRef} className="py-20 bg-white">
//         <div className="max-w-3xl mx-auto px-4">
//           <SectionHeader title="Submit Your Application" subtitle="Apply Now" />
//           <FadeIn>
//             <div className="bg-[#F8FAFC] border border-gray-200 p-8">
//               <CareersForm />
//             </div>
//           </FadeIn>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client"
import { SectionHeader } from '@/components/SectionHeader';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { MapPin, Briefcase, Clock, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { CareersForm } from '@/components/CareersForm';
import { BASE_URL } from '@/utils/baseUrl';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// export const metadata = {
//   title: 'Careers | Bharat Engineering & Infrastructure Limited',
//   description: 'Join Bharat Engineering & Infrastructure Limited. Explore current job openings in engineering, project management, and construction.',
// };

interface Job {
  _id: string;
  designation?: string;
  jobTitle?: string;
  positionAppliedFor?: string;
  location?: string;
  employmentType?: string;
  jobDescription?: string;
  requirements?: string[];
  createdAt?: string;
}

export default function CareersPage() {
  const [jobOpenings, setJobOpenings] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<string>('');
  const formRef = useRef<HTMLDivElement>(null);

  const getJobOpenings = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${BASE_URL}/jobs`);
      const data = await res.json();

      if (data.success && data.data) {
        setJobOpenings(data.data);
      } else {
        setError('Failed to load job openings');
      }
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setError('Failed to load job openings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobOpenings();
  }, []);

  return (
    <div>
      {/* Page Banner */}
      <section className="relative py-24 bg-[#0B2E59]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=500&fit=crop"
            alt="Careers banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#C8A14A]" />
            <span className="text-[#C8A14A] text-sm font-semibold uppercase tracking-wider">Join Our Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-4">
            Careers
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Be part of a team that builds the nation. We are always looking for talented engineers, managers, and professionals.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Why Join Sikka E&IL" subtitle="Work With Us" />
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award className="h-6 w-6" />, title: 'Growth Opportunities', desc: 'Clear career progression paths and leadership development programs.' },
              { icon: <CheckCircle className="h-6 w-6" />, title: 'Stable Employment', desc: 'Strong order book ensures job security and long-term career stability.' },
              { icon: <Briefcase className="h-6 w-6" />, title: 'Challenging Projects', desc: 'Work on large-scale government and infrastructure projects across India.' },
              { icon: <MapPin className="h-6 w-6" />, title: 'Pan-India Presence', desc: 'Opportunities to work in multiple cities with relocation support.' },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <div className="bg-[#F8FAFC] border border-gray-200 p-6 text-center hover:border-[#C8A14A] transition-colors h-full">
                  <div className="w-14 h-14 bg-[#0B2E59] text-white flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium text-[#111827] mb-2">{item.title}</h3>
                  <p className="text-[#374151] text-sm">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Job Listings (API driven) */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Current Openings" subtitle="Job Opportunities" />

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#0B2E59] border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading job openings...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={getJobOpenings}
                className="px-6 py-2 bg-[#0B2E59] text-white rounded hover:bg-[#1B4D8C] transition-colors"
              >
                Retry
              </button>
            </div>
          ) : jobOpenings.length === 0 ? (
            <div className="text-center py-12">
              <div className='flex justify-center my-4'>
                <Image src="/images/job.png" height={120} width={120} alt='No-job' ></Image>
              </div>  
              <p className="text-gray-600 text-xl font-semibold">No job openings available at the moment. Please check back later.</p>
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {jobOpenings.map((job) => (
                <StaggerItem key={job._id}>
                  <div className="bg-white border border-gray-200 p-6 hover:border-[#C8A14A] hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="bg-[#0B2E59] text-white text-xs px-3 py-1 font-semibold">
                        {job.designation || 'Engineering'}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {job.createdAt ? new Date(job.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently'}
                      </span>
                    </div>
                    <h3 className="text-xl text-[#111827] mb-3">
                      {job.jobTitle || job.positionAppliedFor || 'Position'}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm mb-4">
                      <div className="flex items-center gap-1.5 text-[#374151]">
                        <MapPin className="h-3.5 w-3.5 text-[#C8A14A]" />
                        <span>{job.location || 'Multiple Locations'}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#374151]">
                        <Clock className="h-3.5 w-3.5 text-[#C8A14A]" />
                        <span>{job.employmentType || 'Full-time'}</span>
                      </div>
                    </div>
                    <p className="text-[#374151] text-sm leading-relaxed mb-6">
                      {job.jobDescription || `We are looking for a skilled ${job.jobTitle || 'professional'} to join our team at Bharat E&IL.`}
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-3">Requirements</h4>
                      <div className="space-y-2 mb-4">
                        {job.requirements && job.requirements.length > 0 ? (
                          job.requirements.map((req, index) => (
                            <div key={index} className="flex items-center gap-2 bg-[#dcecff] p-2 text-sm text-[#374151]">
                              <CheckCircle className="h-4 w-4 text-[#C8A14A]" />
                              <span>{req}</span>
                            </div>
                          ))
                        ) : (
                          <>
                            <div className="flex items-center gap-2 text-sm text-[#374151]">
                              <CheckCircle className="h-4 w-4 text-[#C8A14A]" />
                              <span>Relevant degree in Engineering or related field</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#374151]">
                              <CheckCircle className="h-4 w-4 text-[#C8A14A]" />
                              <span>3-5 years of relevant industry experience</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#374151]">
                              <CheckCircle className="h-4 w-4 text-[#C8A14A]" />
                              <span>Strong technical and project management skills</span>
                            </div>
                          </>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          setSelectedJob(job.jobTitle || job.positionAppliedFor || '');
                          formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
                      >
                        Apply Now
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeader title="Submit Your Application" subtitle="Apply Now" />
          <FadeIn>
            <div className="bg-[#F8FAFC] border border-gray-200 p-8">
              <CareersForm selectedJob={selectedJob} />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}