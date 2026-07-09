import { SectionHeader } from '@/components/SectionHeader';
import { FadeIn } from '@/components/animations';
import { ContactPageForm } from '@/components/ContactPageForm';
import { offices, companyInfo } from '@/lib/data';
import { Phone, Mail, MapPin, Clock, FileCheck } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Bharat Engineering & Infrastructure Limited',
  description: 'Contact Bharat Engineering & Infrastructure Limited. Corporate office in Gurugram with regional offices across India.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Page Banner */}
      <section className="relative py-24 bg-[#0B2E59]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=500&fit=crop"
            alt="Contact banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#C8A14A]" />
            <span className="text-[#C8A14A] text-sm font-semibold uppercase tracking-wider">Reach Out</span>
          </div>
          <h1 className="text-4xl md:text-5xl  text-white  mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Get in touch with our team for project inquiries, partnerships, or career opportunities.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Get In Touch" subtitle="Contact Information" />
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <FadeIn>
              <div className="bg-[#F8FAFC] border border-gray-200 p-8 text-center hover:border-[#C8A14A] transition-colors">
                <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-7 w-7" />
                </div>
                <h3 className="text-lg  text-[#111827]  mb-2">Phone</h3>
                <p className="text-[#374151] text-sm mb-1">{companyInfo.phone}</p>
                <p className="text-gray-400 text-xs">Mon - Sat, 9 AM - 6 PM IST</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-[#F8FAFC] border border-gray-200 p-8 text-center hover:border-[#C8A14A] transition-colors">
                <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-7 w-7" />
                </div>
                <h3 className="text-lg  text-[#111827]  mb-2">Email</h3>
                <p className="text-[#374151] text-sm mb-1">{companyInfo.email}</p>
                <p className="text-gray-400 text-xs">We respond within 24 hours</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-[#F8FAFC] border border-gray-200 p-8 text-center hover:border-[#C8A14A] transition-colors">
                <div className="w-16 h-16 bg-[#0B2E59] text-white flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-7 w-7" />
                </div>
                <h3 className="text-lg  text-[#111827]  mb-2">Address</h3>
                <p className="text-[#374151] text-sm">{companyInfo.address}</p>
              </div>
            </FadeIn>
          </div>

          {/* Office Locations */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-10 bg-[#C8A14A]" />
              <span className="text-[#1B4D8C] text-sm font-semibold uppercase tracking-wider">Our Offices</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offices.map((office, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-[#F8FAFC] border border-gray-200 p-6 hover:border-[#C8A14A] transition-colors h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#0B2E59] text-white flex items-center justify-center">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <h3 className=" text-[#111827] ">{office.city}</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2 text-[#374151]">
                        <MapPin className="h-4 w-4 text-[#C8A14A] mt-0.5 shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#374151]">
                        <Phone className="h-4 w-4 text-[#C8A14A] shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#374151]">
                        <Mail className="h-4 w-4 text-[#C8A14A] shrink-0" />
                        <span className="truncate">{office.email}</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Department Contacts */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-10 bg-[#C8A14A]" />
              <span className="text-[#1B4D8C] text-sm font-semibold uppercase tracking-wider">Department Contacts</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { dept: 'Business Development', email: 'info@secpl.org', phone: '+91 98992 46485' },
                { dept: 'Projects & Operations', email: 'info@secpl.org', phone: '+91 98992 46485' },
                { dept: 'Human Resources', email: 'info@secpl.org', phone: '+91 98992 46485' },
                { dept: 'Finance & Accounts', email: 'info@secpl.org', phone: '+91 98992 46485' },
                { dept: 'Procurement', email: 'info@secpl.org', phone: '+91 98992 46485' },
                { dept: 'Quality Assurance', email: 'info@secpl.org', phone: '+91 98992 46485' },
              ].map((contact, index) => (
                <FadeIn key={index} delay={index * 0.05}>
                  <div className="bg-white border border-gray-200 p-5 flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0B2E59] text-white flex items-center justify-center shrink-0">
                      <FileCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#111827] text-sm mb-1">{contact.dept}</h4>
                      <p className="text-[#374151] text-xs">{contact.email}</p> 
                      <p className="text-[#374151] text-xs">{contact.phone}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Contact Form + Map */}
          {/* <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-[#F8FAFC] border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-[#111827]  mb-6">Send Us a Message</h3>
                <ContactPageForm />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-[#F8FAFC] border border-gray-200 h-full min-h-[400px]">
                <div className="h-full flex items-center justify-center bg-[#0B2E59]/5">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-[#0B2E59] mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-[#111827]  mb-2">Corporate Office</h4>
                    <p className="text-[#374151] text-sm mb-2">{companyInfo.address}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-[#374151] mb-1">
                      <Phone className="h-4 w-4 text-[#C8A14A]" />
                      <span>{companyInfo.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-[#374151] mb-4">
                      <Mail className="h-4 w-4 text-[#C8A14A]" />
                      <span>{companyInfo.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>Mon - Sat: 9:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="mt-6 w-full h-48 bg-[#0B2E59] flex items-center justify-center">
                      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.283322631782!2d77.20594477495301!3d28.531202588675992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce21d7bde0d63%3A0x731189080297cb78!2sSikka%20Engineering%20Company%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1783413966226!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
/>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div> */}
          <div className="grid lg:grid-cols-2 gap-8">
  <FadeIn>
    <div className="bg-[#F8FAFC] border border-gray-200 p-8">
      <h3 className="text-xl font-bold text-[#111827] mb-6">Send Us a Message</h3>
      <ContactPageForm />
    </div>
  </FadeIn>

  <FadeIn delay={0.2}>
    <div className="bg-[#F8FAFC] border border-gray-200 h-full min-h-[400px] flex flex-col">
      <div className="flex-1 flex items-center justify-center bg-[#0B2E59]/5 p-8">
        <div className="text-center w-full">
          <MapPin className="h-12 w-12 text-[#0B2E59] mx-auto mb-4" />
          <h4 className="text-lg font-bold text-[#111827] mb-2">Corporate Office</h4>
          <p className="text-[#374151] text-sm mb-2">{companyInfo.address}</p>
          <div className="flex items-center justify-center gap-2 text-sm text-[#374151] mb-1">
            <Phone className="h-4 w-4 text-[#C8A14A]" />
            <span>{companyInfo.phone}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-[#374151] mb-4">
            <Mail className="h-4 w-4 text-[#C8A14A]" />
            <span>{companyInfo.email}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Clock className="h-4 w-4" />
            <span>Mon - Sat: 9:00 AM - 6:00 PM IST</span>
          </div>
        </div>
      </div>

      {/* Map — separate block, not nested inside text-center */}
      <div className="w-full h-56 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.283322631782!2d77.20594477495301!3d28.531202588675992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce21d7bde0d63%3A0x731189080297cb78!2sSikka%20Engineering%20Company%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1783413966226!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  </FadeIn>
</div>
        </div>
      </section>
    </div>
  );
}
