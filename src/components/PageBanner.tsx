"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageBannerProps {
  tag: string;
  title: string | React.ReactNode;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  objectPosition?: string;
  primaryCta?: {
    href: string;
    text: string;
  };
  secondaryCta?: {
    href: string;
    text: string;
  };
}

export function PageBanner({
  tag,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  objectPosition = "object-[78%_25%] sm:object-[75%_30%] lg:object-right",
  primaryCta,
  secondaryCta,
}: PageBannerProps) {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 bg-white border-b border-slate-200 overflow-hidden">
      {/* Background Image with Left White Gradient Fade (Matching Hero exact styling) */}
      <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full pointer-events-none select-none z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className={`object-cover ${objectPosition} opacity-40 sm:opacity-55 lg:opacity-85`}
        />
        {/* Soft white fade so text has clear contrast and image fades smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/65 to-white lg:bg-gradient-to-r lg:from-white lg:via-white/75 lg:to-transparent" />
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-44 bg-gradient-to-r from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-xl lg:max-w-2xl pt-2 sm:pt-4 pb-6 sm:pb-8">
          <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            {tag}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            {subtitle}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap items-center gap-3">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs hover:shadow-md hover:shadow-emerald-700/20 active:scale-95 cursor-pointer"
                >
                  <span>{primaryCta.text}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-md bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-all shadow-2xs active:scale-95 cursor-pointer"
                >
                  <span>{secondaryCta.text}</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
