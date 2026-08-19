"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { SiteCopy } from "@/types/content";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { cn } from "@/lib/cn";

export function Navbar({ locale, copy }: { locale: Locale; copy: SiteCopy }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["services", copy.nav.services],
    ["about", copy.nav.about],
    ["why-brava", copy.nav.why],
    ["process", copy.nav.process],
    ["faq", copy.nav.faq],
    ["contact", copy.nav.contact],
  ] as const;

  return (
    <header className={cn("navbar", scrolled && "navbar--scrolled")}>
      <div className="navbar__inner container">
        <a className="navbar__brand" href="#top" aria-label="BRAVA home">
          <Logo />
        </a>

        <nav className="navbar__links" aria-label="Main navigation">
          {links.map(([id, label]) => (
            <a href={`#${id}`} key={id}>{label}</a>
          ))}
        </nav>

        <div className="navbar__actions">
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
          <a className="button button--small button--primary navbar__cta" href="#contact">{copy.nav.cta}</a>
          <button className="icon-button navbar__menu" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      <div className={cn("mobile-menu", open && "mobile-menu--open")}>
        <nav className="container" aria-label="Mobile navigation">
          {links.map(([id, label]) => (
            <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
