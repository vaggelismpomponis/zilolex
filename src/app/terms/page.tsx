"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { legalContent } from "@/lib/legalContent";
import { FileText, Shield, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function TermsPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"terms" | "privacy">("terms");

  const currentDoc = legalContent[language][activeTab];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-20 bg-slate-50/50 dark:bg-slate-950/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === "el" ? "Επιστροφή στην Αρχική" : "Back to Home"}</span>
            </Link>
          </div>

          {/* Document Header Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm">
                  {activeTab === "terms" ? (
                    <FileText className="w-7 h-7" />
                  ) : (
                    <Shield className="w-7 h-7" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                      {currentDoc.badge}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {language === "el" ? "Ενημέρωση:" : "Updated:"} {currentDoc.lastUpdated}
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {currentDoc.title}
                  </h1>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {currentDoc.subtitle}
            </p>

            {/* Switch tabs */}
            <div className="mt-8 flex items-center gap-2 pt-6 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab("terms")}
                className={`px-5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeTab === "terms"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {language === "el" ? "Όροι Χρήσης" : "Terms of Use"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("privacy")}
                className={`px-5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeTab === "privacy"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {language === "el" ? "Πολιτική Απορρήτου" : "Privacy Policy"}
              </button>
            </div>
          </div>

          {/* Articles list */}
          <div className="space-y-6">
            {currentDoc.articles.map((article) => (
              <article
                key={article.id}
                className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm transition-all"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 px-2.5 py-1 rounded-lg">
                    {article.number}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {article.title}
                  </h2>
                </div>
                <div className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {article.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs sm:text-sm text-slate-300">
                {language === "el"
                  ? "Έχετε ερωτήσεις σχετικά με το νομικό πλαίσιο του Ν. 5038/2023;"
                  : "Have legal questions regarding Greek workforce migration Law 5038/2023?"}
              </div>
            </div>
            <Link
              href="/#contact"
              className="shrink-0 px-5 py-2.5 rounded-lg bg-[var(--color-emerald-400)] hover:bg-emerald-300 text-slate-950 font-bold text-xs shadow-md shadow-emerald-400/25 active:scale-95 transition-all cursor-pointer"
            >
              {language === "el" ? "Επικοινωνία" : "Contact Us"}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
