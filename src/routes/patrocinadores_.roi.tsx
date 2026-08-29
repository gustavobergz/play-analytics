import { createFileRoute } from "@tanstack/react-router";

import { SponsorShell } from "../patrocinadores";

export const Route = createFileRoute("/patrocinadores_/roi")({
  component: RoiPage,
});

function RoiPage() {
  return (
    <SponsorShell active="roi" section="ROI">
      <div className="rounded-3xl border border-border bg-gradient-card p-6 shadow-card">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lime">
              Performance
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Retorno por investimento
            </h1>
          </div>
          <span className="rounded-full bg-lime/15 px-3 py-1 text-sm font-semibold text-lime">
            3,4x médio
          </span>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h2 className="text-lg font-bold">ROI por evento</h2>
            <div className="mt-6 space-y-5">
              {[
                { name: "Circuito do Interior", value: 96, color: "bg-lime" },
                { name: "Trail de Morretes", value: 82, color: "bg-primary" },
                { name: "Maratona de Londrina", value: 76, color: "bg-orange" },
                { name: "Volta do Povo", value: 68, color: "bg-lime" },
              ].map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.name}</span>
                    <span className="font-semibold">{item.value}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-surface">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: "Investimento total", value: "R$ 142K" },
              { label: "Receita gerada", value: "R$ 488K" },
              { label: "Conversão", value: "18,3%" },
              { label: "CPM eficiente", value: "R$ 2,74" },
            ].map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-border bg-surface p-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {metric.label}
                </p>
                <p className="mt-2 font-display text-2xl font-bold">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SponsorShell>
  );
}
