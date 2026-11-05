"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { ContactFormSection } from "@/components/ContactFormSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";

export default function StudentsPage() {
  const { t, language } = useLanguage();
  const studentItem = t.partnerships.items.find((item) => item.id === "students");

  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 w-full antialiased">
      <Navbar />

      <main className="flex-1 w-full">
        <PageBanner
          tag={language === "el" ? "Φοιτητική Κινητικότητα" : "Student Mobility"}
          title={
            language === "el" ? (
              <>
                <span>Σπουδές στην Ελλάδα </span>
                <span className="text-emerald-600">&amp; Ολοκληρωμένη Στέγαση</span>
              </>
            ) : (
              <>
                <span>Study in Greece </span>
                <span className="text-emerald-600">&amp; Managed Housing</span>
              </>
            )
          }
          subtitle={
            studentItem?.subtitle ||
            (language === "el"
              ? "Προγράμματα σπουδών, συντονισμός visa και οργανωμένη φοιτητική διαμονή."
              : "Study pathways in Greece with full relocation and accommodation support.")
          }
          imageSrc="/images/audience-student.jpg"
          imageAlt="Students in Greece"
          objectPosition="object-[65%_25%] sm:object-[60%_30%] lg:object-right"
          primaryCta={{
            href: "/contact",
            text: studentItem?.ctaText || (language === "el" ? "Επικοινωνία" : "Get in Touch"),
          }}
          secondaryCta={{
            href: "/services",
            text: t.nav.services,
          }}
        />

        {/* What We Provide for Students */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
                {language === "el" ? "Υπηρεσίες Υποστήριξης" : "Support Services"}
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {language === "el" ? "Ολοκληρωμένη Υποστήριξη Σπουδών & Διαμονής" : "Comprehensive Study & Housing Support"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: language === "el" ? "Προγράμματα & Εγγραφές" : "Academic Pathways & Enrolment",
                  desc: language === "el"
                    ? "Συνεργασία με κορυφαία ελληνικά πανεπιστήμια και εκπαιδευτικά ιδρύματα για προπτυχιακά και μεταπτυχιακά προγράμματα."
                    : "Partnerships with leading Greek universities and academic institutions for undergraduate and postgraduate study.",
                },
                {
                  num: "02",
                  title: language === "el" ? "Visa & Άδειες Διαμονής" : "Student Visa & Residence Permits",
                  desc: language === "el"
                    ? "Πλήρης συντονισμός δικαιολογητικών, προξενικών εγκρίσεων και νομικών διαδικασιών έκδοσης φοιτητικής άδειας."
                    : "Complete coordination of documentation, consular approvals, and statutory student permit procedures.",
                },
                {
                  num: "03",
                  title: language === "el" ? "Φοιτητική Στέγαση & Υποδοχή" : "Student Housing & Arrival Support",
                  desc: language === "el"
                    ? "Εύρεση και οργάνωση ασφαλούς, πλήρως εξοπλισμένης φοιτητικής διαμονής και υποδοχή στο αεροδρόμιο."
                    : "Securing furnished student accommodation ready before arrival, with airport reception and local orientation.",
                },
              ].map((box) => (
                <div
                  key={box.num}
                  className="group p-6 sm:p-7 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-500/40 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <div className="text-xs font-bold text-emerald-700 bg-white border border-slate-200 rounded px-2.5 py-1 inline-block mb-3">
                    {box.num}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {box.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {box.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FaqSection />

        {/* Contact Form */}
        <ContactFormSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
