import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin, Radio, TimerReset } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { playEvents } from "@/data/play-events";

export const Route = createFileRoute("/playevents")({
  component: PlayEventsPage,
});

function PlayEventsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime">
              PlayEvents
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Eventos em andamento
            </h1>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Voltar para a home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {playEvents.map((event) => (
            <a
              key={event.id}
              href="https://www.sympla.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl border border-border bg-gradient-card p-5 shadow-card transition-transform hover:-translate-y-1 hover:border-lime/40"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {event.dateLabel}
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">{event.name}</h2>
                </div>

                <span
                  className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    event.isLive
                      ? "bg-red-500/10 text-red-500"
                      : "bg-slate-500/10 text-slate-300"
                  }`}
                >
                  {event.isLive ? (
                    <>
                      <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                      Em atividade
                    </>
                  ) : (
                    <>{event.status}</>
                  )}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-lime" />
                {event.city} · {event.neighborhood}
              </div>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {event.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {event.isLive ? (
                    <>
                      <Radio className="h-4 w-4 text-red-500" />
                      Evento Em Atividade
                    </>
                  ) : (
                    <>
                      {event.dateLabel}
                    </>
                  )}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  Ver evento
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
