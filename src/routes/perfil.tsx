import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  CalendarRange,
  Mail,
  MapPin,
  ShieldCheck,
  UserCircle2,
} from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { useMockAuth } from "@/routes/__root";

export const Route = createFileRoute("/perfil")({
  component: ProfilePage,
});

const mockProfile = {
  name: "CEFE - UEL",
  role: "Coordenador de eventos esportivos",
  organization: "Centro de Estudos em Esporte e Lazer",
  location: "Londrina, Paraná",
  email: "coordenacao@cefe-uel.br",
  focus: "Eventos, comunidade e impacto regional",
};

function ProfilePage() {
  const { accountName } = useMockAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-6">
          <Link
            to="/organizadores"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a área do organizador
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <aside className="rounded-3xl border border-border bg-gradient-card p-6 shadow-card">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime/15 text-2xl font-bold text-lime">
                {mockProfile.name.slice(0, 2).toUpperCase()}
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Conta ativa
                </p>
                <h1 className="mt-1 text-xl font-bold">{mockProfile.name}</h1>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-lime" />
                <span>{mockProfile.organization}</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="h-4 w-4 text-lime" />
                <span>{mockProfile.role}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-lime" />
                <span>{mockProfile.location}</span>
              </div>
            </div>
          </aside>

          <main className="space-y-6">
            <section className="rounded-3xl border border-border bg-gradient-card p-6 shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lime">
                    Perfil
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight">
                    {accountName}
                  </h2>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/10 px-3 py-1.5 text-sm font-semibold text-lime">
                  <ShieldCheck className="h-4 w-4" />
                  Sessão mock ativa
                </div>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
                Informações resumidas da conta para demonstração do fluxo de perfil do usuário.
              </p>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-border bg-surface p-5">
                <div className="flex items-center gap-3">
                  <UserCircle2 className="h-5 w-5 text-lime" />
                  <h3 className="text-base font-semibold">Dados pessoais</h3>
                </div>

                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b border-border pb-2">
                    <dt className="text-muted-foreground">Nome</dt>
                    <dd className="font-medium text-foreground">{mockProfile.name}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border pb-2">
                    <dt className="text-muted-foreground">Cargo</dt>
                    <dd className="font-medium text-foreground">{mockProfile.role}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border pb-2">
                    <dt className="text-muted-foreground">Organização</dt>
                    <dd className="font-medium text-foreground">{mockProfile.organization}</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-3xl border border-border bg-surface p-5">
                <div className="flex items-center gap-3">
                  <CalendarRange className="h-5 w-5 text-lime" />
                  <h3 className="text-base font-semibold">Detalhes da conta</h3>
                </div>

                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b border-border pb-2">
                    <dt className="text-muted-foreground">Email</dt>
                    <dd className="font-medium text-foreground">{mockProfile.email}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border pb-2">
                    <dt className="text-muted-foreground">Local</dt>
                    <dd className="font-medium text-foreground">{mockProfile.location}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border pb-2">
                    <dt className="text-muted-foreground">Foco</dt>
                    <dd className="font-medium text-foreground">{mockProfile.focus}</dd>
                  </div>
                </dl>
              </div>
            </section>

            <section className="rounded-3xl border border-border bg-surface p-5">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-lime" />
                <h3 className="text-base font-semibold">Contato e acesso</h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground">
                  {mockProfile.email}
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground">
                  Acesso de organização
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground">
                  Permissões: leitura e gestão
                </span>
              </div>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
