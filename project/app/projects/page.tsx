// 'use client';

// import { useEffect, useState } from 'react';
// import { SectionHeader } from '@/components/SectionHeader';
// import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
// import { projects } from '@/lib/data';
// import { MapPin, Building2, IndianRupee, CircleCheck, X, ChevronRight } from 'lucide-react';
// import { BASE_URL } from '@/utils/baseUrl';

// const categories = ['All', 'Government', 'Infrastructure', 'Industrial', 'Utilities'];

// export default function ProjectsPage() {
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
//   const [projects,setProjects] = useState([]);
//   const filteredProjects = activeFilter === 'All'
//     ? projects
//     : projects.filter(p => p.category === activeFilter);

//   const getAllProjects = async()=>{
//     const res = await fetch(`${BASE_URL}/projects`);
//     const data = await res.json();
//     console.log(data);
//     setProjects(data.data);
//   }
//   useEffect(()=>{
//     getAllProjects();
//   },[])

//   return (
//     <div>
//       {/* Page Banner */}
//       <section className="relative py-24 bg-[#0B2E59]">
//         <div className="absolute inset-0 opacity-20">
//           <img
//             src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=500&fit=crop"
//             alt="Projects banner"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="relative max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-2 mb-4">
//             <div className="h-px w-10 bg-[#C8A14A]" />
//             <span className="text-[#C8A14A] text-sm font-semibold uppercase tracking-wider">Our Work</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl  text-white  mb-4">
//             Project Portfolio
//           </h1>
//           <p className="text-gray-300 max-w-2xl">
//             A showcase of our completed and ongoing projects across government, infrastructure, industrial, and utility sectors.
//           </p>
//         </div>
//       </section>

//       {/* Filters */}
//       <section className="py-8 bg-[#F8FAFC] border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-wrap gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveFilter(cat)}
//                 className={`px-5 py-2 text-sm font-semibold transition-colors ${
//                   activeFilter === cat
//                     ? 'bg-[#0B2E59] text-white'
//                     : 'bg-white border border-gray-200 text-[#374151] hover:border-[#0B2E59]'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProjects.map((project) => (
//               <StaggerItem key={project.id}>
//                 <div
//                   onClick={() => setSelectedProject(project)}
//                   className="group border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
//                 >
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                     <div className="absolute top-4 left-4 bg-[#0B2E59] text-white text-xs px-3 py-1 font-semibold">
//                       {project.category}
//                     </div>
//                     <div className={`absolute top-4 right-4 text-xs px-3 py-1 font-semibold ${
//                       project.status === 'Completed'
//                         ? 'bg-green-600 text-white'
//                         : 'bg-[#C8A14A] text-[#0B2E59]'
//                     }`}>
//                       {project.status}
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-lg  text-[#111827]  mb-3 group-hover:text-[#1B4D8C] transition-colors">
//                       {project.title}
//                     </h3>
//                     <div className="space-y-2 text-sm">
//                       <div className="flex items-center gap-2 text-[#374151]">
//                         <MapPin className="h-3.5 w-3.5 text-[#C8A14A]" />
//                         <span>{project.location}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[#374151]">
//                         <Building2 className="h-3.5 w-3.5 text-[#C8A14A]" />
//                         <span>{project.client}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[#374151]">
//                         <IndianRupee className="h-3.5 w-3.5 text-[#C8A14A]" />
//                         <span className="font-semibold">{project.cost}</span>
//                       </div>
//                     </div>
//                     <div className="mt-4 flex items-center gap-2 text-[#0B2E59] font-semibold text-sm">
//                       <span>View Details</span>
//                       <ChevronRight className="h-4 w-4" />
//                     </div>
//                   </div>
//                 </div>
//               </StaggerItem>
//             ))}
//           </StaggerContainer>
//         </div>
//       </section>

//       {/* Project Detail Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setSelectedProject(null)}>
//           <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
//             <div className="relative">
//               <img
//                 src={selectedProject.image}
//                 alt={selectedProject.title}
//                 className="w-full h-64 object-cover"
//               />
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-4 right-4 w-10 h-10 bg-white flex items-center justify-center hover:bg-gray-100"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//               <div className="absolute top-4 left-4 bg-[#0B2E59] text-white text-xs px-3 py-1 font-semibold">
//                 {selectedProject.category}
//               </div>
//             </div>
//             <div className="p-8">
//               <h2 className="text-2xl  text-[#111827]  mb-4">
//                 {selectedProject.title}
//               </h2>
//               <p className="text-[#374151] leading-relaxed mb-6">
//                 {selectedProject.description}
//               </p>
//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div className="bg-[#F8FAFC] p-4 border border-gray-200">
//                   <div className="text-xs text-[#374151] uppercase tracking-wider mb-1">Location</div>
//                   <div className="text-sm font-semibold text-[#111827] flex items-center gap-2">
//                     <MapPin className="h-4 w-4 text-[#C8A14A]" />
//                     {selectedProject.location}
//                   </div>
//                 </div>
//                 <div className="bg-[#F8FAFC] p-4 border border-gray-200">
//                   <div className="text-xs text-[#374151] uppercase tracking-wider mb-1">Client</div>
//                   <div className="text-sm font-semibold text-[#111827] flex items-center gap-2">
//                     <Building2 className="h-4 w-4 text-[#C8A14A]" />
//                     {selectedProject.client}
//                   </div>
//                 </div>
//                 <div className="bg-[#F8FAFC] p-4 border border-gray-200">
//                   <div className="text-xs text-[#374151] uppercase tracking-wider mb-1">Project Value</div>
//                   <div className="text-sm font-semibold text-[#111827] flex items-center gap-2">
//                     <IndianRupee className="h-4 w-4 text-[#C8A14A]" />
//                     {selectedProject.cost}
//                   </div>
//                 </div>
//                 <div className="bg-[#F8FAFC] p-4 border border-gray-200">
//                   <div className="text-xs text-[#374151] uppercase tracking-wider mb-1">Status</div>
//                   <div className="text-sm font-semibold text-[#111827] flex items-center gap-2">
//                     <CircleCheck className="h-4 w-4 text-[#C8A14A]" />
//                     {selectedProject.status}
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-[#0B2E59] text-white p-4 flex items-center justify-between">
//                 <span className="font-semibold">Interested in a similar project?</span>
//                 <button
//                   onClick={() => setSelectedProject(null)}
//                   className="bg-[#C8A14A] text-[#0B2E59] px-4 py-2 text-sm font-semibold hover:bg-[#b8923f] transition-colors"
//                 >
//                   Contact Us
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';
// import { SectionHeader } from '@/components/SectionHeader';
// import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
// import { MapPin, Building2, IndianRupee, CircleCheck, X, ChevronRight } from 'lucide-react';
// import { BASE_URL } from '@/utils/baseUrl';

// const categories = ['All', 'Government', 'Infrastructure', 'Industrial', 'Utilities'];

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

// export default function ProjectsPage() {
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
// // ${BASE_URL}
//   const getAllProjects = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const res = await fetch(`http://localhost:5000/api/projects`);
//       const data = await res.json();
//       console.log('API Response:', data);
      
//       if (data.success && data.data) {
//         setProjects(data.data);
//       } else {
//         setError('Failed to load projects');
//         setProjects([]);
//       }
//     } catch (err) {
//       console.error('Error fetching projects:', err);
//       setError('Failed to load projects. Please try again.');
//       setProjects([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getAllProjects();
//   }, []);

//   const filteredProjects = activeFilter === 'All'
//     ? projects
//     : projects.filter(p => p.category === activeFilter);

//   return (
//     <div>
//       {/* Page Banner */}
//       <section className="relative py-24 bg-[#0B2E59]">
//         <div className="absolute inset-0 opacity-20">
//           <img
//             src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=500&fit=crop"
//             alt="Projects banner"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="relative max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-2 mb-4">
//             <div className="h-px w-10 bg-[#C8A14A]" />
//             <span className="text-[#C8A14A] text-sm font-semibold uppercase tracking-wider">Our Work</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl text-white mb-4">
//             Project Portfolio
//           </h1>
//           <p className="text-gray-300 max-w-2xl">
//             A showcase of our completed and ongoing projects across government, infrastructure, industrial, and utility sectors.
//           </p>
//         </div>
//       </section>

//       {/* Filters */}
//       <section className="py-8 bg-[#F8FAFC] border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-wrap gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveFilter(cat)}
//                 className={`px-5 py-2 text-sm font-semibold transition-colors ${
//                   activeFilter === cat
//                     ? 'bg-[#0B2E59] text-white'
//                     : 'bg-white border border-gray-200 text-[#374151] hover:border-[#0B2E59]'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           {loading ? (
//             <div className="text-center py-12">
//               <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#0B2E59] border-r-transparent"></div>
//               <p className="mt-4 text-gray-600">Loading projects...</p>
//             </div>
//           ) : error ? (
//             <div className="text-center py-12">
//               <p className="text-red-600 mb-4">{error}</p>
//               <button 
//                 onClick={getAllProjects}
//                 className="px-6 py-2 bg-[#0B2E59] text-white rounded hover:bg-[#1B4D8C] transition-colors"
//               >
//                 Retry
//               </button>
//             </div>
//           ) : filteredProjects.length === 0 ? (
//             <div className="text-center py-12">
//               <p className="text-gray-600">No projects found in this category.</p>
//             </div>
//           ) : (
//             <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredProjects.map((project) => (
//                 <StaggerItem key={project._id}>
//                   <div
//                     onClick={() => setSelectedProject(project)}
//                     className="group border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
//                   >
//                     <div className="relative h-56 overflow-hidden">
//                       <img
//                         src={project.projectImage}
//                         alt={project.projectTitle}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       />
//                       <div className="absolute top-4 left-4 bg-[#0B2E59] text-white text-xs px-3 py-1 font-semibold">
//                         {project.category}
//                       </div>
//                       <div className={`absolute top-4 right-4 text-xs px-3 py-1 font-semibold ${
//                         project.status === 'Completed'
//                           ? 'bg-green-600 text-white'
//                           : 'bg-[#C8A14A] text-[#0B2E59]'
//                       }`}>
//                         {project.status}
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <h3 className="text-lg text-[#111827] mb-3 group-hover:text-[#1B4D8C] transition-colors line-clamp-2">
//                         {project.projectTitle}
//                       </h3>
//                       {/* #374151] */}
//                       <div className="space-y-2 text-sm">
//                         <div className="flex bg-[#1B4D8C] items-center gap-2 text-white p-2">
//                           <MapPin className="h-3.5 w-3.5 text-[#C8A14A]" />
//                           <span>{project.location}</span>
//                         </div>
//                         <div className="flex bg-[#1B4D8C] items-center gap-2 text-white p-2">
//                           <Building2 className="h-3.5 w-3.5 text-[#C8A14A]" />
//                           <span>{project.clientName}</span>
//                         </div>
//                         <div className="flex bg-[#1B4D8C]  items-center gap-2 text-white p-2">
//                           <IndianRupee className="h-3.5 w-3.5 text-[#C8A14A]" />
//                           <span className="font-semibold">{project.projectValue}</span>
//                         </div>
//                       </div>
//                       <div className="mt-4 flex items-center gap-2 text-[#0B2E59] font-semibold text-sm">
//                         <span>View Details</span>
//                         <ChevronRight className="h-4 w-4" />
//                       </div>
//                     </div>
//                   </div>
//                 </StaggerItem>
//               ))}
//             </StaggerContainer>
//           )}
//         </div>
//       </section>

//       {/* Project Detail Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setSelectedProject(null)}>
//           <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
//             <div className="relative">
//               <img
//                 src={selectedProject.projectImage}
//                 alt={selectedProject.projectTitle}
//                 className="w-full h-64 object-cover"
//               />
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-4 right-4 w-10 h-10 bg-white flex items-center justify-center hover:bg-gray-100"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//               <div className="absolute top-4 left-4 bg-[#0B2E59] text-white text-xs px-3 py-1 font-semibold">
//                 {selectedProject.category}
//               </div>
//             </div>
//             <div className="p-8">
//               <h2 className="text-2xl text-[#111827] mb-4">
//                 {selectedProject.projectTitle}
//               </h2>
//               <p className="text-[#374151] leading-relaxed mb-6 whitespace-pre-line">
//                 {selectedProject.projectDescription}
//               </p>
//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div className="bg-[#F8FAFC] p-4 border border-gray-200">
//                   <div className="text-xs text-[#374151] uppercase tracking-wider mb-1">Location</div>
//                   <div className="text-sm font-semibold text-[#111827] flex items-center gap-2">
//                     <MapPin className="h-4 w-4 text-[#C8A14A]" />
//                     {selectedProject.location}
//                   </div>
//                 </div>
//                 <div className="bg-[#F8FAFC] p-4 border border-gray-200">
//                   <div className="text-xs text-[#374151] uppercase tracking-wider mb-1">Client</div>
//                   <div className="text-sm font-semibold text-[#111827] flex items-center gap-2">
//                     <Building2 className="h-4 w-4 text-[#C8A14A]" />
//                     {selectedProject.clientName}
//                   </div>
//                 </div>
//                 <div className="bg-[#F8FAFC] p-4 border border-gray-200">
//                   <div className="text-xs text-[#374151] uppercase tracking-wider mb-1">Project Value</div>
//                   <div className="text-sm font-semibold text-[#111827] flex items-center gap-2">
//                     <IndianRupee className="h-4 w-4 text-[#C8A14A]" />
//                     {selectedProject.projectValue}
//                   </div>
//                 </div>
//                 <div className="bg-[#F8FAFC] p-4 border border-gray-200">
//                   <div className="text-xs text-[#374151] uppercase tracking-wider mb-1">Status</div>
//                   <div className="text-sm font-semibold text-[#111827] flex items-center gap-2">
//                     <CircleCheck className="h-4 w-4 text-[#C8A14A]" />
//                     {selectedProject.status}
//                   </div>
//                 </div>
//               </div>
//               {selectedProject.projectImages && selectedProject.projectImages.length > 0 && (
//                 <div className="mb-6">
//                   <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-3">Project Gallery</h4>
//                   <div className="grid grid-cols-3 gap-2">
//                     {selectedProject.projectImages.map((img, index) => (
//                       <img
//                         key={index}
//                         src={img}
//                         alt={`Project ${index + 1}`}
//                         className="w-full h-24 object-cover border border-gray-200"
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}
//               <div className="bg-[#0B2E59] text-white p-4 flex items-center justify-between">
//                 <span className="font-semibold">Interested in a similar project?</span>
//                 <button
//                   onClick={() => setSelectedProject(null)}
//                   className="bg-[#C8A14A] text-[#0B2E59] px-4 py-2 text-sm font-semibold hover:bg-[#b8923f] transition-colors"
//                 >
//                   Contact Us
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { MapPin, Building2, IndianRupee, CircleCheck, X, ChevronRight } from 'lucide-react';
import { BASE_URL } from '@/utils/baseUrl';

// Status-based filters (replacing category-based filters)
const statusFilters = ['All', 'Ongoing', 'Completed', 'Upcoming', 'On Hold'];

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

// Helper to get badge color based on status
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-600 text-white';
    case 'Ongoing':
      return 'bg-[#C8A14A] text-[#0B2E59]';
    case 'Upcoming':
      return 'bg-blue-500 text-white';
    case 'On Hold':
      return 'bg-red-500 text-white';
    default:
      return 'bg-gray-400 text-white';
  }
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAllProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${BASE_URL}/api/projects`);
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

  // Filter by status instead of category
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.status === activeFilter);

  return (
    <div>
      {/* Page Banner */}
      <section className="relative py-24 bg-[#0B2E59]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=500&fit=crop"
            alt="Projects banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#C8A14A]" />
            <span className="text-[#C8A14A] text-sm font-semibold uppercase tracking-wider">Our Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-4">
            Project Portfolio
          </h1>
          <p className="text-gray-300 max-w-2xl">
            A showcase of our completed and ongoing projects across government, infrastructure, industrial, and utility sectors.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-[#F8FAFC] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {statusFilters.map((status) => (
              <button
                key={status}
                onClick={() => setActiveFilter(status)}
                className={`px-5 py-2 text-sm font-semibold transition-colors ${
                  activeFilter === status
                    ? 'bg-[#0B2E59] text-white'
                    : 'bg-white border border-gray-200 text-[#374151] hover:border-[#0B2E59]'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#0B2E59] border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading projects...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={getAllProjects}
                className="px-6 py-2 bg-[#0B2E59] text-white rounded hover:bg-[#1B4D8C] transition-colors"
              >
                Retry
              </button>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No projects found with this status.</p>
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <StaggerItem key={project._id}>
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="group border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.projectImage}
                        alt={project.projectTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-[#0B2E59] text-white text-xs px-3 py-1 font-semibold">
                        {project.category}
                      </div>
                      <div className={`absolute top-4 right-4 text-xs px-3 py-1 font-semibold ${getStatusColor(project.status)}`}>
                        {project.status}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg text-[#111827] mb-3 group-hover:text-[#1B4D8C] transition-colors line-clamp-2">
                        {project.projectTitle}
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex bg-[#1B4D8C] items-center gap-2 text-white p-2">
                          <MapPin className="h-3.5 w-3.5 text-[#C8A14A]" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex bg-[#1B4D8C] items-center gap-2 text-white p-2">
                          <Building2 className="h-3.5 w-3.5 text-[#C8A14A]" />
                          <span>{project.clientName}</span>
                        </div>
                        <div className="flex bg-[#1B4D8C] items-center gap-2 text-white p-2">
                          <IndianRupee className="h-3.5 w-3.5 text-[#C8A14A]" />
                          <span className="font-semibold">{project.projectValue}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-[#0B2E59] font-semibold text-sm">
                        <span>View Details</span>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setSelectedProject(null)}>
          <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedProject.projectImage}
                alt={selectedProject.projectTitle}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white flex items-center justify-center hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute top-4 left-4 bg-[#0B2E59] text-white text-xs px-3 py-1 font-semibold">
                {selectedProject.category}
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl text-[#111827] mb-4">
                {selectedProject.projectTitle}
              </h2>
              <p className="text-[#374151] leading-relaxed mb-6 whitespace-pre-line">
                {selectedProject.projectDescription}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#F8FAFC] p-4 border border-gray-200">
                  <div className="text-xs text-[#374151] uppercase tracking-wider mb-1">Location</div>
                  <div className="text-sm font-semibold text-[#111827] flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#C8A14A]" />
                    {selectedProject.location}
                  </div>
                </div>
                <div className="bg-[#F8FAFC] p-4 border border-gray-200">
                  <div className="text-xs text-[#374151] uppercase tracking-wider mb-1">Client</div>
                  <div className="text-sm font-semibold text-[#111827] flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-[#C8A14A]" />
                    {selectedProject.clientName}
                  </div>
                </div>
                <div className="bg-[#F8FAFC] p-4 border border-gray-200">
                  <div className="text-xs text-[#374151] uppercase tracking-wider mb-1">Project Value</div>
                  <div className="text-sm font-semibold text-[#111827] flex items-center gap-2">
                    <IndianRupee className="h-4 w-4 text-[#C8A14A]" />
                    {selectedProject.projectValue}
                  </div>
                </div>
                <div className="bg-[#F8FAFC] p-4 border border-gray-200">
                  <div className="text-xs text-[#374151] uppercase tracking-wider mb-1">Status</div>
                  <div className="text-sm font-semibold text-[#111827] flex items-center gap-2">
                    <CircleCheck className="h-4 w-4 text-[#C8A14A]" />
                    {selectedProject.status}
                  </div>
                </div>
              </div>
              {selectedProject.projectImages && selectedProject.projectImages.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-3">Project Gallery</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedProject.projectImages.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Project ${index + 1}`}
                        className="w-full h-24 object-cover border border-gray-200"
                      />
                    ))}
                  </div>
                </div>
              )}
              <div className="bg-[#0B2E59] text-white p-4 flex items-center justify-between">
                <span className="font-semibold">Interested in a similar project?</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-[#C8A14A] text-[#0B2E59] px-4 py-2 text-sm font-semibold hover:bg-[#b8923f] transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}