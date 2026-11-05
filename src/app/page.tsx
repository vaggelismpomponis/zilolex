import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AudienceCards } from "@/components/AudienceCards";
import { SectorsSection } from "@/components/SectorsSection";
import { HomeCtaSection } from "@/components/HomeCtaSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 w-full antialiased">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero with Athens panorama and 4 infrastructure pillars */}
        <Hero />

        {/* 4 Dedicated Audience Pathways */}
        <AudienceCards />

        {/* Industry Sectors Overview */}
        <SectorsSection />

        {/* Executive Action Banner */}
        <HomeCtaSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
