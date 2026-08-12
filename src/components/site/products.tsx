import { Reveal } from "@/components/site/reveal";

const PRODUCTS = [
  {
    name: "Pure Whey 100%",
    note: "Everyday whey. Full taste.",
    image: "/products/whey.jpg",
    flavours: ["Chocolate Bueno", "Cookies & Cream", "Strawberry"],
  },
  {
    name: "ISO Whey 100%",
    note: "Lean isolate. Clean finish.",
    image: "/products/iso.jpg",
    flavours: ["Vanilla", "Chocolate", "Unflavoured"],
  },
  {
    name: "Future EAA",
    note: "Essential aminos. Intra-session.",
    image: "/products/eaa.jpg",
    flavours: ["Blue Raspberry", "Fruit Punch"],
  },
  {
    name: "Creatine Monohydrate",
    note: "Exact dose. No grit ritual.",
    image: "/products/creatine.jpg",
    flavours: ["Unflavoured", "Mixed Into Whey"],
  },
  {
    name: "Pre-Workout",
    note: "Before the session. On the floor.",
    image: "/products/preworkout.jpg",
    flavours: ["Fruit Punch", "Blue Raspberry"],
  },
];

export function Products() {
  return (
    <section id="products" className="section bg-paper text-navy">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-muted">The menu</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium text-navy">
            Premium protein. Mixed to order.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Five lines. Proper flavours. Dosed in the machine — not scooped from
            a tub behind the desk.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {PRODUCTS.map((product, i) => (
            <Reveal
              key={product.name}
              delay={i * 70}
              as="article"
              className={i === 0 ? "sm:col-span-2 lg:col-span-1" : undefined}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-paper-warm shadow-card transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-card-hover">
                <div className="aspect-3/2 overflow-hidden bg-ink">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-medium text-navy">{product.name}</h3>
                  <p className="mt-1 text-sm text-muted">{product.note}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {product.flavours.map((flavour) => (
                      <li
                        key={flavour}
                        className="rounded-full bg-paper px-3 py-1 text-xs tracking-tight text-ink-soft"
                      >
                        {flavour}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
