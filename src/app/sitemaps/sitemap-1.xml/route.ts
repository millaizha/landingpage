import { NextResponse } from "next/server";
import { getTopSlugs } from "@/lib/content";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const slugs = await getTopSlugs(3);

  const today = new Date().toISOString();
  const urls = slugs.map(
    (s) => `<url><loc>${baseUrl}/${s}</loc><lastmod>${today}</lastmod></url>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
