"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 bg-white border-b border-slate-200 overflow-hidden">
      {/* Background Hero Image with Left White Gradient Fade */}
      <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full pointer-events-none select-none z-0">
        <Image
          src="/images/hero-athens.jpg"
          alt="Athens Acropolis Greece"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-center lg:object-right opacity-30 sm:opacity-45 lg:opacity-100"
        />
        {/* Gradients: White fade on mobile/tablet, right-side transparency on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/95 lg:bg-gradient-to-r lg:from-white lg:via-white/75 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-70" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Hero Content Area */}
        <div className="max-w-2xl lg:max-w-3xl pt-2 sm:pt-6 pb-8 sm:pb-14">
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.14] mb-4">
            <span>{t.hero.titleStart}</span>
            <br />
            <span className="text-emerald-600">{t.hero.titleHighlight}</span>
          </h1>

          {/* Subtitle / Service tagline */}
          <p className="text-base sm:text-xl font-semibold text-slate-800 mb-3 tracking-tight">
            {t.hero.serviceTagline}
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-xl">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs hover:shadow-md hover:shadow-emerald-600/20 active:scale-95 cursor-pointer"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 hover:border-slate-400 shadow-2xs active:scale-95 transition-all cursor-pointer"
            >
              <span>{t.hero.ctaSecondary}</span>
            </Link>
          </div>
        </div>

        {/* 4 Pillars Strip (strictly without icons) */}
        <div className="pt-8 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {t.hero.pillars?.map((pillar) => (
            <div
              key={pillar.id}
              className="p-4 rounded-md bg-white/90 backdrop-blur-xs border border-slate-200/80 hover:border-emerald-500/50 transition-all duration-200"
            >
              <div className="text-[11px] font-bold text-emerald-600 mb-1 tracking-wider uppercase">
                {pillar.num}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
