"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import type { SiteCopy } from "@/types/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyBrava({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="why-brava" className="why-section">
      <SectionHeading eyebrow={copy.why.eyebrow} title={copy.why.title} align="center" />
      <div className="why-list">
        {copy.why.items.map((item, index) => (
          <motion.article className="why-item" key={item.title} initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .45 }} transition={{ duration: .5, delay: index * .07 }}>
            <span><CheckCircle2 size={20} /></span>
            <div><h3>{item.title}</h3><p>{item.description}</p></div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
