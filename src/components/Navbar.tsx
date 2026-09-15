"use client";

import { useState } from "react";
import Image from "next/image";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useLocale } from "@/lib/locale-context";
import { nav } from "@/content/site";

const links: { key: keyof typeof nav.es; href: string }[] = [
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const { locale, toggleLocale } = useLocale();
  const t = nav[locale];
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 8));

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/90 px-6 backdrop-blur transition-shadow duration-300 sm:px-10 ${
        scrolled ? "border-line shadow-sm shadow-ink/5" : "border-line/80"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between py-4">
        <a href="#top" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="GGCODE MX"
            width={512}
            height={100}
            priority
            className="h-6 w-auto sm:h-7"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="group relative font-mono text-[13px] uppercase tracking-wide text-ink-soft transition-colors hover:text-teal"
            >
              {t[link.key]}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-teal transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLocale}
            aria-label="Switch language"
            className="font-mono text-xs tracking-wide text-ink-soft transition-colors hover:text-teal"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-teal px-4 py-2 font-mono text-xs text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:shadow-md hover:shadow-teal/20 sm:inline-block"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
