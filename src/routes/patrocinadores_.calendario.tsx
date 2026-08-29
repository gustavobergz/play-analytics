import { createFileRoute } from "@tanstack/react-router";

import { SponsorShell } from "../patrocinadores";

export const Route = createFileRoute("/patrocinadores_/calendario")({
  component: CalendarPage,
});

const days = [
  { day: "Seg", date: 8 },
  { day: "Ter", date: 9 },
  { day: "Qua", date: 10 },
  { day: "Qui", date: 11 },
  { day: "Sex", date: 12 },
  { day: "Sáb", date: 13 },
  { day: "Dom", date: 14 },
];

const agenda = [
  { time: "08:00", label: "Maratona de Londrina", slot: "bg-lime/15 text-lime", day: 9 },
  { time: "11:00", label: "Trail Serra do Mar", slot: "bg-primary/15 text-primary", day: 10 },
  { time: "18:30", label: "Circuito de Curitiba", slot: "bg-orange/15 text-orange", day: 12 },
  { time: "09:00", label: "Pedalada de Cascavel", slot: "bg-lime/15 text-lime", day: 13 },
];

function CalendarPage() {
  return (
    <SponsorShell active="calendar" section="Calendário">
      <div className="rounded-3xl border border-border bg-gradient-card p-4 shadow-card sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-lime sm:text-xs">
              Agenda esportiva
            </p>
            <h1 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Calendário de eventos
            </h1>
          </div>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.9fr)]">
          <div className="rounded-2xl border border-border bg-surface p-3 sm:p-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
              {days.map(({ day, date }) => (
                <div
                  key={day}
                  className={`rounded-2xl border p-2 text-center sm:p-3 ${
                    date === 10
                      ? "border-lime bg-lime/15 text-lime"
                      : "border-border bg-background text-muted-foreground"
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] sm:text-[11px]">{day}</p>
                  <p className="mt-2 text-lg font-bold sm:text-xl">{date}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              {agenda.map((item) => (
                <div
                  key={`${item.day}-${item.label}`}
                  className="flex flex-col gap-2 rounded-xl border border-border bg-background p-3 sm:flex-row sm:items-center"
                >
                  <span className="text-sm font-semibold text-muted-foreground sm:w-12">{item.time}</span>
                  <span className={`flex-1 rounded-full px-3 py-2 text-sm font-semibold ${item.slot}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            <div className="rounded-2xl border border-border bg-surface p-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Oportunidades
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-lime">12</p>
              <p className="mt-1 text-sm text-muted-foreground">eventos com alto fit em sua janela</p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Melhor janela
              </p>
              <p className="mt-2 text-lg font-bold">Junho · Curitiba</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Maior envolvimento em corrida e ciclismo urbano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SponsorShell>
  );
}
