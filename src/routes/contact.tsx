import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { site } from "@/data/site";
import interior from "@/assets/interior.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dutch Pot Restaurant & Grill" },
      { name: "description", content: "Find Dutch Pot Restaurant & Grill's address, hours, phone number, and catering inquiries." },
      { property: "og:title", content: "Contact — Dutch Pot Restaurant & Grill" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Find Dutch Pot Restaurant & Grill's address, hours, phone number, and catering inquiries." },
      { property: "og:image", content: interior.url },
      { name: "twitter:image", content: interior.url },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="grain">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Get in Touch
          </p>
          <h1 className="mt-2 font-display text-5xl tracking-wide text-foreground sm:text-7xl">
            CONTACT
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Come through, call ahead, or book catering. We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-2xl tracking-wide text-foreground">
                VISIT US
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                  <div>
                    <p className="font-medium text-foreground">{site.fullAddress}</p>
                    <p className="text-sm text-muted-foreground">
                      Street parking available. Wheelchair accessible entrance.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="h-5 w-5 shrink-0 text-ember" />
                  <a href={site.phoneHref} className="font-medium text-foreground hover:text-gold">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="h-5 w-5 shrink-0 text-ember" />
                  <a href={`mailto:${site.email}`} className="font-medium text-foreground hover:text-gold">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-2xl tracking-wide text-foreground">
                HOURS
              </h2>
              <ul className="mt-6 space-y-3">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between gap-4 text-sm">
                    <span className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="h-4 w-4 text-ember" />
                      {h.day}
                    </span>
                    <span className="font-medium text-foreground">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-2xl tracking-wide text-foreground">
                FOLLOW US
              </h2>
              <div className="mt-6 flex gap-4">
                <a
                  href={site.social.instagram}
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a
                  href={site.social.facebook}
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
                <a
                  href={site.social.twitter}
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Twitter className="h-4 w-4" /> Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={interior.url}
                alt="Inside Dutch Pot Restaurant & Grill"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl border border-border bg-secondary/30 p-6">
              <h3 className="font-display text-xl tracking-wide text-foreground">
                CATERING INQUIRIES
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                For events, large orders, and custom menus, call us or send an
                email with your date and guest count.
              </p>
              <a
                href={site.phoneHref}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ember-glow"
              >
                <Phone className="h-4 w-4" />
                Call for Catering
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
