import { createFileRoute } from "@tanstack/react-router";

import { SponsorShell } from "../patrocinadores";

export const Route = createFileRoute("/patrocinadores_/eventos")({
  component: EventsPage,
});

function EventsPage() {
  return (
    <SponsorShell active="events" section="Meus eventos">
      <div className="rounded-3xl border border-border bg-gradient-card p-6 shadow-card">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lime">
              Meus eventos
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Eventos ativos e em destaque
            </h1>
          </div>

        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              name: "Circuito do Interior",
              city: "Curitiba, PR",
              date: "12 Jun · 18:00",
              status: "Confirmado",
              fit: "92% fit",
            },
            {
              name: "Maratona do Povo",
              city: "Londrina, PR",
              date: "26 Jun · 08:00",
              status: "Em revisão",
              fit: "88% fit",
            },
            {
              name: "Trail Serra da Esperança",
              city: "Morretes, PR",
              date: "02 Jul · 07:30",
              status: "Aprovado",
              fit: "95% fit",
            },
          ].map((event) => (
            <article
              key={event.name}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-lime/15 px-2.5 py-1 text-[11px] font-semibold text-lime">
                  {event.status}
                </span>
                <span className="text-xs font-semibold text-primary">{event.fit}</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold">{event.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{event.city}</p>
              <p className="mt-1 text-sm text-muted-foreground">{event.date}</p>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm">
                <span className="text-muted-foreground">ROI esperado</span>
                <span className="font-semibold text-lime">3,8x</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SponsorShell>
  );
}
