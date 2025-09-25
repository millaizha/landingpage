import { client } from "@/prismicio";

export async function getLandingPageBySlug(slug: string) {
  try {
    const doc = await client.getByUID("landing_page", slug, {
      fetchOptions: { next: { revalidate: 60 } }, // ISR 60s
    });
    return doc ?? null;
  } catch (err: any) {
    if (err?.status === 404) return null;
    throw err;
  }
}

/**
 * Return a small list of candidate slugs for build-time params (only a handful)
 */
export async function getTopSlugs(limit = 3) {
  const pages = await client.getAllByType("landing_page", { pageSize: limit });
  return pages.map((p: any) => p.uid).filter(Boolean);
}
