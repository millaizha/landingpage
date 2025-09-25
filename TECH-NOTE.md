# TECH NOTE — Prismic → Next.js Landing Pages (1-Day Trial)

## Objective
Minimal, scalable path CMS → Next.js to render 3 landing pages via `/[slug]`. Use Prismic as CMS, ISR for performance, sitemap sharding demonstration, and deployable to Vercel.

---

## Data model (Prismic custom type `landing_page`)
Field name (type)
- uid (UID)
- title (Text)
- hero_title (Text)
- hero_subtitle (Text)
- hero_category (Text)
- hero_cta_text (Text)
- hero_cta_link (Link)
- hero_image (Image) — includes `url` and `alt`
- gallery_images (Group) -> image (Image)
- about_heading (Text)
- about_content (StructuredText)
- about_image (Image)
- projects (Group): title (Text), meta (Text), image1 (Image), image2 (Image), link (Link)
- counters (Group): value (Number), label (Text)
- video_url (Text)
- video_subtitle/title/description (Text)
- services_section_title/subtitle (Text)
- services_icon (Image)
- services (Group): title/desc/category(group)/link
- cta_* fields and footer_* fields as per schema

---

## Mapping: store → component props
- `page.data.hero_title` → `<HeroBannerFour title={...} />`
- `page.data.hero_image` → `Image src={page.data.hero_image.url} alt={page.data.hero_image.alt}`
- `page.data.projects` → `<ProjectFour projects={page.data.projects} />` (project.image1.url, project.image1.alt)
- `gallery_images` → `<GalleryOne images={page.data.gallery_images} />` (image.image.url, image.image.alt)

Always use `image.url` for `next/image` src and `image.alt` for alt text.

---

## Data access / abstraction
One clean abstraction: `getLandingPageBySlug(slug)` located at `src/lib/content.ts`.
- Implementation for Prismic provided.
- Swappable: implement same function for DB path (Neon/Postgres, Mongo, or KV) and keep UI unchanged.

---

## Rendering & Caching
- Use Next.js App Router server components fetching from Prismic.
- ISR: set `fetchOptions: { next: { revalidate: 60 } }` per-request in client calls (example `client.getByUID(..., { fetchOptions: { next: { revalidate: 60 } } })`).
- Tag-based revalidation: optional approach — when using changes webhook you can call `res.revalidateTag()` or use Next.js On-Demand Revalidation to clear specific slugs on content update.
- Do not pre-generate all slugs at build: use `generateStaticParams()` to prebuild only a handful (3) and rely on ISR/On-demand revalidation for others.

---

## Sitemaps & sharding
- Provide `sitemap.xml` as index and shard sitemaps `sitemaps/sitemap-1.xml`, `sitemaps/sitemap-2.xml`, ...
- **Sharding math**:
  - Max URLs per sitemap = 50,000.
  - For 200,000 pages → 200,000 / 50,000 = 4 shard files.
  - General formula: `num_shards = ceil(total_urls / 50000)`.
- Implementation: `app/sitemap.xml/route.ts` returns index referencing shard files.
- For trial: `sitemaps/sitemap-1.xml` includes today's 3 slugs.

---

## Images
- Use images from Prismic Image field: `image.url` for `next/image` src (works with remotePatterns in next.config.js or via built-in loader).
- Ensure `alt` is populated in the CMS for accessibility and reflected in `<img alt={...}>`.

---

## Deployment & costs
- Deploy to Vercel preview; Vercel handles scale on edge.
- Prismic API rate limits: check your plan (free has reasonable limits). For 100–200k pages, consider:
  - Heavy read volumes served via Next.js ISR and CDN rather than repeated Prismic API calls.
  - Consider caching on server/CND and if extremely high read volume consider a DB or Vercel KV layer for static JSON copies.
- Alternative backends:
  - Sanity (assets only) + Neon/Postgres for text — cost-effective for large range.
  - MongoDB Atlas — watch reads.
  - Vercel KV / Upstash Redis — excellent read latency (KV per-request cost).

---

## Acceptance checklist
- [ ] 3 distinct slugs rendering (images + alt).
- [ ] `/sitemap.xml` and `/sitemaps/sitemap-1.xml` present and valid.
- [ ] 404 for unknown slug.
- [ ] getLandingPageBySlug abstraction present.
- [ ] Deployable on Vercel with PR link.

