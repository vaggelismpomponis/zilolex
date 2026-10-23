"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, ShieldAlert, Award, FileText, Check } from "lucide-react";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            {t.about.tag}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              {t.about.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium mb-4 leading-relaxed">
              {t.about.lead}
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              {t.about.body1}
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {t.about.body2}
            </p>

            {/* Checklist */}
            <div className="space-y-3">
              {t.about.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-emerald-400)] text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3.5 h-3.5 text-slate-950 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Highlight Card Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-800">
              <div className="absolute -top-3 right-4 sm:right-6 px-3.5 py-1 rounded-full bg-[var(--color-emerald-400)] text-slate-950 border border-emerald-300/60 font-extrabold text-xs uppercase tracking-wider shadow-sm">
                Ν. 5038/2023
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Εγγύηση Διαφάνειας & Νομιμότητας
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Όλες οι ενέργειες πραγματοποιούνται μέσω του Ολοκληρωμένου Πληροφοριακού Συστήματος (ΟΠΣ) Μετανάστευση και των επίσημων διακρατικών συμφωνιών της Ελληνικής Δημοκρατίας.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="font-semibold text-sm text-slate-900 dark:text-white">
                    Πλήρης Έλεγχος Ποινικού Μητρώου & Υγείας
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Κάθε εργαζόμενος υποβάλλεται σε ιατρικό έλεγχο και προσκομίζει καθαρό αντίγραφο ποινικού μητρώου από τη χώρα προέλευσης.
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="font-semibold text-sm text-slate-900 dark:text-white">
                    Σύνταξη & Κατάθεση Συμβάσεων Εργασίας
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Συμβάσεις ορισμένου χρόνου ή εποχικής απασχόλησης σύμφωνα με την ελληνική εργατική νομοθεσία και τις συλλογικές συμβάσεις.
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="font-semibold text-sm text-slate-900 dark:text-white">
                    Διεκπεραίωση ΑΦΜ, ΑΜΚΑ & Τραπεζικού Λογαριασμού
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Διασφάλιση της ομαλής έναρξης εργασίας χωρίς γραφειοκρατικό φόρτο για το λογιστήριο της επιχείρησής σας.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
