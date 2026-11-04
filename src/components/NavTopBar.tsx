"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageSquare } from "lucide-react";

export function NavTopBar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="hidden lg:block bg-slate-50 border-b border-slate-200 text-xs text-slate-600">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-10 flex items-center justify-between">
        {/* Brand Tagline */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="font-medium text-slate-700 tracking-tight">{t.nav.tagline}</span>
        </div>

        {/* Contact info & Language Toggle */}
        <div className="flex items-center gap-6">
          {/* Phone */}
          <a
            href={`tel:${t.nav.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-emerald-700 transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.nav.phone}</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${t.nav.whatsappNumber.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-emerald-700 transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <span className="w-px h-3.5 bg-slate-300" />

          {/* Language Switcher */}
          <div className="flex items-center p-0.5 rounded-md bg-white border border-slate-200">
            <button
              type="button"
              onClick={() => setLanguage("el")}
              className={`px-2.5 py-0.5 text-[11px] font-bold rounded-sm transition-all cursor-pointer ${
                language === "el"
                  ? "bg-emerald-600 text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              aria-label="Ελληνικά"
            >
              EL
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-0.5 text-[11px] font-bold rounded-sm transition-all cursor-pointer ${
                language === "en"
                  ? "bg-emerald-600 text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
