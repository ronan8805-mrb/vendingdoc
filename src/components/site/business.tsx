import {
  BadgeCheck,
  Clock3,
  Handshake,
  Building2,
  UserRoundX,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

const BENEFITS = [
  {
    title: "Zero staff required",
    body: "No barista. No extra close-down. The machine is the service.",
    icon: UserRoundX,
  },
  {
    title: "Revenue share",
    body: "You host. We operate. The floor earns without a new wage line.",
    icon: Handshake,
  },
  {
    title: "Open whenever you are",
    body: "Five in the morning. Eleven at night. The same cup, the same dose.",
    icon: Clock3,
  },
  {
    title: "Members stay longer",
    body: "A reason to linger after the session — and to come back tomorrow.",
    icon: BadgeCheck,
  },
  {
    title: "A more modern venue",
    body: "The look of a serious facility. Not a dusty tub on reception.",
    icon: Building2,
  },
  {
    title: "We restock and maintain",
    body: "Powder, cups, service, software. Your team does not touch it.",
    icon: Wrench,
  },
];

export function Business() {
  return (
    <section id="venues" className="section bg-ink text-fg">
      <div className="wrap">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-silver">For gym owners & operators</p>
            <h2 className="mt-4 text-3xl font-medium text-fg">
              Your floor. Our machine. Shared revenue.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={80}>
            <p className="text-lg text-fg-muted">
              Built for commercial premises — gyms, leisure centres, hotels,
              and performance facilities. One conversation. We handle the rest.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((item, i) => (
            <Reveal key={item.title} delay={i * 50} as="article">
              <div className="flex h-full flex-col bg-navy p-7 transition-colors duration-200 hover:bg-navy-mid">
                <item.icon className="size-5 text-silver" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-medium text-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm text-fg-muted">
            Most venues start with one machine. High-traffic clubs add a second
            at the opposite end of the floor.
          </p>
          <Button asChild variant="silver" size="lg">
            <a href="#request">Request a Machine</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
