"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, ArrowRight } from "lucide-react";

export function ProcessSection() {
  const { t, language } = useLanguage();

  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            {t.process.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.process.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.process.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.process.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-white dark:bg-slate-900 p-7 shadow-sm border border-slate-200/90 dark:border-slate-800 flex flex-col hover:shadow-md hover:border-emerald-400/40 dark:hover:border-emerald-600/40 transition-all"
            >
              {/* Step Number & Duration */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400 shrink-0">
                  {step.number}
                </span>
                {step.duration && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold whitespace-nowrap shrink-0">
                    <Clock className="w-3 h-3 text-slate-500 shrink-0" />
                    <span>{step.duration}</span>
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Callout */}
        <div className="mt-14 text-center">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-5">
            {language === "el"
              ? "Θέλετε να ξεκινήσουμε άμεσα τον έλεγχο επιλεξιμότητας για την επιχείρησή σας;"
              : "Ready to verify hiring eligibility for your company immediately?"}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-emerald-400)] hover:bg-emerald-300 text-slate-950 font-bold text-sm shadow-md shadow-emerald-400/25 hover:shadow-emerald-400/40 active:scale-95 transition-all cursor-pointer"
          >
            <span>{language === "el" ? "Συμπληρώστε τη φόρμα αιτήματος" : "Fill out the Request Form"}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
