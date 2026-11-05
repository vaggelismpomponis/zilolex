"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { language } = useLanguage();

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 bg-white border-b border-slate-200 overflow-hidden">
      {/* Background Hero Image with Left White Gradient Fade */}
      <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full pointer-events-none select-none z-0">
        <Image
          src="/images/hero-athens.jpg"
          alt="Athens Acropolis Greece"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-[78%_22%] sm:object-[75%_28%] lg:object-right opacity-50 sm:opacity-65 lg:opacity-100"
        />
        {/* Soft white fade so text has clear contrast and image fades smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/65 to-white lg:bg-gradient-to-r lg:from-white lg:via-white/75 lg:to-transparent" />
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-44 bg-gradient-to-r from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Hero Content Area */}
        <div className="max-w-xl lg:max-w-2xl pt-2 sm:pt-6">
          {/* Main Headline (Exact 2 lines from photo) */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-4">
            {language === "el" ? (
              <>
                <span>Συνδέουμε Ανθρώπους,</span>
                <br />
                <span>Ευκαιρίες </span>
                <span className="text-emerald-600">&amp; Τόπους</span>
              </>
            ) : (
              <>
                <span>Connecting People,</span>
                <br />
                <span>Opportunities </span>
                <span className="text-emerald-600">&amp; Places</span>
              </>
            )}
          </h1>

          {/* Subtitle / Service tagline */}
          <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-700 mb-8 leading-snug">
            {language === "el"
              ? "Υπηρεσίες Υποδομής Εργατικού Δυναμικού & Φοιτητών στην Ελλάδα"
              : "Workforce & Student Infrastructure Services in Greece"}
          </p>

          {/* Single CTA Button matching the photo */}
          <div>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm tracking-wide transition-all shadow-xs hover:shadow-md hover:shadow-emerald-700/20 active:scale-95 cursor-pointer"
            >
              <span>{language === "el" ? "Οι Υπηρεσίες μας" : "Our Services"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
