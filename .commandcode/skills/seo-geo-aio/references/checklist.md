# SEO / GEO / AIO Audit Checklist

Work through every item. Mark each **implemented** (with path + line) or **missing**.

## 1. Metadata (title, description, canonical)

- Root layout `metadata` has `metadataBase`, `title`, `description`, `keywords`, `icons`.
- Every static route has its own `export const metadata`.
- Every dynamic route has `generateMetadata` producing per-slug title/description/canonical.
- `alternates.canonical` is set per page.
- **Check re-export routes** (`export { default } from "../page"`): they drop `metadata`.
  Fix by re-exporting metadata too or adding a dedicated `metadata` export.

```ts
// Fix for a region route that currently drops metadata
import { metadata } from "../page";
export { metadata, default } from "../page";
```

## 2. Open Graph and Twitter/X

- `openGraph` and `twitter` present at layout level as fallback.
- Every page that should be shared/cited overrides them with its own title/description/image.
- Use **absolute** image URLs via `metadataBase` (`url: "/og.png"` resolves to absolute).
- Include `og:url`, `og:site_name`, `og:locale`, `twitter:card: "summary_large_image"`.

```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Specific page title",
    description: "Specific page description",
    url: "/services/iso-27001",
    siteName: "Site name",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Specific alt" }],
  },
  twitter: { card: "summary_large_image", title: "...", description: "...", images: ["/og.png"] },
};
```

## 3. Sitemap

- `app/sitemap.ts` (or `public/sitemap.xml`) exists and lists all public routes.
- `app/robots.ts` or `public/robots.txt` points to the absolute sitemap URL.
- Static + dynamic entries included with `lastModified`, `changeFrequency`, `priority`.

```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://example.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    // ... services, case studies mapped here
  ];
}
```

## 4. robots.txt — classic + AI crawlers

- `User-agent: *` allow rule present.
- Sitemap URL present.
- Explicit rules for AI bots: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`,
  `Claude-Web`, `PerplexityBot`, `Google-Extended`, `CCBot`, `Bytespider`, `Amazonbot`.
- Decide allow vs disallow per bot; default is allow unless there is a reason to block.

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-Web", "PerplexityBot", "Google-Extended", "CCBot"], allow: "/" },
    ],
    sitemap: "https://example.com/sitemap.xml",
  };
}
```

## 5. llms.txt (GEO/AIO)

- `public/llms.txt` exists with a concise, factual markdown overview.
- `public/llms-full.txt` (optional) includes full page content for AI ingestion.

```markdown
# Example Site

> Concise summary of what the site offers in plain, specific terms.

## Services
- [ISO 27001 implementation](https://example.com/services/iso-27001): description
- [Penetration testing](https://example.com/services/penetration-testing): description
```

## 6. Structured data (JSON-LD)

- Homepage: `ProfessionalService` / `ItemList` matching real content.
- Service detail: `Service` with `provider` (`Organization`).
- Top-level `Organization` with `name`, `url`, `logo`, `sameAs`, `contactPoint`.
- `WebSite` with `potentialAction` `SearchAction`.
- `FAQPage` with `Question`/`Answer` where FAQ content is actually rendered.
- `Article`/`BlogPosting` for case studies or blog posts.
- `BreadcrumbList` where visual breadcrumbs exist.
- Validate against https://schema.org — no invented `price`, `aggregateRating`, or facts.

```tsx
const data = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Example",
  url: "https://example.com",
  logo: "https://example.com/logo.png",
  sameAs: ["https://linkedin.com/company/example"],
  contactPoint: { "@type": "ContactPoint", email: "hello@example.com" },
};

<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
```

## 7. Semantic HTML

- One `<h1>` per page; `<h2>`/`<h3>` for subsections in order.
- `<html lang="en">` set.
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>` used
  appropriately. Prefer `<header>`/`<footer>` as siblings of `<main>`, not children.

## 8. Images and CLS

- Every `<img>` has descriptive `alt`.
- Logos and hero images have `width`/`height` to prevent layout shift.
- Below-fold images use `loading="lazy"`; LCP hero uses `priority`.
- `decoding="async"` on non-critical images.

## 9. Server-rendered content (AIO)

- Confirm page content appears in raw HTML (no JS required) — check the repo's render tests
  or `curl` the built page.
- Move content trapped behind `"use client"` state into server-rendered markup or JSON-LD so
  AI crawlers can read it without executing JavaScript.
- Avoid `aria-hidden="true"` on content that should be crawlable/indexable.

## 10. Verification commands

```bash
npm run build        # or pnpm build / yarn build
npm test             # run the repo's render/HTML tests if present
```

Then confirm in the served output:

- `https://example.com/robots.txt` shows AI-bot rules and sitemap.
- `https://example.com/sitemap.xml` lists all routes.
- Page `<head>` contains title, description, canonical, OG, and any JSON-LD.
