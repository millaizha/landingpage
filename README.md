# 1-Day Paid Trial — Programmatic Landing Page (Scalable)

**Repository**: https://github.com/vonascreatives/landingpage.git

## Trial Objective

Implement a minimal, scalable path CMS/DB → Next.js that renders 3 landing pages (3 unique slugs) with images and is architected to scale to 100–200k pages. Deploy to a Vercel preview.

**Timebox**: ≤ 1 working day

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- Vercel account for deployment

### Installation
```bash
git clone https://github.com/vonascreatives/landingpage.git
cd landingpage
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Trial Requirements

### Tech Stack (Pick ONE and ship)

**CMS Path (Preferred):**
- Prismic → Next.js

**DB Path:**
- Sanity (assets only) + Neon/Postgres (text), or
- MongoDB Atlas, or
- Upstash Redis / Vercel KV (key/value docs)

⚠️ **If you pick a DB/KV path**, keep price in mind and note expected monthly cost at 100–200k pages (idle + typical read volume).

### What's NOT Allowed
- ❌ Local MDX/Markdown/JSON file content
- ❌ Design changes (keep current template look)
- ❌ Working on other pages (focus only on landing page)

### Implementation Requirements

1. **Next.js Setup**
   - Use App Router (preferred)
   - Implement `/[slug]` dynamic route
   - Use ISR/ODR (no giant static prebuild)
   - Set revalidate or tag-based revalidation
   - Do not pre-generate more than a handful of slugs at build

2. **Data Architecture**
   - One clean abstraction (e.g., `getLandingPageBySlug(slug)`)
   - Swappable backend design
   - Proper image handling with alt text

3. **Sitemaps (Prove Sharding Approach)**
   - `/sitemap.xml` (index)
   - At least one shard route like `/sitemaps/sitemap-1.xml`
   - Include today's 3 slugs
   - Show in tech note how you'd shard to cover 100–200k URLs (50k max per sitemap)

4. **Styling**
   - Keep site/template look
   - No redesign required

## Deliverables (End of Day)

### 1. Working Application
- ✅ Vercel preview URL with 3 working slugs
- ✅ Repo/PR link (clean, readable code)

### 2. Tech Documentation
Create a **1-page TECH NOTE** (Markdown/PDF) including:

- **Data Model**: Exact field names + types in chosen store
- **Mapping**: Store → component props (including image + alt handling)
- **Caching/ISR**: Your revalidate/tags approach
- **Sitemaps**: Shard strategy (math for 100–200k pages)

## Acceptance Criteria

- [ ] Three distinct slugs render with all required fields and different images (each with alt)
- [ ] `/sitemap.xml` and one shard route exist
- [ ] Code shows how you'll shard to 100–200k pages
- [ ] 404 works for unknown slugs
- [ ] Code is simple, modular, and production-lean

## Current Template Structure

This is a Next.js landing page template with:
- ✅ Complete component library
- ✅ All images and assets included
- ✅ SCSS styling system
- ✅ TypeScript configuration
- ✅ Production-ready structure

### Key Files to Focus On
- `/src/app/` - App Router structure (create your dynamic routes here)
- `/public/assets/` - All images and static assets
- `/src/components/` - Reusable components
- `/src/data/` - Current static data (replace with your CMS/DB)

## Notes for Developers

1. **Focus Area**: Transform the main landing page into a dynamic, CMS-driven page
2. **Ignore**: Other template pages (about, portfolio, etc.)
3. **Keep**: Current design and styling
4. **Scale**: Architecture must handle 100–200k pages efficiently

## Deploy on Vercel

```bash
# Connect to Vercel
vercel

# Deploy
vercel --prod
```

For detailed deployment instructions, check [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---

**Good luck with the trial!** 🚀
