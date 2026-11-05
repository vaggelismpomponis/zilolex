"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ContactFormData, AudienceType } from "@/lib/types";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.form;

  const [formData, setFormData] = useState<ContactFormData>({
    audience: "employer",
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    sector: "construction_industry",
    workersCount: "1 - 5 άτομα",
    startDate: "",
    housing: "discuss",
    message: "",
    gdprConsent: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdprConsent) {
      setStatus("error");
      setErrorMessage("Παρακαλούμε επιβεβαιώστε τη συγκατάθεσή σας.");
      return;
    }
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || f.errorDesc);
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : f.errorDesc);
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 bg-white border border-slate-200 rounded-lg text-center shadow-xs animate-in fade-in-50 duration-200">
        <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
        <h4 className="text-lg font-bold text-slate-900 mb-1">{f.successTitle}</h4>
        <p className="text-xs text-slate-600 mb-6">{f.successDesc}</p>
        <button
          onClick={() => setStatus("idle")}
          className="px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider active:scale-95 transition-all duration-200 shadow-xs cursor-pointer"
        >
          Νέο Αίτημα
        </button>
      </div>
    );
  }

  const inputClass = "w-full text-xs px-3 py-2 rounded-md border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-white border border-slate-200 rounded-lg space-y-4 hover:border-slate-300 transition-colors shadow-2xs">
      {status === "error" && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-800 text-xs flex items-center gap-2 animate-in fade-in-50 duration-200">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Audience selector */}
      <div>
        <label className="text-xs font-bold text-slate-800 block mb-1.5">{f.audienceLabel}</label>
          <div role="group" aria-label={f.audienceLabel} className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {(["employer", "agency", "student", "institution", "candidate"] as AudienceType[]).map((aud) => (
              <button
                key={aud}
                type="button"
                onClick={() => setFormData((p) => ({ ...p, audience: aud }))}
                aria-pressed={formData.audience === aud}
                className={`px-2.5 py-1.5 rounded-md text-[11px] font-bold border transition-all duration-200 active:scale-95 cursor-pointer ${formData.audience === aud
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                  }`}
              >
                {f.audienceOptions[aud]}
              </button>
            ))}
          </div>
        </div>

        {/* Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="contact-fullName" className="text-xs font-semibold text-slate-700 block mb-1">{f.fullName} *</label>
            <input
              id="contact-fullName"
              name="fullName"
              type="text"
              required
              aria-required="true"
              aria-label={f.fullName}
              value={formData.fullName}
              onChange={handleChange}
              placeholder={f.fullNamePlaceholder}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-companyName" className="text-xs font-semibold text-slate-700 block mb-1">{f.companyName}</label>
            <input
              id="contact-companyName"
              name="companyName"
              type="text"
              aria-label={f.companyName}
              value={formData.companyName}
              onChange={handleChange}
              placeholder={f.companyNamePlaceholder}
              className={inputClass}
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700 block mb-1">{f.email} *</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              aria-required="true"
              aria-label={f.email}
              value={formData.email}
              onChange={handleChange}
              placeholder={f.emailPlaceholder}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className="text-xs font-semibold text-slate-700 block mb-1">{f.phone} *</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              aria-required="true"
              aria-label={f.phone}
              value={formData.phone}
              onChange={handleChange}
              placeholder={f.phonePlaceholder}
              className={inputClass}
            />
          </div>
        </div>

        {/* Sector & Headcount */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="contact-sector" className="text-xs font-semibold text-slate-700 block mb-1">{f.sector}</label>
            <select
              id="contact-sector"
              name="sector"
              aria-label={f.sector}
              value={formData.sector}
              onChange={handleChange}
              className={`${inputClass} bg-white cursor-pointer`}
            >
              <option value="construction_industry">{f.sectorsList.construction_industry}</option>
              <option value="tourism_hospitality">{f.sectorsList.tourism_hospitality}</option>
              <option value="other">{f.sectorsList.other}</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-workersCount" className="text-xs font-semibold text-slate-700 block mb-1">{f.workersCount}</label>
            <select
              id="contact-workersCount"
              name="workersCount"
              aria-label={f.workersCount}
              value={formData.workersCount}
              onChange={handleChange}
              className={`${inputClass} bg-white cursor-pointer`}
            >
              {f.workersOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Start Date & Housing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="contact-startDate" className="text-xs font-semibold text-slate-700 block mb-1">{f.startDate}</label>
            <input
              id="contact-startDate"
              name="startDate"
              type="text"
              aria-label={f.startDate}
              value={formData.startDate}
              onChange={handleChange}
              placeholder={f.startDatePlaceholder}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-housing" className="text-xs font-semibold text-slate-700 block mb-1">{f.housingLabel}</label>
            <select
              id="contact-housing"
              name="housing"
              aria-label={f.housingLabel}
              value={formData.housing}
              onChange={handleChange}
              className={`${inputClass} bg-white cursor-pointer`}
            >
              <option value="yes">{f.housingOptions.yes}</option>
              <option value="no">{f.housingOptions.no}</option>
              <option value="discuss">{f.housingOptions.discuss}</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700 block mb-1">{f.message}</label>
          <textarea
            id="contact-message"
            name="message"
            rows={3}
            aria-label={f.message}
            value={formData.message}
            onChange={handleChange}
            placeholder={f.messagePlaceholder}
            className={inputClass}
          />
        </div>

        {/* GDPR Consent */}
        <div className="flex items-start gap-2 pt-1">
          <input
            id="contact-gdpr"
            name="gdprConsent"
            type="checkbox"
            required
            aria-required="true"
            aria-label={f.privacyNote}
            checked={formData.gdprConsent}
            onChange={handleChange}
            className="mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
          />
            <label htmlFor="contact-gdpr" className="text-[11px] text-slate-600 leading-tight cursor-pointer">
              {f.privacyNote}
            </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider hover:shadow-md hover:shadow-emerald-600/20 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
        >
          {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : f.submitBtn}
        </button>
    </form>
  );
}
