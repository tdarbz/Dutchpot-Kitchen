import { createFileRoute } from "@tanstack/react-router";
import { Flame } from "lucide-react";
import { menuSections } from "@/data/menu";
import { MenuSizes } from "@/components/MenuSizes";
import oxtailPlate from "@/assets/oxtail-plate.jpg.asset.json";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Dutch Pot Restaurant & Grill" },
      { name: "description", content: "Explore our full Jamaican menu with sizes and USD prices: chicken, meat entrées, seafood, roti, soups, pasta, sides, and vegetarian dishes." },
      { property: "og:title", content: "Menu — Dutch Pot Restaurant & Grill" },
      { property: "og:description", content: "Explore our full Jamaican menu with sizes and USD prices: chicken, meat entrées, seafood, roti, soups, pasta, sides, and vegetarian dishes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: oxtailPlate.url },
      { name: "twitter:image", content: oxtailPlate.url },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="grain">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0">
          <img
            src={oxtailPlate.url}
            alt="Braised oxtail with rice and peas"
            width={1200}
            height={800}
            className="h-full w-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Come Nyam Wid We
          </p>
          <h1 className="mt-2 font-display text-5xl tracking-wide text-foreground sm:text-7xl">
            THE MENU
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From the dutch pot to the grill, every dish is made with island
            ingredients and yard-style patience.
          </p>
        </div>
      </section>

      {/* Menu sections */}
      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {menuSections.map((section) => (
            <div key={section.title}>
              <div className="mb-8 border-b border-border/50 pb-4">
                <h2 className="font-display text-3xl tracking-wide text-foreground sm:text-4xl">
                  {section.title}
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-ember/30"
                  >
                    <h3 className="font-display text-xl text-foreground">{item.name}</h3>
                    <MenuSizes sizes={item.sizes} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-border bg-secondary/30 p-8 text-center">
          <Flame className="mx-auto h-8 w-8 text-ember" />
          <p className="mt-4 text-sm text-muted-foreground">
            Prices and availability may change. Call ahead for today's specials.
          </p>
        </div>
      </section>
    </div>
  );
}
