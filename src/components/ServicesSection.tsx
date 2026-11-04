"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Search, FileCheck, Home, ArrowRight, ShieldCheck } from "lucide-react";

export function ServicesSection() {
  const { t } = useLanguage();

  const getServiceIcon = (id: string) => {
    const iconClass = "w-5 h-5 text-emerald-800 group-hover:text-white transition-colors duration-300";
    switch (id) {
      case "search":
        return <Search className={iconClass} />;
      case "relocation":
        return <FileCheck className={iconClass} />;
      case "housing":
        return <Home className={iconClass} />;
      default:
        return <Search className={iconClass} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 transition-transform hover:scale-105 duration-200">
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
          {t.services.items.map((service) => (
            <div
              key={service.id}
              className="group p-6 sm:p-7 rounded-lg bg-white border border-slate-200 flex flex-col justify-between hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 transform-gpu"
            >
              <div>
                <div className="w-10 h-10 rounded-md bg-emerald-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                  {getServiceIcon(service.id)}
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
                  <div className="mb-6 p-3 rounded-md bg-slate-50 border border-slate-200 flex items-start gap-2 hover:bg-slate-100/70 transition-colors">
                    <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {service.note}
                    </p>
                  </div>
                )}
              </div>

              {/* Service CTA */}
              <a
                href={service.ctaHref}
                className="group/btn w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md bg-slate-100 hover:bg-emerald-600 text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-2xs active:scale-95"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
