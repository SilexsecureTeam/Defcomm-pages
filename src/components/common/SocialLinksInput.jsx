import React, { useState, useEffect } from "react";

const chipVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 4 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: -4 },
};

function getPlatformMeta(link) {
  const url = (link || "").toLowerCase();

  if (url.includes("instagram.com")) {
    return {
      label: "IG",
      bg: "bg-gradient-to-r from-fuchsia-500 to-amber-400",
    };
  }
  if (url.includes("tiktok.com")) {
    return { label: "TT", bg: "bg-slate-900" };
  }
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return { label: "YT", bg: "bg-red-600" };
  }
  if (url.includes("twitter.com") || url.includes("x.com")) {
    return { label: "X", bg: "bg-slate-900" };
  }
  if (url.includes("facebook.com") || url.includes("fb.com")) {
    return { label: "FB", bg: "bg-blue-600" };
  }
  if (url.includes("linkedin.com")) {
    return { label: "IN", bg: "bg-blue-700" };
  }

  return { label: "•", bg: "bg-slate-500" };
}

export default function SocialLinksInput({
  value,
  onChange,
  error,
  baseInputClasses,
  normalBorder,
  errorBorder,
}) {
  // 🔹 Normalize incoming value to always be an array
  const links = Array.isArray(value)
    ? value
    : value
    ? String(value)
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean)
    : [];

  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  useEffect(() => {
    setInputValue("");
    setEditingIndex(null);
    setEditingValue("");
  }, [links.length]);

  const commitNew = () => {
    const raw = inputValue.trim();
    if (!raw) return;

    const parts = raw
      .split(",")
      .map((p) => p.trim())
      .filter(Boolean);

    if (!parts.length) return;

    const next = [...links];

    parts.forEach((p) => {
      if (!next.includes(p)) {
        next.push(p);
      }
    });

    onChange(next);
    setInputValue("");
  };

  const handleNewKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab" || e.key === ",") {
      e.preventDefault();
      commitNew();
    }
    if (
      e.key === "Backspace" &&
      !inputValue &&
      links.length &&
      editingIndex === null
    ) {
      const next = [...links];
      next.pop();
      onChange(next);
    }
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditingValue(links[index] || "");
  };

  const saveEdit = () => {
    const trimmed = editingValue.trim();
    const next = [...links];

    if (!trimmed) {
      // empty => remove item
      next.splice(editingIndex, 1);
    } else {
      next[editingIndex] = trimmed;
    }

    onChange(next);
    setEditingIndex(null);
    setEditingValue("");
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditingValue("");
  };

  const handleEditKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      saveEdit();
    }
    if (e.key === "Escape") {
      e.preventDefault();
      cancelEdit();
    }
  };

  const removeChip = (index) => {
    const next = [...links];
    next.splice(index, 1);
    onChange(next);
    if (editingIndex === index) {
      cancelEdit();
    }
  };

  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-slate-800">
        Links to Social Media Platforms <span className="text-red-600">*</span>
      </label>

      <div
        className={`
          ${baseInputClasses}
          ${error ? errorBorder : normalBorder}
          flex flex-wrap gap-1.5 items-center min-h-[48px] py-2
        `}
      >
        {links.map((link, index) => {
          const isEditing = editingIndex === index;
          const meta = getPlatformMeta(link);

          if (isEditing) {
            return (
              <div
                key={`edit-${index}`}
                className="inline-flex items-center gap-1 rounded-full bg-slate-100 border border-slate-300 px-2.5 py-1 shadow-sm"
              >
                <input
                  autoFocus
                  type="text"
                  value={editingValue}
                  onChange={(e) => setEditingValue(e.target.value)}
                  onBlur={saveEdit}
                  onKeyDown={handleEditKeyDown}
                  className="bg-transparent border-none outline-none text-xs md:text-sm text-slate-900 min-w-[150px]"
                />
              </div>
            );
          }

          return (
            <div
              key={`${link}-${index}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/95 text-white px-2.5 py-1.5 text-[11px] md:text-xs shadow-sm"
            >
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold ${meta.bg}`}
              >
                {meta.label}
              </span>
              <button
                type="button"
                onClick={() => startEdit(index)}
                className="max-w-[170px] md:max-w-[220px] text-left truncate hover:underline decoration-white/60"
                title={link}
              >
                {link}
              </button>
              <button
                type="button"
                onClick={() => removeChip(index)}
                className="ml-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-[10px]"
              >
                ✕
              </button>
            </div>
          );
        })}

        {/* inline input for adding new links */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleNewKeyDown}
          onBlur={commitNew}
          placeholder={
            links.length
              ? "Add another link… (Enter or comma)"
              : "Paste or type a link, press Enter or comma…"
          }
          className="flex-1 min-w-[140px] border-none bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400"
        />
      </div>

      {error && <p className="text-xs text-red-600 mt-0.5">{error}</p>}

      <p className="text-xs text-slate-500">
        Add links to your Instagram, TikTok, Facebook, YouTube, X, LinkedIn,
        etc. Click a link to edit it, or press Backspace in an empty field to
        remove the last one.
      </p>
    </div>
  );
}
