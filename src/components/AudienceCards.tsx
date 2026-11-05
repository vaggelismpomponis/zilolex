"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export function AudienceCards() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.hero.audienceCards?.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group rounded-xl bg-white border border-slate-200 overflow-hidden hover:border-emerald-600/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
            >
              {/* Card Photo */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom CTA with circular action arrow */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-700 transition-colors">
                    {card.cta}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-emerald-600 group-hover:bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:translate-x-0.5 transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
