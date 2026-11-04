"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export function GuidesSection() {
  const { t } = useLanguage();

  return (
    <section id="guides" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 transition-transform hover:scale-105 duration-200">
            {t.guides.tag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {t.guides.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.guides.subtitle}
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.guides.items.map((guide) => (
            <article
              key={guide.id}
              className="group p-6 rounded-lg bg-white border border-slate-200 flex flex-col justify-between hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 transform-gpu"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="px-2 py-0.5 rounded-sm bg-emerald-50 text-emerald-800 font-bold uppercase tracking-wider text-[10px] group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400 group-hover:text-emerald-800 transition-colors" />
                    {guide.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-700 transition-colors duration-200">
                  {guide.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {guide.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
                >
                  <span>{t.guides.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors duration-200" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
