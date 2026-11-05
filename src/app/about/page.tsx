"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { AboutSection } from "@/components/AboutSection";
import { ComplianceSection } from "@/components/ComplianceSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 w-full antialiased">
      <Navbar />

      <main className="flex-1 w-full">
        <PageBanner
          tag={t.about.tag}
          title={
            language === "el" ? (
              <>
                <span>Σχετικά με τη </span>
                <span className="text-emerald-600">Zilolex</span>
              </>
            ) : (
              <>
                <span>About </span>
                <span className="text-emerald-600">Zilolex</span>
              </>
            )
          }
          subtitle={t.about.lead}
          imageSrc="/images/hero-athens.jpg"
          imageAlt="About Zilolex Greece"
          objectPosition="object-[78%_22%] sm:object-[75%_28%] lg:object-right"
          primaryCta={{
            href: "/contact",
            text: t.nav.cta,
          }}
          secondaryCta={{
            href: "/services",
            text: t.nav.services,
          }}
        />

        {/* About Section details */}
        <AboutSection />

        {/* Compliance */}
        <ComplianceSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
