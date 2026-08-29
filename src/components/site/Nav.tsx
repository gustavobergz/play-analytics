import { Building2, CalendarDays, Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "../img/Logo.svg";
import { useMockAuth } from "@/routes/__root";

const navLinks = [
  { label: "Plataforma", to: "/" },
  { label: "Organizadores", to: "/organizadores" },
  { label: "Patrocinadores", to: "/patrocinadores" },
  { label: "Benefícios", href: "#beneficios" },
];

export function Nav() {
  const { accountName, isAuthenticated } = useMockAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-auto sm:h-12" draggable={false} />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {navLinks.map((link) =>
            link.href ? (
              <a key={link.label} href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to} className="transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {isAuthenticated ? (
            <>
              <div className="hidden rounded-full border border-lime/20 bg-lime/10 p-[1px] shadow-sm transition-colors hover:border-lime/40 sm:flex">
                <Link
                  to="/perfil"
                  className="inline-flex items-center gap-2 rounded-full bg-lime/10 px-3 py-1.5 text-sm transition-transform hover:scale-[1.02]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime/15 text-lime">
                    <Building2 className="h-4 w-4" />
                  </span>
                  <span className="font-semibold text-foreground">{accountName}</span>
                </Link>
              </div>

              <Link
                to="/playevents"
                className="hidden items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-lime-foreground shadow-lime transition-transform hover:scale-105 sm:inline-flex"
              >
                <CalendarDays className="h-4 w-4" />
                PlayEvents
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

          <Link
            to="/perfil"
            className="hidden items-center gap-2.5 rounded-xl border border-border/60 bg-surface/40 px-2.5 py-1.5 text-left shadow-sm transition-all hover:border-lime/40 hover:bg-lime/5 md:flex"
          >
            <div className="leading-none">
              <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                Organizador
              </p>
              <p className="mt-1 text-base font-bold leading-none text-foreground group-hover:text-lime">
                CEFE - UEL
              </p>
            </div>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-700 text-[11px] font-bold text-white shadow-lg shadow-blue-900/30">
              CE
            </span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full border border-border/60 bg-background/80 text-foreground shadow-sm md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
              <div className="border-b border-border/40 p-4">
                <Link to="/" className="flex items-center gap-2">
                  <img src={logo} alt="Logo" className="h-10 w-auto" draggable={false} />
                </Link>
              </div>

              <nav className="flex flex-col gap-2 p-4">
                {navLinks.map((link) =>
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ),
                )}

                <div className="mt-4 space-y-2 border-t border-border/40 pt-4">
                  {isAuthenticated ? (
                    <>
                      <Link
                        to="/perfil"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-lime-foreground shadow-lime"
                      >
                        <Building2 className="h-4 w-4" />
                        {accountName}
                      </Link>
                      <Link
                        to="/playevents"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground"
                      >
                        <CalendarDays className="h-4 w-4" />
                        PlayEvents
                      </Link>
                    </>
                  ) : (
                    <Link
                      to="/organizadores"
                      className="inline-flex w-full items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground"
                    >
                      Entrar
                    </Link>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
