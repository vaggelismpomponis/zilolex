"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ContactFormSection } from "@/components/ContactFormSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function StudentsPage() {
  const { t, language } = useLanguage();

  const studentItem = t.partnerships.items.find((item) => item.id === "students");

  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 w-full antialiased">
      <Navbar />

      <main className="flex-1 w-full pt-28 sm:pt-36 lg:pt-40">
        {/* Banner with Image */}
        <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
                  {language === "el" ? "Φοιτητική Κινητικότητα" : "Student Mobility"}
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                  {studentItem?.title || (language === "el" ? "Για Φοιτητές" : "For Students")}
                </h1>
                <p className="text-base sm:text-lg text-emerald-800 font-semibold mb-3">
                  {studentItem?.subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {studentItem?.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  <span>{studentItem?.ctaText || (language === "el" ? "Επικοινωνία" : "Get in Touch")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/images/audience-student.jpg"
                  alt="Students in Greece"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Provide for Students */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">
              {language === "el" ? "Ολοκληρωμένη Υποστήριξη Σπουδών & Διαμονής" : "Comprehensive Study & Housing Support"}
            </h2>

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
                <div key={box.num} className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-emerald-700 bg-white border border-slate-200 rounded px-2.5 py-1 inline-block mb-3">
                    {box.num}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
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
