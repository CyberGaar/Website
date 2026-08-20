---
name: seo-geo-aio
description: Audit and implement SEO, GEO (generative engine optimization), and AIO (AI/LLM optimization) on a Next.js/Cloudflare site. Use when the user asks to check, improve, or add SEO, GEO, AIO, metadata, structured data, llms.txt, robots.txt, sitemap, Open Graph, or AI-crawler access.
argument-hint: "[audit|implement] [page-path...]"
---

# SEO, GEO, and AIO Optimization

Turn a site into something both classic search engines and AI assistants can find,
understand, and cite. Work in concrete, non-exaggerated service terms — "ISO 27001",
"application security", "penetration testing" — never hype like "elite cyber security".

## When to use this skill

- User asks to check or improve SEO, GEO, AIO, or search visibility.
- User wants metadata, canonical URLs, sitemap, robots.txt, structured data, or Open Graph.
- User wants AI crawler access (`llms.txt`, per-bot `robots.txt` rules).
- User asks why a page is not ranking or not being cited by ChatGPT/Perplexity/Claude.

## Workflow

Follow this order. Run the audit first so fixes target real gaps, not guesses.

1. **Audit** — read `references/checklist.md` and work through every item. Record
   implemented vs missing with exact file paths and line numbers.
2. **Report the verdict** — one paragraph: strong points, then the highest-impact gaps.
3. **Fix in priority order** — only if the user asks for implementation:
   1. Missing or duplicate `metadata` (especially region/re-export routes).
   2. AI access: `llms.txt` + per-bot `robots.txt` rules.
   3. Per-page Open Graph / Twitter cards with absolute image URLs.
   4. Structured data gaps (`Organization`, `WebSite`, `FAQPage`, `Article`, `BreadcrumbList`).
   5. Server-expose client-rendered content that AI crawlers cannot execute.
   6. Image `loading`, `priority`, and `width`/`height` for CLS.
4. **Verify** — run `npm run build` (or the repo's typecheck/lint) and the existing HTML
   render tests, then confirm the generated `/robots.txt`, `/sitemap.xml`, and page HTML
   contain the expected tags.

## Key rules

- Use Next.js native App Router APIs (`export const metadata`, `generateMetadata`,
  `MetadataRoute.Sitemap`, `MetadataRoute.Robots`) before adding any package.
- Keep copy factual and specific. AI citation quality depends on unambiguous entity and
  service names, not superlatives.
- Every page needs a unique title, description, and canonical. Never leave a route
  re-exporting only the default component while dropping `metadata`.
- Structured data must match what is actually on the page. Do not invent ratings, prices,
  or facts.
- Prefer server-rendered text over client-rendered interactivity for content AI must read.

## Reference

- `references/checklist.md` — full audit checklist and exact implementation snippets.
