"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 transform-gpu ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-200/90 dark:border-slate-800 py-3"
          : "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-900 py-4"
      }`}
      style={{
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#24500F] rounded-lg py-1 transition-opacity hover:opacity-90"
            aria-label={`${t.nav.brand} Home`}
          >
            <Logo className="h-8 sm:h-9 md:h-10 w-auto text-slate-950 dark:text-white" />
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

          {/* Desktop Actions (>= lg) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center p-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                type="button"
                onClick={() => setLanguage("el")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  language === "el"
                    ? "bg-[#24500F] text-white shadow-xs"
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
                    ? "bg-[#24500F] text-white shadow-xs"
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
                "bg-[#24500F] hover:bg-[#1a3d0b] text-white hover:text-white shadow-sm font-semibold text-sm px-5 py-2 h-auto flex items-center gap-2 cursor-pointer shrink-0 transition-colors"
              )}
            >
              <span>{t.nav.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile & Tablet Menu Button (< lg) */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden shrink-0">
            {/* Mobile Lang Switcher */}
            <div className="flex items-center p-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
              <button
                type="button"
                onClick={() => setLanguage("el")}
                className={`px-2 py-0.5 text-[11px] font-bold rounded-full cursor-pointer transition-all ${
                  language === "el"
                    ? "bg-[#24500F] text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                GR
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 text-[11px] font-bold rounded-full cursor-pointer transition-all ${
                  language === "en"
                    ? "bg-[#24500F] text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none cursor-pointer shrink-0"
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
                  "w-full bg-[#24500F] hover:bg-[#1a3d0b] text-white hover:text-white py-2.5 h-auto text-center flex items-center justify-center gap-2 cursor-pointer font-semibold"
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
