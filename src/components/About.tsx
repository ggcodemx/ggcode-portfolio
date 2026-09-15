"use client";

import { useLocale } from "@/lib/locale-context";
import { about } from "@/content/site";
import Reveal from "./motion/Reveal";

export default function About() {
  const { locale } = useLocale();
  const t = about[locale];

  return (
    <section id="about" className="border-t border-line px-6 py-20 sm:px-10">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">{t.heading}</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">{t.body}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <h3 className="font-mono text-xs uppercase tracking-wide text-muted">
            {t.stackHeading}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {t.stack.map((tech, i) => (
              <Reveal as="li" key={tech} delay={0.15 + i * 0.03}>
                <span className="inline-block rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-teal hover:text-teal">
                  {tech}
                </span>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
