"use client";

import { ArrowDown, ArrowUpRight, LayoutTemplate, Smartphone, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import type { SiteCopy } from "@/types/content";

export function Hero({ copy }: { copy: SiteCopy }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="top">
      <div className="hero__ambient" aria-hidden="true">
        <motion.span className="hero__orb hero__orb--one" animate={reduceMotion ? undefined : { y: [0, -28, 0], x: [0, 18, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.span className="hero__orb hero__orb--two" animate={reduceMotion ? undefined : { y: [0, 22, 0], x: [0, -16, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.span className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }}>
            {copy.hero.eyebrow}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2 }}>
            {copy.hero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .32 }}>
            {copy.hero.description}
          </motion.p>
          <motion.div className="hero__actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }}>
            <a className="button button--primary" href="#contact">{copy.hero.primaryCta}<ArrowUpRight size={18} /></a>
            <a className="button button--ghost" href="#services">{copy.hero.secondaryCta}<ArrowDown size={17} /></a>
          </motion.div>
        </div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94, y: 26 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .85, delay: .2 }}>
          <div className="hero-visual__grid" aria-hidden="true" />
          <motion.div className="hero-visual__browser" animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>
            <div className="browser-bar"><span /><span /><span /><b>brava / experience</b></div>
            <div className="browser-content">
              <div className="browser-brand"><Image src="/brand/brava-light.png" alt="" width={58} height={58} /></div>
              <span className="browser-kicker">DIGITAL EXPERIENCE</span>
              <div className="browser-title-line browser-title-line--wide" />
              <div className="browser-title-line" />
              <div className="browser-copy-line" />
              <div className="browser-actions"><span /><span /></div>
            </div>
          </motion.div>

          <motion.div className="floating-card floating-card--mobile" animate={reduceMotion ? undefined : { y: [0, 10, 0], rotate: [-2, 1, -2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <Smartphone size={18} /><span>Responsive</span>
          </motion.div>
          <motion.div className="floating-card floating-card--build" animate={reduceMotion ? undefined : { y: [0, -9, 0], rotate: [2, -1, 2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <LayoutTemplate size={18} /><span>Built with purpose</span>
          </motion.div>
          <motion.div className="floating-card floating-card--spark" animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }} transition={{ duration: 3.8, repeat: Infinity }}>
            <Sparkles size={17} /><span>{copy.hero.visualLabel}</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="hero__intro-mark" initial={{ opacity: 1 }} animate={{ opacity: 0, pointerEvents: "none" }} transition={{ duration: .45, delay: 1.05 }} aria-hidden="true">
        <motion.div initial={{ scale: .78, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .5 }}>
          <Image src="/brand/brava-dark.png" alt="" width={220} height={180} priority />
        </motion.div>
      </motion.div>
    </section>
  );
}
