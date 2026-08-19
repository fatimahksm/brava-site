"use client";

import { AppWindow, PanelsTopLeft, QrCode, WandSparkles } from "lucide-react";
import { motion } from "motion/react";
import type { SiteCopy, ServiceKey } from "@/types/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services: Array<{ key: ServiceKey; icon: typeof PanelsTopLeft }> = [
  { key: "websites", icon: PanelsTopLeft },
  { key: "digitalMenus", icon: QrCode },
  { key: "webApps", icon: AppWindow },
  { key: "customSolutions", icon: WandSparkles },
];

export function Services({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="services" className="services-section">
      <SectionHeading eyebrow={copy.services.eyebrow} title={copy.services.title} description={copy.services.description} />
      <div className="services-grid">
        {services.map(({ key, icon: Icon }, index) => (
          <motion.article
            className="service-card"
            key={key}
            initial={{ opacity: 0, y: 36, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: .25 }}
            transition={{ duration: .55, delay: index * .08 }}
          >
            <span className="service-card__icon"><Icon size={22} /></span>
            <span className="service-card__number">0{index + 1}</span>
            <h3>{copy.services.items[key].title}</h3>
            <p>{copy.services.items[key].description}</p>
            <span className="service-card__line" aria-hidden="true" />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
