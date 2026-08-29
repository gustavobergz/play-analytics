import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Radio,
  TimerReset,
  Users,
} from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { getPlayEventById } from "@/data/play-events";

export const Route = createFileRoute("/playevents/$eventId")({
  component: EventDetailPage,
});

function EventDetailPage() {
  const { eventId } = Route.useParams();
  const event = getPlayEventById(eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-6">
          <div className="max-w-md rounded-3xl border border-border bg-gradient-card p-8 text-center shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime">
            PlayEvents
          </p>
          <h1 className="mt-4 text-3xl font-bold">Evento não encontrado</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Esse evento não está disponível no momento.
          </p>
            <Link
              to="/playevents"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-lime-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para eventos
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link
          to="/playevents"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para eventos
        </Link>

        <div className="mt-8 overflow-hidden rounded-[28px] border border-border bg-gradient-card shadow-card">
          <div className="border-b border-border bg-background/30 p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  {event.dateLabel}
                </div>
                <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                  {event.name}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-2.5 py-1">
                    <MapPin className="h-3.5 w-3.5 text-lime" />
                    {event.city} · {event.neighborhood}
                  </span>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold ${
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
                      <>
                        <TimerReset className="h-3.5 w-3.5" />
                        Em breve
                      </>
                    )}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background/40 p-4 text-left md:min-w-[220px]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <Radio className="h-3.5 w-3.5 text-red-500" />
                  Status
                </div>
                <p className="mt-3 text-2xl font-bold">
                  {event.isLive ? "Ao vivo" : "Agendado"}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {event.audience}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
            <div>
              <section className="rounded-2xl border border-border bg-background/30 p-5">
                <h2 className="text-lg font-bold">Sobre o evento</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {event.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>

              <section className="mt-6 rounded-2xl border border-border bg-background/30 p-5">
                <h2 className="text-lg font-bold">Agenda</h2>
                <div className="mt-4 space-y-4">
                  {event.schedule.map((item) => (
                    <div key={item.label} className="flex gap-4 rounded-xl border border-border bg-background/20 p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime/10 text-xs font-bold text-lime">
                        {item.time}
                      </div>
                      <div>
                        <p className="font-semibold">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <section className="rounded-2xl border border-border bg-background/30 p-5">
                <h2 className="text-lg font-bold">Estatísticas</h2>
                <div className="mt-4 space-y-3">
                  {event.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl border border-border bg-background/20 p-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-2xl font-bold">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-border bg-background/30 p-5">
                <div className="flex items-center gap-2 text-lg font-bold">
                  <Users className="h-5 w-5 text-lime" />
                  Organizadores
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {event.organizers.map((organizer) => (
                    <li key={organizer}>• {organizer}</li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-border bg-background/30 p-5">
                <h2 className="text-lg font-bold">Destaques</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {event.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-lime" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
