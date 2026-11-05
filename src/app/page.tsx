import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AudienceCards } from "@/components/AudienceCards";
import { SectorsSection } from "@/components/SectorsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ComplianceSection } from "@/components/ComplianceSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 w-full antialiased">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero with background imagery and 4 pillars */}
        <Hero />

        {/* 4 Audience Cards with real photography */}
        <AudienceCards />

        {/* Industry Sectors */}
        <SectorsSection />

        {/* How It Works & Process */}
        <ProcessSection />

        {/* Statutory Compliance */}
        <ComplianceSection />

        {/* FAQs */}
        <FaqSection />

        {/* Direct Contact Form */}
        <ContactFormSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
