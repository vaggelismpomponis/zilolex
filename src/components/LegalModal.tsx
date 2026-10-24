"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { legalContent } from "@/lib/legalContent";
import { FileText, Shield, X, CheckCircle2 } from "lucide-react";

export function LegalModal() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"terms" | "privacy">("terms");

  useEffect(() => {
    const handleOpenTerms = () => {
      setActiveTab("terms");
      setIsOpen(true);
    };

    const handleOpenPrivacy = () => {
      setActiveTab("privacy");
      setIsOpen(true);
    };

    window.addEventListener("zilolex_open_terms_modal", handleOpenTerms);
    window.addEventListener("zilolex_open_privacy_modal", handleOpenPrivacy);

    return () => {
      window.removeEventListener("zilolex_open_terms_modal", handleOpenTerms);
      window.removeEventListener("zilolex_open_privacy_modal", handleOpenPrivacy);
    };
  }, []);

  // Keyboard navigation (ESC key to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentDoc = legalContent[language][activeTab];

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-4 sm:p-6 border-b border-slate-150 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40">
          {/* Close button absolutely positioned on mobile & desktop */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer z-10"
            aria-label={language === "el" ? "Κλείσιμο" : "Close"}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Row with Icon */}
          <div className="flex items-center gap-3 pr-10 sm:pr-12 mb-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 shadow-xs">
              {activeTab === "terms" ? (
                <FileText className="w-5 h-5" />
              ) : (
                <Shield className="w-5 h-5" />
              )}
            </div>

            <div className="min-w-0">
              <h2
                id="legal-modal-title"
                className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug"
              >
                {currentDoc.title}
              </h2>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 shrink-0 whitespace-nowrap">
                  {currentDoc.badge}
                </span>
                <span className="text-[11px] text-slate-400 dark:text-slate-500 whitespace-nowrap">
                  {language === "el" ? "Ενημέρωση:" : "Updated:"} {currentDoc.lastUpdated}
                </span>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 pr-2">
            {currentDoc.subtitle}
          </p>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 border-t border-slate-200/80 dark:border-slate-800 pt-3">
            <button
              type="button"
              onClick={() => setActiveTab("terms")}
              className={`flex-1 sm:flex-initial text-center px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === "terms"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800"
              }`}
            >
              {language === "el" ? "Όροι Χρήσης" : "Terms of Use"}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("privacy")}
              className={`flex-1 sm:flex-initial text-center px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === "privacy"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800"
              }`}
            >
              {language === "el" ? "Πολιτική Απορρήτου" : "Privacy Policy"}
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 dark:text-slate-300">
          {currentDoc.articles.map((article) => (
            <article
              key={article.id}
              className="p-5 rounded-xl border border-slate-150 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 px-2 py-0.5 rounded-md">
                  {article.number}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  {article.title}
                </h3>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {article.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-150 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>
              {language === "el"
                ? "Πλήρης νομική ισχύς σύμφωνα με το ελληνικό δίκαιο"
                : "Legally compliant under Greek & EU regulations"}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 rounded-lg bg-[var(--color-emerald-400)] hover:bg-emerald-300 text-slate-950 font-bold text-xs shadow-md shadow-emerald-400/20 active:scale-95 transition-all cursor-pointer"
          >
            {language === "el" ? "Κατάλαβα & Κλείσιμο" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}
