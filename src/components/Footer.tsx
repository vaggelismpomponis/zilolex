"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Footer() {
  const { t } = useLanguage();

  const openLegal = (type: "privacy" | "terms") => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent(type === "privacy" ? "zilolex_open_privacy_modal" : "zilolex_open_terms_modal")
      );
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 text-xs border-t border-slate-800">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-14 mb-14">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <Logo variant="footer" className="h-8 sm:h-9 w-auto text-white" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              {t.footer.brandDesc}
            </p>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t.contact.directContact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${t.contact.directContact.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                  {t.contact.directContact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${t.contact.directContact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {t.contact.directContact.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`mailto:${t.contact.directContact.email}`} className="hover:text-white transition-colors">
                  {t.contact.directContact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors">{t.nav.home}</a></li>
              <li><a href="#employers" className="hover:text-white transition-colors">{t.nav.employers}</a></li>
              <li><a href="#sectors" className="hover:text-white transition-colors">{t.nav.sectors}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">{t.nav.howItWorks}</a></li>
              <li><a href="#partnerships" className="hover:text-white transition-colors">{t.nav.partnerships}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{t.faq.tag}</a></li>
              <li><a href="#guides" className="hover:text-white transition-colors">{t.guides.tag}</a></li>
            </ul>
          </div>

          {/* Sectors (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              {t.footer.sectorsTitle}
            </h4>
            <ul className="space-y-2.5">
              {t.sectors.items.map((sec) => (
                <li key={sec.id}>
                  <a href="#sectors" className="hover:text-white transition-colors">
                    {sec.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Compliance (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              {t.footer.legalTitle}
            </h4>
            <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700/80 space-y-2 mb-4">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {t.footer.legalText}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <button
                type="button"
                onClick={() => openLegal("privacy")}
                className="hover:text-white underline cursor-pointer transition-colors"
              >
                {t.footer.privacyPolicy}
              </button>
              <button
                type="button"
                onClick={() => openLegal("terms")}
                className="hover:text-white underline cursor-pointer transition-colors"
              >
                {t.footer.termsOfUse}
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>{t.footer.copyright}</div>
          <div>{t.contact.directContact.address}</div>
        </div>
      </div>
    </footer>
  );
}
