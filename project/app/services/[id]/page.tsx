import Link from 'next/link';
import { BASE_URL } from '@/utils/baseUrl';
import { Compass, Building2, ClipboardList, Factory, Zap, Landmark, CheckCircle, ArrowLeft, ChevronRight } from 'lucide-react';

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

async function getServices(): Promise<Service[]> {
  try {
    const res = await fetch(`${BASE_URL}/services`, {
      cache: 'no-store',
    });

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

export async function generateMetadata({ params }: { params: { id: string } }) {
  const services = await getServices();
  const service = services.find((s) => s.id === params.id || s._id === params.id);

  return {
    title: service
      ? `${service.title} | Bharat Engineering & Infrastructure Limited`
      : 'Service | Bharat Engineering & Infrastructure Limited',
    description: service?.description || 'Engineering and infrastructure service details.',
  };
}

export default async function ServiceDetailsPage({ params }: { params: { id: string } }) {
  const services = await getServices();
  const index = services.findIndex((s) => s.id === params.id || s._id === params.id);
  const service = index !== -1 ? services[index] : null;

  // Not found state
  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="text-center max-w-md px-4">
          <p className="text-red-600 mb-4">Service not found</p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-2 bg-[#0B2E59] text-white font-semibold hover:bg-[#1B4D8C] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconList[index % iconList.length];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#0B2E59]">
        <div className="absolute inset-0 opacity-20">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-[#C8A14A] transition-colors mb-6 text-sm font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#C8A14A]" />
            <span className="text-[#C8A14A] text-sm font-semibold uppercase tracking-wider">Service Detail</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
            {service.title}
          </h1>
          {/* <p className="text-gray-300 max-w-2xl">
            {service.description}
          </p> */}
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[400px] object-cover"
            />
            <div>
              <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mb-6">
                <Icon className="h-10 w-10" />
              </div>
              <h2 className="text-2xl text-[#111827] mb-4">Overview</h2>
              <p className="text-[#374151] leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>

          <div className="bg-[#F8FAFC] border border-gray-200 p-8 md:p-12">
            <h3 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-6">
              Key Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...new Set(service.keyCapabilities)].map((cap, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-gray-200 p-4">
                  <CheckCircle className="h-5 w-5 text-[#C8A14A] shrink-0" />
                  <span className="text-sm font-semibold text-[#111827]">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#0B2E59] text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-1">Need this service for your project?</h4>
              <p className="text-gray-300 text-sm">Talk to our team and get a tailored solution.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#DD2D14] text-white px-6 py-3 text-sm font-semibold hover:bg-[#b8923f] transition-colors whitespace-nowrap"
            >
              Contact Us
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}