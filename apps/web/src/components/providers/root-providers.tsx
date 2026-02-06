"use client";

import { Toaster } from "@workspace/ui/components/sonner";
import type { PropsWithChildren } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { isProd } from "@/lib/env";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const message = error instanceof Error ? error.message : "Unknown error";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <pre className="max-w-md overflow-auto rounded bg-muted p-4 text-sm">
        {message}
      </pre>
      <button
        type="button"
        onClick={resetErrorBoundary}
        className="rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
      >
        Try again
      </button>
    </div>
  );
}

/**
 * Consolidates all client-side providers & global singleton UI helpers.
 * Keeps the root layout lean and enables reuse across different app shells.
 */
export const RootProviders = ({ children }: PropsWithChildren) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    disableTransitionOnChange
    forcedTheme="dark"
  >
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        // TODO: Send to error reporting service (e.g., Sentry)
        console.error("ErrorBoundary caught:", error, info);
      }}
    >
      {children}
    </ErrorBoundary>
    {/* <Analytics />  @sentry/nextjs */}
    <Toaster />
    {!isProd && <TailwindIndicator />}
  </ThemeProvider>
);
