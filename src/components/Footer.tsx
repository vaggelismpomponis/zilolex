"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 text-white font-bold text-lg mb-4">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span>{t.nav.brand} {t.nav.brandSub}</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 mb-6">
              {t.footer.brandDesc}
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>+30 210 0000000</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>info@hellasworkforce.gr</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  {t.nav.sectors}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  {t.nav.process}
                </a>
              </li>
              <li>
                <a href="#countries" className="hover:text-white transition-colors">
                  {t.nav.countries}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              {t.footer.sectorsTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {t.sectors.items.map((sec) => (
                <li key={sec.id}>
                  <a href="#sectors" className="hover:text-white transition-colors">
                    {sec.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Compliance */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              {t.footer.legalTitle}
            </h4>
            <p className="text-xs leading-relaxed text-slate-400 mb-4">
              {t.footer.legalText}
            </p>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
              <span className="text-sky-400 font-semibold block mb-0.5">
                Συμμόρφωση GDPR
              </span>
              Τήρηση των αρχών προστασίας προσωπικών δεδομένων βάσει του Γενικού Κανονισμού (ΕΕ) 2016/679.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>{t.footer.copyright}</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">
              {t.footer.privacyPolicy}
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              {t.footer.termsOfUse}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
