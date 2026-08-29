import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Trophy,
  UserRound,
} from "lucide-react";

import { Footer } from "@/components/site/Footer";
import playEventsLogo from "@/components/img/Logo.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Nav } from "@/components/site/Nav";

export const Route = createFileRoute("/form")({
  component: FormPage,
});

const brandOptions = ["Nike", "Adidas", "Puma", "Under Armour", "Asics", "New Balance", "Fila", "Nenhuma específica"];
const sportOptions = ["Futebol", "Ciclismo", "Corrida", "Basquete", "Vôlei", "Academia / HIIT", "Skate", "Outro"];
const audienceOptions = ["Atleta", "Fã / torcedor", "Praticante casual", "Organizador", "Patrocinador"];

function FormPage() {
  const [isMockSubmitted, setIsMockSubmitted] = React.useState(false);

  const inputClassName =
    "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground shadow-sm transition-all duration-200 focus:border-lime/60 focus:outline-none focus:ring-4 focus:ring-lime/10";

  const selectClassName =
    "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground shadow-sm transition-all duration-200 focus:border-lime/60 focus:outline-none focus:ring-4 focus:ring-lime/10";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav showActions={false} logoSrc={playEventsLogo} />

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
        {/* Header */}
        <header className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lime">
            <BadgeCheck className="h-3.5 w-3.5" />
            Formulário público
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-lime">
            Acesso direto
          </p>

          <h1 className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Pesquisa de perfil esportivo
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            Queremos entender melhor quem vive o esporte no Paraná. Suas
            respostas ajudam a criar eventos, experiências e oportunidades mais
            relevantes para a comunidade.
          </p>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-6">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-6 shadow-card">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Trophy className="h-6 w-6" />
                </div>

                <h2 className="mt-6 text-xl font-bold leading-tight tracking-tight">
                  Ajude a entender como sua comunidade vive o esporte.
                </h2>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Leva poucos minutos. Queremos conhecer seus hábitos,
                  preferências e interesses para criar experiências esportivas
                  melhores.
                </p>

                <div className="mt-7 space-y-3">
                  <div className="flex gap-3 rounded-2xl border border-border bg-background/40 p-3.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-lime/10 text-lime">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Preferências
                      </p>
                      <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
                        Esportes, marcas e hábitos.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-2xl border border-border bg-background/40 p-3.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-lime/10 text-lime">
                      <UserRound className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Seu perfil
                      </p>
                      <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
                        Informações básicas para contato.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-2xl border border-border bg-background/40 p-3.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-lime/10 text-lime">
                      <CalendarClock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Eventos
                      </p>
                      <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
                        Ajude a planejar experiências melhores.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 border-t border-border pt-5">
                  <p className="text-xs leading-5 text-muted-foreground">
                    📍 Foco em experiências esportivas no Paraná
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Form */}
          <section className="overflow-hidden rounded-3xl border border-border bg-surface/70 shadow-card">
            <form
              action="#"
              method="post"
              onSubmit={(event) => {
                event.preventDefault();
                setIsMockSubmitted(true);
              }}
            >
              {/* Personal information */}
              <div className="p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  number="01"
                  icon={<UserRound className="h-4 w-4" />}
                  title="Dados pessoais"
                  description="Informações básicas para conhecermos você."
                />

                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <Field label="Nome completo" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      required
                      className={inputClassName}
                    />
                  </Field>

                  <Field label="Idade" htmlFor="age">
                    <select
                      id="age"
                      name="age"
                      required
                      defaultValue=""
                      className={selectClassName}
                    >
                      <option value="" disabled>
                        Selecione sua faixa etária
                      </option>
                      <option value="18-24">18–24</option>
                      <option value="25-34">25–34</option>
                      <option value="35-44">35–44</option>
                      <option value="45-54">45–54</option>
                      <option value="55+">55+</option>
                    </select>
                  </Field>

                  <Field
                    label="Telefone"
                    htmlFor="phone"
                    icon={<Phone className="h-3.5 w-3.5" />}
                  >
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(99) 99999-9999"
                      required
                      className={inputClassName}
                    />
                  </Field>

                  <Field
                    label="E-mail"
                    htmlFor="email"
                    icon={<Mail className="h-3.5 w-3.5" />}
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className={inputClassName}
                    />
                  </Field>
                </div>
              </div>

              <Divider />

              {/* Sport */}
              <div className="p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  number="02"
                  icon={<Sparkles className="h-4 w-4" />}
                  title="Perfil esportivo"
                  description="Conte um pouco sobre sua relação com o esporte."
                />

                <div className="mt-7">
                  <Question
                    title="Qual esporte você pratica ou acompanha com mais frequência?"
                    required
                  />

                  <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                    {sportOptions.map((sport) => (
                      <Choice
                        key={sport}
                        name="sport"
                        value={sport}
                        type="radio"
                        required
                      >
                        {sport}
                      </Choice>
                    ))}
                  </div>
                </div>
              </div>

              <Divider />

              {/* Brands */}
              <div className="p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  number="03"
                  icon={<BadgeCheck className="h-4 w-4" />}
                  title="Marcas e hábitos"
                  description="Selecione todas as opções que fazem sentido para você."
                />

                <div className="mt-7">
                  <Question title="Você usa ou acompanha alguma dessas marcas?" />

                  <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                    {brandOptions.map((brand) => (
                      <Choice
                        key={brand}
                        name="brands"
                        value={brand}
                        type="checkbox"
                      >
                        {brand}
                      </Choice>
                    ))}
                  </div>
                </div>
              </div>

              <Divider />

              {/* Habits */}
              <div className="p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  number="04"
                  icon={<CalendarClock className="h-4 w-4" />}
                  title="Rotina e localização"
                  description="Essas informações ajudam a entender onde e quando criar experiências."
                />

                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <Field
                    label="Quantas vezes por semana você pratica esporte?"
                    htmlFor="frequency"
                  >
                    <select
                      id="frequency"
                      name="frequency"
                      required
                      defaultValue=""
                      className={selectClassName}
                    >
                      <option value="" disabled>
                        Selecione
                      </option>
                      <option value="1x">1 vez</option>
                      <option value="2x">2 vezes</option>
                      <option value="3x">3 vezes</option>
                      <option value="4x+">4 vezes ou mais</option>
                    </select>
                  </Field>

                  <Field
                    label="Cidade de preferência"
                    htmlFor="city"
                    icon={<MapPin className="h-3.5 w-3.5" />}
                  >
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Ex.: Curitiba, Londrina, Maringá"
                      className={inputClassName}
                    />
                  </Field>
                </div>
              </div>

              <Divider />

              {/* Audience */}
              <div className="p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  number="05"
                  icon={<UserRound className="h-4 w-4" />}
                  title="Seu perfil"
                  description="Escolha a opção que melhor representa sua relação com o esporte."
                />

                <div className="mt-7">
                  <Question title="Você se identifica mais com qual perfil?" />

                  <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                    {audienceOptions.map((option) => (
                      <Choice
                        key={option}
                        name="audience"
                        value={option}
                        type="radio"
                      >
                        {option}
                      </Choice>
                    ))}
                  </div>
                </div>
              </div>

              <Divider />

              {/* Comments */}
              <div className="p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  number="06"
                  icon={<Sparkles className="h-4 w-4" />}
                  title="Sua experiência"
                  description="Uma resposta curta já é suficiente."
                />

                <div className="mt-7">
                  <Field
                    label="Conte um pouco sobre sua experiência com eventos esportivos"
                    htmlFor="comments"
                  >
                    <textarea
                      id="comments"
                      name="comments"
                      rows={5}
                      placeholder="Ex.: Já participei de corridas, encontros de ciclismo e gosto de eventos com boa estrutura..."
                      className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm leading-6 text-foreground placeholder:text-muted-foreground shadow-sm transition-all duration-200 focus:border-lime/60 focus:outline-none focus:ring-4 focus:ring-lime/10"
                    />
                  </Field>
                </div>
              </div>

              {/* Submit */}
              <div className="border-t border-border bg-background/30 p-5 sm:p-7 lg:px-8 lg:py-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-md">
                    <p className="text-sm font-medium text-foreground">
                      Quase lá! 🎯
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      Sua participação ajuda a melhorar experiências esportivas
                      e eventos no Paraná.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-lime px-6 text-sm font-bold text-lime-foreground shadow-lime transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-lime/20 active:translate-y-0"
                  >
                    Enviar formulário
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </main>

      <Footer />

      <Dialog open={isMockSubmitted} onOpenChange={setIsMockSubmitted}>
        <DialogContent className="max-w-md rounded-3xl border-border bg-surface shadow-card sm:rounded-3xl">
          <DialogHeader className="space-y-3 text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime/10 text-lime">
              <BadgeCheck className="h-5 w-5" />
            </div>
            <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
              Formulário recebido
            </DialogTitle>
            <DialogDescription className="text-sm leading-6 text-muted-foreground">
              Este é apenas um mock para o momento. Os dados não foram enviados para nenhum backend real e a submissão é apenas demonstrativa.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-end">
            <button
              type="button"
              onClick={() => setIsMockSubmitted(false)}
              className="inline-flex items-center justify-center rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-lime-foreground shadow-lime transition-transform hover:scale-[1.02]"
            >
              Entendi
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Form components                                                            */
/* -------------------------------------------------------------------------- */

function Divider() {
  return <div className="h-px bg-border" />;
}

function SectionHeader({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-lime/20 bg-lime/10 text-lime">
        {icon}
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-[0.2em] text-lime">
            {number}
          </span>
          <h2 className="text-lg font-bold tracking-tight text-foreground">
            {title}
          </h2>
        </div>

        <p className="mt-1 text-sm leading-5 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-1.5 text-sm font-semibold text-foreground"
      >
        {icon && <span className="text-lime">{icon}</span>}
        {label}
      </label>

      {children}
    </div>
  );
}

function Question({
  title,
  required = false,
}: {
  title: string;
  required?: boolean;
}) {
  return (
    <p className="text-sm font-semibold leading-6 text-foreground">
      {title}
      {required && (
        <span className="ml-1 text-lime" aria-hidden="true">
          *
        </span>
      )}
    </p>
  );
}

function Choice({
  name,
  value,
  type,
  required,
  children,
}: {
  name: string;
  value: string;
  type: "radio" | "checkbox";
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="group relative flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-background/60 px-3.5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-lime/40 hover:bg-lime/5 has-[:checked]:border-lime/60 has-[:checked]:bg-lime/10 has-[:checked]:shadow-[0_0_0_1px_rgba(163,230,53,0.08)]">
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        className="peer sr-only"
      />

      <span
        className={[
          "flex h-4 w-4 shrink-0 items-center justify-center border border-border transition-all",
          type === "radio" ? "rounded-full" : "rounded",
          "peer-focus-visible:ring-4 peer-focus-visible:ring-lime/20",
          "peer-checked:border-lime peer-checked:bg-lime",
        ].join(" ")}
      >
        <span
          className={[
            "scale-0 bg-lime-foreground opacity-0 transition-all",
            "peer-checked:scale-100 peer-checked:opacity-100",
            type === "radio"
              ? "h-1.5 w-1.5 rounded-full"
              : "h-2 w-2 rounded-sm",
          ].join(" ")}
        />
      </span>

      <span className="leading-5">{children}</span>
    </label>
  );
}
