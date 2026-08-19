"use client";

import { motion } from "motion/react";
import type { SiteCopy } from "@/types/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="process" className="process-section">
      <SectionHeading eyebrow={copy.process.eyebrow} title={copy.process.title} />
      <div className="process-track">
        <motion.span className="process-track__line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: 1, ease: "easeOut" }} />
        {copy.process.items.map((item, index) => (
          <motion.article className="process-step" key={item.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: .15 + index * .14 }}>
            <span className="process-step__number">{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
