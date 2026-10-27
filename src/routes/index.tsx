import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Clock, MapPin, ArrowRight, UtensilsCrossed } from "lucide-react";
import { site } from "@/data/site";
import { signatureDishes } from "@/data/menu";
import { MenuSizes } from "@/components/MenuSizes";
import { useTodayHours } from "@/hooks/useTodayHours";
import { galleryImages } from "@/data/gallery";
import heroDutchPot from "@/assets/hero-dutch-pot.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dutch Pot Restaurant & Grill — Authentic Jamaican Restaurant" },
      { name: "description", content: "Authentic Jamaican cooking from the dutch pot. Jerk chicken, oxtail, curry goat, roti, and more." },
      { property: "og:title", content: "Dutch Pot Restaurant & Grill — Authentic Jamaican Restaurant" },
      { property: "og:description", content: "Authentic Jamaican cooking from the dutch pot. Jerk chicken, oxtail, curry goat, roti, and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroDutchPot.url },
      { name: "twitter:image", content: heroDutchPot.url },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const today = useTodayHours();
  return (
    <div className="grain">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroDutchPot.url}
            alt="Dutch pot simmering over an open fire"
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Authentic Jamaican Kitchen
          </p>
          <h1 className="font-display text-6xl leading-none tracking-wide text-foreground sm:text-8xl md:text-9xl">
            DUTCH POT
          </h1>
          <p className="mt-2 font-display text-2xl tracking-[0.15em] text-gold sm:text-3xl">
            RESTAURANT & GRILL
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/90">
            {site.tagline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:bg-ember-glow hover:ember-glow"
            >
              <Phone className="h-5 w-5" />
              Call to Order
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-8 py-4 text-lg font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
            >
              See the Menu
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="border-y border-border/50 bg-secondary/30">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 py-6 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="h-5 w-5 text-ember" />
            <span>Open today:</span>
            <span className="font-medium text-foreground">{today ?? "—"}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-5 w-5 text-ember" />
            <span>{site.fullAddress}</span>
          </div>
          <a
            href={site.phoneHref}
            className="flex items-center gap-3 text-sm font-medium text-gold hover:underline"
          >
            <Phone className="h-5 w-5" />
            {site.phone}
          </a>
        </div>
      </section>

      {/* Signature dishes */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Fan Favorites
          </p>
          <h2 className="mt-2 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            STRAIGHT FROM THE DUTCH POT
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signatureDishes.map((dish) => (
            <div
              key={dish.name}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-ember/50 hover:bg-card/80"
            >
              <h3 className="font-display text-2xl text-foreground">{dish.name}</h3>
              <MenuSizes sizes={dish.sizes} />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            <UtensilsCrossed className="h-4 w-4" />
            Full Menu
          </Link>
        </div>
      </section>

      {/* Story snippet */}
      <section className="bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Our Story
              </p>
              <h2 className="mt-2 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
                FIRE, IRON, AND FLAVOR
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                At Dutch Pot Restaurant & Grill, we cook the way Jamaican grandmothers
                taught us: low and slow in a heavy cast-iron dutch pot, over real
                wood fire. Every stew, every curry, every pot of rice carries the
                warmth of pimento, thyme, and Scotch bonnet.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Whether you come for the jerk chicken fresh off the grill or the
                oxtail falling off the bone, you're family here.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Read Our Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={galleryImages[1]?.src ?? galleryImages[0]?.src}
                alt="Jerk chicken on the grill"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              The Vibe
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
              GALLERY
            </h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
          >
            View all photos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.slice(0, 3).map((img) => (
            <div
              key={img.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1200}
                height={800}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute bottom-0 left-0 p-4 text-sm font-medium text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Catering CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            BRING THE DUTCH POT TO YOUR EVENT
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From family gatherings to corporate functions, we cater platters of
            jerk, curry, and sides that keep the party irie.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/catering"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:bg-ember-glow hover:ember-glow"
            >
              Catering Packages
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-lg font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Phone className="h-5 w-5" />
              Call to Book
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
