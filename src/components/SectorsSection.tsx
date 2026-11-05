"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export function SectorsSection() {
  const { t } = useLanguage();

  return (
    <section id="sectors" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            {t.sectors.tag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {t.sectors.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.sectors.subtitle}
          </p>
        </div>

        {/* 3 Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {t.sectors.items.map((sector, idx) => (
            <div
              key={sector.id}
              className="group p-6 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="inline-block text-xs font-bold text-emerald-700 bg-white border border-slate-200 rounded px-2.5 py-1 mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors duration-200">
                  {sector.title}
                </h3>
                <div className="text-xs font-semibold text-emerald-800 mb-3">
                  {sector.subtitle}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {sector.description}
                </p>

                {/* Roles */}
                <div className="mb-4">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Ενδεικτικές Ειδικότητες
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {sector.roles.map((role, rIdx) => (
                      <span
                        key={rIdx}
                        className="px-2 py-0.5 rounded-sm bg-white border border-slate-200 text-[11px] font-medium text-slate-700 hover:border-emerald-300 hover:text-emerald-900 transition-colors"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Focus */}
                <div className="mb-6 pt-3 border-t border-slate-200">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Τι προσέχουμε
                  </div>
                  <ul className="space-y-1">
                    {sector.focus.map((fItem, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <span className="text-emerald-700 font-bold">•</span>
                        <span>{fItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card CTA */}
              <Link
                href="/contact"
                className="group/btn w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md bg-white hover:bg-emerald-600 border border-slate-300 hover:border-emerald-600 text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer"
              >
                <span>{sector.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-xs text-slate-500 text-center italic">
          {t.sectors.note}
        </p>
      </div>
    </section>
  );
}
