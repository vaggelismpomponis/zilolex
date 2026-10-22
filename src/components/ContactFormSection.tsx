"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SectorType, ContactFormData } from "@/lib/types";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  ShieldAlert,
} from "lucide-react";

export function ContactFormSection() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    sector: "tourism",
    workersCount: "1 - 5 εργαζόμενοι",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t.contact.form.errorDesc);
      }

      setStatus("success");
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        sector: "tourism",
        workersCount: "1 - 5 εργαζόμενοι",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage(t.contact.form.errorDesc);
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider mb-4">
            {t.contact.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-3 text-center">
                {t.contact.directContact.title}
              </h3>
              <p className="text-sm text-slate-300 mb-8 leading-relaxed text-center">
                {t.contact.directContact.desc}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">
                      {t.contact.directContact.phoneLabel}
                    </div>
                    <a
                      href={`tel:${t.contact.directContact.phone.replace(/\s+/g, "")}`}
                      className="text-base font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      {t.contact.directContact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">
                      {t.contact.directContact.emailLabel}
                    </div>
                    <a
                      href={`mailto:${t.contact.directContact.email}`}
                      className="text-base font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      {t.contact.directContact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">
                      {t.contact.directContact.addressLabel}
                    </div>
                    <div className="text-base font-semibold text-white">
                      {t.contact.directContact.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">
                      {t.contact.directContact.hoursLabel}
                    </div>
                    <div className="text-base font-semibold text-white">
                      <span className="block sm:inline">{t.contact.directContact.hoursDays} </span>
                      <span className="block sm:inline whitespace-nowrap">{t.contact.directContact.hoursTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct call mobile prompt */}
              <div className="mt-10 pt-6 border-t border-slate-800 text-center">
                <span className="text-xs text-slate-400 font-medium">
                  {t.contact.directContact.responseTime}
                </span>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-sm">
              {status === "success" ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {t.contact.form.successTitle}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-8">
                    {t.contact.form.successDesc}
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="outline"
                    className="font-medium border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white cursor-pointer"
                  >
                    Υποβολή νέου αιτήματος
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="mx-auto text-center text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {t.contact.form.title}
                    </h3>
                  </div>

                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 flex items-start gap-3 text-red-800 dark:text-red-300 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600 dark:text-red-400" />
                      <div>
                        <div className="font-semibold">{t.contact.form.errorTitle}</div>
                        <div>{errorMessage || t.contact.form.errorDesc}</div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="fullName"
                        className="text-xs font-semibold text-slate-700 dark:text-slate-200"
                      >
                        {t.contact.form.fullName} *
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={t.contact.form.fullNamePlaceholder}
                        className="h-11 rounded-lg"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="companyName"
                        className="text-xs font-semibold text-slate-700 dark:text-slate-200"
                      >
                        {t.contact.form.companyName}
                      </label>
                      <Input
                        id="companyName"
                        name="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder={t.contact.form.companyNamePlaceholder}
                        className="h-11 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Corporate Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-slate-700 dark:text-slate-200"
                      >
                        {t.contact.form.email} *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="h-11 rounded-lg"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs font-semibold text-slate-700 dark:text-slate-200"
                      >
                        {t.contact.form.phone} *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.form.phonePlaceholder}
                        className="h-11 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Sector Selection */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="sector"
                        className="text-xs font-semibold text-slate-700 dark:text-slate-200"
                      >
                        {t.contact.form.sector}
                      </label>
                      <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className="w-full h-11 px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#24500F] dark:focus:ring-emerald-500"
                      >
                        <option value="tourism">{t.contact.form.sectorsList.tourism}</option>
                        <option value="agriculture">{t.contact.form.sectorsList.agriculture}</option>
                        <option value="construction">{t.contact.form.sectorsList.construction}</option>
                        <option value="industry">{t.contact.form.sectorsList.industry}</option>
                        <option value="logistics">{t.contact.form.sectorsList.logistics}</option>
                        <option value="other">{t.contact.form.sectorsList.other}</option>
                      </select>
                    </div>

                    {/* Workers Count */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="workersCount"
                        className="text-xs font-semibold text-slate-700 dark:text-slate-200"
                      >
                        {t.contact.form.workersCount}
                      </label>
                      <select
                        id="workersCount"
                        name="workersCount"
                        value={formData.workersCount}
                        onChange={handleChange}
                        className="w-full h-11 px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#24500F] dark:focus:ring-emerald-500"
                      >
                        {t.contact.form.workersOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-200"
                    >
                      {t.contact.form.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="rounded-lg resize-none"
                    />
                  </div>

                  {/* Privacy Policy Note */}
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t.contact.form.privacyNote}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#24500F] hover:bg-[#1a3d0b] text-white hover:text-white font-bold py-3.5 h-auto text-base rounded-lg transition-all shadow-md shadow-[#24500F]/25 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>{t.contact.form.submitting}</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>{t.contact.form.submitBtn}</span>
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
