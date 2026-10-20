"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";

export function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider mb-4">
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
              className="relative rounded-2xl bg-white dark:bg-slate-900 p-7 shadow-sm border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Step Number & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-sky-600 dark:text-sky-400">
                    {step.number}
                  </span>
                  {step.duration && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {step.duration}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Sub-steps / Details list */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Callout */}
        <div className="mt-14 text-center">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-4">
            Θέλετε να ξεκινήσουμε άμεσα τον έλεγχο επιλεξιμότητας για την επιχείρησή σας;
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <span>Συμπληρώστε τη φόρμα αιτήματος</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
