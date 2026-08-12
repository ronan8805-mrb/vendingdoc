import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Problem } from "@/components/site/problem";
import { HowItWorks } from "@/components/site/how-it-works";
import { Products } from "@/components/site/products";
import { Business } from "@/components/site/business";
import { Members } from "@/components/site/members";
import { Trust } from "@/components/site/trust";
import { RequestForm } from "@/components/site/request-form";
import { SiteFooter } from "@/components/site/footer";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <div className="bg-ink">
          <img
            src="/images/drinks-line.jpg"
            alt="Vending Doc cups — freshly made protein shakes"
            className="aspect-3/2 w-full object-cover object-center sm:aspect-[5/2]"
          />
        </div>
        <Products />
        <Business />
        <Members />
        <Trust />
        <RequestForm />
      </main>
      <SiteFooter />
    </>
  );
}
