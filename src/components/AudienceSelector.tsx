"use client";

import React from "react";
import { AudienceType } from "@/lib/types";

interface AudienceSelectorProps {
  label: string;
  options: Record<AudienceType, string>;
  selected: AudienceType;
  onChange: (audience: AudienceType) => void;
}

export function AudienceSelector({
  label,
  options,
  selected,
  onChange,
}: AudienceSelectorProps) {
  return (
    <div>
      <label className="text-xs font-bold text-slate-800 block mb-1.5">{label}</label>
      <div role="group" aria-label={label} className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
        {(["employer", "agency", "student", "institution", "candidate"] as AudienceType[]).map(
          (aud) => (
            <button
              key={aud}
              type="button"
              onClick={() => onChange(aud)}
              aria-pressed={selected === aud}
              className={`px-2.5 py-1.5 rounded-md text-[11px] font-bold border transition-all duration-200 active:scale-95 cursor-pointer ${
                selected === aud
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              {options[aud]}
            </button>
          )
        )}
      </div>
    </div>
  );
}

