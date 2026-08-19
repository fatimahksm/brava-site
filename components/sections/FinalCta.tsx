"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { SiteCopy } from "@/types/content";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCta({ copy }: { copy: SiteCopy }) {
  return (
    <section className="final-cta">
      <motion.div className="container final-cta__inner" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .45 }}>
        <h2>{copy.finalCta.title}</h2>
        <p>{copy.finalCta.description}</p>
        <a className="button button--light" href={buildWhatsAppUrl(siteConfig.whatsappNumber, "Hi BRAVA, I have a project idea.")} target="_blank" rel="noreferrer">{copy.finalCta.button}<ArrowUpRight size={18} /></a>
      </motion.div>
    </section>
  );
}
