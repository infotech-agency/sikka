import { FadeIn } from '@/components/animations';
import { ContactForm } from '@/components/ContactForm';

export function ContactCTASection() {
  return (
    <section className="py-20 bg-[#0B2E59]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-10 bg-[#EA4922]" />
              <span className="text-[#EA4922] text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl  text-white  mb-4 leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Whether you are a government department looking for a reliable EPC contractor or a private enterprise seeking engineering excellence, we are here to partner with you. Contact us for a consultation.
            </p>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EA4922] text-[#0B2E59] flex items-center justify-center font-bold">01</div>
                <span>Submit your project inquiry</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EA4922] text-[#0B2E59] flex items-center justify-center font-bold">02</div>
                <span>Our team evaluates your requirements</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EA4922] text-[#0B2E59] flex items-center justify-center font-bold">03</div>
                <span>Receive a detailed proposal and timeline</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-8">
              <h3 className="text-xl  text-[#111827]  mb-6">
                Quick Inquiry
              </h3>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
