"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, Handshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function CountriesSection() {
  const { t, language } = useLanguage();

  return (
    <section id="countries" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-semibold mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>{t.countries.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.countries.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            {t.countries.subtitle}
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.countries.countriesList.map((country, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/80 hover:border-slate-600 transition-all backdrop-blur-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    {country.name}
                  </h3>
                  <Badge className="bg-slate-700/80 text-emerald-300 border-slate-600 text-[11px] font-semibold">
                    {country.tag}
                  </Badge>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {country.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-800/80 via-slate-800 to-slate-800/80 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 hidden sm:block">
              <Handshake className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                {language === "el"
                  ? "Ενδιαφέρεστε για συγκεκριμένη εθνικότητα ή ειδικότητα;"
                  : "Interested in a specific nationality or skillset?"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {language === "el"
                  ? "Μπορούμε να διοργανώσουμε εξατομικευμένη καμπάνια προσλήψεων με live video συνεντεύξεις."
                  : "We can organize a customized recruitment drive with live video interviews."}
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-[var(--color-emerald-400)] hover:bg-emerald-300 text-slate-950 font-bold text-sm transition-all shadow-md shadow-emerald-400/25 hover:shadow-emerald-400/40 active:scale-95 cursor-pointer"
          >
            {language === "el" ? "Επικοινωνήστε Μαζί μας" : "Contact Us"}
          </a>
        </div>
      </div>
    </section>
  );
}
