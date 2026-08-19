"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function LocaleGateway() {
  useEffect(() => {
    const language = navigator.language.toLowerCase();
    const locale = language.startsWith("ar") ? "ar" : language.startsWith("fr") ? "fr" : "en";
    window.location.replace(`/${locale}/`);
  }, []);

  return (
    <main className="gateway">
      <div className="gateway__card">
        <p>BRAVA | Tech Solutions</p>
        <h1>Choose your language</h1>
        <div className="gateway__links">
          <Link href="/en/">English</Link>
          <Link href="/ar/">العربية</Link>
          <Link href="/fr/">Français</Link>
        </div>
      </div>
    </main>
  );
}
