"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PartnershipsSection } from "@/components/PartnershipsSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function PartnershipsPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 w-full antialiased">
      <Navbar />

      <main className="flex-1 w-full pt-28 sm:pt-36 lg:pt-40">
        {/* Banner */}
        <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
                {t.partnerships.tag}
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                {t.partnerships.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                {t.partnerships.subtitle}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
              >
                <span>{language === "el" ? "Ξεκινήστε Συνεργασία" : "Start a Partnership"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Visual Partner Pillars */}
        <section className="py-14 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Agency card */}
              <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-1/2 aspect-[4/3] sm:aspect-auto">
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
                    className="mt-4 text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
                  >
                    <span>{language === "el" ? "Μάθετε περισσότερα" : "Learn more"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Institution card */}
              <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-1/2 aspect-[4/3] sm:aspect-auto">
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
                    className="mt-4 text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
                  >
                    <span>{language === "el" ? "Μάθετε περισσότερα" : "Learn more"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Partnerships Content */}
        <PartnershipsSection />

        {/* Form */}
        <ContactFormSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
