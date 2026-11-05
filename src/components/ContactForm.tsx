"use client";

import React, { useState, useSyncExternalStore } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ContactFormData, AudienceType } from "@/lib/types";
import { CustomSelect, SelectOption } from "@/components/ui/select";
import { AudienceSelector } from "@/components/AudienceSelector";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const INITIAL_FORM: ContactFormData = {
  audience: "employer",
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  sector: "construction_industry",
  specialties: "",
  workersCount: "1 - 5 άτομα",
  startDate: "",
  housing: "discuss",
  message: "",
  gdprConsent: false,
};

const INPUT_CLASS =
  "w-full text-xs px-3 py-2 min-h-[36px] rounded-md border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200";

const subscribe = () => () => {};

export function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.form;

  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const today = useSyncExternalStore(
    subscribe,
    () => new Date().toISOString().split("T")[0],
    () => ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const setFieldValue = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
          onClick={() => {
            setFormData(INITIAL_FORM);
            setStatus("idle");
          }}
          className="px-4 py-2 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider active:scale-95 transition-all duration-200 shadow-xs cursor-pointer"
        >
          Νέο Αίτημα
        </button>
      </div>
    );
  }

  const sectorOptions: SelectOption[] = [
    { value: "construction_industry", label: f.sectorsList.construction_industry },
    { value: "tourism_hospitality", label: f.sectorsList.tourism_hospitality },
    { value: "other", label: f.sectorsList.other },
  ];
  const workersOptions: SelectOption[] = f.workersOptions.map((opt) => ({ value: opt, label: opt }));
  const housingOptions: SelectOption[] = [
    { value: "yes", label: f.housingOptions.yes },
    { value: "no", label: f.housingOptions.no },
    { value: "discuss", label: f.housingOptions.discuss },
  ];

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-white border border-slate-200 rounded-lg space-y-4 hover:border-slate-300 transition-colors shadow-2xs">
      {status === "error" && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-800 text-xs flex items-center gap-2 animate-in fade-in-50 duration-200">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <AudienceSelector
        label={f.audienceLabel}
        options={f.audienceOptions}
        selected={formData.audience}
        onChange={(aud: AudienceType) => setFieldValue("audience", aud)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="contact-fullName" className="text-xs font-semibold text-slate-700 block mb-1">
            {f.fullName} *
          </label>
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
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="contact-companyName" className="text-xs font-semibold text-slate-700 block mb-1">
            {f.companyName}
          </label>
          <input
            id="contact-companyName"
            name="companyName"
            type="text"
            aria-label={f.companyName}
            value={formData.companyName}
            onChange={handleChange}
            placeholder={f.companyNamePlaceholder}
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700 block mb-1">
            {f.email} *
          </label>
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
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="text-xs font-semibold text-slate-700 block mb-1">
            {f.phone} *
          </label>
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
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="contact-sector" className="text-xs font-semibold text-slate-700 block mb-1">
            {f.sector}
          </label>
          <CustomSelect
            id="contact-sector"
            name="sector"
            aria-label={f.sector}
            value={formData.sector}
            onChange={(val) => setFieldValue("sector", val)}
            options={sectorOptions}
            placeholder={f.sectorPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="contact-specialties" className="text-xs font-semibold text-slate-700 block mb-1">
            {f.specialtiesLabel}
          </label>
          <input
            id="contact-specialties"
            name="specialties"
            type="text"
            aria-label={f.specialtiesLabel}
            value={formData.specialties}
            onChange={handleChange}
            placeholder={f.specialtiesPlaceholder}
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="contact-workersCount" className="text-xs font-semibold text-slate-700 block mb-1">
            {f.workersCount}
          </label>
          <CustomSelect
            id="contact-workersCount"
            name="workersCount"
            aria-label={f.workersCount}
            value={formData.workersCount}
            onChange={(val) => setFieldValue("workersCount", val)}
            options={workersOptions}
            placeholder={f.workersCountPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="contact-startDate" className="text-xs font-semibold text-slate-700 block mb-1">
            {f.startDate}
          </label>
          <input
            id="contact-startDate"
            name="startDate"
            type="date"
            min={today || undefined}
            style={{ colorScheme: "light" }}
            aria-label={f.startDate}
            value={formData.startDate}
            onChange={handleChange}
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-housing" className="text-xs font-semibold text-slate-700 block mb-1">
          {f.housingLabel}
        </label>
        <CustomSelect
          id="contact-housing"
          name="housing"
          aria-label={f.housingLabel}
          value={formData.housing}
          onChange={(val) => setFieldValue("housing", val as ContactFormData["housing"])}
          options={housingOptions}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700 block mb-1">
          {f.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          aria-label={f.message}
          value={formData.message}
          onChange={handleChange}
          placeholder={f.messagePlaceholder}
          className="w-full text-xs px-3 py-2 rounded-md border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200"
        />
      </div>

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

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider hover:shadow-md hover:shadow-emerald-700/20 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
      >
        {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : f.submitBtn}
      </button>
    </form>
  );
}
