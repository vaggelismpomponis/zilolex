"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            {t.services.tag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, idx) => (
            <div
              key={service.id}
              className="group p-6 sm:p-7 rounded-lg bg-white border border-slate-200 flex flex-col justify-between hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="inline-block text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2.5 py-1 mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Service Points */}
                <ul className="space-y-2 mb-6">
                  {service.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs text-slate-700 flex items-start gap-2 group-hover:text-slate-900 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Legal Note if present */}
                {service.note && (
                  <div className="mb-6 p-3 rounded-md bg-slate-50 border border-slate-200">
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {service.note}
                    </p>
                  </div>
                )}
              </div>

              {/* Service CTA */}
              <Link
                href="/contact"
                className="group/btn w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md bg-white hover:bg-emerald-700 border border-slate-300 hover:border-emerald-700 text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
