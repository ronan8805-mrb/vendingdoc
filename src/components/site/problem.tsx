import { Reveal } from "@/components/site/reveal";

const PAINS = [
  {
    title: "Bottled RTDs",
    body: "They sit. They cost more than they should. And they never taste like they were made for this session.",
  },
  {
    title: "Tubs in a bag",
    body: "Scoops, spills, and a ritual nobody actually wants after a hard hour on the floor.",
  },
  {
    title: "Staffed shake bars",
    body: "Queues after class. Limited hours. A wage line you did not open a gym to manage.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="section bg-paper text-navy">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-muted">The problem</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium text-navy">
            The shake should be the easy part.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Members want protein at the point of effort. Venues want it without
            hiring, cleaning, or stocking a café.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:gap-6">
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {PAINS.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} as="article">
                <div className="flex h-full flex-col rounded-xl bg-paper-warm p-6 shadow-card">
                  <span className="font-display text-micro tracking-[0.16em] text-steel uppercase">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-medium text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="lg:col-span-5" delay={160} as="article">
            <div className="relative flex h-full min-h-72 flex-col justify-end overflow-hidden rounded-2xl bg-navy text-fg shadow-lift">
              <img
                src="/images/shake-close.jpg"
                alt=""
                className="absolute inset-0 size-full object-cover outline-none"
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-navy via-navy/80 to-navy/25"
                aria-hidden
              />
              <div className="relative p-7 sm:p-8">
                <p className="eyebrow text-silver">The Vending Doc</p>
                <h3 className="mt-4 text-2xl font-medium text-fg">
                  Fresh mix. No counter. No staff.
                </h3>
                <p className="mt-4 text-base text-silver">
                  A machine that doses premium protein, mixes it in under a
                  minute, and sits quietly on your floor. We handle the rest.
                </p>
                <p className="mt-8 font-display text-sm tracking-tight text-silver">
                  Whey · Isolate · EAA · Creatine · Pre-workout
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
