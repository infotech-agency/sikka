import { Shield, Lock, Eye, FileText, Globe, Bell } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Sikka Engineering & Infrastructure Limited',
  description: 'Privacy Policy for Sikka Engineering & Infrastructure Limited. Learn how we collect, use, and protect your personal data.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 20, 2026";

  const policies = [
    {
      icon: <Eye className="h-6 w-6 text-[#EA4922]" />,
      title: 'Information We Collect',
      desc: 'We collect information you provide directly to us when filling out contact forms, job applications, or requesting project details. This includes your name, email address, phone number, and any documents (like resumes) you upload.'
    },
    {
      icon: <Globe className="h-6 w-6 text-[#EA4922]" />,
      title: 'How We Use Your Information',
      desc: 'The data collected is utilized solely to respond to your inquiries, process job evaluations for potential employment, improve our website functionality, and share updates regarding our infrastructure and engineering projects.'
    },
    {
      icon: <Lock className="h-6 w-6 text-[#EA4922]" />,
      title: 'Data Security & Protection',
      desc: 'We implement industry-standard administrative, technical, and physical security parameters to safeguard your personal data against unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      icon: <FileText className="h-6 w-6 text-[#EA4922]" />,
      title: 'Third-Party Sharing',
      desc: 'Sikka Engineering & Infrastructure Limited does not sell, trade, or rent your personal information to third parties. Data is only shared when legally obligated or required for government compliance.'
    },
    {
      icon: <Shield className="h-6 w-6 text-[#EA4922]" />,
      title: 'Your Privacy Rights',
      desc: 'You hold the absolute right to request access to the personal data we store, ask for corrections, or request complete deletion of your files from our active servers at any time by contacting our support team.'
    },
    {
      icon: <Bell className="h-6 w-6 text-[#EA4922]" />,
      title: 'Changes to This Policy',
      desc: 'We reserve the right to modify this privacy statement. Any amendments will be instantly published on this page along with an updated revision date at the top.'
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Page Banner */}
      <section className="relative py-24 bg-[#0B2E59]">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=500&fit=crop"
            alt="Privacy Policy Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="h-px w-8 bg-[#EA4922]" />
            <span className="text-[#EA4922] text-sm font-semibold uppercase tracking-wider">Legal Document</span>
            <div className="h-px w-8 bg-[#EA4922]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-[Merriweather] mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base">
            Your trust is vital to us. This policy defines how Sikka E&IL safely processes, stores, and protects your corporate and personal data.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-white border border-gray-200 shadow-sm p-6 md:p-12">
          
          {/* Intro block */}
          <div className="border-b border-gray-200 pb-6 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-[#0B2E59] font-[Merriweather]">
                Sikka Engineering & Infrastructure Limited
              </h2>
              <p className="text-xs text-gray-400 mt-1">Official Privacy Guidelines</p>
            </div>
            <div className="bg-[#0B2E59]/5 px-4 py-2 border-l-2 border-[#EA4922]">
              <span className="text-xs text-[#374151] block font-medium">Last Updated:</span>
              <span className="text-sm font-semibold text-[#0B2E59]">{lastUpdated}</span>
            </div>
          </div>

          {/* Grid Layout for Privacy Rules */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {policies.map((policy, idx) => (
              <div 
                key={idx} 
                className="p-6 border border-gray-100 bg-[#F8FAFC] hover:border-[#EA4922] transition-colors duration-300 flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-[#0B2E59] text-white flex items-center justify-center">
                    {policy.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#111827] font-[Merriweather] mb-2">
                    {policy.title}
                  </h3>
                  <p className="text-[#374151] text-xs md:text-sm leading-relaxed">
                    {policy.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Notice Box */}
          <div className="bg-[#0B2E59] text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <h4 className="text-lg font-bold font-[Merriweather] text-[#EA4922] mb-1">
                Have questions about your data?
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                If you have any doubts, requests regarding personal information deletion, or legal queries, please contact our compliance desk directly.
              </p>
            </div>
            <a 
              href="/contact" 
              className="bg-[#EA4922] text-white px-6 py-3 text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-[#b8923f] transition-colors whitespace-nowrap"
            >
              Contact Legal Desk
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}