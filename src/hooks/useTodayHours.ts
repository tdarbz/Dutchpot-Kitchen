import { useEffect, useState } from "react";
import { hoursForToday } from "@/data/site";

/**
 * Today's opening hours. Returns null until mounted so server and client
 * render the same markup, then fills in the real day's hours.
 */
export function useTodayHours(): string | null {
  const [hours, setHours] = useState<string | null>(null);

  useEffect(() => {
    setHours(hoursForToday());
  }, []);

  return hours;
}
