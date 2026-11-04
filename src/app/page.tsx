import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EmployersSection } from "@/components/EmployersSection";
import { SectorsSection } from "@/components/SectorsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ComplianceSection } from "@/components/ComplianceSection";
import { PartnershipsSection } from "@/components/PartnershipsSection";
import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { CandidateSection } from "@/components/CandidateSection";
import { GuidesSection } from "@/components/GuidesSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 w-full antialiased">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <EmployersSection />
        <SectorsSection />
        <ServicesSection />
        <ProcessSection />
        <ComplianceSection />
        <PartnershipsSection />
        <AboutSection />
        <FaqSection />
        <CandidateSection />
        <GuidesSection />
        <ContactFormSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
