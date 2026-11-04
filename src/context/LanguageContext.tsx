"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { Language } from "@/lib/types";
import { translations } from "@/lib/translations";

type TranslationType = typeof translations.el;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("languagechange", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("languagechange", callback);
  };
}

function getSnapshot(): Language {
  if (typeof window === "undefined") return "el";
  const saved = localStorage.getItem("preferred_lang");
  return saved === "en" ? "en" : "el";
}

function getServerSnapshot(): Language {
  return "el";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    localStorage.setItem("preferred_lang", lang);
    document.documentElement.lang = lang;
    window.dispatchEvent(new Event("languagechange"));
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
