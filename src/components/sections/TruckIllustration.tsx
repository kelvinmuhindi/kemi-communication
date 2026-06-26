export function TruckIllustration() {
  return (
    <div className="relative h-[300px] sm:h-[420px]">
      <svg
        className="absolute left-0 top-0 h-[60%] w-full opacity-45"
        viewBox="0 0 500 260"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M30 20 C 150 90, 250 60, 470 30"
          stroke="#5B6670"
          strokeWidth="2"
          strokeDasharray="5 7"
          fill="none"
        />
      </svg>

      <span className="absolute left-[6%] top-[8%] h-3.5 w-3.5 rounded-full bg-brand-orange shadow-[0_0_0_6px_rgba(255,151,0,0.18)]" />
      <span className="absolute left-[9%] top-[3%] rounded-sm border border-brand-line bg-brand-paper-warm px-2 py-0.5 text-[11px] font-bold text-brand-ink-soft">
        NAIROBI
      </span>

      <span className="absolute left-[38%] top-[28%] h-3.5 w-3.5 rounded-full bg-brand-orange shadow-[0_0_0_6px_rgba(255,151,0,0.18)]" />
      <span className="absolute left-[41%] top-[23%] rounded-sm border border-brand-line bg-brand-paper-warm px-2 py-0.5 text-[11px] font-bold text-brand-ink-soft">
        NAKURU
      </span>

      <span className="absolute left-[70%] top-[4%] h-3.5 w-3.5 rounded-full bg-brand-orange shadow-[0_0_0_6px_rgba(255,151,0,0.18)]" />
      <span className="absolute left-[73%] -top-[1%] rounded-sm border border-brand-line bg-brand-paper-warm px-2 py-0.5 text-[11px] font-bold text-brand-ink-soft">
        KISUMU
      </span>

      <div className="absolute bottom-[70px] left-0 right-0 h-16 rounded bg-brand-ink">
        <div
          className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #FF9700 0 26px, transparent 26px 46px)",
          }}
        />
      </div>

      <svg
        className="absolute bottom-[96px] right-[4%] z-10 w-[78%]"
        viewBox="0 0 340 140"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="0" y="30" width="180" height="70" rx="4" fill="#FF9700" />
        <rect x="0" y="30" width="180" height="14" fill="#E08300" />
        <path
          d="M180 30 L180 100 L300 100 L300 60 L260 60 L240 30 Z"
          fill="#181614"
        />
        <rect
          x="246"
          y="36"
          width="34"
          height="20"
          rx="2"
          fill="#FAF7F3"
          opacity="0.85"
        />
        <circle cx="60" cy="108" r="20" fill="#181614" />
        <circle cx="60" cy="108" r="8" fill="#5B6670" />
        <circle cx="150" cy="108" r="20" fill="#181614" />
        <circle cx="150" cy="108" r="8" fill="#5B6670" />
        <circle cx="265" cy="108" r="20" fill="#181614" />
        <circle cx="265" cy="108" r="8" fill="#5B6670" />
        <rect x="10" y="44" width="60" height="4" fill="#fff" opacity="0.5" />
        <rect x="10" y="54" width="40" height="4" fill="#fff" opacity="0.5" />
      </svg>
    </div>
  );
}
