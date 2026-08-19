"use client";

import { Globe2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import type { ChangeEvent } from "react";
import type { Locale } from "@/lib/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = nextLocale;
    router.push(`/${segments.join("/")}/`);
  };

  return (
    <label className="language-switcher">
      <Globe2 size={16} aria-hidden="true" />
      <select value={locale} onChange={changeLanguage} aria-label="Language">
        <option value="en">EN</option>
        <option value="ar">AR</option>
        <option value="fr">FR</option>
      </select>
    </label>
  );
}
