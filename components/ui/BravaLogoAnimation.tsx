"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";

const draw = (delay: number, duration = 1.1) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: { duration, delay, ease: "easeInOut" as const },
});

export function BravaLogoAnimation({ markOnly = false }: { markOnly?: boolean }) {
  const reduceMotion = useReducedMotion();
  const id = useId().replace(/:/g, "");
  const navyGradient = `brava-navy-${id}`;
  const electricGradient = `brava-electric-${id}`;
  const glow = `brava-glow-${id}`;

  return (
    <div className="brava-signature" aria-label="BRAVA">
      <motion.svg
        className="brava-signature__mark"
        viewBox="0 0 640 500"
        role="img"
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0, scale: .92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .55, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id={navyGradient} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--brava-logo-start)" />
            <stop offset="1" stopColor="var(--brava-logo-end)" />
          </linearGradient>
          <linearGradient id={electricGradient} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1677ff" />
            <stop offset=".55" stopColor="#0750ff" />
            <stop offset="1" stopColor="#1600d8" />
          </linearGradient>
          <filter id={glow} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <motion.path
          d="M214 76H408C480 76 528 112 528 174C528 219 502 249 458 263C508 276 538 312 538 360C538 430 487 466 408 466H236L276 406H405C447 406 472 388 472 354C472 320 447 302 405 302H316L354 244H402C440 244 463 225 463 193C463 159 439 141 399 141H270Z"
          fill="none"
          stroke={`url(#${navyGradient})`}
          strokeWidth="18"
          strokeLinejoin="round"
          {...(reduceMotion ? {} : draw(.15, 1.55))}
        />
        <motion.path
          d="M214 76H408C480 76 528 112 528 174C528 219 502 249 458 263C508 276 538 312 538 360C538 430 487 466 408 466H236L276 406H405C447 406 472 388 472 354C472 320 447 302 405 302H316L354 244H402C440 244 463 225 463 193C463 159 439 141 399 141H270Z"
          fill={`url(#${navyGradient})`}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 1.35, duration: .6 }}
        />

        <motion.path
          d="M82 297L292 176H399L279 248Z"
          fill={`url(#${electricGradient})`}
          filter={`url(#${glow})`}
          initial={reduceMotion ? false : { opacity: 0, x: -54, scaleX: .45 }}
          animate={{ opacity: 1, x: 0, scaleX: 1 }}
          transition={{ delay: reduceMotion ? 0 : 1.55, duration: .72, ease: [0.2, 0.9, 0.2, 1] }}
          style={{ transformOrigin: "right center" }}
        />
        <motion.path
          d="M76 432L280 285V376L268 359Z"
          fill={`url(#${electricGradient})`}
          filter={`url(#${glow})`}
          initial={reduceMotion ? false : { opacity: 0, x: -62, scaleX: .35 }}
          animate={{ opacity: 1, x: 0, scaleX: 1 }}
          transition={{ delay: reduceMotion ? 0 : 1.78, duration: .72, ease: [0.2, 0.9, 0.2, 1] }}
          style={{ transformOrigin: "right center" }}
        />

        <motion.path
          d="M76 432L268 359M82 297L279 248"
          fill="none"
          stroke="#53c8ff"
          strokeWidth="3"
          strokeLinecap="round"
          {...(reduceMotion ? {} : draw(2.12, .65))}
        />
      </motion.svg>

      {!markOnly && (
        <>
          <motion.div
            className="brava-signature__word"
            initial={reduceMotion ? false : { opacity: 0, y: 16, letterSpacing: ".48em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: ".3em" }}
            transition={{ delay: reduceMotion ? 0 : 2.05, duration: .75, ease: "easeOut" }}
          >
            BRAVA
          </motion.div>
          <motion.div
            className="brava-signature__line"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: reduceMotion ? 0 : 2.45, duration: .65, ease: "easeOut" }}
          />
        </>
      )}
    </div>
  );
}
