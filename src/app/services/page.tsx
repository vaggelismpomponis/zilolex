"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { SectorsSection } from "@/components/SectorsSection";
import { ComplianceSection } from "@/components/ComplianceSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 w-full antialiased">
      <Navbar />

      <main className="flex-1 w-full pt-28 sm:pt-36 lg:pt-40">
        {/* Page Banner */}
        <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
                {t.nav.services}
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                {t.services.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                {t.services.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  <span>{t.nav.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/employers"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-all shadow-2xs"
                >
                  <span>{t.nav.employers}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

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
