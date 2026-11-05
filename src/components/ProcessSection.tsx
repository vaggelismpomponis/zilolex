"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            {t.howItWorks.tag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.howItWorks.steps.map((step) => (
            <div
              key={step.number}
              className="group p-6 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div>
                <span className="text-2xl font-black text-emerald-700 mb-2 block">
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Who Does What Table */}
        <div className="mb-12">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              {t.howItWorks.tableTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {t.howItWorks.tableSubtitle}
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-2xs">
            <table className="w-full min-w-[580px] text-left text-xs sm:text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="p-3 sm:p-4">{t.howItWorks.tableHeaders.action}</th>
                  <th className="p-3 sm:p-4 text-emerald-700 font-extrabold">{t.howItWorks.tableHeaders.zilolex}</th>
                  <th className="p-3 sm:p-4">{t.howItWorks.tableHeaders.employer}</th>
                  <th className="p-3 sm:p-4">{t.howItWorks.tableHeaders.worker}</th>
                  <th className="p-3 sm:p-4">{t.howItWorks.tableHeaders.authorities}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {t.howItWorks.tableRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-emerald-50/50 transition-colors duration-150">
                    <td className="p-3 sm:p-4 font-semibold text-slate-900">{row.action}</td>
                    <td className="p-3 sm:p-4 font-bold text-emerald-700 bg-emerald-50/40">{row.zilolex}</td>
                    <td className="p-3 sm:p-4 text-slate-700">{row.employer}</td>
                    <td className="p-3 sm:p-4 text-slate-700">{row.worker}</td>
                    <td className="p-3 sm:p-4 text-slate-600 text-xs">{row.authorities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider hover:shadow-md hover:shadow-emerald-700/20 active:scale-95 transition-all duration-200 shadow-xs cursor-pointer"
          >
            <span>{t.howItWorks.cta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
