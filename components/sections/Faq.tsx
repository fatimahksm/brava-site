"use client";

import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { SiteCopy } from "@/types/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq({ copy }: { copy: SiteCopy }) {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className="faq-section">
      <SectionHeading eyebrow={copy.faq.eyebrow} title={copy.faq.title} />
      <div className="faq-list">
        {copy.faq.items.map((item, index) => {
          const isOpen = open === index;
          return (
            <article className="faq-item" key={item.question}>
              <button type="button" onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}>
                <span>{item.question}</span>
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }}><Plus size={20} /></motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div className="faq-item__answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }}>
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
