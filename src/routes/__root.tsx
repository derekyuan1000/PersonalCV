import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#101010]">
      {/* Green orb glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-[#00d992]/10 blur-[80px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-[#00d992]/8 blur-[60px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#00d992]/5 blur-[100px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 px-6 text-center"
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#00d992]"
        >
          <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#00d992] shadow-[0_0_12px_#00d992]" />
          Error / 404
        </motion.p>

        {/* Large 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          className="text-[10rem] font-medium leading-none tracking-tight text-[#f2f2f2] md:text-[14rem] lg:text-[18rem]"
          style={{ textShadow: "0 0 80px rgba(0,217,146,0.15)" }}
        >
          4<span className="text-[#00d992]">0</span>4
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="mx-auto mt-2 h-px w-48 bg-gradient-to-r from-transparent via-[#00d992]/50 to-transparent"
        />

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8"
        >
          <h2 className="text-xl font-semibold text-[#f2f2f2] md:text-2xl">Page not found</h2>
          <p className="mt-3 mx-auto max-w-sm text-sm text-[#8b949e] md:text-base">
            This page doesn't exist or may have been moved. Head back home to explore the portfolio.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-[#00d992] px-6 py-3 text-sm font-semibold text-[#101010] transition hover:bg-[#2fd6a1]"
          >
            <Home className="h-4 w-4" />
            Go home
          </a>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-[#3d3a39] px-6 py-3 text-sm font-semibold text-[#f2f2f2] transition hover:border-[#00d992] hover:text-[#00d992]"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
          </button>
        </motion.div>

        {/* Footer label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 font-mono text-xs uppercase tracking-[0.3em] text-[#3d3a39]"
        >
          Derek Yuan — Portfolio
        </motion.p>
      </motion.div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
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

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Derek Yuan — Developer Portfolio" },
      {
        name: "description",
        content:
          "Derek Yuan — developer, chess engineer, and AI builder. Certifications, projects, and code.",
      },
      { name: "author", content: "Derek Yuan" },
      { property: "og:title", content: "Derek Yuan — Developer Portfolio" },
      { property: "og:description", content: "Developer, chess engineer, and AI builder." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:creator", content: "@derekyuan1000" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://fonts.cdnfonts.com" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap",
      },
      { rel: "stylesheet", href: "https://fonts.cdnfonts.com/css/deltha" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
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

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
