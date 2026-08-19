"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";
import { localeDirection } from "@/lib/i18n";
import type { SiteCopy } from "@/types/content";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { WhyBrava } from "@/components/sections/WhyBrava";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { FrontseyTeaser } from "@/components/sections/FrontseyTeaser";
import { Contact } from "@/components/sections/Contact";
import { FinalCta } from "@/components/sections/FinalCta";

export function SiteShell({ locale, copy }: { locale: Locale; copy: SiteCopy }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = localeDirection(locale);
  }, [locale]);

  return (
    <div className="site-shell">
      <Navbar locale={locale} copy={copy} />
      <main>
        <Hero copy={copy} />
        <Services copy={copy} />
        <About copy={copy} />
        <WhyBrava copy={copy} />
        <Process copy={copy} />
        <Faq copy={copy} />
        <FrontseyTeaser copy={copy} />
        <Contact copy={copy} />
        <FinalCta copy={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}
