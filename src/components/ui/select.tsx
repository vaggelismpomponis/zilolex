"use client";

import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "cn";

export interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface CustomSelectProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}

export function CustomSelect({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = "Επιλέξτε...",
  disabled = false,
  className,
  "aria-label": ariaLabel,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const generatedId = React.useId();
  const listboxId = id ? `${id}-listbox` : `select-${generatedId}-listbox`;

  const selectedOption = options.find((opt) => opt.value === value);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        const cur = options.findIndex((opt) => opt.value === value);
        const next =
          e.key === "ArrowDown"
            ? cur < options.length - 1
              ? cur + 1
              : 0
            : cur > 0
            ? cur - 1
            : options.length - 1;
        onChange(options[next].value);
      }
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {name && <input type="hidden" name={name} value={value} />}
      <button
        id={id}
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={cn(
          "w-full min-h-[36px] px-3 py-2 text-xs rounded-md border border-slate-200 bg-white text-slate-800 flex items-center justify-between transition-all outline-none cursor-pointer text-left shadow-2xs",
          isOpen
            ? "border-emerald-500 ring-2 ring-emerald-500/20"
            : "hover:border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20",
          disabled && "opacity-50 cursor-not-allowed bg-slate-50",
          className
        )}
      >
        <span className={cn("truncate font-medium", !selectedOption && "text-slate-400")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ml-1.5",
            isOpen && "rotate-180 text-emerald-600"
          )}
        />
      </button>

      {isOpen && (
        <div
          id={listboxId}
          role="listbox"
          tabIndex={-1}
          className="absolute z-50 left-0 right-0 top-full mt-1 p-1 bg-white border border-slate-200 rounded-md shadow-lg max-h-56 overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-100"
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <div
                key={option.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex items-center justify-between px-2.5 py-1.5 rounded text-xs transition-colors cursor-pointer select-none",
                  isSelected
                    ? "bg-emerald-50 text-emerald-800 font-semibold"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-medium"
                )}
              >
                <div className="flex items-center gap-1.5 truncate">
                  {option.icon}
                  <span className="truncate">{option.label}</span>
                </div>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-2 stroke-[2.5]" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
