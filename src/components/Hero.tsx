"use client";

import { motion, type Variants } from "motion/react";
import { useLocale } from "@/lib/locale-context";
import { hero } from "@/content/site";
import { useTypewriter } from "@/lib/use-typewriter";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { locale } = useLocale();
  const t = hero[locale];
  const { output: typedTitle, done: titleTyped } = useTypewriter(t.title, 55);

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-20 sm:px-10 sm:pt-28">
      {/* Faint blueprint grid — a quiet nod to "building systems", slowly drifting */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-grid-drift opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft glow blobs — quiet tech accent behind the hero copy */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 animate-glow-pulse rounded-full bg-teal/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-32 h-64 w-64 animate-glow-pulse rounded-full bg-amber/10 blur-3xl [animation-delay:1.5s]"
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-teal"
        >
          {t.eyebrow}
        </motion.p>

        <h1 className="mt-6 font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
          <span aria-hidden="true">
            {typedTitle}
            <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.12em] animate-cursor-blink bg-teal align-middle" />
          </span>
          <span className="sr-only">{t.title}</span>
        </h1>

        <motion.div
          initial="hidden"
          animate={titleTyped ? "visible" : "hidden"}
          variants={container}
        >
          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {t.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal hover:shadow-lg hover:shadow-teal/20"
            >
              {t.primaryCta}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-teal hover:text-teal"
            >
              {t.secondaryCta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
