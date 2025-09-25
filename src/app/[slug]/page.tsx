import React from "react";
import { notFound } from "next/navigation";
import HomeAirtableMain from "@/pages/homes/home-airtable"; 
import { getLandingPageBySlug, getTopSlugs } from "@/lib/content";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const slugs = await getTopSlugs(3);
  return slugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: Props) {
  const { slug } = params;
  const page = await getLandingPageBySlug(slug);

  if (!page) return notFound();

  return <HomeAirtableMain page={page} />;
}
