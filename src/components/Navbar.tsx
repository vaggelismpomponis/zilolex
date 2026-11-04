"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NavTopBar } from "@/components/NavTopBar";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#employers", label: t.nav.employers },
    { href: "#sectors", label: t.nav.sectors },
    { href: "#services", label: t.nav.services },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#partnerships", label: t.nav.partnerships },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      {/* Top Utility Bar on Desktop */}
      <NavTopBar />

      {/* Main Navbar */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4 lg:gap-8">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-md py-1"
            aria-label="ZILOLEX Home"
          >
            <Logo className="h-8 sm:h-9 md:h-10 w-auto text-slate-900" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors whitespace-nowrap py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs whitespace-nowrap active:scale-95"
            >
              <span>{t.nav.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions (< lg) */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            {/* Phone Icon */}
            <a
              href={`tel:${t.nav.phone.replace(/\s+/g, "")}`}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100"
              title={t.nav.phone}
              aria-label="Call Zilolex"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
            </a>

            {/* WhatsApp Icon */}
            <a
              href={`https://wa.me/${t.nav.whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
            </a>

            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded-md bg-slate-100 border border-slate-200">
              <button
                type="button"
                onClick={() => setLanguage("el")}
                className={`px-1.5 py-0.5 text-[11px] font-bold rounded-sm ${
                  language === "el" ? "bg-emerald-600 text-white" : "text-slate-600"
                }`}
              >
                EL
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-1.5 py-0.5 text-[11px] font-bold rounded-sm ${
                  language === "en" ? "bg-emerald-600 text-white" : "text-slate-600"
                }`}
              >
                EN
              </button>
            </div>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-800 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold rounded-md text-slate-800 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>{t.nav.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
