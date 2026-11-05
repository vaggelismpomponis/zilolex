"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { ServicesSection } from "@/components/ServicesSection";
import { SectorsSection } from "@/components/SectorsSection";
import { ComplianceSection } from "@/components/ComplianceSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 w-full antialiased">
      <Navbar />

      <main className="flex-1 w-full">
        <PageBanner
          tag={t.nav.services}
          title={
            language === "el" ? (
              <>
                <span>Υπηρεσίες Υποδομής </span>
                <span className="text-emerald-600">&amp; Μετεγκατάστασης</span>
              </>
            ) : (
              <>
                <span>Workforce &amp; </span>
                <span className="text-emerald-600">Mobility Services</span>
              </>
            )
          }
          subtitle={t.services.subtitle}
          imageSrc="/images/hero-athens.jpg"
          imageAlt="Zilolex Services in Greece"
          objectPosition="object-[78%_22%] sm:object-[75%_28%] lg:object-right"
          primaryCta={{
            href: "/contact",
            text: t.nav.cta,
          }}
          secondaryCta={{
            href: "/employers",
            text: t.nav.employers,
          }}
        />

        {/* Core Services */}
        <ServicesSection />

        {/* Sectors Served */}
        <SectorsSection />

        {/* Statutory Compliance */}
        <ComplianceSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
