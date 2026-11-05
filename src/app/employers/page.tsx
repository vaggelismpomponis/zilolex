"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { EmployersSection } from "@/components/EmployersSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";

export default function EmployersPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 w-full antialiased">
      <Navbar />

      <main className="flex-1 w-full">
        <PageBanner
          tag={t.employers.tag}
          title={
            language === "el" ? (
              <>
                <span>Αξιόπιστο Προσωπικό </span>
                <span className="text-emerald-600">για την Επιχείρησή σας</span>
              </>
            ) : (
              <>
                <span>Reliable Staffing </span>
                <span className="text-emerald-600">for Your Business</span>
              </>
            )
          }
          subtitle={t.employers.subhead}
          imageSrc="/images/audience-employer.jpg"
          imageAlt="Employers in Greece"
          objectPosition="object-[65%_25%] sm:object-[60%_30%] lg:object-right"
          primaryCta={{
            href: "/contact",
            text: t.employers.cta,
          }}
          secondaryCta={{
            href: "/services",
            text: t.nav.services,
          }}
        />

        {/* Employers Core Info */}
        <EmployersSection />

        {/* End to End Process */}
        <ProcessSection />

        {/* Form */}
        <ContactFormSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
