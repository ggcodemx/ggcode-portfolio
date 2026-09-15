"use client";

import { useLocale } from "@/lib/locale-context";
import { contact, siteMeta } from "@/content/site";
import Reveal from "./motion/Reveal";

export default function Contact() {
  const { locale } = useLocale();
  const t = contact[locale];
  const whatsappHref = `https://wa.me/${siteMeta.whatsappNumber}?text=${encodeURIComponent(t.whatsappMessage)}`;
  const callHref = `tel:+${siteMeta.whatsappNumber}`;

  return (
    <section id="contact" className="border-t border-line bg-ink px-6 py-20 text-paper sm:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">{t.heading}</h2>
          <p className="mt-3 max-w-xl text-paper/70">{t.body}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-whatsapp-pulse inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-soft"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.86.505 3.688 1.462 5.284L2 22l4.822-1.436A9.953 9.953 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.062a8.02 8.02 0 0 1-4.09-1.117l-.293-.174-2.86.852.86-2.786-.19-.287A8.017 8.017 0 0 1 3.938 12c0-4.451 3.612-8.062 8.063-8.062S20.062 7.549 20.062 12 16.451 20.062 12.001 20.062z" />
            </svg>
            {t.whatsappLabel}
          </a>
          <a
            href={callHref}
            className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3 text-sm font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-amber hover:text-amber"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
            </svg>
            {t.callLabel} · {t.phoneDisplay}
          </a>
        </Reveal>

        {/*
          Form scaffold only — not wired to a backend yet.
          Hook this up to an email service (Resend, Formspree) or an API route
          in src/app/api/contact/route.ts once you're ready.
        */}
        <form className="mt-10 grid max-w-xl gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder={t.formName}
            className="rounded-lg border border-paper/20 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-amber focus:outline-none"
          />
          <input
            type="email"
            placeholder={t.formEmail}
            className="rounded-lg border border-paper/20 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-amber focus:outline-none"
          />
          <textarea
            placeholder={t.formMessage}
            rows={4}
            className="rounded-lg border border-paper/20 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-amber focus:outline-none"
          />
          <button
            type="submit"
            className="w-fit rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-amber-soft"
          >
            {t.formSubmit}
          </button>
        </form>

        <a
          href={`mailto:${t.email}`}
          className="mt-8 inline-block font-mono text-sm text-paper/70 hover:text-amber"
        >
          {t.email}
        </a>
      </div>
    </section>
  );
}
