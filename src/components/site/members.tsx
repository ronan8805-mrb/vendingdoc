import { Reveal } from "@/components/site/reveal";

const POINTS = [
  {
    title: "Fresh, not shelf-stable",
    body: "Mixed when you tap. Not bottled last season.",
  },
  {
    title: "Exact dosing",
    body: "The scoop is the machine. Same gramme, every time.",
  },
  {
    title: "No mess, no tub",
    body: "Leave the bag at home. Walk out with a cup.",
  },
  {
    title: "Always there",
    body: "Open as long as the venue is. No last-call on protein.",
  },
];

export function Members() {
  return (
    <section id="members" className="bg-paper text-navy">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-80 lg:min-h-full">
          <img
            src="/images/athlete.jpg"
            alt="Member with a freshly mixed Vending Doc protein shake"
            className="absolute inset-0 size-full object-cover object-center outline-none"
          />
        </div>
        <div className="section px-6 sm:px-12 lg:px-16 xl:px-20">
          <Reveal>
            <p className="eyebrow text-muted">For members</p>
            <h2 className="mt-4 max-w-lg text-3xl font-medium text-navy">
              The shake you meant to have.
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted">
              Better than a bottle. Faster than a bar. Waiting at the end of
              the session.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {POINTS.map((point, i) => (
              <Reveal key={point.title} as="li" delay={i * 70}>
                <h3 className="text-lg font-medium text-navy">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{point.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
