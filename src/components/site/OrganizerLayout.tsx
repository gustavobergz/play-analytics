import type { LucideIcon } from "lucide-react";
import { BarChart3, CalendarDays, ChevronRight, FileBarChart, LayoutDashboard, Menu, Trophy, Users } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { useMockAuth } from "@/routes/__root";

const navItems: { label: string; icon: LucideIcon; to: "/organizadores" | "/organizadores/eventos" | "/organizadores/patrocinadores" | "/organizadores/relatorios" | "/organizadores/ranking" }[] = [
  { label: "Visao geral", icon: LayoutDashboard, to: "/organizadores" },
  { label: "Eventos", icon: CalendarDays, to: "/organizadores/eventos" },
  { label: "Patrocinadores", icon: Users, to: "/organizadores/patrocinadores" },
  { label: "Relatorios", icon: FileBarChart, to: "/organizadores/relatorios" },
  { label: "Ranking", icon: Trophy, to: "/organizadores/ranking" },
];

export function OrganizerLayout({ active, children }: { active: string; children: React.ReactNode }) {
  return <div className="min-h-screen bg-background"><div className="flex min-h-screen"><OrganizerSidebar active={active} /><main className="min-w-0 flex-1"><Topbar /><div className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">{children}</div></main></div></div>;
}

function OrganizerSidebar({ active }: { active: string }) {
  const { accountName, isAuthenticated } = useMockAuth();
  return <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border bg-surface/40 p-5 lg:block">
    <Link to="/" className="flex items-center gap-2"><img src="/src/components/img/Logo.svg" alt="Play Analytics" className="h-15" draggable={false} /></Link>
    {isAuthenticated ? <div className="mt-6 rounded-2xl border border-lime/20 bg-lime/10 p-4"><p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Conta ativa</p><p className="mt-1 font-mono text-sm font-semibold">{accountName}</p></div> : null}
    <nav className="mt-8 space-y-1 text-sm">{navItems.map(({ label, icon: Icon, to }) => <Link key={label} to={to} activeOptions={{ exact: to === "/organizadores" }} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-muted-foreground transition-colors hover:bg-surface hover:text-foreground" activeProps={{ className: "bg-lime/15 text-lime" }}><Icon className="h-4 w-4" />{label}</Link>)}</nav>
    <div className="mt-8 rounded-2xl border border-border bg-gradient-card p-4"><p className="text-xs uppercase tracking-widest text-lime">Visao rapida</p><p className="mt-2 text-sm font-semibold">Sua proxima agenda esta 82% preenchida.</p><Link to="/organizadores/eventos" className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary">Abrir agenda <ChevronRight className="h-3.5 w-3.5" /></Link></div>
  </aside>;
}

export type TopbarProps = {
  persona?: string;
  name?: string;
  section?: string;
};

export function Topbar({
  persona = "Organizador",
  name = "CEFE - UEL",
  section = "Operação",
}: TopbarProps = {}) {
  return (
    <header className="border-b border-border bg-background/90 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 lg:hidden">
          <Menu className="h-5 w-5 text-lime" />
          <span className="font-display font-bold">Play Analytics</span>
        </Link>
        <div className="hidden text-sm text-muted-foreground lg:block">
          {persona}
          <span className="mx-2 text-border">/</span>
          {section}
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-right sm:block">
            <span className="block text-xs text-muted-foreground">{persona}</span>
            <span className="text-sm font-semibold">{name}</span>
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
            {name.slice(0, 2).toUpperCase()}
          </span>
        </div>
      </div>
      <nav className="mt-3 flex gap-2 overflow-x-auto lg:hidden">
        {navItems.map(({ label, icon: Icon, to }) => (
          <Link
            key={label}
            to={to}
            activeOptions={{ exact: to === "/organizadores" }}
            className="flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-muted-foreground"
            activeProps={{ className: "bg-lime/15 text-lime" }}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}