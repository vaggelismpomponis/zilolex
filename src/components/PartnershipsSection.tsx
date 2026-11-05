"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export function PartnershipsSection() {
  const { t } = useLanguage();

  return (
    <section id="partnerships" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            {t.partnerships.tag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {t.partnerships.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.partnerships.subtitle}
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.partnerships.items.map((item, idx) => (
            <div
              key={item.id}
              className="group p-6 sm:p-7 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="inline-block text-xs font-bold text-emerald-700 bg-white border border-slate-200 rounded px-2.5 py-1 mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors duration-200">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-emerald-800 mb-3">
                  {item.subtitle}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs text-slate-700 flex items-start gap-2 group-hover:text-slate-900 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="group/btn w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md bg-white hover:bg-emerald-600 border border-slate-300 hover:border-emerald-600 text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer"
              >
                <span>{item.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
