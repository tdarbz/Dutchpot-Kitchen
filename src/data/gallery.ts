import heroDutchPot from "@/assets/hero-dutch-pot.jpg.asset.json";
import jerkGrill from "@/assets/jerk-grill.jpg.asset.json";
import oxtailPlate from "@/assets/oxtail-plate.jpg.asset.json";
import patties from "@/assets/patties.jpg.asset.json";
import curryGoat from "@/assets/curry-goat.jpg.asset.json";
import interior from "@/assets/interior.jpg.asset.json";

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: heroDutchPot.url,
    alt: "Dutch pot simmering over an open fire",
    caption: "The heart of the kitchen — the dutch pot over flames",
  },
  {
    src: jerkGrill.url,
    alt: "Jerk chicken sizzling on the grill",
    caption: "Jerk chicken kissed by pimento wood smoke",
  },
  {
    src: oxtailPlate.url,
    alt: "Braised oxtail with rice and peas",
    caption: "Braised oxtail, rice & peas, and festival",
  },
  {
    src: patties.url,
    alt: "Golden Jamaican beef patties",
    caption: "Flaky patties fresh from the oven",
  },
  {
    src: curryGoat.url,
    alt: "Curry goat with roti",
    caption: "Curry goat with roti and white rice",
  },
  {
    src: interior.url,
    alt: "Warmly lit restaurant interior",
    caption: "Inside Dutch Pot Restaurant & Grill",
  },
];
