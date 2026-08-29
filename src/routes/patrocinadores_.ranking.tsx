import { createFileRoute } from "@tanstack/react-router";
import { ArrowUp, Trophy } from "lucide-react";

import { SponsorShell } from "../patrocinadores";

export const Route = createFileRoute("/patrocinadores_/ranking")({
  component: RankingPage,
});

const ranking = [
  { name: "Circuito do Interior", value: 96, change: "+8%" },
  { name: "Maratona de Londrina", value: 92, change: "+6%" },
  { name: "Trail Serra do Mar", value: 88, change: "+5%" },
  { name: "Pedalada de Cascavel", value: 81, change: "+4%" },
  { name: "Volta do Povo", value: 76, change: "+3%" },
];

function RankingPage() {
  return (
    <SponsorShell active="ranking" section="Ranking">
      <div className="rounded-3xl border border-border bg-gradient-card p-6 shadow-card">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lime">
              Performance
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ranking de eventos
            </h1>
          </div>
          <span className="rounded-full bg-lime/15 px-3 py-1 text-sm font-semibold text-lime">
            Temporada 2026
          </span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <StatCard label="Top evento" value="Circuito do Interior" icon={Trophy} />
          <StatCard label="ROI médio" value="3,4x" icon={ArrowUp} />
          <StatCard label="Ajuste mês" value="+12%" icon={ArrowUp} />
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-surface p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">Eventos em destaque</h2>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Por impacto</span>
          </div>

          <div className="space-y-4">
            {ranking.map((item, index) => (
              <div key={item.name} className="rounded-xl border border-border bg-background p-3">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime/15 text-sm font-bold text-lime">
                      {index + 1}
                    </span>
                    <span className="font-semibold">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-lime">{item.change}</span>
                </div>

                <div className="h-2.5 overflow-hidden rounded-full bg-surface">
                  <div className="h-full rounded-full bg-gradient-lime" style={{ width: `${item.value}%` }} />
                </div>

                <div className="mt-2 text-right text-xs text-muted-foreground">{item.value}% de impacto</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SponsorShell>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: typeof Trophy;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-card">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime/15 text-lime">
        <Icon className="h-4 w-4" />
      </div>
      <p className="mt-4 text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold">{value}</p>
    </div>
  );
}
