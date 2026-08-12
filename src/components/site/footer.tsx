import { BrandLogo } from "@/components/site/logo";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#products", label: "Products" },
  { href: "#venues", label: "For venues" },
  { href: "#members", label: "Members" },
  { href: "#request", label: "Request a machine" },
  { href: "/login", label: "Partner login" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-fg">
      <div className="wrap py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BrandLogo imgClassName="size-14" showWord />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-fg-muted">
              Ireland’s first network of machines that mix premium protein
              shakes fresh, on demand, inside the places people train.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-steel">Navigate</p>
              <ul className="mt-4 space-y-2.5">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-silver transition-colors duration-150 hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-steel">Contact</p>
              <a
                href="mailto:admin@vendingdoc.com"
                className="mt-4 inline-block text-sm text-silver transition-colors duration-150 hover:text-fg"
              >
                admin@vendingdoc.com
              </a>
              <p className="mt-3 text-sm text-fg-muted">Ireland</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-fg-muted">
            © {new Date().getFullYear()} Vending Doc. All rights reserved.
          </p>
          <p className="font-display text-xs tracking-[0.16em] text-steel uppercase">
            Ireland’s Fresh Protein Network
          </p>
        </div>
      </div>
    </footer>
  );
}
