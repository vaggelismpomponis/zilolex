"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Clock, UserCheck, RefreshCw, Headphones, Globe } from "lucide-react";

export function WhyUsSection() {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "shield-check":
        return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case "clock":
        return <Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case "user-check":
        return <UserCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case "refresh-cw":
        return <RefreshCw className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case "headset":
        return <Headphones className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case "globe":
        return <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            {t.whyUs.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyUs.items.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-800 hover:border-emerald-400/50 dark:hover:border-emerald-600/50 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/70 dark:border-emerald-800/60 flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 group-hover:bg-emerald-100/70 dark:group-hover:bg-emerald-900/40 transition-all duration-200">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
