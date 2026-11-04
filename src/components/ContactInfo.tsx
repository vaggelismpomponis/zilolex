"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export function ContactInfo() {
  const { t } = useLanguage();
  const c = t.contact.directContact;

  return (
    <div className="p-6 sm:p-8 rounded-lg bg-slate-900 text-white">
      <h3 className="text-xl font-bold mb-2">{c.title}</h3>
      <p className="text-xs text-slate-300 mb-6 leading-relaxed">{c.desc}</p>

      <div className="space-y-5">
        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-[11px] text-slate-400 font-medium">{c.addressLabel}</div>
            <div className="text-xs font-semibold text-white">{c.address}</div>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-[11px] text-slate-400 font-medium">{c.phoneLabel}</div>
            <a
              href={`tel:${c.phone.replace(/\s+/g, "")}`}
              className="text-xs font-semibold text-white hover:text-emerald-300 transition-colors"
            >
              {c.phone}
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-start gap-3">
          <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-[11px] text-slate-400 font-medium">{c.whatsappLabel}</div>
            <a
              href={`https://wa.me/${c.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <span>{c.whatsappAction}</span>
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
          <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-[11px] text-slate-400 font-medium">{c.emailLabel}</div>
            <a
              href={`mailto:${c.email}`}
              className="text-xs font-semibold text-white hover:text-emerald-300 transition-colors"
            >
              {c.email}
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-3">
          <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-[11px] text-slate-400 font-medium">{c.hoursLabel}</div>
            <div className="text-xs font-semibold text-white">{c.hours}</div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-slate-800 text-[11px] text-slate-400">
        {c.responseTime}
      </div>
    </div>
  );
}

