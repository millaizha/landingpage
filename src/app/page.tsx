import { redirect } from "next/navigation";
import { getTopSlugs } from "@/lib/content";

export default async function RootPage() {
  const slugs = await getTopSlugs(1);
  if (slugs[0]) redirect(`/${slugs[0]}`);
  return null;
}