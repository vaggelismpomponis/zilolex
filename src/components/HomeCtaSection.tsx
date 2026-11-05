"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ShieldCheck, Globe2, Building } from "lucide-react";

export function HomeCtaSection() {
  const { language } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 lg:p-16 shadow-2xs">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3 block">
              {language === "el" ? "Ξεκινήστε Σήμερα" : "Get Started Today"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {language === "el"
                ? "Εξειδικευμένες Λύσεις Εργατικού Δυναμικού & Στέγασης"
                : "Specialized Workforce & Student Infrastructure Solutions"}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              {language === "el"
                ? "Συνδέουμε επιχειρήσεις, οργανισμούς και φοιτητές με αξιοπιστία, ταχύτητα και πλήρη συμμόρφωση με την ελληνική νομοθεσία."
                : "Connecting enterprises, agencies, and students with reliability, speed, and strict statutory compliance in Greece."}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs hover:shadow-md hover:shadow-emerald-700/20 active:scale-95 cursor-pointer"
              >
                <span>{language === "el" ? "Επικοινωνήστε Μαζί μας" : "Contact Our Team"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-md bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-all shadow-2xs active:scale-95 cursor-pointer"
              >
                <span>{language === "el" ? "Όλες οι Υπηρεσίες" : "Explore Services"}</span>
              </Link>
            </div>

            {/* 3 Value Highlights */}
            <div className="pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-0.5">
                    {language === "el" ? "Πλήρης Συμμόρφωση" : "Strict Compliance"}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {language === "el" ? "Ν. 5038/2023 & ευρωπαϊκό πλαίσιο μετανάστευσης." : "Greek Law 5038/2023 & statutory standards."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-700">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-0.5">
                    {language === "el" ? "Διεθνής Αναζήτηση" : "Global Sourcing"}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {language === "el" ? "Τοπικές και διεθνείς αγορές εργασίας." : "Local and international workforce pipelines."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-700">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-0.5">
                    {language === "el" ? "Οργανωμένη Στέγαση" : "Turnkey Housing"}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {language === "el" ? "Διαχείριση καταλυμάτων για εργαζομένους & φοιτητές." : "Managed accommodation for workforces & students."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
