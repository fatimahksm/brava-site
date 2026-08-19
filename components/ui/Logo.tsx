import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-logo" aria-label={siteConfig.fullName}>
      <span className="brand-logo__mark">
        <Image src="/brand/brava-light.png" alt="" width={64} height={64} priority />
      </span>
      {!compact && (
        <span className="brand-logo__text">
          <strong>BRAVA</strong>
          <small>TECH SOLUTIONS</small>
        </span>
      )}
    </span>
  );
}
