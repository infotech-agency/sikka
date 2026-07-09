// "use client"
// import Link from 'next/link';
// import { ArrowRight, MapPin, Building2, IndianRupee, CircleCheck } from 'lucide-react';
// import { SectionHeader } from '@/components/SectionHeader';
// import { StaggerContainer, StaggerItem } from '@/components/animations';
// import { projects } from '@/lib/data';
// import { useEffect, useState } from 'react';
// import { BASE_URL } from '@/utils/baseUrl';
// interface Project {
//   _id: string;
//   id: string;
//   projectTitle: string;
//   projectImage: string;
//   location: string;
//   clientName: string;
//   projectValue: string;
//   category: string;
//   status: string;
//   projectDescription: string;
//   projectImages: string[];
//   featured: boolean;
//   createdAt: string;
//   updatedAt: string;
// }
// export function ProjectsSection() {
//    const [projects, setProjects] = useState<Project[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
  
//     const getAllProjects = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const res = await fetch(`${BASE_URL}/projects`);
//         const data = await res.json();
//         console.log('API Response:', data);
        
//         if (data.success && data.data) {
//           setProjects(data.data);
//         } else {
//           setError('Failed to load projects');
//           setProjects([]);
//         }
//       } catch (err) {
//         console.error('Error fetching projects:', err);
//         setError('Failed to load projects. Please try again.');
//         setProjects([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     useEffect(()=>{
//       getAllProjects();
//     },[])

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <SectionHeader
//           title="Featured Projects"
//           subtitle="Our Portfolio"
//         />

//         <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.slice(0, 3).map((project) => (
//             <StaggerItem key={project.id}>
//               <div className="group border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
//                 <div className="relative h-52 overflow-hidden">
//                   <img
//                     src={project.projectImage}
//                     alt={project.projectTitle}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute top-4 left-4 bg-[#0B2E59] text-white text-xs px-3 py-1 font-semibold">
//                     {project.category}
//                   </div>
//                   <div className={`absolute top-4 right-4 text-xs px-3 py-1 font-semibold ${
//                     project.status === 'Completed' 
//                       ? 'bg-green-600 text-white' 
//                       : 'bg-[#EA4922] text-[#0B2E59]'
//                   }`}>
//                     {project.status}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-lg  text-[#111827]  mb-3">
//                     {/* {project.projectTitle} */}
//                       {project.projectTitle > 40 ? `${project.projectTitle.slice(0, 40)}...` : project.projectTitle}
//                   </h3>
//                   <div className="space-y-2 text-sm mb-4">
//                     <div className="flex items-center gap-2 bg-[#0B2E59] p-2 text-white">
//                       <MapPin className="h-3.5 w-3.5 text-[#EA4922]" />
//                       <span>{project.location}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-white bg-[#0B2E59] p-2">
//                       <Building2 className="h-3.5 w-3.5 text-[#EA4922]" />
//                       <span>{project.clientName}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-white bg-[#0B2E59] p-2">
//                       <IndianRupee className="h-3.5 w-3.5 text-[#EA4922]" />
//                       <span className="font-semibold">{project.projectValue}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </StaggerItem>
//           ))}
//         </StaggerContainer>

//         <div className="text-center mt-12">
//           <Link
//             href="/projects"
//             className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
//           >
//             View All Projects
//             <ArrowRight className="h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client"
import Link from 'next/link';
import { ArrowRight, MapPin, Building2, IndianRupee, CircleCheck } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { StaggerContainer, StaggerItem } from '@/components/animations';
import { useEffect, useState } from 'react';
import { BASE_URL } from '@/utils/baseUrl';

interface Project {
  _id: string;
  id: string;
  projectTitle: string;
  projectImage: string;
  location: string;
  clientName: string;
  projectValue: string;
  category: string;
  status: string;
  projectDescription: string;
  projectImages: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAllProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${BASE_URL}/projects`);
      const data = await res.json();
      console.log('API Response:', data);

      if (data.success && data.data) {
        setProjects(data.data);
      } else {
        setError('Failed to load projects');
        setProjects([]);
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Failed to load projects. Please try again.');
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Featured Projects"
          subtitle="Our Portfolio"
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => {
            const projectId = project.id || project._id;
            return (
              <StaggerItem key={projectId}>
                <Link
                  href={`/projects/${projectId}`}
                  className="group block border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.projectImage}
                      alt={project.projectTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#0B2E59] text-white text-xs px-3 py-1 font-semibold">
                      {project.category}
                    </div>
                    <div className={`absolute top-4 right-4 text-xs px-3 py-1 font-semibold ${
                      project.status === 'Completed'
                        ? 'bg-green-600 text-white'
                        : 'bg-[#EA4922] text-[#0B2E59]'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg text-[#111827] mb-3 group-hover:text-[#1B4D8C] transition-colors">
                      {project.projectTitle.length > 40
                        ? `${project.projectTitle.slice(0, 40)}...`
                        : project.projectTitle}
                    </h3>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center gap-2 bg-[#0B2E59] p-2 text-white">
                        <MapPin className="h-3.5 w-3.5 text-[#EA4922]" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white bg-[#0B2E59] p-2">
                        <Building2 className="h-3.5 w-3.5 text-[#EA4922]" />
                        <span>{project.clientName}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white bg-[#0B2E59] p-2">
                        <IndianRupee className="h-3.5 w-3.5 text-[#EA4922]" />
                        <span className="font-semibold">{project.projectValue}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}