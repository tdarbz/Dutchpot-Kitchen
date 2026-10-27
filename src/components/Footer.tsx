import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { site } from "@/data/site";
import { useTodayHours } from "@/hooks/useTodayHours";

export function Footer() {
  const today = useTodayHours();
  return (
    <footer className="border-t border-border/50 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-3xl tracking-wider text-foreground">
              DUTCH POT
            </h3>
            <p className="mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Restaurant & Grill
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Authentic Jamaican cooking from the dutch pot to your plate. Come
              nyam wid we.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={site.social.instagram}
                className="rounded-full bg-secondary p-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={site.social.facebook}
                className="rounded-full bg-secondary p-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={site.social.twitter}
                className="rounded-full bg-secondary p-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl tracking-wide text-foreground">
              HOURS
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="font-medium text-foreground/80">{h.day}</span>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl tracking-wide text-foreground">
              REACH US
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <span>{site.fullAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-ember" />
                <a href={site.phoneHref} className="hover:text-gold">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-ember" />
                <span>Open today: {today ?? "—"}</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                View Menu
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-ember-glow"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dutch Pot Restaurant & Grill. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Likkle more.
          </p>
        </div>
      </div>
    </footer>
  );
}
