"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, UserCheck, Lock, FileText } from "lucide-react";

export function ComplianceSection() {
  const { t } = useLanguage();

  const getComplianceIcon = (idx: number) => {
    const iconClass = "w-5 h-5 text-emerald-800 group-hover:text-white transition-colors duration-300";
    switch (idx) {
      case 0:
        return <UserCheck className={iconClass} />;
      case 1:
        return <ShieldCheck className={iconClass} />;
      case 2:
        return <Lock className={iconClass} />;
      default:
        return <FileText className={iconClass} />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 transition-transform hover:scale-105 duration-200">
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
              className="group p-6 rounded-lg bg-white border border-slate-200 flex flex-col justify-between hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 transform-gpu"
            >
              <div>
                <div className="w-10 h-10 rounded-md bg-emerald-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                  {getComplianceIcon(idx)}
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
