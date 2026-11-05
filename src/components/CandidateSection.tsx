"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export function CandidateSection() {
  const { t } = useLanguage();

  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-lg bg-emerald-50/60 border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-emerald-300 hover:shadow-md transition-all duration-300">
          <div className="max-w-2xl">
            <div className="inline-block px-2.5 py-0.5 rounded-sm bg-white border border-emerald-300 text-emerald-700 text-[11px] font-bold uppercase tracking-wider mb-2">
              {t.candidates.tag}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              {t.candidates.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
              {t.candidates.lead}
            </p>
            <div className="text-[11px] text-slate-500">
              {t.candidates.note}
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="group w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider hover:shadow-md hover:shadow-emerald-600/20 active:scale-95 transition-all duration-200 shadow-xs cursor-pointer"
            >
              <span>{t.candidates.cta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
