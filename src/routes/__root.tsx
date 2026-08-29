import * as React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BadgeCheck, Building2 } from "lucide-react";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useLocation,
  useRouter,
} from "@tanstack/react-router";

import {
  WelcomeDialog,
  WelcomeDialogAction,
  WelcomeDialogBadge,
  WelcomeDialogContent,
  WelcomeDialogDescription,
  WelcomeDialogFooter,
  WelcomeDialogHeader,
  WelcomeDialogTitle,
} from "@/components/ui/welcome-dialog";

import appCss from "../styles.css?url";

export const MOCK_ACCOUNT_NAME = "empresa_teste";

type MockAuthContextValue = {
  accountName: string;
  isAuthenticated: boolean;
  signIn: () => void;
};

const MockAuthContext = React.createContext<MockAuthContextValue | null>(null);

export function useMockAuth() {
  const context = React.useContext(MockAuthContext);

  if (context === null) {
    throw new Error("useMockAuth must be used within MockAuthContext.");
  }

  return context;
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>

        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn&apos;t load
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "title",
          content:
            "Play Analytics - Inteligência para o Turismo Esportivo do Paraná",
        },
        {
          name: "description",
          content:
            "Plataforma SaaS que conecta organizadores, patrocinadores, academias e cidades com dados inteligentes.",
        },
        {
          property: "og:title",
          content: "Play Analytics - Turismo Esportivo Inteligente",
        },
        {
          property: "og:description",
          content:
            "Dados, ROI e impacto turístico para eventos esportivos regionais.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap",
        },
      ],
    }),

    shellComponent: RootShell,

    component: RootComponent,

    notFoundComponent: NotFoundComponent,

    errorComponent: ErrorComponent,
  });

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}

        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [showWelcome, setShowWelcome] = React.useState(true);
  const isFormPage = location.pathname === "/form";

  const signIn = () => {
    setIsAuthenticated(true);
    setShowWelcome(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MockAuthContext.Provider
        value={{
          accountName: MOCK_ACCOUNT_NAME,
          isAuthenticated,
          signIn,
        }}
      >
        {isAuthenticated ? <MockSessionBanner /> : null}

        <Outlet />

        {!isFormPage ? (
          <WelcomeDialog
            open={!isAuthenticated && showWelcome}
            onOpenChange={(open) => {
              if (isAuthenticated) {
                setShowWelcome(open);
              }
            }}
          >
            <WelcomeDialogContent>
              <WelcomeDialogHeader>
                <WelcomeDialogBadge>
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Conta demo do MVP
                </WelcomeDialogBadge>

                <WelcomeDialogTitle>
                  Entre com a sessão simulada
                </WelcomeDialogTitle>

                <WelcomeDialogDescription>
                  Esta demonstração usa uma autenticação mock apenas para apresentar o fluxo do produto.
                </WelcomeDialogDescription>
              </WelcomeDialogHeader>

              <div className="relative mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#8cff24]/15 text-[#8cff24]">
                    <Building2 className="h-5 w-5" />
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.24em] text-gray-400">
                      Conta ativa
                    </p>

                    <p className="font-mono text-lg font-semibold text-white">
                      {MOCK_ACCOUNT_NAME}
                    </p>

                    <p className="text-sm leading-6 text-gray-400">
                      Clique em Entrar para alternar o app para o estado logado.
                    </p>
                  </div>
                </div>
              </div>

              <WelcomeDialogFooter>
                <WelcomeDialogAction onClick={signIn}>
                  Entrar
                </WelcomeDialogAction>
              </WelcomeDialogFooter>
            </WelcomeDialogContent>
          </WelcomeDialog>
        ) : null}
      </MockAuthContext.Provider>
    </QueryClientProvider>
  );
}

function MockSessionBanner() {
  const { accountName } = useMockAuth();

  return (
    <div className="border-b border-lime/20 bg-lime/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-3 text-sm text-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 font-medium">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime text-lime-foreground">
            <BadgeCheck className="h-4 w-4" />
          </span>
          Sessão mock ativa para a conta {accountName}
        </div>

        <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
          Prototype 
        </span>
      </div>
    </div>
  );
}
