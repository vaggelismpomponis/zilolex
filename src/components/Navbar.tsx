"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NavTopBar } from "@/components/NavTopBar";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isServices = pathname.startsWith("/services") || pathname.startsWith("/employers") || pathname.startsWith("/students");
  const isAbout = pathname.startsWith("/about") || pathname.startsWith("/partnerships");
  const isContact = pathname.startsWith("/contact");

  const mobileNavLinks = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/employers", label: t.nav.employers },
    { href: "/students", label: t.nav.students || (language === "el" ? "Φοιτητές" : "Students") },
    { href: "/partnerships", label: t.nav.partnerships },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      {/* Top Utility Bar */}
      <NavTopBar />

      {/* Main Navbar */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo with Subtitle from Photo */}
          <Link
            href="/"
            className="flex flex-col shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-md py-1"
            aria-label="ZILOLEX Home"
          >
            <Logo className="h-7 sm:h-8 md:h-9 w-auto text-slate-900" />
            <span className="text-[9px] sm:text-[10px] font-medium text-slate-500 tracking-tight leading-none mt-1">
              {language === "el"
                ? "Workforce & Student Infrastructure Services"
                : "Workforce & Student Infrastructure Services"}
            </span>
          </Link>

          {/* Desktop Navigation Links (Exact 4 items from photo) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Home */}
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors py-2 border-b-2 ${
                isHome
                  ? "text-emerald-700 border-emerald-600"
                  : "text-slate-700 hover:text-emerald-700 border-transparent"
              }`}
            >
              {language === "el" ? "Αρχική" : "Home"}
            </Link>

            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services"
                className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors py-2 border-b-2 ${
                  isServices
                    ? "text-emerald-700 border-emerald-600"
                    : "text-slate-700 hover:text-emerald-700 border-transparent"
                }`}
              >
                <span>{language === "el" ? "Υπηρεσίες" : "Services"}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-52 py-2 bg-white rounded-lg shadow-lg border border-slate-200 animate-in fade-in-50 duration-150 z-50">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    {language === "el" ? "Όλες οι Υπηρεσίες" : "All Services"}
                  </Link>
                  <Link
                    href="/employers"
                    className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    {language === "el" ? "Για Εργοδότες" : "For Employers"}
                  </Link>
                  <Link
                    href="/students"
                    className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    {language === "el" ? "Για Φοιτητές" : "For Students"}
                  </Link>
                </div>
              )}
            </div>

            {/* About Us with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <Link
                href="/about"
                className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors py-2 border-b-2 ${
                  isAbout
                    ? "text-emerald-700 border-emerald-600"
                    : "text-slate-700 hover:text-emerald-700 border-transparent"
                }`}
              >
                <span>{language === "el" ? "Σχετικά με Εμάς" : "About Us"}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </Link>

              {aboutDropdown && (
                <div className="absolute top-full left-0 w-52 py-2 bg-white rounded-lg shadow-lg border border-slate-200 animate-in fade-in-50 duration-150 z-50">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    {language === "el" ? "Η Εταιρεία" : "Company Profile"}
                  </Link>
                  <Link
                    href="/partnerships"
                    className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    {language === "el" ? "Συνεργασίες" : "Partnerships"}
                  </Link>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className={`text-sm font-semibold transition-colors py-2 border-b-2 ${
                isContact
                  ? "text-emerald-700 border-emerald-600"
                  : "text-slate-700 hover:text-emerald-700 border-transparent"
              }`}
            >
              {language === "el" ? "Επικοινωνία" : "Contact"}
            </Link>
          </nav>

          {/* Desktop Right CTA matching the photo */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs whitespace-nowrap active:scale-95 cursor-pointer"
            >
              <span>{language === "el" ? "Επικοινωνία" : "Get in Touch"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Actions (< lg) */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            {/* Language Switcher */}
            <div
              role="group"
              aria-label="Language selection"
              className="flex items-center gap-1"
            >
              <button
                type="button"
                onClick={() => setLanguage("el")}
                className={`px-2 py-0.5 text-[11px] font-bold rounded-md border transition-all cursor-pointer ${
                  language === "el"
                    ? "bg-emerald-700 text-white border-emerald-700 shadow-2xs"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400 hover:text-slate-900 shadow-2xs"
                }`}
                aria-label="Ελληνικά"
                aria-pressed={language === "el"}
              >
                EL
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 text-[11px] font-bold rounded-md border transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-emerald-700 text-white border-emerald-700 shadow-2xs"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400 hover:text-slate-900 shadow-2xs"
                }`}
                aria-label="English"
                aria-pressed={language === "en"}
              >
                EN
              </button>
            </div>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-800 hover:bg-slate-100 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 flex flex-col gap-1">
            {mobileNavLinks.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    active
                      ? "bg-emerald-50 text-emerald-800 font-bold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>{language === "el" ? "Επικοινωνία" : "Get in Touch"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
