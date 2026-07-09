import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { StatsSection } from '@/components/home/StatsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { ClientsSection } from '@/components/home/ClientsSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { CertificationsSection } from '@/components/home/CertificationsSection';
import { CareersPreviewSection } from '@/components/home/CareersPreviewSection';
import { ContactCTASection } from '@/components/home/ContactCTASection';
import { FloatingSocialBar } from '@/components/FloatingSocialBar';
import { NavigationCardsSection } from '@/components/NavigationCardsSection';
import BusinessSpheres from '@/components/home/BusinessSpheres';
import LifeAtLT from '@/components/home/LifeAtLT';
import MetroTrain from './animated/MetroTrain';
import ConstructionBg from '@/components/ConstructionBg';
import IndiaMapSection from '@/components/home/IndiaMapSection';
import IndiaMapDelhiPopup from '@/components/IndianMapDelhiPopup';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      {/* <IndiaMapSection/> */}
 
      <ServicesSection />
        <ClientsSection />
               <IndiaMapDelhiPopup/>
      <ProjectsSection />
      <MetroTrain/>
      <IndustriesSection />
      {/* <BusinessSpheres/> */}
    
      <WhyChooseUsSection />
     
      <NavigationCardsSection/>
      {/* <LifeAtLT/> */}
      <ConstructionBg/>
      <CareersPreviewSection />
  
      <ContactCTASection />
      {/* <FloatingSocialBar/> */}
    </>
  );
}
