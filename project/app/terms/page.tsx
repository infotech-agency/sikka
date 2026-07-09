import { Scale, FileSpreadsheet, AlertTriangle, ShieldAlert, Gavel, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | Bharat Engineering & Infrastructure Limited',
  description: 'Terms and Conditions for using the official website and digital services of Bharat Engineering & Infrastructure Limited.',
};

export default function TermsPage() {
  const lastUpdated = "June 20, 2026";

  const terms = [
    {
      icon: <Scale className="h-6 w-6 text-[#EA4922]" />,
      title: '1. Acceptance of Terms',
      desc: 'By accessing and browsing this website, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms & Conditions and our Privacy Policy without any limitation.'
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6 text-[#EA4922]" />,
      title: '2. Intellectual Property Rights',
      desc: 'All content present on this site, including corporate logos, text descriptions, engineering project blueprints, imagery, and structural data, is the exclusive property of Bharat E&IL and protected by copyright laws.'
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-[#EA4922]" />,
      title: '3. Use of Website & Restrictions',
      desc: 'Users are strictly prohibited from utilizing this platform for transmitting malware, performing automated data scraping, or altering any digital framework. Unauthorized usage may invite legal prosecution.'
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-[#EA4922]" />,
      title: '4. Limitation of Liability',
      desc: 'While we strive to publish accurate project statistics, Bharat E&IL is not liable for any computational discrepancies, technical site downtimes, or financial losses resulting from reliance on the published digital data.'
    },
    {
      icon: <Gavel className="h-6 w-6 text-[#EA4922]" />,
      title: '5. Governing Law & Jurisdiction',
      desc: 'These administrative rules and terms are structured and governed in accordance with the sovereign laws of India. Any official dispute or legal arbitration shall be filed strictly within local corporate courts.'
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-[#EA4922]" />,
      title: '6. Modifications to Agreements',
      desc: 'We reserve the absolute authority to modify or substitute these conditions at any time. Your continued interaction with our web interfaces post updates implies mandatory consent to revised clauses.'
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Page Banner */}
      <section className="relative py-24 bg-[#0B2E59]">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1920&h=500&fit=crop"
            alt="Terms and Conditions Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="h-px w-8 bg-[#EA4922]" />
            <span className="text-[#EA4922] text-sm font-semibold uppercase tracking-wider">User Agreement</span>
            <div className="h-px w-8 bg-[#EA4922]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-[Merriweather] mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base">
            Please read these legal conditions carefully before interacting with our portal, tracking projects, or submitting online profiles.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-white border border-gray-200 shadow-sm p-6 md:p-12">
          
          {/* Header Info Block */}
          <div className="border-b border-gray-200 pb-6 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-[#0B2E59] font-[Merriweather]">
                Operating Rules & Framework
              </h2>
              <p className="text-xs text-gray-400 mt-1">Digital Asset Usage License</p>
            </div>
            <div className="bg-[#0B2E59]/5 px-4 py-2 border-l-2 border-[#EA4922]">
              <span className="text-xs text-[#374151] block font-medium">Last Revised:</span>
              <span className="text-sm font-semibold text-[#0B2E59]">{lastUpdated}</span>
            </div>
          </div>

          {/* Terms Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {terms.map((term, idx) => (
              <div 
                key={idx} 
                className="p-6 border border-gray-100 bg-[#F8FAFC] hover:border-[#EA4922] transition-colors duration-300 flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-[#0B2E59] text-white flex items-center justify-center">
                    {term.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#111827] font-[Merriweather] mb-2">
                    {term.title}
                  </h3>
                  <p className="text-[#374151] text-xs md:text-sm leading-relaxed">
                    {term.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact / Disclaimer Box */}
          <div className="bg-[#0B2E59] text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <h4 className="text-lg font-bold font-[Merriweather] text-[#EA4922] mb-1">
                Need more operational clarity?
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                If you seek special commercial permission to replicate content, cite our corporate data, or report functional violations, connect with our administration panel.
              </p>
            </div>
            <a 
              href="/contact" 
              className="bg-[#EA4922] text-[#0B2E59] px-6 py-3 text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-[#b8923f] transition-colors whitespace-nowrap"
            >
              Contact Administration
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}