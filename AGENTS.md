# AGENTS.md

## Stack
- **Astro 4.x** — Static Site Generation (SSG), not SSR
- **TypeScript** — strict mode, `jsx: react-jsx` configured (no React runtime installed)
- **Tailwind CSS 3** — via `@astrojs/tailwind`
- **Site domain**: `https://vitalialatam.com`

## Commands
```
npm run dev       # astro dev (local dev server)
npm run build     # astro check && astro build (typecheck first, then build)
npm run preview   # astro preview (preview production build locally)
```

## Architecture
- `src/pages/` — file-based routing. Routes are in Spanish: `/articulos/`, `/estudios/`
- `src/content/` — Astro content collections. Two collections defined in `src/content/config.ts`:
  - `articulos` — blog articles (schema: title, description, pubDate, author, image?, tags)
  - `estudios` — case studies (schema: title, description, client?, pubDate, author, tags, results?, image?)
- `src/components/BaseHead.astro` — shared `<head>` with canonical URLs, OG/Twitter meta, JSON-LD
- `public/` — static assets served at root. Images live in `public/images/`
- `skills/` — agent instruction files (copywriting, SEO) — read before generating content

## Gotchas
- **No `.gitignore`** at repo root — `dist/`, `node_modules/`, and `.astro/` should be ignored
- **No test framework** or ESLint config at root — do not invent test/lint commands
- **Content collections are currently empty** — markdown files go in `src/content/articulos/` or `src/content/studies/`
- **`description` field max 155 chars** (enforced by Zod schema)
- **`astro-seo`** package is used alongside `BaseHead.astro` for metadata — keep both in sync
- **Tailwind custom colors** use `vitalia-*` prefix (cyan, purple, yellow, navy, dark, darker)
- **Font**: Outfit (Google Fonts), loaded in `index.astro`

## Content authoring
- Content is Spanish (Latin American market, Tacna Peru)
- `description` must be ≤155 characters for SEO
- Tags are required arrays of strings on both collections
