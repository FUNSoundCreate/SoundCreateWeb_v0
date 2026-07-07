import fs from "node:fs";
import path from "node:path";

const POSTS_DIR = path.join(process.cwd(), "src/content/news");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  thumbnail?: string;
};

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { metadata } = await import(`@/content/news/${slug}.mdx`);
      return { slug, ...metadata } as PostMeta;
    }),
  );

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
