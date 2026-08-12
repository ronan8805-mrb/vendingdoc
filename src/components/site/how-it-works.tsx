import { CreditCard, CupSoda, Hand, SlidersHorizontal } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const STEPS = [
  {
    n: "01",
    title: "Choose",
    body: "Flavour and protein type on a clean, contact-first screen.",
    icon: SlidersHorizontal,
  },
  {
    n: "02",
    title: "Pay",
    body: "Tap card or phone. No accounts. No fuss at the end of a session.",
    icon: CreditCard,
  },
  {
    n: "03",
    title: "Mix",
    body: "The machine blends it fresh. About fifty to sixty seconds.",
    icon: CupSoda,
  },
  {
    n: "04",
    title: "Go",
    body: "Take the cup and leave. Exact dose. No mess left behind.",
    icon: Hand,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="section relative overflow-hidden text-fg">
      {/* Unified cool gradient — no split panel */}
      <div
        className="absolute inset-0 bg-linear-to-br from-[#0a1220] via-navy to-[#0d1829]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/40 via-transparent to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/3 top-1/4 size-[70%] rounded-full bg-silver/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="wrap relative">
        <Reveal>
          <p className="eyebrow text-silver">How it works</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium text-fg">
            Four steps. Under a minute.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-fg-muted">
            Built for the walk from the floor to the door — not a café queue.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} as="li" delay={i * 90}>
              <div className="relative h-full">
                <step.icon className="size-5 text-silver" strokeWidth={1.5} />
                <p className="mt-6 font-display text-micro tracking-[0.18em] text-steel uppercase">
                  {step.n}
                </p>
                <h3 className="mt-3 text-xl font-medium text-fg">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
