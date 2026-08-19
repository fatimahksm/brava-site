"use client";

import { motion } from "motion/react";
import type { SiteCopy } from "@/types/content";
import { Section } from "@/components/ui/Section";
import { BravaLogoAnimation } from "@/components/ui/BravaLogoAnimation";

export function About({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="about" className="about-section">
      <div className="about-grid">
        <motion.div className="about-visual" initial={{ opacity: 0, x: -36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .7 }}>
          <div className="about-visual__frame">
            <div className="about-visual__logo"><BravaLogoAnimation markOnly /></div>
          </div>
        </motion.div>
        <motion.div className="about-copy" initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .7 }}>
          <span className="eyebrow">{copy.about.eyebrow}</span>
          <h2>{copy.about.title}</h2>
          <p>{copy.about.body}</p>
          <strong>{copy.about.accent}</strong>
        </motion.div>
      </div>
    </Section>
  );
}
