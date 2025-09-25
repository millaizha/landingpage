import * as prismic from "@prismicio/client";

export const repositoryName = "landingpage-trial"; 

export const client = prismic.createClient(repositoryName, {
  fetchOptions: {
    next: { revalidate: 60 },
  },
});
