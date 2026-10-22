"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      {/* Background Subtle Geometric Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#24500F]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6">
            {t.hero.titleStart}{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed font-normal max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-auto bg-[#24500F] hover:bg-[#1b3d0b] text-white font-bold px-8 py-3.5 h-auto text-base shadow-lg shadow-[#24500F]/30 hover:shadow-[#24500F]/50 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer border border-emerald-500/30"
              )}
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#process"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto bg-slate-800/80 hover:bg-slate-700 text-white hover:text-white border-slate-600 hover:border-slate-400 px-8 py-3.5 h-auto text-base backdrop-blur-sm cursor-pointer transition-colors shadow-sm"
              )}
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* 3 Pillars Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-6 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80 backdrop-blur-xs">
              <h4 className="text-sm font-semibold text-white mb-1">
                {t.hero.stats.legalBadge}
              </h4>
              <p className="text-xs text-slate-400 leading-snug">
                {t.hero.stats.legalDesc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80 backdrop-blur-xs">
              <h4 className="text-sm font-semibold text-white mb-1">
                {t.hero.stats.experienceBadge}
              </h4>
              <p className="text-xs text-slate-400 leading-snug">
                {t.hero.stats.experienceDesc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80 backdrop-blur-xs">
              <h4 className="text-sm font-semibold text-white mb-1">
                {t.hero.stats.supportBadge}
              </h4>
              <p className="text-xs text-slate-400 leading-snug">
                {t.hero.stats.supportDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
