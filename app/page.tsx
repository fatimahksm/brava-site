"use client";

import { useEffect } from "react";

export default function LocaleGateway() {
  useEffect(() => {
    const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
    const locale = languages
      .map((value) => value.toLowerCase().split("-")[0])
      .find((value) => value === "ar" || value === "fr" || value === "en") ?? "en";
    window.location.replace(`/${locale}/`);
  }, []);

  return <main className="locale-redirect" aria-label="Loading BRAVA" />;
}
