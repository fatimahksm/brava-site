"use client";

import { ArrowUpRight, Construction } from "lucide-react";
import { motion } from "motion/react";
import type { SiteCopy } from "@/types/content";
import { Section } from "@/components/ui/Section";

export function FrontseyTeaser({ copy }: { copy: SiteCopy }) {
  return (
    <Section className="frontsey-section">
      <motion.div className="frontsey-card" initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .65 }}>
        <div className="frontsey-card__noise" aria-hidden="true" />
        <span className="frontsey-card__label"><Construction size={16} />{copy.frontsey.label}</span>
        <h2>{copy.frontsey.title}</h2>
        <p>{copy.frontsey.description}</p>
        <span className="frontsey-card__ghost-link">frontsey <ArrowUpRight size={16} /></span>
      </motion.div>
    </Section>
  );
}
