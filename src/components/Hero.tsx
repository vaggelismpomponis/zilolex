"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, UserCheck, FileText, Plane, Home, ShieldCheck, Building2 } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  const getHelpIcon = (id: string) => {
    const iconClass = "w-5 h-5 text-emerald-800 group-hover:text-white transition-colors duration-300";
    switch (id) {
      case "search":
        return <UserCheck className={iconClass} />;
      case "relocation":
        return <FileText className={iconClass} />;
      case "travel":
        return <Plane className={iconClass} />;
      case "housing":
        return <Home className={iconClass} />;
      default:
        return <UserCheck className={iconClass} />;
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 border-b border-slate-200">
      {/* Fullwidth Background Image with Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/hero-workforce.jpg"
          alt="Zilolex - Εξειδικευμένο εργατικό δυναμικό και συντονισμός μετάκλησης στην Ελλάδα"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
          quality={90}
        />
        {/* Soft Multi-Stop Gradient Fade Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 via-45% to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-transparent to-white/85" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white/90 backdrop-blur-sm border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6 shadow-2xs transition-transform hover:scale-105 duration-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{t.hero.tagline}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
            {t.hero.titleStart}{" "}
            <span className="text-emerald-700 underline decoration-emerald-400 decoration-2 underline-offset-4">
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <a
              href="#contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg hover:shadow-emerald-600/25 active:scale-95 transition-all duration-200"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-white/90 hover:bg-white text-slate-900 font-bold text-sm border border-slate-300 hover:border-slate-400 shadow-2xs active:scale-95 transition-all duration-200"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-semibold text-slate-700 pt-4">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Ν. 5038/2023 Πλήρης Νομιμότητα</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Κατασκευές & Τουρισμός</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Home className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Συντονισμός Στέγασης</span>
            </div>
          </div>
        </div>

        {/* 4 Cards: Πώς σας βοηθάμε */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-md border border-slate-200/60 inline-block shadow-2xs">
              Πώς σας βοηθάμε
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.hero.helpCards.map((card) => (
              <div
                key={card.id}
                className="group p-5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200/90 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 transform-gpu cursor-default shadow-2xs"
              >
                <div>
                  <div className="w-9 h-9 rounded-md bg-emerald-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center mb-3 transition-colors duration-300">
                    {getHelpIcon(card.id)}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
