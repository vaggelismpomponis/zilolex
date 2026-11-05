"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3 block">
              {t.about.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {t.about.title}
            </h2>
            <p className="text-base font-semibold text-slate-800 mb-3 leading-relaxed">
              {t.about.lead}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              {t.about.body}
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white border border-slate-200 hover:border-emerald-500/40 hover:shadow-xs transition-all duration-200">
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                  {t.about.missionTitle}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white border border-slate-200 hover:border-emerald-500/40 hover:shadow-xs transition-all duration-200">
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                  {t.about.visionTitle}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.visionText}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Values */}
          <div className="lg:col-span-5 p-6 rounded-lg bg-white border border-slate-200 hover:border-emerald-500/40 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              {t.about.valuesTitle}
            </h3>
            <div className="space-y-3.5">
              {t.about.values.map((val, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-1.5 py-0.5 shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{val.title}</span>
                    <span className="text-xs text-slate-600 leading-normal">{val.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="pt-10 border-t border-slate-200">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              {t.about.teamTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {t.about.teamSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { role: t.about.teamRoleGM, title: "Executive Management", code: "GM" },
              { role: t.about.teamRoleOps, title: "Logistics & Housing", code: "OPS" },
              { role: t.about.teamRoleLegal, title: "Statutory Procedures", code: "LEG" },
            ].map((member, idx) => (
              <div key={idx} className="group p-5 rounded-lg bg-white border border-slate-200 text-center hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs flex items-center justify-center mx-auto mb-3">
                  {member.code}
                </div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{member.role}</div>
                <div className="text-xs text-emerald-800 font-medium">{member.title}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider hover:shadow-md hover:shadow-emerald-700/20 active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              <span>{t.about.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
