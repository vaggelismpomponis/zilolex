"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageSquare, Globe } from "lucide-react";

export function NavTopBar() {
  const { language, setLanguage, t } = useLanguage();

  return (
          <div className="bg-slate-50 border-b border-slate-200 text-xs text-slate-600">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-8 sm:h-9 lg:h-10 flex items-center justify-between">
              {/* Brand Tagline (Desktop) */}
              <div className="hidden lg:flex items-center">
                <span className="font-medium text-slate-700 tracking-tight">{t.nav.tagline}</span>
              </div>

              {/* Contact info & Language Toggle */}
                <div className="flex items-center justify-between lg:justify-end w-full lg:w-auto gap-4 sm:gap-6">
                  {/* Phone */}
                  <a
                    href={`tel:${t.nav.phone.replace(/\s+/g, "")}`}
                    aria-label={`Call ${t.nav.phone}`}
                    className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-emerald-700 transition-colors whitespace-nowrap text-[11px] sm:text-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{t.nav.phone}</span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${t.nav.whatsappNumber.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-emerald-700 transition-colors whitespace-nowrap text-[11px] sm:text-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>WhatsApp</span>
                  </a>

                  <span className="hidden lg:block w-px h-3.5 bg-slate-300" />

                    {/* Language Switcher (Desktop) */}
                    <div role="group" aria-label="Language selection" className="hidden lg:flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setLanguage("el")}
                          className={`px-2 py-0.5 text-[11px] font-bold rounded-md border transition-all cursor-pointer ${language === "el"
                              ? "bg-emerald-700 text-white border-emerald-700 shadow-2xs"
                              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400 hover:text-slate-900 shadow-2xs"
                            }`}
                          aria-label="Ελληνικά"
                          aria-pressed={language === "el"}
                        >
                          GR
                        </button>
                        <button
                          type="button"
                          onClick={() => setLanguage("en")}
                          className={`px-2 py-0.5 text-[11px] font-bold rounded-md border transition-all cursor-pointer ${language === "en"
                              ? "bg-emerald-700 text-white border-emerald-700 shadow-2xs"
                              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400 hover:text-slate-900 shadow-2xs"
                            }`}
                          aria-label="English"
                          aria-pressed={language === "en"}
                        >
                          EN
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
}
