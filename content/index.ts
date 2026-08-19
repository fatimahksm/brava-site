import type { Locale } from "@/lib/i18n";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

const dictionaries = { en, ar, fr } as const;

export function getCopy(locale: Locale) {
  return dictionaries[locale];
}
