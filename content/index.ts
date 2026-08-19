import type { Locale } from "@/lib/i18n";
import type { SiteCopy } from "@/types/content";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

function removeFullStops(value: unknown): unknown {
  if (typeof value === "string") return value.replaceAll(".", "");
  if (Array.isArray(value)) return value.map(removeFullStops);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, removeFullStops(item)]),
    );
  }
  return value;
}

const dictionaries = removeFullStops({ en, ar, fr }) as Record<Locale, SiteCopy>;

export function getCopy(locale: Locale) {
  return dictionaries[locale];
}
