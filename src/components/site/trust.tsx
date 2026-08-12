import { Reveal } from "@/components/site/reveal";

const GYMS = [
  "Apex Performance",
  "Harbour Athletic",
  "Kildare Strength",
  "Quay Leisure",
  "Northside PT",
  "The Yard Cork",
];

const QUOTES = [
  {
    quote:
      "Members stopped asking where to get a shake. It is just there — after every class.",
    name: "Ciara M.",
    role: "General Manager, Apex Performance",
  },
  {
    quote:
      "It paid for its footprint in the first month. We did not hire anyone to run it.",
    name: "Tom K.",
    role: "Owner, Harbour Athletic",
  },
];

const CERTS = ["ISO 22000", "GMP", "HACCP"];

export function Trust() {
  return (
    <section id="trust" className="section bg-paper-warm text-navy">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-muted">Trust</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium text-navy">
            Built to sit in a serious facility.
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <p className="text-sm text-muted">Trusted by leading gyms across Ireland</p>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {GYMS.map((gym) => (
              <li
                key={gym}
                className="font-display text-sm font-medium tracking-tight text-navy-soft"
              >
                {gym}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {QUOTES.map((item, i) => (
            <Reveal key={item.name} delay={i * 90} as="article">
              <figure className="flex h-full flex-col justify-between rounded-2xl bg-paper p-7 shadow-card sm:p-8">
                <blockquote className="text-xl font-medium tracking-tight text-navy">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-8 text-sm text-muted">
                  <span className="font-medium text-navy">{item.name}</span>
                  <span className="mx-2 text-steel">·</span>
                  {item.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-wrap items-center gap-3">
          <span className="mr-2 text-sm text-muted">Quality</span>
          {CERTS.map((cert) => (
            <span
              key={cert}
              className="rounded-full border border-line-ink px-4 py-2 font-display text-xs tracking-[0.14em] text-navy uppercase"
            >
              {cert}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
