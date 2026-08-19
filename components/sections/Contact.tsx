"use client";

import { Mail, MessageCircle, Send, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { SiteCopy, ServiceKey } from "@/types/content";
import { Section } from "@/components/ui/Section";

const serviceKeys: ServiceKey[] = ["websites", "digitalMenus", "webApps", "customSolutions"];

export function Contact({ copy }: { copy: SiteCopy }) {
  const [service, setService] = useState<ServiceKey | "">("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const selectedService = service ? copy.contact.serviceLabels[service] : copy.contact.selectPlaceholder;
    const message = copy.contact.whatsappTemplate({
      name: String(form.get("name") || ""),
      contact: String(form.get("contact") || ""),
      service: selectedService,
      message: String(form.get("message") || ""),
    });
    window.open(buildWhatsAppUrl(siteConfig.whatsappNumber, message), "_blank", "noopener,noreferrer");
  };

  return (
    <Section id="contact" className="contact-section">
      <div className="contact-grid">
        <motion.div className="contact-copy" initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .35 }}>
          <span className="eyebrow">{copy.contact.eyebrow}</span>
          <h2>{copy.contact.title}</h2>
          <p>{copy.contact.description}</p>
          <div className="contact-links">
            <a href={buildWhatsAppUrl(siteConfig.whatsappNumber, "Hi BRAVA") } target="_blank" rel="noreferrer"><MessageCircle size={18} /><span>{copy.contact.whatsapp}</span></a>
            <a href={`mailto:${siteConfig.email}`}><Mail size={18} /><span>{siteConfig.email}</span></a>
            <a href={siteConfig.instagram.url} target="_blank" rel="noreferrer"><Instagram size={18} /><span>{siteConfig.instagram.label}</span></a>
          </div>
        </motion.div>

        <motion.form className="contact-form" onSubmit={submit} initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .35 }}>
          <label><span>{copy.contact.name}</span><input name="name" type="text" required /></label>
          <label><span>{copy.contact.contact}</span><input name="contact" type="text" required /></label>
          <label>
            <span>{copy.contact.service}</span>
            <select value={service} onChange={(event) => setService(event.target.value as ServiceKey | "")} required>
              <option value="" disabled>{copy.contact.selectPlaceholder}</option>
              {serviceKeys.map((key) => <option value={key} key={key}>{copy.contact.serviceLabels[key]}</option>)}
            </select>
          </label>
          <label><span>{copy.contact.message}</span><textarea name="message" rows={5} required /></label>
          <button className="button button--primary contact-form__submit" type="submit">{copy.contact.submit}<Send size={17} /></button>
        </motion.form>
      </div>
    </Section>
  );
}
