"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Users, Home, FileText, GraduationCap } from "lucide-react";

export function HeroPillars() {
  const { language } = useLanguage();

  const pillars = [
    {
      id: "workforce",
      icon: <Users className="w-5 h-5 text-emerald-700" />,
      title: language === "el" ? "Κινητικότητα Εργατικού Δυναμικού" : "Workforce Mobility",
      desc: language === "el"
        ? "Αναζήτηση, επιλογή και συντονισμός τοποθέτησης προσωπικού."
        : "Recruitment, staffing and deployment solutions.",
    },
    {
      id: "housing",
      icon: <Home className="w-5 h-5 text-emerald-700" />,
      title: language === "el" ? "Λύσεις Στέγασης" : "Housing Solutions",
      desc: language === "el"
        ? "Οργανωμένη διαμονή για ομάδες εργαζομένων και φοιτητές."
        : "Managed accommodation for workforces and students.",
    },
    {
      id: "migration",
      icon: <FileText className="w-5 h-5 text-emerald-700" />,
      title: language === "el" ? "Υπηρεσίες Μετανάστευσης" : "Migration Services",
      desc: language === "el"
        ? "Καθοδήγηση visa, αδειών εργασίας και διαμονής."
        : "Visa, work and residence permit support.",
    },
    {
      id: "students",
      icon: <GraduationCap className="w-5 h-5 text-emerald-700" />,
      title: language === "el" ? "Φοιτητική Κινητικότητα" : "Student Mobility",
      desc: language === "el"
        ? "Προγράμματα σπουδών στην Ελλάδα με μετεγκατάσταση και στέγαση."
        : "Study pathways in Greece with relocation and housing.",
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-white border-b border-slate-200 relative z-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="flex items-start gap-3">
              <div className="shrink-0 text-emerald-700 mt-0.5">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-0.5 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

