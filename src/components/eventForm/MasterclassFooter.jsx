import React from "react";

const MasterclassFooter = () => {
  return (
    <div className="mt-8 pt-4 border-t border-dashed border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      {/* Left Text */}
      <div className="text-[11px] md:text-xs text-slate-500">
        <p className="font-semibold text-slate-700">
          Stay connected with The Skit Lab & Partners
        </p>
        <p>Follow for updates, resources & highlights from the masterclass.</p>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap items-center gap-2">
        {/* U.S. Mission Nigeria - X */}
        <a
          href="https://twitter.com/USinNigeria"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1.5 text-[11px] font-medium text-white shadow-sm hover:shadow-md transition"
        >
          <span className="h-4 w-4 flex items-center justify-center rounded-full bg-white/10 text-[10px]">
            X
          </span>
          <span>@USinNigeria</span>
        </a>

        {/* U.S. Mission Nigeria - Instagram */}
        <a
          href="https://instagram.com/usinnigeria"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-amber-400 px-3 py-1.5 text-[11px] font-medium text-white shadow-sm hover:shadow-md transition"
        >
          <span className="h-4 w-4 flex items-center justify-center rounded-full bg-white/10 text-[10px]">
            IG
          </span>
          <span>@usinnigeria</span>
        </a>

        {/* U.S. Mission Nigeria - Facebook */}
        <a
          href="https://facebook.com/usinnigeria"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-[11px] font-medium text-white shadow-sm hover:shadow-md transition"
        >
          <span className="h-4 w-4 flex items-center justify-center rounded-full bg-white/10 text-[10px]">
            FB
          </span>
          <span>U.S. Mission Nigeria</span>
        </a>

        {/* Spoke-Wise Media – Instagram */}
        <a
          href="https://instagram.com/spokewise_media"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-amber-400 px-3 py-1.5 text-[11px] font-medium text-white shadow-sm hover:shadow-md transition"
        >
          <span className="h-4 w-4 flex items-center justify-center rounded-full bg-white/10 text-[10px]">
            IG
          </span>
          <span>@spokewise_media</span>
        </a>
      </div>
    </div>
  );
};

export default MasterclassFooter;
