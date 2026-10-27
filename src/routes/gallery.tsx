import { createFileRoute } from "@tanstack/react-router";
import { galleryImages } from "@/data/gallery";
import heroDutchPot from "@/assets/hero-dutch-pot.jpg.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Dutch Pot Restaurant & Grill" },
      { name: "description", content: "Photos of Jamaican food, the dutch pot, jerk grill, and the Dutch Pot Restaurant & Grill atmosphere." },
      { property: "og:title", content: "Gallery — Dutch Pot Restaurant & Grill" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Photos of Jamaican food, the dutch pot, jerk grill, and the Dutch Pot Restaurant & Grill atmosphere." },
      { property: "og:image", content: heroDutchPot.url },
      { name: "twitter:image", content: heroDutchPot.url },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="grain">
      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          The Vibe
        </p>
        <h1 className="mt-2 font-display text-5xl tracking-wide text-foreground sm:text-7xl">
          GALLERY
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          A look at the fire, the food, and the feeling.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, index) => (
            <figure
              key={img.src}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1200}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background/95 to-transparent p-4 text-sm font-medium text-foreground transition-transform duration-300 group-hover:translate-y-0">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
