"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language } from "@/lib/types";
import { translations } from "@/lib/translations";

type TranslationType = typeof translations.el;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("el");

  useEffect(() => {
    const saved = localStorage.getItem("preferred_lang") as Language | null;
    if (saved && (saved === "el" || saved === "en")) {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = "el";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred_lang", lang);
    document.documentElement.lang = lang;
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
