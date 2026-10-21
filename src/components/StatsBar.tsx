"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function StatsBar() {
  const { t } = useLanguage();

  const stats = [
    { number: t.statsBar.stat1Number, label: t.statsBar.stat1Label },
    { number: t.statsBar.stat2Number, label: t.statsBar.stat2Label },
    { number: t.statsBar.stat3Number, label: t.statsBar.stat3Label },
    { number: t.statsBar.stat4Number, label: t.statsBar.stat4Label },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center min-w-0">
              <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1 truncate px-1">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
