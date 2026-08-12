import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { BrandLogo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="relative isolate grid min-h-dvh place-items-center overflow-hidden bg-ink px-6 text-fg">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url(/images/metal-wash.jpg)",
          backgroundSize: "cover",
        }}
        aria-hidden
      />
      <div className="relative w-full max-w-md rounded-2xl border border-line bg-navy/80 p-8 shadow-dark backdrop-blur-sm">
        <Link to="/" className="inline-flex" aria-label="Back to Vending Doc">
          <BrandLogo imgClassName="size-14" />
        </Link>
        <h1 className="mt-6 font-display text-2xl font-medium tracking-tight text-fg">
          Partner login
        </h1>
        <p className="mt-2 text-sm text-fg-muted">
          For venue partners and the Vending Doc team.
        </p>

        <div className="mt-8 space-y-3">
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
              >
                Continue with {p.label}
              </Button>
            ))
          ) : (
            <p className="text-sm text-fg-muted">Sign-in is disabled.</p>
          )}
        </div>

        <Link
          to="/"
          className="mt-8 inline-block text-sm text-silver transition-colors hover:text-fg"
        >
          Back to the site
        </Link>
      </div>
    </main>
  );
}
