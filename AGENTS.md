<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: GGCODE MX portfolio

Freelance web developer portfolio for Nallely Figueroa (GGCODE MX). Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4.

## Where things live
- `src/content/site.ts` — **all copy, in Spanish and English.** Edit text here, not inside components. Every section reads from this file via `content[locale]`.
- `src/lib/locale-context.tsx` — client-side ES/EN toggle (`useLocale()`). Default language is Spanish (`defaultLocale` in `site.ts`).
- `src/components/` — one component per section (`Hero`, `Services`, `Projects`, `About`, `Contact`, `Navbar`, `Footer`). All are client components (`"use client"`) because they read locale from context.
- `src/app/globals.css` — design tokens (colors, fonts) as CSS variables under `:root`, exposed to Tailwind via `@theme inline`. This is a Tailwind v4 project — there is **no `tailwind.config.js`**; new tokens go in `globals.css`, not a config file.
- `src/app/layout.tsx` — loads three Google Fonts via `next/font/google`: Fraunces (display/headings, `font-display`), Inter (body, default `font-sans`), IBM Plex Mono (labels/eyebrows, `font-mono`).

## Design intent (read before changing visual style)
Palette is warm paper (`--color-paper`) + deep teal (`--color-teal`) as the primary brand color + a single amber accent (`--color-amber`) reserved for calls to action — deliberately avoiding the generic "cream + terracotta" or "black + neon" AI-portfolio defaults. The blueprint grid in the Hero and the numbered (01/02/03) service list are intentional nods to "building systems" — keep that logic in mind if adding new decorative elements; don't add numbering or grids purely for decoration elsewhere.

## Known gaps / next steps for whoever picks this up
- **Contact form is not wired up** — it's a static form (`src/components/Contact.tsx`) with `preventDefault()` and no backend. Needs a real integration (e.g. Resend, Formspree, or a `src/app/api/contact/route.ts` API route) before it's usable.
- **Project "result" lines have bracketed placeholders** (e.g. `[alcance / seguidores ganados]`) in `site.ts` — replace with real numbers once available; don't leave brackets in production copy.
- **No project images yet** — `Projects.tsx` cards are currently text-only. Add screenshots/mockups per project (consider `next/image` with the `public/projects/` folder).
- **Locale is client-side only, not URL-based** (no `/en` vs `/es` routes) — fine for a v0, but means search engines only ever see whichever language rendered first (Spanish). If SEO in both languages matters later, consider Next.js i18n routing instead of the current context-based toggle.
- **No favicon/OG image customized yet** — still the Next.js default in `src/app/favicon.ico`.
