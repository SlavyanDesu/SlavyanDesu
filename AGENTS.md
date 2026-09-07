# AGENTS.md

Next.js 16 (App Router) + React 19 + TypeScript (strict) + Tailwind v4 single-page portfolio, deployed to Vercel. pnpm is the package manager. Not a monorepo — `pnpm-workspace.yaml` only sets supply-chain policy.

## Commands

- `pnpm dev` / `pnpm build` / `pnpm start` are the only scripts; there is no lint or format tooling.
- Typecheck: `pnpm exec tsc --noEmit`. Run this after changes — `next build` ignores TS errors (`typescript.ignoreBuildErrors: true` in `next.config.mjs`).
- Style is unenforced, so match manually: single quotes, no semicolons, trailing commas, 2-space indent.

## Structure

- `app/page.tsx` assembles every section; `app/layout.tsx` holds metadata/fonts/analytics.
- `components/*.tsx` — one named export per file (no default exports). Add `'use client'` when you use hooks, `motion`, or Lenis.
- `lib/portfolio-data.ts` — all site content (profile, works, artworks, skills, services). Edit text/data here, not in components.
- `lib/motion.ts` — shared easing/transition constants; reuse instead of inline values.
- `lib/intro.ts` — intro-loader timing plus `introExitDelay`, consumed by Hero/Header so they never overlap the loader. Keep timing changes in sync from this file.
- `app/globals.css` — stock Tailwind v4 (`@import 'tailwindcss'`, no config, no `@theme`). Palette uses only default colors: white, `neutral-*`, and `black/14`. Geist fonts are wired by pointing the `--font-sans`/`--font-mono` vars at next/font's `--font-geist-*` in `:root`. Base `* { border-color: black 14% }` supplies the default border color. Design is intentionally monochrome/light-only — don't add dark-mode colors.
- Smooth scroll runs via Lenis; the instance is stashed on `window.__lenis` in `smooth-scroll.tsx` and read by `site-header.tsx` nav clicks. Keep both sides in sync.
- Section anchors: `#top` (hero), `#works`, `#artwork`, `#about`, `#contact`. `skills.tsx` has no id and is not in the header nav.

## Gotchas

- `tsconfig.json` has no `noUnusedLocals`/`noUnusedParameters` and builds ignore TS errors, so unused imports/vars pass silently — remove them explicitly.
- Motion/reveal effects intentionally ignore reduced-motion preferences (per `reveal.tsx`/`smooth-scroll.tsx`); don't "fix" that.
- `lib/utils.ts` and `components/ui/` were removed as dead code — a shadcn-standard `cn()`/`Button` import will fail. Recreate via the CLI only if actually needed.
- `.env*.local` is gitignored and holds live secrets (Vercel OIDC token) — never read them into context or commit them.
- `README.md` is the owner's GitHub profile README, not the project README.
- `tsconfig.tsbuildinfo` is a gitignored build artifact; don't commit it.