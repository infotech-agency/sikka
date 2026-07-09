'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin,
  Building2,
  IndianRupee,
  CircleCheck,
  ArrowLeft,
  Tag,
  ChevronRight,
} from 'lucide-react';
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

export default function ProjectDetails() {
  const params = useParams();
  const id = params?.id as string;

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getProject = async () => {
    try {
      setLoading(true);
      setError(null);

      // API only exposes a list endpoint (/projects) that returns an array
      // in `data`, so fetch the list and find the matching project by id.
      const res = await fetch(`${BASE_URL}/projects`);
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        const match = data.data.find((p: Project) => p._id === id || p.id === id);
        if (match) {
          setProject(match);
        } else {
          setError('Project not found');
        }
      } else {
        setError('Failed to load project');
      }
    } catch (err) {
      console.error('Error fetching project:', err);
      setError('Failed to load project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) getProject();
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#0B2E59] border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading project...</p>
        </div>
      </div>
    );
  }

  // Error / not found state
  if (error || !project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="text-center max-w-md px-4">
          <p className="text-red-600 mb-4">{error || 'Project not found'}</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-2 bg-[#0B2E59] text-white font-semibold hover:bg-[#1B4D8C] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#0B2E59]">
        <div className="absolute inset-0 opacity-20">
          <img
            src={project.projectImage}
            alt={project.projectTitle}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-[#C8A14A] transition-colors mb-6 text-sm font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#C8A14A]" />
            <span className="text-[#C8A14A] text-sm font-semibold uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl text-white mb-6 max-w-4xl">
            {project.projectTitle}
          </h1>

          <div className="flex flex-wrap gap-3">
            <span className="bg-white/10 border border-white/20 text-white text-xs px-3 py-1.5 font-semibold flex items-center gap-2">
              <Tag className="h-3.5 w-3.5 text-[#C8A14A]" />
              {project.category}
            </span>
            <span className={`text-xs px-3 py-1.5 font-semibold ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: description + gallery */}
            <div className="lg:col-span-2">
              <h2 className="text-xs font-bold text-[#C8A14A] uppercase tracking-wider mb-3">
                Project Overview
              </h2>
              <p className="text-[#374151] leading-relaxed whitespace-pre-line">
                {project.projectDescription}
              </p>

              {project.projectImages && project.projectImages.length > 0 && (
                <div className="mt-12">
                  <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-4">
                    Project Gallery
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.projectImages.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${project.projectTitle} ${index + 1}`}
                        className="w-full h-32 sm:h-36 object-cover border border-gray-200 hover:opacity-90 transition-opacity"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: sticky details sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 border border-gray-200">
                <div className="bg-[#0B2E59] px-6 py-4">
                  <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                    Project Details
                  </h3>
                </div>

                <div className="divide-y divide-gray-100">
                  <div className="flex items-center gap-3 px-6 py-4 bg-[#1B4D8C]">
                    <MapPin className="h-4 w-4 text-[#C8A14A] shrink-0" />
                    <div>
                      <div className="text-[11px] text-gray-300 uppercase tracking-wider">Location</div>
                      <div className="text-sm font-semibold text-white">{project.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-6 py-4 bg-[#1B4D8C]">
                    <Building2 className="h-4 w-4 text-[#C8A14A] shrink-0" />
                    <div>
                      <div className="text-[11px] text-gray-300 uppercase tracking-wider">Client</div>
                      <div className="text-sm font-semibold text-white">{project.clientName}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-6 py-4 bg-[#1B4D8C]">
                    <IndianRupee className="h-4 w-4 text-[#C8A14A] shrink-0" />
                    <div>
                      <div className="text-[11px] text-gray-300 uppercase tracking-wider">Project Value</div>
                      <div className="text-sm font-semibold text-white">{project.projectValue}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-6 py-4 bg-[#1B4D8C]">
                    <CircleCheck className="h-4 w-4 text-[#C8A14A] shrink-0" />
                    <div>
                      <div className="text-[11px] text-gray-300 uppercase tracking-wider">Status</div>
                      <div className="text-sm font-semibold text-white">{project.status}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F8FAFC] p-6 text-center border-t border-gray-200">
                  <p className="text-sm text-[#374151] mb-4">Interested in a similar project?</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#DC2910] text-white px-4 py-3 text-sm font-semibold hover:bg-[#b8923f] transition-colors"
                  >
                    Contact Us
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}