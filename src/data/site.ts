// Business details — swap these in one edit when real info changes.
export const site = {
  name: "Dutch Pot Restaurant & Grill",
  tagline: "Authentic Jamaican cooking straight from the dutch pot.",
  phone: "678-233-3003",
  phoneHref: "tel:+16782333003",
  email: "hello@dutchpotkitchen.com",
  address: {
    street: "678 HWY 138, Unit 124",
    city: "Riverdale",
    state: "GA",
    zip: "30274",
  },
  fullAddress: "678 HWY 138, Unit 124, Riverdale, GA 30274",
  hours: [
    {
      day: "Monday — Thursday",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      hours: "11:00 AM — 8:00 PM",
    },
    {
      day: "Friday",
      days: ["Friday"],
      hours: "11:00 AM — 5:00 PM",
    },
    {
      day: "Saturday",
      days: ["Saturday"],
      hours: "Closed",
    },
    {
      day: "Sunday",
      days: ["Sunday"],
      hours: "Closed",
    },
  ],
  social: {
    instagram: "https://www.instagram.com/thedutchpotrestaurant?stkn=MWp3NTVmOThycGJkbA==",
    facebook: "https://facebook.com/dutchpotkitchen",
    twitter: "https://twitter.com/dutchpotkitchen",
  },
  futureOrdering: {
    doorDash: "#",
    uberEats: "#",
  },
};

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

/** Hours for a weekday name, e.g. "Tuesday" -> "11:00 AM — 8:00 PM". */
export function hoursForDay(dayName: string): string {
  return site.hours.find((h) => h.days.includes(dayName))?.hours ?? "Closed";
}

/** Hours for the current calendar day (call from the browser only). */
export function hoursForToday(date = new Date()): string {
  const dayName: string = WEEKDAYS[date.getDay()] ?? "Monday";
  return hoursForDay(dayName);
}
