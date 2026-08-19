import type { SiteCopy } from "@/types/content";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";

export function Footer({ copy }: { copy: SiteCopy }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo />
        <div className="footer__links">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.instagram.url} target="_blank" rel="noreferrer">{siteConfig.instagram.label}</a>
        </div>
        <p>© {year} BRAVA. {copy.footer.rights}</p>
      </div>
    </footer>
  );
}
