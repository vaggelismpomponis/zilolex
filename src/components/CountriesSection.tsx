"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, CheckCircle, Handshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function CountriesSection() {
  const { t } = useLanguage();

  return (
    <section id="countries" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-semibold mb-4">
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
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                    {country.name}
                  </h3>
                  <Badge className="bg-slate-700/80 text-sky-300 border-slate-600 text-[11px] font-semibold">
                    {country.tag}
                  </Badge>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {country.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Πιστοποιημένο τοπικό recruitment agency</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-800/80 via-slate-800 to-slate-800/80 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 shrink-0 hidden sm:block">
              <Handshake className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Ενδιαφέρεστε για συγκεκριμένη εθνικότητα ή ειδικότητα;
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Μπορούμε να διοργανώσουμε εξατομικευμένη καμπάνια προσλήψεων με live video συνεντεύξεις.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-colors shadow-sm"
          >
            Επικοινωνήστε Μαζί μας
          </a>
        </div>
      </div>
    </section>
  );
}
