import { createFileRoute } from "@tanstack/react-router";
import { Check, Users, PartyPopper, Briefcase, Phone } from "lucide-react";
import { site } from "@/data/site";
import jerkGrill from "@/assets/jerk-grill.jpg.asset.json";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering & Events — Dutch Pot Restaurant & Grill" },
      { name: "description", content: "Catering packages for parties, corporate events, and weddings. Jamaican jerk, curry, oxtail, and sides." },
      { property: "og:title", content: "Catering & Events — Dutch Pot Restaurant & Grill" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Catering packages for parties, corporate events, and weddings. Jamaican jerk, curry, oxtail, and sides." },
      { property: "og:image", content: jerkGrill.url },
      { name: "twitter:image", content: jerkGrill.url },
    ],
  }),
  component: CateringPage,
});

const packages = [
  {
    name: "Likkle Party",
    price: "$200",
    feeds: "10–15 guests",
    description: "Perfect for small gatherings and office lunches.",
    includes: [
      "Jerk chicken",
      "Rice & peas",
      "Fried plantain",
      "Festival",
      "Cabbage",
      "Sorrel or ginger beer",
    ],
  },
  {
    name: "Yard Style",
    price: "$450",
    feeds: "25–35 guests",
    description: "Our most popular package for birthdays and family events.",
    includes: [
      "Jerk chicken & jerk pork",
      "Curry goat or brown stew chicken",
      "Rice & peas",
      "Fried plantain & festival",
      "Steamed cabbage",
      "Patties",
      "Sorrel & ginger beer",
    ],
    featured: true,
  },
  {
    name: "Big Dutch Pot",
    price: "$900",
    feeds: "50–70 guests",
    description: "Full spread for weddings, corporate events, and large parties.",
    includes: [
      "Jerk chicken, jerk pork & escovitch snapper",
      "Oxtail OR curry goat",
      "Rice & peas",
      "Fried plantain, festival & dumpling",
      "Salad & steamed cabbage",
      "Beef, chicken & veggie patties",
      "Full drink station",
    ],
  },
];

const eventTypes = [
  { icon: PartyPopper, label: "Birthdays & Celebrations" },
  { icon: Briefcase, label: "Corporate Events" },
  { icon: Users, label: "Weddings & Receptions" },
  { icon: Phone, label: "Holiday & Private Parties" },
];

function CateringPage() {
  return (
    <div className="grain">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0">
          <img
            src={jerkGrill.url}
            alt="Jerk chicken on the grill"
            width={1200}
            height={800}
            className="h-full w-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Feeding the Massive
          </p>
          <h1 className="mt-2 font-display text-5xl tracking-wide text-foreground sm:text-7xl">
            CATERING & EVENTS
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Bring the fire to your next event. We serve Jamaican classics in
            generous trays built for sharing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition-colors ${
                pkg.featured
                  ? "border-ember bg-card shadow-lg shadow-ember/10"
                  : "border-border bg-card hover:border-ember/30"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h2 className="font-display text-3xl tracking-wide text-foreground">
                {pkg.name}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{pkg.description}</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl text-gold">{pkg.price}</span>
                <span className="text-sm text-muted-foreground">/ {pkg.feeds}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-island-green" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={site.phoneHref}
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                  pkg.featured
                    ? "bg-primary text-primary-foreground hover:bg-ember-glow"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                <Phone className="h-4 w-4" />
                Book This Package
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Any Occasion
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
              EVENTS WE SERVE
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eventTypes.map((event) => (
              <div
                key={event.label}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-ember/30"
              >
                <event.icon className="h-8 w-8 text-ember" />
                <h3 className="mt-4 font-display text-lg tracking-wide text-foreground">
                  {event.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
          READY TO BOOK?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Tell us your date, guest count, and must-have dishes. We'll build a
          custom quote and make it irie.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:bg-ember-glow hover:ember-glow"
          >
            <Phone className="h-5 w-5" />
            Call to Book
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-lg font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
}
