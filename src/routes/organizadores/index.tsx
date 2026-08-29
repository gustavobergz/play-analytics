import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin, Plus, Trophy, Users } from "lucide-react";

import { OrganizerLayout } from "@/components/site/OrganizerLayout";

export { Topbar } from "@/components/site/OrganizerLayout";

export const Route = createFileRoute("/organizadores/")({ component: OrganizerOverview });

const upcomingEvents = [
  { name: "Circuito das Araucarias", city: "Londrina, PR", date: "18 mai", entries: "842 inscritos", color: "bg-lime" },
  { name: "Maratona de Inverno", city: "Curitiba, PR", date: "02 jun", entries: "1.240 inscritos", color: "bg-primary" },
  { name: "Desafio Costa Oeste", city: "Foz do Iguacu, PR", date: "15 jun", entries: "516 inscritos", color: "bg-orange" },
];

function OrganizerOverview() {
  return <OrganizerLayout active="Visao geral"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-lime">Central do organizador</p><h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">Bom dia, equipe CEFE</h1><p className="mt-2 text-sm text-muted-foreground">Acompanhe sua operacao e mantenha cada evento em movimento.</p></div><Link to="/organizadores/eventos" className="inline-flex items-center gap-2 rounded-xl bg-lime px-4 py-2.5 text-sm font-bold text-lime-foreground shadow-lime transition-transform hover:-translate-y-0.5"><Plus className="h-4 w-4" /> Meus evento</Link></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Metric icon={CalendarDays} label="Eventos ativos" value="12" detail="+3 este mes" tint="lime" /><Metric icon={Users} label="Participantes" value="8.492" detail="+18,4% vs. anterior" tint="primary" /><Metric icon={Trophy} label="Inscricoes confirmadas" value="6.278" detail="74% da capacidade" tint="orange" /><Metric icon={MapPin} label="Cidades alcancadas" value="28" detail="Em 4 regioes" tint="primary" /></div><section className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card sm:p-6"><div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-xl font-bold">Proximos eventos</h2><p className="mt-1 text-sm text-muted-foreground">A agenda dos seus eventos em destaque.</p></div><Link to="/organizadores/eventos" className="inline-flex items-center gap-1 text-sm font-semibold text-lime hover:underline">Ver todos <ArrowUpRight className="h-4 w-4" /></Link></div><div className="mt-5 divide-y divide-border">{upcomingEvents.map((event) => <div key={event.name} className="flex flex-wrap items-center gap-4 py-4 first:pt-0 last:pb-0"><span className={`h-10 w-1.5 rounded-full ${event.color}`} /><div className="min-w-44 flex-1"><p className="font-semibold">{event.name}</p><p className="mt-1 text-sm text-muted-foreground">{event.city}</p></div><p className="text-sm text-muted-foreground">{event.entries}</p><p className="w-14 text-right font-mono text-sm font-semibold">{event.date}</p></div>)}</div></section></OrganizerLayout>;
}

function Metric({ icon: Icon, label, value, detail, tint }: { icon: typeof CalendarDays; label: string; value: string; detail: string; tint: "lime" | "primary" | "orange" }) {
  const styles = { lime: "bg-lime/15 text-lime", primary: "bg-primary/15 text-primary", orange: "bg-orange/15 text-orange" };
  return <div className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card"><div className={`flex h-9 w-9 items-center justify-center rounded-xl ${styles[tint]}`}><Icon className="h-4 w-4" /></div><p className="mt-4 text-xs text-muted-foreground">{label}</p><p className="mt-1 font-display text-3xl font-bold">{value}</p><p className="mt-2 text-xs font-semibold text-lime">{detail}</p></div>;
}