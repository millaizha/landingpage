import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${baseUrl}/sitemaps/sitemap-1.xml</loc></sitemap>
</sitemapindex>`;

  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
