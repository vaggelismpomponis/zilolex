"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { PartnershipsSection } from "@/components/PartnershipsSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function PartnershipsPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 w-full antialiased">
      <Navbar />

      <main className="flex-1 w-full">
        <PageBanner
          tag={t.partnerships.tag}
          title={
            language === "el" ? (
              <>
                <span>Στρατηγικές Συνεργασίες </span>
                <span className="text-emerald-600">&amp; Διεθνή Δίκτυα</span>
              </>
            ) : (
              <>
                <span>Strategic Partnerships </span>
                <span className="text-emerald-600">&amp; Global Networks</span>
              </>
            )
          }
          subtitle={t.partnerships.subtitle}
          imageSrc="/images/audience-agency.jpg"
          imageAlt="Partnerships in Greece"
          objectPosition="object-[65%_25%] sm:object-[60%_30%] lg:object-right"
          primaryCta={{
            href: "/contact",
            text: language === "el" ? "Ξεκινήστε Συνεργασία" : "Start a Partnership",
          }}
          secondaryCta={{
            href: "/services",
            text: t.nav.services,
          }}
        />

        {/* Visual Partner Pillars */}
        <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Agency card */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-1/2 aspect-[16/10] sm:aspect-auto min-h-[220px]">
                  <Image
                    src="/images/audience-agency.jpg"
                    alt="Recruitment Agencies"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1">
                      {language === "el" ? "Για Recruitment Agencies" : "For Recruitment Agencies"}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {language === "el" ? "Τοπικός Συνεργάτης στην Ελλάδα" : "Your Local Partner in Greece"}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {language === "el"
                        ? "Αναλαμβάνουμε τον συντονισμό υποδοχής, τις διαδικασίες μετάκλησης και την οργανωμένη στέγαση των υποψηφίων σας."
                        : "We handle ground reception, statutory relocation coordination, and managed housing for your candidates."}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-4 text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1.5"
                  >
                    <span>{language === "el" ? "Συνεργαστείτε μαζί μας" : "Partner with us"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Institution card */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-1/2 aspect-[16/10] sm:aspect-auto min-h-[220px]">
                  <Image
                    src="/images/audience-institution.jpg"
                    alt="Educational Institutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1">
                      {language === "el" ? "Για Εκπαιδευτικά Ιδρύματα" : "For Educational Institutions"}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {language === "el" ? "Υποδομή Διεθνών Φοιτητών" : "International Student Infrastructure"}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {language === "el"
                        ? "Στηρίζουμε πανεπιστήμια και κολέγια στην προσέλκυση, μετεγκατάσταση και στέγαση ξένων φοιτητών."
                        : "Supporting universities in attracting, relocating, and accommodating international students."}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-4 text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1.5"
                  >
                    <span>{language === "el" ? "Συνεργαστείτε μαζί μας" : "Partner with us"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Partnerships Content */}
        <PartnershipsSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
