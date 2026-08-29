// Stylized Paraná map with pulsing event dots
const cities = [
  { name: "Curitiba", x: 78, y: 62, events: 24, big: true },
  { name: "Londrina", x: 38, y: 28, events: 12 },
  { name: "Maringá", x: 30, y: 36, events: 9 },
  { name: "Cascavel", x: 18, y: 52, events: 7 },
  { name: "Foz do Iguaçu", x: 8, y: 60, events: 11 },
  { name: "Ponta Grossa", x: 62, y: 60, events: 8 },
  { name: "Guarapuava", x: 44, y: 60, events: 5 },
  { name: "Paranaguá", x: 88, y: 70, events: 6 },
  { name: "Pato Branco", x: 22, y: 70, events: 4 },
  { name: "Apucarana", x: 42, y: 36, events: 5 },
];

export function ParanaMap() {
  return (
    <div className="relative aspect-[5/3] w-full overflow-hidden rounded-3xl border border-border bg-gradient-card p-6 shadow-elevated">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full p-6" preserveAspectRatio="none">
        {/* Stylized Paraná silhouette */}
        <defs>
          <linearGradient id="prFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.20 255)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="oklch(0.88 0.22 130)" stopOpacity="0.10" />
          </linearGradient>
          <linearGradient id="prStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.62 0.20 255)" />
            <stop offset="100%" stopColor="oklch(0.88 0.22 130)" />
          </linearGradient>
        </defs>
        <path
          d="M5,55 L8,48 L14,42 L12,34 L18,26 L26,20 L36,16 L48,14 L58,15 L66,18 L74,16 L82,20 L88,28 L92,36 L94,46 L92,54 L86,58 L78,57 L70,55 L62,57 L54,56 L46,58 L38,57 L30,58 L22,57 L14,58 Z"
          fill="url(#prFill)"
          stroke="url(#prStroke)"
          strokeWidth="0.4"
        />
      </svg>

      {cities.map((c) => (
        <div
          key={c.name}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${c.x}%`, top: `${c.y}%` }}
        >
          <div className="relative">
            <span className={`absolute inset-0 rounded-full ${c.big ? "bg-lime" : "bg-primary"} animate-pulse-ring`} style={{ width: c.big ? 16 : 10, height: c.big ? 16 : 10 }} />
            <div className={`relative rounded-full ${c.big ? "bg-lime shadow-lime" : "bg-primary shadow-glow"}`} style={{ width: c.big ? 16 : 10, height: c.big ? 16 : 10 }} />
            <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-background/80 px-2 py-0.5 text-[10px] font-medium backdrop-blur">
              {c.name} · <span className="text-muted-foreground">{c.events}</span>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-full border border-border bg-background/70 px-4 py-2 text-xs backdrop-blur">
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-lime" />Hub principal</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" />Cidades ativas</span>
      </div>
    </div>
  );
}
