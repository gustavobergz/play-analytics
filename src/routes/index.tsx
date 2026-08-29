import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, MapPin, Calendar as CalendarIcon, Trophy, Zap, Target, Users, Sparkles, TrendingUp, Building2, Megaphone } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ParanaMap } from "@/components/site/ParanaMap";
import { AreaChart, BarChart, Donut } from "@/components/site/Chart";
import { CountUp } from "@/components/site/CountUp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Play Analytics — Inteligência para o Turismo Esportivo do Paraná" },
      { name: "description", content: "SaaS de dados, ROI e impacto regional para eventos esportivos, patrocinadores e cidades do interior do Paraná." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <LogosBar />
      <StatsStrip />
      <Benefits />
      <MapSection />
      <DashboardPreview />
      <Personas />
      <Calendar />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 noise opacity-[0.04]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
            Plataforma oficial · Turismo Esportivo PR
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Inteligência de dados para o <span className="text-gradient-lime">esporte</span> que move o <span className="text-gradient-primary">Paraná</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Conectamos organizadores de eventos, patrocinadores, academias e cidades do interior com métricas em tempo real, impacto turístico e ROI mensurável.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/organizadores" className="group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-lime-foreground shadow-lime transition-transform hover:scale-105">
              Sou Organizador
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/patrocinadores" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-surface">
              Sou Patrocinador
            </Link>
          </div>
          <div className="mt-10 flex gap-8 border-t border-border/60 pt-6">
            <Stat label="Eventos rastreados" value={1248} suffix="+" />
            <Stat label="Cidades conectadas" value={87} />
            <Stat label="Impacto gerado" value={42} suffix="M" prefix="R$" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative rounded-3xl border border-border bg-gradient-card p-5 shadow-elevated backdrop-blur">
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold tracking-tight text-gradient-lime sm:text-3xl md:text-4xl lg:text-5xl">
                Pesquisa Plataforma Play Analytics
              </h2>
              <p className="max-w-xl text-base text-muted-foreground md:text-lg">
                Ajude-nos a personalizar sua experiência respondendo a pesquisa abaixo:
              </p>
              <div className="flex items-center gap-3">

                <a
                  href="https://forms.gle/m9ouyREaTTtG4Qzt9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-lime px-6 py-4 text-sm font-semibold text-lime-foreground shadow-lime transition-transform hover:scale-105"
                >
                  Responder pesquisa
                </a>
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Impacto turístico · últimos 30 dias</p>
                <p className="mt-1 font-display text-3xl font-bold">R$ <CountUp end={4820} suffix="K" /></p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-lime/15 px-2.5 py-1 text-xs font-semibold text-lime">
                <TrendingUp className="h-3 w-3" /> +32%
              </span>
            </div> */}
            {/* <div className="mt-4">
              <AreaChart data={[20, 35, 28, 50, 42, 65, 58, 78, 72, 90, 85, 100]} color="lime" />
            </div> */}

            <div className="mt-4 grid grid-cols-3 gap-3">
              <MiniCard icon={<Users className="h-4 w-4" />} label="Atletas" value="12.4K" tint="primary" />
              <MiniCard icon={<MapPin className="h-4 w-4" />} label="Cidades" value="87" tint="lime" />
              <MiniCard icon={<Trophy className="h-4 w-4" />} label="Eventos" value="148" tint="orange" />
            </div>
          </div>

          <div className="animate-float absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-surface-elevated p-4 shadow-elevated md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Insight inteligente</p>
                <p className="text-sm font-semibold">Maringá +47% em corridas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, prefix, suffix }: { label: string; value: number; prefix?: string; suffix?: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold">{prefix}<CountUp end={value} suffix={suffix} /></p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function MiniCard({ icon, label, value, tint }: { icon: React.ReactNode; label: string; value: string; tint: "primary" | "lime" | "orange" }) {
  const bg = tint === "lime" ? "bg-lime/15 text-lime" : tint === "orange" ? "bg-orange/15 text-orange" : "bg-primary/15 text-primary";
  return (
    <div className="rounded-xl border border-border bg-surface p-3">
      <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${bg}`}>{icon}</div>
      <p className="mt-2 text-[11px] text-muted-foreground">{label}</p>
      <p className="font-display text-lg font-bold">{value}</p>
    </div>
  );
}

function LogosBar() {
  const items = ["Curitiba", "Londrina", "Maringá", "Cascavel", "Foz", "Ponta Grossa", "Paranaguá"];
  return (
    <div className="border-y border-border/40 bg-surface/40">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-6 text-xs uppercase tracking-widest text-muted-foreground">
        <span>Cidades parceiras</span>
        {items.map((i) => (
          <span key={i} className="font-display text-sm font-semibold tracking-tight text-foreground/70">{i}</span>
        ))}
      </div>
    </div>
  );
}

function StatsStrip() {
  const stats = [
    { v: 1248, s: "+", l: "Eventos rastreados", c: "primary" as const },
    { v: 87, s: "", l: "Cidades conectadas", c: "lime" as const },
    { v: 320, s: "K", l: "Atletas ativos", c: "orange" as const },
    { v: 96, s: "%", l: "Satisfação dos parceiros", c: "primary" as const },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-4 rounded-3xl border border-border bg-gradient-card p-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col">
            <p className={`font-display text-4xl font-bold ${s.c === "lime" ? "text-gradient-lime" : s.c === "orange" ? "text-orange" : "text-gradient-primary"}`}>
              <CountUp end={s.v} suffix={s.s} />
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: BarChart3, title: "Analytics em tempo real", desc: "Métricas de inscrição, check-ins, engajamento e impacto turístico de cada evento.", tint: "primary" },
    { icon: Target, title: "ROI mensurável", desc: "Patrocinadores acompanham alcance, exposição de marca e retorno por investimento.", tint: "lime" },
    { icon: MapPin, title: "Mapa do Paraná", desc: "Visualize cidades ativas, fluxo de atletas e oportunidades regionais.", tint: "orange" },
    { icon: Sparkles, title: "Insights inteligentes", desc: "IA sugere eventos compatíveis, períodos quentes e parcerias estratégicas.", tint: "primary" },
    { icon: CalendarIcon, title: "Calendário regional", desc: "Agenda esportiva integrada para evitar conflitos e maximizar audiência.", tint: "lime" },
    { icon: Megaphone, title: "Divulgação ativa", desc: "Vitrine para marcas, eventos e cidades alcançarem o público certo.", tint: "orange" },
  ];
  return (
    <section id="beneficios" className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-widest text-lime">Plataforma completa</span>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Tudo o que move um evento esportivo, em um só lugar.
        </h2>
        <p className="mt-4 text-muted-foreground">Da inscrição ao impacto na cidade — Arena.PR conecta dados, pessoas e marcas com aparência premium.</p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => {
          const Icon = it.icon;
          const tint = it.tint === "lime" ? "bg-lime/15 text-lime" : it.tint === "orange" ? "bg-orange/15 text-orange" : "bg-primary/15 text-primary";
          return (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 shadow-card transition-transform hover:-translate-y-1">
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${tint}`}>
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <span className="text-xs uppercase tracking-widest text-lime">Mapa inteligente</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            O Paraná esportivo em tempo real.
          </h2>
          <p className="mt-4 text-muted-foreground">
            87 cidades conectadas, milhares de atletas em movimento. Acompanhe o pulso do turismo esportivo regional, com filtros por modalidade, público e impacto econômico.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Heatmap de atletas por município", "Fluxo turístico entre regiões", "Densidade de eventos por modalidade", "Oportunidades para novos patrocinadores"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime/20 text-lime">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <ParanaMap />
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-border bg-gradient-card p-2 shadow-elevated">
        <div className="rounded-[22px] border border-border bg-background p-6 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-lime">Dashboard</span>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Painel do organizador</h2>
            </div>
            <div className="flex gap-2 text-xs">
              {["7d", "30d", "90d", "Ano"].map((t, i) => (
                <span key={t} className={`rounded-full border px-3 py-1.5 ${i === 1 ? "border-lime bg-lime/15 text-lime" : "border-border text-muted-foreground"}`}>{t}</span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { l: "Inscrições", v: "8.241", d: "+12,4%", c: "primary" as const },
              { l: "Check-ins", v: "6.913", d: "+8,1%", c: "lime" as const },
              { l: "Receita", v: "R$ 1,2M", d: "+24,7%", c: "orange" as const },
              { l: "NPS", v: "78", d: "+5", c: "primary" as const },
            ].map((k) => (
              <div key={k.l} className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-muted-foreground">{k.l}</p>
                <p className="mt-2 font-display text-3xl font-bold">{k.v}</p>
                <p className={`mt-1 text-xs font-semibold ${k.c === "lime" ? "text-lime" : k.c === "orange" ? "text-orange" : "text-primary"}`}>{k.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold">Engajamento por evento</h3>
                <span className="text-xs text-muted-foreground">Últimos 12 meses</span>
              </div>
              <div className="mt-4">
                <AreaChart data={[30, 42, 38, 55, 48, 70, 65, 82, 78, 95, 88, 110]} />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-bold">Modalidades</h3>
              <div className="mt-4">
                <BarChart data={[
                  { label: "Corrida", value: 92 },
                  { label: "Ciclismo", value: 68 },
                  { label: "Trail", value: 54 },
                  { label: "MTB", value: 41 },
                  { label: "Triatlo", value: 28 },
                ]} />
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-base font-bold">Meta de inscrições</h3>
              <div className="mt-2 flex items-center justify-between">
                <Donut value={72} color="lime" />
                <div className="text-right text-xs text-muted-foreground">
                  <p>Meta: 12.000</p>
                  <p>Atual: 8.641</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 md:col-span-2">
              <h3 className="font-display text-base font-bold">Patrocinadores ativos</h3>
              <ul className="mt-4 space-y-3">
                {[
                  { n: "Atlas Energy", c: "Bebidas", v: "R$ 240K" },
                  { n: "Vento Sul", c: "Vestuário", v: "R$ 180K" },
                  { n: "Banco PR+", c: "Financeiro", v: "R$ 320K" },
                ].map((s) => (
                  <li key={s.n} className="flex items-center justify-between border-b border-border/50 pb-2 text-sm last:border-0">
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-xs font-bold text-primary-foreground">{s.n[0]}</span>
                      <span>
                        <span className="block font-semibold">{s.n}</span>
                        <span className="text-xs text-muted-foreground">{s.c}</span>
                      </span>
                    </span>
                    <span className="font-mono text-sm font-semibold text-lime">{s.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Personas() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-2">
        <Persona
          icon={<Building2 className="h-6 w-6" />}
          tint="primary"
          tag="Para organizadores"
          title="Gestão completa do seu evento esportivo."
          bullets={["Dashboard com métricas principais", "Check-ins e coleta de dados", "Painel de patrocinadores", "Insights e notificações"]}
          to="/organizadores"
        />
        <Persona
          icon={<Megaphone className="h-6 w-6" />}
          tint="lime"
          tag="Para patrocinadores"
          title="Encontre os eventos certos para sua marca."
          bullets={["Filtros por cidade e modalidade", "Dashboard de ROI e alcance", "Sugestões inteligentes", "Perfis detalhados de eventos"]}
          to="/patrocinadores"
        />
      </div>
    </section>
  );
}

function Persona({ icon, tint, tag, title, bullets, to }: { icon: React.ReactNode; tint: "primary" | "lime"; tag: string; title: string; bullets: string[]; to: string }) {
  const bg = tint === "lime" ? "bg-lime/15 text-lime" : "bg-primary/15 text-primary";
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 shadow-card">
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${bg}`}>{icon}</div>
      <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{tag}</p>
      <h3 className="mt-2 font-display text-3xl font-bold">{title}</h3>
      <ul className="mt-6 space-y-2 text-sm">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-3"><span className={`h-1.5 w-1.5 rounded-full ${tint === "lime" ? "bg-lime" : "bg-primary"}`} />{b}</li>
        ))}
      </ul>
      <Link to={to} className={`mt-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${tint === "lime" ? "bg-lime text-lime-foreground shadow-lime" : "bg-primary text-primary-foreground shadow-glow"}`}>
        Acessar painel <ArrowRight className="h-4 w-4" />
      </Link>
      <div className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-3xl ${tint === "lime" ? "bg-lime" : "bg-primary"}`} />
    </div>
  );
}

function Calendar() {
  const events = [
    { d: "12", m: "JUN", n: "Maratona de Curitiba", c: "Curitiba · Corrida", t: "lime" },
    { d: "19", m: "JUN", n: "GP MTB Serra do Mar", c: "Morretes · Ciclismo", t: "primary" },
    { d: "02", m: "JUL", n: "Trail Run Iguaçu", c: "Foz do Iguaçu · Trail", t: "orange" },
    { d: "14", m: "JUL", n: "Triatlo de Londrina", c: "Londrina · Triatlo", t: "primary" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest text-lime">Calendário esportivo</span>
          <h2 className="mt-2 font-display text-4xl font-bold">Próximos eventos no Paraná</h2>
        </div>
        <Link to="/organizadores" className="hidden text-sm text-muted-foreground hover:text-foreground md:block">Ver tudo →</Link>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {events.map((e) => (
          <div key={e.n} className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card">
            <div className={`flex h-14 w-14 flex-col items-center justify-center rounded-xl ${e.t === "lime" ? "bg-lime text-lime-foreground" : e.t === "orange" ? "bg-orange text-orange-foreground" : "bg-primary text-primary-foreground"}`}>
              <span className="font-display text-xl font-bold leading-none">{e.d}</span>
              <span className="text-[10px] font-semibold">{e.m}</span>
            </div>
            <h4 className="mt-4 font-display text-lg font-bold">{e.n}</h4>
            <p className="mt-1 text-xs text-muted-foreground">{e.c}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-primary p-10 text-center shadow-glow md:p-16">
        <div className="absolute inset-0 noise opacity-10" />
        <h2 className="relative font-display text-4xl font-bold text-primary-foreground md:text-5xl">
          Pronto para liderar o turismo esportivo do Paraná?
        </h2>
        <p className="relative mt-4 text-primary-foreground/80">Cadastre seu evento ou marca agora — leva menos de 2 minutos.</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/organizadores" className="rounded-full bg-lime px-6 py-3 text-sm font-semibold text-lime-foreground shadow-lime">Sou Organizador</Link>
          <Link to="/patrocinadores" className="rounded-full bg-background/20 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-background/30">Sou Patrocinador</Link>
        </div>
      </div>
    </section>
  );
}
