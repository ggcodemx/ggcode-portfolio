"use client";

import { useLocale } from "@/lib/locale-context";
import { footer, siteMeta } from "@/content/site";
import Reveal from "./motion/Reveal";

export default function Footer() {
  const { locale } = useLocale();
  const t = footer[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-6 py-8 text-paper/60 sm:px-10">
      <Reveal
        delay={0}
        className="mx-auto flex max-w-5xl flex-col gap-2 font-mono text-xs sm:flex-row sm:items-center sm:justify-between"
      >
        <p>{t.tagline}</p>
        <p>
          © {year} {siteMeta.name}. {t.rights}
        </p>
      </Reveal>
    </footer>
  );
}
