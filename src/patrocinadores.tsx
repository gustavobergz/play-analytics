import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  Calendar,
  ChevronRight,
  Compass,
  Heart,
  MapPin,
  Menu,
  MoreHorizontal,
  Search,
  Sparkles,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";

import { BarChart } from "@/components/site/Chart";
import { CountUp } from "@/components/site/CountUp";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import logo from "@/components/img/Logo.svg";

export type SponsorNavKey = "discover" | "events" | "roi" | "calendar" | "ranking";

const nav = [
  { icon: Compass, label: "Descobrir", to: "/patrocinadores", key: "discover" },
  { icon: Heart, label: "Meus eventos", to: "/patrocinadores/eventos", key: "events" },
  { icon: BarChart3, label: "ROI", to: "/patrocinadores/roi", key: "roi" },
  { icon: Calendar, label: "Calendário", to: "/patrocinadores/calendario", key: "calendar" },
  { icon: Trophy, label: "Ranking de eventos", to: "/patrocinadores/ranking", key: "ranking" },
] as const;

export function SponsorSidebar({ active }: { active: SponsorNavKey }) {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border bg-surface/40 p-5 lg:block">
      <Link to="/" className="flex items-center gap-2">
        <img
          src={logo}
          alt="Play Analytics"
          className="h-15"
          draggable={false}
        />
      </Link>

      <nav className="mt-8 space-y-1 text-sm">
        {nav.map(({ icon: Icon, label, to, key }) => {
          const isActive = key === active;

          return (
            <Link
              key={label}
              to={to}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                isActive
                  ? "bg-lime/15 text-lime"
                  : "text-muted-foreground hover:bg-surface hover:text-foreground"
              }`}
              activeProps={{ className: "bg-lime/15 text-lime" }}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 rounded-2xl border border-border bg-gradient-card p-4">
        <p className="text-xs uppercase tracking-widest text-lime">Brand match</p>
        <p className="mt-2 text-sm font-semibold">3 novos eventos compatíveis</p>
        <Link
          to="/patrocinadores"
          className="mt-3 block w-full rounded-lg bg-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground"
        >
          Ver sugestões
        </Link>
      </div>
    </aside>
  );
}

export function SponsorShell({
  active,
  section,
  children,
}: {
  active: SponsorNavKey;
  section: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <SponsorSidebar active={active} />
        <main className="min-w-0 flex-1">
          <SponsorTopbar section={section} />
          <div className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

function SponsorTopbar({ section }: { section: string }) {
  const visibleItems = nav.slice(0, 2);
  const overflowItems = nav.slice(2);

  return (
    <header className="border-b border-border bg-background/90 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 lg:hidden">
          <Menu className="h-5 w-5 text-lime" />
          <span className="font-display font-bold">Play Analytics</span>
        </Link>
        <div className="hidden text-sm text-muted-foreground lg:block font-bold">
          Patrocinador
          <span className="mx-2 text-border">/</span>
          {section}
        </div>
        <Link
          to="/perfil"
          className="group flex items-center gap-3 rounded-2xl border border-border/60 bg-surface/40 px-3 py-2 transition-all hover:border-lime/40 hover:bg-lime/5"
        >
          <span className="hidden text-right sm:block">
            <span className="block text-xs text-muted-foreground font-bold">Patrocinador</span>
            <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-lime">CEFE - UEL</span>
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
            CE
          </span>
        </Link>
      </div>

      <div className="mt-3 flex items-center gap-2 lg:hidden">
        {visibleItems.map(({ icon: Icon, label, to, key }) => (
          <Link
            key={label}
            to={to}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-muted-foreground"
            activeProps={{ className: "bg-lime/15 text-lime" }}
            activeOptions={{ exact: key === "discover" }}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </Link>
        ))}

        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg border border-border/60 bg-surface/60 px-2.5 py-2 text-[10px] font-semibold text-muted-foreground"
            >
              Mais
              <MoreHorizontal className="h-3 w-3" />
            </button>
          </DialogTrigger>
          <DialogContent className="w-[calc(100vw-2rem)] max-w-sm rounded-2xl border-border bg-background p-0 sm:rounded-2xl">
            <DialogHeader className="border-b border-border p-4 text-left">
              <DialogTitle className="text-base font-semibold">Mais opções</DialogTitle>
            </DialogHeader>
            <div className="grid gap-2 p-3">
              {overflowItems.map(({ icon: Icon, label, to, key }) => (
                <Link
                  key={label}
                  to={to}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "bg-lime/15 text-lime" }}
                  activeOptions={{ exact: key === "discover" }}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}

export function SponsorPage() {
  return (
    <SponsorShell active="discover" section="Descobrir">
      <HeaderBar />
      <KpiRow />
      <RoiChart />
      <Filters />
      <EventsGrid />
      <Suggestions />
    </SponsorShell>
  );
}

function HeaderBar() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        <h1 className="max-w-3xl text-balance text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          Descubra eventos para a CEFE - UEL
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          87 eventos no Paraná nesta temporada — <span className="font-semibold text-lime">12 com alto potencial</span> para sua marca.
        </p>
      </div>
    </div>
  );
}

function KpiRow() {
  const kpis = [
    { l: "Alcance estimado", v: 482, s: "K", d: "+18%", c: "primary" as const, icon: Users },
    { l: "Eventos ativos", v: 7, d: "+2", c: "lime" as const, icon: Calendar },
    { l: "ROI médio", v: 34, s: "x", d: "+0,4x", c: "orange" as const, icon: TrendingUp },
    { l: "Impressões", v: 2100, s: "K", d: "+24%", c: "primary" as const, icon: BarChart3 },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((k) => {
        const Icon = k.icon;
        const bg = k.c === "lime" ? "bg-lime/15 text-lime" : k.c === "orange" ? "bg-orange/15 text-orange" : "bg-primary/15 text-primary";
        return (
          <div key={k.l} className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card">
            <div className="flex items-center justify-between">
              <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${bg}`}><Icon className="h-4 w-4" /></div>
              <span className={`text-xs font-semibold ${k.c === "lime" ? "text-lime" : k.c === "orange" ? "text-orange" : "text-primary"}`}>{k.d}</span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{k.l}</p>
            <p className="mt-1 font-display text-3xl font-bold">{k.l === "ROI médio" ? "3,4x" : <><CountUp end={k.v} suffix={k.s} /></>}</p>
          </div>
        );
      })}
    </div>
  );
}

function RoiChart() {
  return (
    <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
      <div className="rounded-2xl border border-border bg-gradient-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-lg font-bold">ROI por evento</h3>
            <p className="text-xs text-muted-foreground">Retorno acumulado por investimento</p>
          </div>
          <span className="rounded-full bg-lime/15 px-3 py-1 text-xs font-semibold text-lime">3,4x médio</span>
        </div>
        <div className="mt-6">
          <BarChart data={[
            { label: "Maratona", value: 92 },
            { label: "MTB SM", value: 68 },
            { label: "Trail FI", value: 54 },
            { label: "Triatlo", value: 78 },
            { label: "Pedal MG", value: 41 },
            { label: "Run CWB", value: 86 },
          ]} color="primary" />
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-gradient-card p-6">
        <h3 className="font-display text-lg font-bold">Alcance por região</h3>
        <ul className="mt-4 space-y-3 text-sm">
          {[
            { r: "RMC", v: 42 },
            { r: "Norte PR", v: 28 },
            { r: "Oeste", v: 18 },
            { r: "Centro-Sul", v: 12 },
          ].map((x) => (
            <li key={x.r}>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{x.r}</span>
                <span className="font-semibold">{x.v}%</span>
              </div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-surface">
                <div className="h-full bg-gradient-lime" style={{ width: `${x.v * 2}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Filters() {
  const chips = ["Todas modalidades", "Corrida", "Ciclismo", "Trail", "Triatlo", "Curitiba", "Norte PR", "Público 25-44"];
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            placeholder="Buscar evento, cidade ou modalidade…"
            className="w-full min-w-0 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {chips.map((c, i) => (
          <span key={c} className={`rounded-full border px-3 py-1 text-xs ${i === 0 ? "border-lime bg-lime/15 text-lime" : "border-border text-muted-foreground"}`}>{c}</span>
        ))}
      </div>
    </div>
  );
}

function EventsGrid() {
  const events = [
    { n: "Maratona de Curitiba", c: "Curitiba", d: "12 Jun", a: 12000, f: 94, t: "Corrida", roi: "4.2x" },
    { n: "GP MTB Serra do Mar", c: "Morretes", d: "19 Jun", a: 3800, f: 81, t: "Ciclismo", roi: "3.1x" },
    { n: "Trail Run Iguaçu", c: "Foz do Iguaçu", d: "02 Jul", a: 5400, f: 76, t: "Trail", roi: "2.8x" },
    { n: "Triatlo de Londrina", c: "Londrina", d: "14 Jul", a: 4200, f: 88, t: "Triatlo", roi: "3.6x" },
    { n: "Pedalada Maringá", c: "Maringá", d: "28 Jul", a: 2900, f: 72, t: "Ciclismo", roi: "2.4x" },
    { n: "Night Run Curitiba", c: "Curitiba", d: "10 Ago", a: 6800, f: 91, t: "Corrida", roi: "3.9x" },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {events.map((e) => (
        <div key={e.n} className="group rounded-2xl border border-border bg-gradient-card p-5 shadow-card transition-transform hover:-translate-y-1">
          <div className="flex items-start justify-between">
            <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary">{e.t}</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-lime/15 px-2.5 py-1 text-[11px] font-semibold text-lime">
              <Sparkles className="h-3 w-3" /> {e.f}% fit
            </span>
          </div>
          <h4 className="mt-4 font-display text-lg font-bold">{e.n}</h4>
          <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {e.c} · {e.d}</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-muted-foreground">Audiência</p>
              <p className="font-display text-lg font-bold">{(e.a / 1000).toFixed(1)}K</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-muted-foreground">ROI estimado</p>
              <p className="font-display text-lg font-bold text-lime">{e.roi}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Suggestions() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-gradient-primary p-8 shadow-glow md:p-10">
      <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-background/20 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur">
            <Sparkles className="h-3 w-3" /> Inteligência da plataforma
          </span>
          <h3 className="mt-3 text-balance text-2xl font-bold text-primary-foreground md:text-3xl">
            3 eventos com 90%+ de match esperam por você.
          </h3>
          <p className="mt-2 text-primary-foreground/80">Baseado no seu público-alvo, território e tickets anteriores.</p>
        </div>
      </div>
    </div>
  );
}