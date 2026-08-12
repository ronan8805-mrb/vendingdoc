import { ArrowDown, ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-dvh flex-col bg-ink"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero-gym.jpg"
          alt="Member with a freshly mixed Vending Doc protein shake"
          className="size-full object-cover object-[72%_center] outline-none"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-ink via-ink/84 to-ink/30"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-ink via-ink/35 to-ink/40"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-30 mix-blend-soft-light"
          style={{
            backgroundImage: "url(/images/metal-wash.jpg)",
            backgroundSize: "cover",
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end pt-24">
        <div className="wrap pb-10 sm:pb-14">
          <BrandLogo
            imgClassName="logo-float size-16 ring-1 ring-silver/30 sm:size-24"
            className="mb-7 sm:mb-10"
          />

          <p className="eyebrow text-silver">Ireland’s first fresh-protein network</p>

          <h1 className="mt-4 max-w-4xl font-display text-display font-medium text-fg sm:mt-5">
            Fresh Protein.
            <br />
            On Demand.
          </h1>

          <p className="mt-5 max-w-xl text-base text-silver sm:mt-6 sm:text-xl">
            Machines that mix premium protein shakes in under 60 seconds — right
            inside your gym.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <Button asChild size="lg" variant="silver">
              <a href="#request">
                Request a Machine
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#how">
                See How It Works
                <ArrowDown />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 shrink-0 border-t border-line bg-ink">
        <dl className="wrap grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            ["~60 seconds", "Fresh mix, every cup"],
            ["Contactless", "Tap and collect"],
            ["Zero staff", "We restock and maintain"],
            ["Ireland first", "Built for Irish venues"],
          ].map(([stat, label]) => (
            <div key={stat} className="px-0 py-4 sm:py-6 sm:pr-8">
              <dt className="font-display text-sm font-medium tracking-tight text-fg sm:text-lg">
                {stat}
              </dt>
              <dd className="mt-1 text-xs text-fg-muted sm:text-sm">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
