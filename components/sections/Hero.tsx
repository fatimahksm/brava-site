"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { SiteCopy } from "@/types/content";
import { BravaLogoAnimation } from "@/components/ui/BravaLogoAnimation";

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
          <motion.div className="hero-visual__signature" animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}>
            <BravaLogoAnimation />
          </motion.div>
          <motion.span className="hero-visual__caption" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.7 }}>
            {copy.hero.visualLabel}
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        className="hero__intro-mark"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, visibility: "hidden" }}
        transition={{ duration: reduceMotion ? .2 : .55, delay: reduceMotion ? .15 : 3.05 }}
        aria-hidden="true"
      >
        <BravaLogoAnimation />
      </motion.div>
    </section>
  );
}
