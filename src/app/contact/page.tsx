"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { ContactFormSection } from "@/components/ContactFormSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 w-full antialiased">
      <Navbar />

      <main className="flex-1 w-full pt-28 sm:pt-36 lg:pt-40">
        {/* Banner */}
        <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
                {t.contact.tag}
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                {t.contact.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Form and Contact Info */}
        <ContactFormSection />

        {/* FAQs */}
        <FaqSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

