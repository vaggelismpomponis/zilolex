"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hotel, Wheat, HardHat, Factory, Package, ArrowUpRight, ArrowRight } from "lucide-react";

export function SectorsSection() {
  const { t, language } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case "tourism":
        return <Hotel className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case "agriculture":
        return <Wheat className="w-6 h-6 text-amber-500" />;
      case "construction":
        return <HardHat className="w-6 h-6 text-orange-500" />;
      case "industry":
        return <Factory className="w-6 h-6 text-indigo-500" />;
      case "logistics":
        return <Package className="w-6 h-6 text-emerald-600" />;
      default:
        return <Hotel className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section id="sectors" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            {t.sectors.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.sectors.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.sectors.subtitle}
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.sectors.items.map((sector) => (
            <Card
              key={sector.id}
              className="group relative flex flex-col justify-between hover:shadow-xl transition-all duration-300 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden hover:-translate-y-1"
            >
              <div className="p-7">
                <div className="relative flex items-center justify-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-150 dark:border-slate-700 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-emerald-300 dark:group-hover:border-emerald-600 transition-all duration-200">
                    {getIcon(sector.id)}
                  </div>
                  <a
                    href="#contact"
                    className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer"
                    title="Αίτημα Προσωπικού"
                    aria-label={`Αίτημα για ${sector.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {sector.title}
                </h3>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
                  {sector.subtitle}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {sector.description}
                </p>

                {/* Role tags */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {language === "el" ? "Ενδεικτικές Ειδικότητες:" : "Key Roles / Positions:"}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {sector.roles.map((role, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 border-0 py-1 px-2.5"
                      >
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer with Direct Action */}
              <div className="px-7 py-3.5 bg-slate-50/80 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center text-xs font-semibold text-slate-700 dark:text-slate-300">
                <a
                  href="#contact"
                  className="group/cta inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 hover:bg-[var(--color-emerald-400)] text-emerald-700 dark:text-emerald-300 hover:text-slate-950 dark:hover:text-slate-950 transition-all duration-200 font-semibold cursor-pointer shadow-2xs hover:shadow-md hover:shadow-emerald-400/25 active:scale-95 no-underline"
                >
                  <span>{language === "el" ? "Ζητήστε Προσφορά" : "Request a Quote"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-1" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
