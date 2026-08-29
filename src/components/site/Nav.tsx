import { Building2, LayoutDashboard } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { useMockAuth } from "@/routes/__root";

export function Nav() {
  const { accountName, isAuthenticated } = useMockAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/src/components/img/Logo.svg"
            alt="Play Analytics"
            className="h-15"
            draggable={false}
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/" className="transition-colors hover:text-foreground">
            Plataforma
          </Link>
          <Link
            to="/organizadores"
            className="transition-colors hover:text-foreground"
          >
            Organizadores
          </Link>
          <Link
            to="/patrocinadores"
            className="transition-colors hover:text-foreground"
          >
            Patrocinadores
          </Link>
          <a
            href="#beneficios"
            className="transition-colors hover:text-foreground"
          >
            Beneficios
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <div className="hidden items-center gap-2 rounded-full border border-lime/20 bg-lime/10 px-3 py-1.5 text-sm sm:flex">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime/15 text-lime">
                  <Building2 className="h-4 w-4" />
                </span>
                <span className="font-semibold text-foreground">
                  {accountName}
                </span>
              </div>

              <Link
                to="/organizadores"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground transition-transform hover:scale-105"
              >
                <LayoutDashboard className="h-4 w-4" />
                Abrir painel
              </Link>
            </>
          ) : (
            <Link
              to="/organizadores"
              className="hidden text-sm text-muted-foreground hover:text-foreground sm:block"
            >
              Entrar
            </Link>
          )}

          <a
            href="https://forms.gle/m9ouyREaTTtG4Qzt9"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-lime px-4 py-2 text-sm font-semibold text-lime-foreground shadow-lime transition-transform hover:scale-105"
          >
            Responder pesquisa
          </a>
        </div>
      </div>
    </header>
  );
}
