"use client";

import { useLocale } from "@/lib/locale-context";
import { services } from "@/content/site";
import Reveal from "./motion/Reveal";

export default function Services() {
  const { locale } = useLocale();
  const t = services[locale];

  return (
    <section id="services" className="border-t border-line px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">{t.heading}</h2>
          <p className="mt-3 max-w-xl text-ink-soft">{t.intro}</p>
        </Reveal>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {t.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <div className="group relative flex flex-col gap-2 py-8 pl-4 -ml-4 transition-colors sm:flex-row sm:gap-8">
                <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-amber transition-transform duration-300 ease-out group-hover:scale-y-100" />
                <span className="font-mono text-sm text-muted transition-colors duration-300 group-hover:text-amber sm:w-12">
                  {item.label}
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-xl text-ink sm:text-2xl">{item.title}</h3>
                    {"badge" in item && item.badge && (
                      <span className="rounded-full bg-amber-soft px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-ink">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 max-w-xl leading-relaxed text-ink-soft">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
