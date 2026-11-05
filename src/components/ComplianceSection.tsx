"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ComplianceSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            {t.compliance.tag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {t.compliance.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.compliance.lead}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.compliance.points.map((point, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-lg bg-white border border-slate-200 flex flex-col justify-between hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="inline-block text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2.5 py-1 mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors duration-200">
                  {point.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
