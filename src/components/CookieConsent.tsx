"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Cookie, ShieldCheck, BarChart3, Megaphone, Sliders, Check, X, Lock } from "lucide-react";

const COOKIE_STORAGE_KEY = "zilolex_cookie_consent";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

export function CookieConsent() {
  const { t } = useLanguage();
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!saved) {
        setIsOpen(true);
      } else {
        try {
          const parsed: CookiePreferences = JSON.parse(saved);
          setAnalytics(parsed.analytics ?? true);
          setMarketing(parsed.marketing ?? false);
        } catch {
          setIsOpen(true);
        }
      }
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Listen for custom trigger to reopen modal (e.g. from footer link or floating badge)
  useEffect(() => {
    const handleOpen = () => {
      setShowPreferences(true);
      setIsOpen(true);
    };

    window.addEventListener("zilolex_open_cookie_modal", handleOpen);
    return () => window.removeEventListener("zilolex_open_cookie_modal", handleOpen);
  }, []);

  // Handle ESC key to close preferences modal if open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showPreferences) {
        setShowPreferences(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPreferences]);

  const saveConsent = (prefs: { necessary: boolean; analytics: boolean; marketing: boolean }) => {
    const data: CookiePreferences = {
      ...prefs,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(data));
    setAnalytics(prefs.analytics);
    setMarketing(prefs.marketing);
    setIsOpen(false);
    setShowPreferences(false);

    // Dispatch event so any scripts/analytics can initialize according to user choice
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("zilolex_cookie_consent_updated", { detail: data }));
    }
  };

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const handleNecessaryOnly = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  const handleSavePreferences = () => {
    saveConsent({ necessary: true, analytics, marketing });
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Discreet Floating Trigger Button (Available once consent has been given) */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => {
            setShowPreferences(true);
            setIsOpen(true);
          }}
          className="fixed bottom-5 left-5 z-40 p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-700 shadow-lg hover:shadow-emerald-500/10 transition-all duration-200 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          title={t.cookieConsent.cookieBadge}
          aria-label={t.cookieConsent.cookieBadge}
        >
          <Cookie className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200 text-emerald-600 dark:text-emerald-400" />
        </button>
      )}

      {/* Main Consent Banner / Modal */}
      {isOpen && (
        <>
          {/* Detailed Preferences Modal Dialog */}
          {showPreferences ? (
            <div
              className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-preferences-title"
            >
              <div
                className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-slate-950/40">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 text-emerald-600 dark:text-emerald-400">
                      <Cookie className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        id="cookie-preferences-title"
                        className="text-lg font-bold text-slate-900 dark:text-white"
                      >
                        {t.cookieConsent.preferencesTitle}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {t.cookieConsent.preferencesSubtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const hasConsented = localStorage.getItem(COOKIE_STORAGE_KEY);
                      if (hasConsented) {
                        setIsOpen(false);
                        setShowPreferences(false);
                      } else {
                        setShowPreferences(false);
                      }
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Categories Body */}
                <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                  {/* Category 1: Strictly Necessary */}
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-slate-900 dark:text-white">
                              {t.cookieConsent.categories.necessary.title}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                              <Lock className="w-2.5 h-2.5" />
                              {t.cookieConsent.categories.necessary.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                            {t.cookieConsent.categories.necessary.desc}
                          </p>
                        </div>
                      </div>

                      {/* Locked Toggle Switch */}
                      <div className="shrink-0 pt-0.5">
                        <div className="w-11 h-6 bg-emerald-600 rounded-full relative cursor-not-allowed opacity-90 flex items-center px-1">
                          <div className="w-4 h-4 bg-white rounded-full translate-x-5 shadow-xs flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[3]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category 2: Analytics & Performance */}
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0 text-sky-600 dark:text-sky-400">
                          <BarChart3 className="w-4 h-4" />
                        </div>
                        <div>
                          <label
                            htmlFor="analytics-toggle"
                            className="font-bold text-sm text-slate-900 dark:text-white cursor-pointer"
                          >
                            {t.cookieConsent.categories.analytics.title}
                          </label>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                            {t.cookieConsent.categories.analytics.desc}
                          </p>
                        </div>
                      </div>

                      {/* Interactive Toggle Switch */}
                      <div className="shrink-0 pt-0.5">
                        <button
                          type="button"
                          id="analytics-toggle"
                          role="switch"
                          aria-checked={analytics}
                          onClick={() => setAnalytics((prev) => !prev)}
                          className={`w-11 h-6 rounded-full relative transition-colors duration-200 cursor-pointer flex items-center px-1 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                            analytics
                              ? "bg-emerald-600"
                              : "bg-slate-300 dark:bg-slate-700"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 shadow-xs flex items-center justify-center ${
                              analytics ? "translate-x-5" : "translate-x-0"
                            }`}
                          >
                            {analytics && <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[3]" />}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Category 3: Marketing & Personalization */}
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0 text-purple-600 dark:text-purple-400">
                          <Megaphone className="w-4 h-4" />
                        </div>
                        <div>
                          <label
                            htmlFor="marketing-toggle"
                            className="font-bold text-sm text-slate-900 dark:text-white cursor-pointer"
                          >
                            {t.cookieConsent.categories.marketing.title}
                          </label>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                            {t.cookieConsent.categories.marketing.desc}
                          </p>
                        </div>
                      </div>

                      {/* Interactive Toggle Switch */}
                      <div className="shrink-0 pt-0.5">
                        <button
                          type="button"
                          id="marketing-toggle"
                          role="switch"
                          aria-checked={marketing}
                          onClick={() => setMarketing((prev) => !prev)}
                          className={`w-11 h-6 rounded-full relative transition-colors duration-200 cursor-pointer flex items-center px-1 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                            marketing
                              ? "bg-emerald-600"
                              : "bg-slate-300 dark:bg-slate-700"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 shadow-xs flex items-center justify-center ${
                              marketing ? "translate-x-5" : "translate-x-0"
                            }`}
                          >
                            {marketing && <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[3]" />}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 flex flex-col sm:flex-row items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={handleSavePreferences}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 transition-all cursor-pointer shadow-2xs"
                  >
                    {t.cookieConsent.savePreferences}
                  </button>

                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[var(--color-emerald-400)] hover:bg-emerald-300 text-slate-950 font-bold text-xs shadow-md shadow-emerald-400/20 active:scale-95 transition-all cursor-pointer"
                  >
                    {t.cookieConsent.acceptAll}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Bottom Floating Consent Banner */
            <div
              className="fixed bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-auto sm:right-6 sm:max-w-xl z-50 animate-in slide-in-from-bottom-5 duration-300"
              role="region"
              aria-label={t.cookieConsent.title}
            >
              <div className="relative p-6 sm:p-7 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-2xl text-slate-900 dark:text-white">
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <Cookie className="w-5 h-5" />
                  </div>
                  <div className="flex-1 pr-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                        {t.cookieConsent.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {t.cookieConsent.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {t.cookieConsent.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setShowPreferences(true)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>{t.cookieConsent.customize}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNecessaryOnly}
                    className="px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors cursor-pointer shadow-2xs"
                  >
                    {t.cookieConsent.necessaryOnly}
                  </button>

                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="px-5 py-2 text-xs font-bold text-slate-950 rounded-lg bg-[var(--color-emerald-400)] hover:bg-emerald-300 shadow-md shadow-emerald-400/25 active:scale-95 transition-all cursor-pointer"
                  >
                    {t.cookieConsent.acceptAll}
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
