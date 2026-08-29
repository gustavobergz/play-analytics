// Lightweight inline SVG charts — no external deps

export function AreaChart({ data, color = "primary" }: { data: number[]; color?: "primary" | "lime" | "orange" }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 320, h = 100;
  const step = w / (data.length - 1);
  const points = data.map((v, i) => [i * step, h - ((v - min) / range) * (h - 10) - 5] as const);
  const line = points.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ");
  const area = `${line} L${w},${h} L0,${h} Z`;
  const stroke = color === "lime" ? "oklch(0.88 0.22 130)" : color === "orange" ? "oklch(0.72 0.20 50)" : "oklch(0.62 0.20 255)";
  const gid = `g-${color}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.45" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gid})`} />
      <path d={line} fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      {points.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="2" fill={stroke} />
      ))}
    </svg>
  );
}

export function BarChart({ data, color = "lime" }: { data: { label: string; value: number }[]; color?: "primary" | "lime" | "orange" }) {
  const max = Math.max(...data.map((d) => d.value));
  const fill = color === "lime" ? "bg-lime" : color === "orange" ? "bg-orange" : "bg-primary";
  return (
    <div className="flex h-32 items-end gap-3">
      {data.map((d) => (
        <div key={d.label} className="flex flex-1 flex-col items-center gap-2">
          <div
            className={`w-full rounded-t-lg ${fill} transition-all`}
            style={{ height: `${(d.value / max) * 100}%` }}
          />
          <span className="text-[10px] text-muted-foreground">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

export function Donut({ value, max = 100, color = "primary" }: { value: number; max?: number; color?: "primary" | "lime" | "orange" }) {
  const r = 38, c = 2 * Math.PI * r;
  const pct = (value / max) * c;
  const stroke = color === "lime" ? "oklch(0.88 0.22 130)" : color === "orange" ? "oklch(0.72 0.20 50)" : "oklch(0.62 0.20 255)";
  return (
    <svg viewBox="0 0 100 100" className="h-28 w-28">
      <circle cx="50" cy="50" r={r} fill="none" stroke="oklch(0.30 0.030 250)" strokeWidth="10" />
      <circle
        cx="50" cy="50" r={r} fill="none" stroke={stroke} strokeWidth="10" strokeLinecap="round"
        strokeDasharray={`${pct} ${c}`} transform="rotate(-90 50 50)"
      />
      <text x="50" y="55" textAnchor="middle" className="fill-foreground font-display text-[18px] font-bold">{value}%</text>
    </svg>
  );
}
