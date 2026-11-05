"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Building2, Handshake, GraduationCap, Landmark } from "lucide-react";

export function AudienceCards() {
  const { language } = useLanguage();

  const cards = [
    {
      id: "employer",
      title: language === "el" ? "Είστε Εργοδότης;" : "Are you an Employer?",
      desc: language === "el"
        ? "Βρείτε το κατάλληλο προσωπικό και λύσεις για να αναπτύξετε την επιχείρησή σας."
        : "Find the people and solutions to grow your business.",
      image: "/images/audience-employer.jpg",
      href: "/employers",
      icon: <Building2 className="w-5 h-5 text-emerald-600" />,
    },
    {
      id: "agency",
      title: language === "el" ? "Είστε Γραφείο Ευρέσεως;" : "Are you a Recruitment Agency?",
      desc: language === "el"
        ? "Συνεργαστείτε με τη Zilolex για αξιόπιστη μετεγκατάσταση και στέγαση."
        : "Partner with Zilolex for reliable deployment and accommodation.",
      image: "/images/audience-agency.jpg",
      href: "/partnerships",
      icon: <Handshake className="w-5 h-5 text-emerald-600" />,
    },
    {
      id: "student",
      title: language === "el" ? "Είστε Φοιτητής;" : "Are you a Student?",
      desc: language === "el"
        ? "Ανακαλύψτε ευκαιρίες σπουδών στην Ελλάδα με πλήρη υποστήριξη."
        : "Explore study opportunities in Greece with full support.",
      image: "/images/audience-student.jpg",
      href: "/students",
      icon: <GraduationCap className="w-5 h-5 text-emerald-600" />,
    },
    {
      id: "institution",
      title: language === "el" ? "Είστε Εκπαιδευτικό Ίδρυμα;" : "Are you an Educational Institution?",
      desc: language === "el"
        ? "Συνεργαστείτε μαζί μας για την προσέλκυση και στήριξη διεθνών φοιτητών."
        : "Partner with us to attract and support international students.",
      image: "/images/audience-institution.jpg",
      href: "/partnerships",
      icon: <Landmark className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
            >
              {/* Card Photo (rounded top) */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Bottom Area (matching photo) */}
              <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-white">
                <div className="flex items-start gap-2.5 flex-1 min-w-0">
                  <div className="shrink-0 mt-0.5 text-emerald-700">
                    {card.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight mb-1">
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Circular green arrow button */}
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-700 group-hover:bg-emerald-800 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
