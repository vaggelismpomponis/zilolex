"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { EmployersSection } from "@/components/EmployersSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function EmployersPage() {
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
                {t.employers.tag}
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                {t.employers.headline}
              </h1>
              <p className="text-base sm:text-lg text-emerald-800 font-semibold mb-3">
                {t.employers.subhead}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {t.employers.lead}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
              >
                <span>{t.employers.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

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

