"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, Shield, ArrowRight } from "lucide-react";

export function EmployersSection() {
  const { t } = useLanguage();

  return (
    <section id="employers" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 transition-transform hover:scale-105 duration-200">
            {t.employers.tag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {t.employers.headline}
          </h2>
          <p className="text-lg font-semibold text-emerald-800 mb-4">
            {t.employers.subhead}
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.employers.lead}
          </p>
        </div>

        {/* 2-Column Grid: What we take care of & Why trust us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Column 1: Τι φροντίζουμε για εσάς */}
          <div className="p-6 sm:p-8 rounded-lg bg-white border border-slate-200 hover:border-emerald-500/40 hover:shadow-md transition-all duration-300 transform-gpu">
            <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {t.employers.whatWeDoTitle}
            </h3>
            <ul className="space-y-3.5">
              {t.employers.whatWeDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Γιατί να μας εμπιστευτείτε */}
          <div className="p-6 sm:p-8 rounded-lg bg-white border border-slate-200 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-md transition-all duration-300 transform-gpu">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {t.employers.whyTrustTitle}
              </h3>
              <ul className="space-y-3.5">
                {t.employers.whyTrust.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                    <Shield className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commitment Box */}
            <div className="mt-6 p-4 rounded-md bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/50 transition-colors duration-200">
              <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">
                {t.employers.commitmentTitle}
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                {t.employers.commitmentText}
              </p>
            </div>
          </div>
        </div>

        {/* Section Action */}
        <div className="text-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider hover:shadow-md hover:shadow-emerald-600/20 active:scale-95 transition-all duration-200 shadow-xs"
          >
            <span>{t.employers.cta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
