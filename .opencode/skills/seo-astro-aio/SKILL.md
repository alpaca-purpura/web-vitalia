---
name: seo-astro-aio
description: SEO best practices for Astro sites plus AIO (AI Optimization) for LLM discoverability. Covers metadata, structured data, semantic HTML, performance, and llms.txt maintenance. Use this when creating pages, articles, or optimizing content for search engines and AI agents.
license: MIT
metadata:
  audience: web-developers
  workflow: seo-and-optimization
---

## What I do
- Ensure all pages use `<BaseHead>` with proper title and description
- Configure Open Graph and Twitter Card metadata
- Add JSON-LD structured data for rich results
- Optimize content for both Google SEO and AI/LLM discovery (AIO)
- Maintain `llms.txt` for AI agent consumption
- Apply semantic HTML for better crawling

## Astro SEO Technical Rules

### BaseHead Component
- Every page must import and use `<BaseHead>` from `../components/BaseHead.astro`
- Pass at minimum: `title` and `description` props
- Optionally pass: `image` (for OG/Twitter cards) and `type` ('website' or 'article')

### Open Graph & Twitter Cards
- Frontmatter must include `image` field for articles/studies
- Default OG image: `/og-vitalia.jpg` (defined in BaseHead)
- OG image URLs should be absolute (use `https://vitalialatam.com/...`)

### JSON-LD Structured Data
- Home page: `"@type": "SoftwareApplication"` or `"WebSite"`
- Articles: `"@type": "Article"`
- Studies: `"@type": "Article"` or custom type
- Include: name, description, url, and relevant properties

### Performance (Web Vitals)
- Use Astro's `<Image />` component (`astro:assets`) for all images
- Lazy load below-fold images
- Preconnect to external font origins (Google Fonts)
- Minimize JavaScript — Astro ships zero JS by default

## AIO (AI Optimization)

### Answer-First Structure
- First paragraph must directly answer the title's premise
- Use inverted pyramid: answer → details → context
- LLMs prefer direct, factual content

### Semantic HTML
- Use `<article>`, `<section>`, `<header>`, `<footer>`, `<nav>` appropriately
- Hierarchy: one `<h1>` per page, logical H2/H3 nesting
- Avoid meaningless `<div>` nesting — it confuses AI crawlers

### Topic Clusters & Internal Linking
- Link related articles to build topic authority
- Create clusters around: AI para clínicas, turismo médico, conversión de pacientes
- Link from articles to `/estudios` for social proof

### llms.txt Maintenance
- Located at `public/llms.txt`
- Update when adding new business lines or major case studies
- Provide a concise, AI-digestible summary of what Vitalia offers

### Trust & Citability
- Include measurable statistics and data points
- Cite external scientific/industry sources
- Use real author names and client names in studies
- This increases the chance of LLMs citing Vitalia as a primary source

## When to use me
- Creating new pages or content collections
- Writing articles or case studies
- Setting up metadata for a new page
- Optimizing existing content for SEO or AIO
- Adding structured data (JSON-LD)
- Updating `llms.txt`

## Constraints
- `description` field max 155 characters (Zod schema enforced)
- Tags are required on both `articulos` and `estudios` collections
- Content is in Spanish (Latin American)
- Site domain: `https://vitalialatam.com`
