"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Users, Home, FileText, GraduationCap } from "lucide-react";

export function Hero() {
  const { language } = useLanguage();

  const pillars = [
    {
      id: "workforce",
      icon: <Users className="w-5 h-5 text-emerald-600" />,
      title: language === "el" ? "Κινητικότητα Εργατικού Δυναμικού" : "Workforce Mobility",
      desc: language === "el"
        ? "Αναζήτηση, επιλογή και συντονισμός τοποθέτησης προσωπικού."
        : "Recruitment, staffing and deployment solutions.",
    },
    {
      id: "housing",
      icon: <Home className="w-5 h-5 text-emerald-600" />,
      title: language === "el" ? "Λύσεις Στέγασης" : "Housing Solutions",
      desc: language === "el"
        ? "Οργανωμένη διαμονή για ομάδες εργαζομένων και φοιτητές."
        : "Managed accommodation for workforces and students.",
    },
    {
      id: "migration",
      icon: <FileText className="w-5 h-5 text-emerald-600" />,
      title: language === "el" ? "Υπηρεσίες Μετανάστευσης" : "Migration Services",
      desc: language === "el"
        ? "Καθοδήγηση visa, αδειών εργασίας και διαμονής."
        : "Visa, work and residence permit support.",
    },
    {
      id: "students",
      icon: <GraduationCap className="w-5 h-5 text-emerald-600" />,
      title: language === "el" ? "Φοιτητική Κινητικότητα" : "Student Mobility",
      desc: language === "el"
        ? "Προγράμματα σπουδών στην Ελλάδα με μετεγκατάσταση και στέγαση."
        : "Study pathways in Greece with relocation and housing.",
    },
  ];

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
        {/* Soft white fade on the left so text has pure white background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/95 lg:bg-gradient-to-r lg:from-white lg:via-white/75 lg:to-transparent" />
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-44 bg-gradient-to-r from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Hero Content Area */}
        <div className="max-w-xl lg:max-w-2xl pt-2 sm:pt-6 pb-12 sm:pb-16 lg:pb-20">
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

        {/* 4 Pillars Strip (Matching the photo layout) */}
        <div className="pt-8 sm:pt-10 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-lg border border-emerald-200 bg-emerald-50/70 flex items-center justify-center shrink-0 text-emerald-600 shadow-2xs">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-0.5 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
