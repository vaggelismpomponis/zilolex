"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Επιστροφή στην κορυφή"
      className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white border border-slate-700/80 shadow-xl backdrop-blur-sm transition-all duration-300 ease-in-out cursor-pointer hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-sky-400 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 text-sky-400 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
