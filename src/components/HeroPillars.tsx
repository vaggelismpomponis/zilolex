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
      title:
        language === "el"
          ? "Μετάκληση & Τοποθέτηση Προσωπικού"
          : "Workforce Relocation & Placement",
      desc: "",
    },
    {
      id: "housing",
      icon: <Home className="w-5 h-5 text-emerald-700" />,
      title:
        language === "el"
          ? "Οργάνωση & Διαχείριση Διαμονής"
          : "Accommodation Organization & Management",
      desc:
        language === "el"
          ? "Εξασφαλίζουμε την αναζήτηση και οργάνωση κατάλληλων λύσεων διαμονής για εργαζομένους και φοιτητές."
          : "Ensuring the search and organization of suitable accommodation solutions for workers and students.",
    },
    {
      id: "migration",
      icon: <FileText className="w-5 h-5 text-emerald-700" />,
      title:
        language === "el"
          ? "Διεκπεραίωση Διαδικασιών Visa & Αδειών Διαμονής"
          : "Visa & Residence Permit Processing",
      desc:
        language === "el"
          ? "Αναλαμβάνουμε τη συγκέντρωση και προετοιμασία των απαραίτητων δικαιολογητικών, καθώς και τον συντονισμό και τη διεκπεραίωση των διαδικασιών για την έκδοση visa, αδειών εργασίας και αδειών διαμονής στην Ελλάδα."
          : "We handle the collection and preparation of required documents, coordinating and processing procedures for visas, work permits, and residence permits in Greece.",
    },
    {
      id: "students",
      icon: <GraduationCap className="w-5 h-5 text-emerald-700" />,
      title:
        language === "el"
          ? "Σπουδές & Εγκατάσταση στην Ελλάδα"
          : "Studies & Relocation in Greece",
      desc:
        language === "el"
          ? "Υποστηρίζουμε τη διαδικασία μετακίνησης φοιτητών στην Ελλάδα για σπουδές, αναλαμβάνοντας τον συντονισμό των απαραίτητων διαδικασιών μετεγκατάστασης και την οργάνωση της διαμονής τους."
          : "We support the relocation process for international students in Greece, coordinating all required procedures and managing their accommodation.",
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
                {pillar.desc && (
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

