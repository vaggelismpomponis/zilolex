"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
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
              <li><Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t.nav.services}</Link></li>
              <li><Link href="/employers" className="hover:text-white transition-colors">{t.nav.employers}</Link></li>
              <li><Link href="/students" className="hover:text-white transition-colors">{t.nav.students || "Φοιτητές"}</Link></li>
              <li><Link href="/partnerships" className="hover:text-white transition-colors">{t.nav.partnerships}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
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
                  <Link href="/services" className="hover:text-white transition-colors">
                    {sec.title}
                  </Link>
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
              <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                Ν. 5038/2023
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {t.footer.legalText}
              </p>
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
          <div className="w-full sm:w-auto text-center sm:text-left">{t.footer.copyright}</div>
          <div className="w-full sm:w-auto text-center sm:text-right">{t.contact.directContact.address}</div>
        </div>
      </div>
    </footer>
  );
}
