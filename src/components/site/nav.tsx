import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#products", label: "Products" },
  { href: "#venues", label: "For venues" },
  { href: "#members", label: "Members" },
] as const;

export function SiteNav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex flex-col transition-[background-color,box-shadow] duration-200 ease-out",
        open
          ? "bottom-0 bg-ink"
          : solid
            ? "bg-ink shadow-[0_1px_0_0_rgb(243_245_248_/_0.08)]"
            : "bg-transparent",
      )}
    >
      <div className="wrap flex h-16 shrink-0 items-center justify-between gap-4 sm:h-[4.25rem]">
        <a
          href="#top"
          className="relative z-10 shrink-0"
          aria-label="Vending Doc home"
          onClick={() => setOpen(false)}
        >
          <BrandLogo imgClassName="size-9 sm:size-10" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm tracking-tight text-silver transition-colors duration-150 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="default" variant="silver">
            <a href="#request">Request a Machine</a>
          </Button>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex size-11 items-center justify-center rounded-md text-fg lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="wrap flex min-h-0 flex-1 flex-col overflow-y-auto pt-2 pb-10 lg:hidden"
          aria-label="Mobile"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-5 font-display text-2xl tracking-tight text-fg"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8">
            <Button asChild size="lg" variant="silver" className="w-full">
              <a href="#request" onClick={() => setOpen(false)}>
                Request a Machine
              </a>
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
