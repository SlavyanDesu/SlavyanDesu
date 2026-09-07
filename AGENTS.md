# AGENTS.md

Next.js 16 (App Router) + React 19 + TypeScript (strict) + Tailwind v4 single-page portfolio, deployed to Vercel. pnpm is the package manager. Not a monorepo — `pnpm-workspace.yaml` only sets supply-chain policy.

## Commands

- `pnpm dev` / `pnpm build` / `pnpm start` are the only scripts; there is no lint or format tooling.
- Typecheck: `pnpm exec tsc --noEmit`. Run this after changes — `next build` ignores TS errors (`typescript.ignoreBuildErrors: true` in `next.config.mjs`).
- Style is unenforced, so match manually: single quotes, no semicolons, trailing commas, 2-space indent.

## Structure

- `app/page.tsx` assembles every section; `app/layout.tsx` holds metadata/fonts/analytics.
- `components/` is grouped by role, one named export per file (no default exports). Add `'use client'` when you use hooks, `motion`, or Lenis:
  - `layout/` — page chrome: `site-header.tsx`, `contact-footer.tsx`, `smooth-scroll.tsx`.
  - `sections/` — one file per page section: `hero.tsx`, `selected-works.tsx`, `artwork.tsx`, `about.tsx`, `skills.tsx`.
  - `shared/` — reusable building blocks: `reveal.tsx`, `section-header.tsx`, `section.tsx`, `marquee.tsx`. `section.tsx` is the padded page shell (`px-6 py-24 md:px-10 md:py-40`) with optional `as`/`id`/`className`; the footer renders it with `as="div"`.
  - `overlays/` — fixed/full-screen layers: `intro-loader.tsx`, `artwork-lightbox.tsx`.
- `lib/portfolio-data.ts` — all site content (profile, works, artworks, skills, services). Edit text/data here, not in components.
- `lib/motion.ts` — shared easing/transition constants; reuse instead of inline values.
- `lib/intro.ts` — intro-loader timing plus `introExitDelay`, consumed by Hero/Header so they never overlap the loader. Keep timing changes in sync from this file.
- `lib/lenis.d.ts` — the one global: `declare global` typing for `window.__lenis`; it backs SmoothScroll + nav click in SiteHeader.
- `app/globals.css` — stock Tailwind v4 (`@import 'tailwindcss'`, no config, no `@theme`). Palette uses only default colors: white, `neutral-*`, and `black/14`. Geist fonts are wired by pointing the `--font-sans`/`--font-mono` vars at next/font's `--font-geist-*` in `:root`. Base `* { border-color: black 14% }` supplies the default border color. Design is intentionally monochrome/light-only — don't add dark-mode colors.
- Smooth scroll runs via Lenis; the instance is stashed on `window.__lenis` in `layout/smooth-scroll.tsx` and read by `layout/site-header.tsx` nav clicks. Keep both sides (and `lib/lenis.d.ts`) in sync.
- Section anchors: `#top` (hero), `#works`, `#artwork`, `#about`, `#contact`. `skills.tsx` has no id and is not in the header nav.

## Gotchas

- `tsconfig.json` has no `noUnusedLocals`/`noUnusedParameters` and builds ignore TS errors, so unused imports/vars pass silently — remove them explicitly.
- Motion/reveal effects intentionally ignore reduced-motion preferences (per `shared/reveal.tsx`/`layout/smooth-scroll.tsx`); don't "fix" that.
- `lib/utils.ts`, `components/ui/`, and `components.json` were removed as dead code — a shadcn-standard `cn()`/`Button` import will fail, and the `shadcn` CLI is uninstalled. Re-add it (`pnpm add -D shadcn`) only if you actually need generated components.
- `.env*.local` is gitignored and holds live secrets (Vercel OIDC token) — never read them into context or commit them.
- `README.md` is the owner's GitHub profile README, not the project README.
- `tsconfig.tsbuildinfo` is a gitignored build artifact; don't commit it.