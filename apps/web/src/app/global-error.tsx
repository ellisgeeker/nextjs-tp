"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: Send to error reporting service (e.g., Sentry)
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
          <h2 className="text-xl font-semibold">Something went wrong!</h2>
          <p className="text-muted-foreground">
            A critical error occurred. Please try again.
          </p>
          {error.digest && (
            <p className="text-sm text-muted-foreground">
              Error ID: {error.digest}
            </p>
          )}
          <button
            type="button"
            onClick={reset}
            className="rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
