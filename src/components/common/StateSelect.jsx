import React, { useState, useMemo } from "react";
import { NIGERIAN_STATES } from "../../utils/data/state";

export default function StateSelect({
  value,
  onChange,
  error,
  label = "Location (State)",
  required = true,
  baseInputClasses,
  normalBorder,
  errorBorder,
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredStates = useMemo(() => {
    const q = search.toLowerCase();
    return NIGERIAN_STATES.filter((state) => state.toLowerCase().includes(q));
  }, [search]);

  const handleSelect = (state) => {
    onChange(state);
    setOpen(false);
    setSearch("");
  };

  return (
    <div className="space-y-1.5 relative">
      <label className="block text-sm font-medium text-slate-800">
        {label} {required && <span className="text-red-600">*</span>}
      </label>

      {/* Clickable "input" area */}
      <div
        className={`relative ${
          error ? errorBorder : normalBorder
        } ${baseInputClasses} cursor-pointer flex items-center justify-between`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={value ? "text-slate-900" : "text-slate-400"}>
          {value || "Select your state"}
        </span>
        <svg
          className={`h-4 w-4 text-slate-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {error && <p className="text-xs text-red-600 mt-0.5">{error}</p>}

      {open && (
        <div className="absolute z-20 mt-1 w-full rounded-md border border-slate-200 bg-white shadow-lg max-h-60 overflow-hidden">
          <div className="p-2 border-b border-slate-100">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search state..."
              className="w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-xs outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-800/30"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <ul className="max-h-40 overflow-y-auto text-sm">
            {filteredStates.length === 0 && (
              <li className="px-3 py-2 text-slate-400 text-xs">
                No state found
              </li>
            )}
            {filteredStates.map((state) => (
              <li
                key={state}
                className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-slate-800"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(state);
                }}
              >
                {state}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
