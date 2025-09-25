import * as prismic from "@prismicio/client";

export const repositoryName = process.env.PRISMIC_REPO || "landingpage-trial";

export function createClient() {
  return prismic.createClient(repositoryName, {
    fetchOptions: {
      cache: "no-store",
    },
  });
}

export const client = prismic.createClient(repositoryName, {
  fetchOptions: {
    cache: "no-store",
  },
});
