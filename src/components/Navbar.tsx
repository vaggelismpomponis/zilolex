"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#sectors", label: t.nav.sectors },
    { href: "#process", label: t.nav.process },
    { href: "#countries", label: t.nav.countries },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800 py-3"
          : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-100 dark:border-slate-900 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="HellasWorkforce Home"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-inner group-hover:bg-slate-800 transition-colors">
              <ShieldCheck className="w-6 h-6 text-sky-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight text-slate-900 dark:text-white">
                {t.nav.brand}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {t.nav.brandSub}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language Switcher & Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center p-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                type="button"
                onClick={() => setLanguage("el")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  language === "el"
                    ? "bg-slate-900 text-white shadow-xs dark:bg-slate-100 dark:text-slate-900"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
                aria-label="Ελληνικά"
              >
                GR
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-slate-900 text-white shadow-xs dark:bg-slate-100 dark:text-slate-900"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-slate-900 hover:bg-slate-800 text-white shadow-sm font-medium text-sm px-5 py-2 h-auto flex items-center gap-2 cursor-pointer"
              )}
            >
              <span>{t.nav.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Lang Switcher */}
            <div className="flex items-center p-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 sm:hidden">
              <button
                type="button"
                onClick={() => setLanguage("el")}
                className={`px-2 py-0.5 text-[11px] font-bold rounded-full ${
                  language === "el" ? "bg-slate-900 text-white" : "text-slate-600"
                }`}
              >
                GR
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 text-[11px] font-bold rounded-full ${
                  language === "en" ? "bg-slate-900 text-white" : "text-slate-600"
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 h-auto text-center flex items-center justify-center gap-2 cursor-pointer"
                )}
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
