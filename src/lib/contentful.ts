import { createClient, Entry } from "contentful";
import { BlogPostSkeleton } from "@/types/contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export const getBlogPosts = async (): Promise<Entry<BlogPostSkeleton>[]> => {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: "dmgBlog",
  });

  console.log(res.items);

  return res.items;
};

export const getPostBySlug = async (
  slug: string
): Promise<Entry<BlogPostSkeleton> | null> => {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: "dmgBlog",
    // 👇 safely assert it as any
    "fields.slug": slug,
    locale: 'en-US',
  } as any); // acceptable in this specific case

  return res.items[0] ?? null;
};
