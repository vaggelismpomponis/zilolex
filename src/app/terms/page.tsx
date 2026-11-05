"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";
import { legalContent } from "@/lib/legalContent";
import { FileText, Shield, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function TermsPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"terms" | "privacy">("terms");

  const currentDoc = legalContent[language][activeTab];

  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 w-full antialiased">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-emerald-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === "el" ? "Επιστροφή στην Αρχική" : "Back to Home"}</span>
            </Link>
          </div>

          {/* Document Header Card */}
          <div className="p-6 sm:p-8 rounded-lg bg-white border border-slate-200 shadow-2xs mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 shadow-2xs">
                  {activeTab === "terms" ? (
                    <FileText className="w-6 h-6" />
                  ) : (
                    <Shield className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-700">
                      {currentDoc.badge}
                    </span>
                    <span className="text-xs text-slate-500">
                      {language === "el" ? "Ενημέρωση:" : "Updated:"} {currentDoc.lastUpdated}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {currentDoc.title}
                  </h1>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              {currentDoc.subtitle}
            </p>

            {/* Switch tabs */}
            <div className="mt-6 flex items-center gap-2 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setActiveTab("terms")}
                className={`px-4 py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                  activeTab === "terms"
                    ? "bg-emerald-700 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {language === "el" ? "Όροι Χρήσης" : "Terms of Use"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("privacy")}
                className={`px-4 py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                  activeTab === "privacy"
                    ? "bg-emerald-700 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {language === "el" ? "Πολιτική Απορρήτου" : "Privacy Policy"}
              </button>
            </div>
          </div>

          {/* Articles list */}
          <div className="space-y-4">
            {currentDoc.articles.map((article) => (
              <article
                key={article.id}
                className="p-6 sm:p-7 rounded-lg bg-white border border-slate-200 shadow-2xs transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-sm">
                    {article.number}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {article.title}
                  </h2>
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {article.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Footer certification badge */}
          <div className="mt-8 p-4 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-xs text-emerald-900">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              {language === "el"
                ? "Πλήρης συμμόρφωση με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR) και την ελληνική νομοθεσία (Ν. 4624/2019)."
                : "Full compliance with the General Data Protection Regulation (GDPR) and Hellenic Law 4624/2019."}
            </span>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
