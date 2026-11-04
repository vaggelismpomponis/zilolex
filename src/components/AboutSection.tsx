"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Check, Shield, User, ArrowRight } from "lucide-react";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7">
            <div className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 transition-transform hover:scale-105 duration-200">
              {t.about.tag}
            </div>
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
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-800" />
              <span>{t.about.valuesTitle}</span>
            </h3>
            <div className="space-y-3.5">
              {t.about.values.map((val, idx) => (
                <div key={idx} className="flex items-start gap-2.5 group/val hover:translate-x-1 transition-transform duration-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block group-hover/val:text-emerald-700 transition-colors">{val.title}</span>
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
              { role: t.about.teamRoleGM, title: "Executive Management" },
              { role: t.about.teamRoleOps, title: "Logistics & Housing" },
              { role: t.about.teamRoleLegal, title: "Statutory Procedures" },
            ].map((member, idx) => (
              <div key={idx} className="group p-5 rounded-lg bg-white border border-slate-200 text-center hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 transform-gpu">
                <div className="w-14 h-14 rounded-full bg-slate-100 border border-slate-200 group-hover:border-emerald-300 group-hover:bg-emerald-50 flex items-center justify-center mx-auto mb-3 text-slate-500 group-hover:text-emerald-600 transition-all duration-300">
                  <User className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{member.role}</div>
                <div className="text-xs text-emerald-800 font-medium">{member.title}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 hover:border-slate-400 active:scale-95 transition-all duration-200"
            >
              <span>{t.about.cta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
