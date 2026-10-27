import { createFileRoute } from "@tanstack/react-router";
import { Heart, Flame, Users, Award } from "lucide-react";
import interior from "@/assets/interior.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dutch Pot Restaurant & Grill" },
      { name: "description", content: "Our story: cooking authentic Jamaican food in the traditional dutch pot over open flame." },
      { property: "og:title", content: "About — Dutch Pot Restaurant & Grill" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Our story: cooking authentic Jamaican food in the traditional dutch pot over open flame." },
      { property: "og:image", content: interior.url },
      { name: "twitter:image", content: interior.url },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Flame,
    title: "Fire First",
    description: "We cook over real wood and charcoal, not flat tops. That smoke is the secret ingredient.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every pot is seasoned with time, tradition, and the kind of care you can taste.",
  },
  {
    icon: Users,
    title: "Family Style",
    description: "Big portions, shared sides, and a welcome that makes strangers feel like family.",
  },
  {
    icon: Award,
    title: "Island Quality",
    description: "Pimento, thyme, scallions, Scotch bonnet — we source the flavors of Jamaica.",
  },
];

function AboutPage() {
  return (
    <div className="grain">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Our Story
            </p>
            <h1 className="mt-2 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              ROOTS, FIRE, AND FLAVOR
            </h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Dutch Pot Restaurant & Grill was born from a simple belief: the best
              Jamaican food doesn't come from a fancy kitchen — it comes from a
              heavy black pot, a steady fire, and a cook who knows when to stir.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We braise oxtail until the meat surrenders, jerk chicken over
              pimento wood until the skin crackles, and simmer curry goat until
              the whole yard smells like home. Our recipes come from family
              kitchens in Kingston, Portland, and St. Elizabeth, passed down and
              refined over decades.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              When you walk through our doors, you're not just a customer —
              you're family. So pull up a chair, grab a Ting, and let us feed
              you proper.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={interior.url}
              alt="Warmly lit interior of Dutch Pot Restaurant & Grill"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              What We Stand On
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
              OUR VALUES
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-ember/30"
              >
                <value.icon className="mx-auto h-8 w-8 text-ember" />
                <h3 className="mt-4 font-display text-xl tracking-wide text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
          THE DUTCH POT METHOD
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          The dutch pot — cast iron, thick-walled, and heavy — holds heat like
          nothing else. It lets meat break down slowly, lets spices bloom in oil,
          and creates gravies so rich you'll want to lick the plate. It's not
          fast food. It's food with patience.
        </p>
      </section>
    </div>
  );
}
