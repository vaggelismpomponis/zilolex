import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { AboutSection } from "@/components/AboutSection";
import { SectorsSection } from "@/components/SectorsSection";
import { CountriesSection } from "@/components/CountriesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden w-full">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <AboutSection />
        <SectorsSection />
        <CountriesSection />
        <ProcessSection />
        <WhyUsSection />
        <FaqSection />
        <ContactFormSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
