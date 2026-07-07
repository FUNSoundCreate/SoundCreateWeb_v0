import fs from "node:fs";
import path from "node:path";
import { getMemberById, type Member } from "@/lib/members";

const POSTS_DIR = path.join(process.cwd(), "src/content/news");

// .mdx の `export const metadata` に書ける生の形（author はメンバーidの文字列）
type RawPostMeta = {
  title: string;
  date: string;
  description: string;
  thumbnail?: string;
  author?: string;
};

// アプリ側で扱う解決済みの形（author は Member 実体）
export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  thumbnail?: string;
  author?: Member;
};

function resolveMeta(slug: string, raw: RawPostMeta): PostMeta {
  let author: Member | undefined;
  if (raw.author) {
    author = getMemberById(raw.author);
    if (!author) {
      console.warn(
        `[posts] 記事 "${slug}" の author "${raw.author}" に一致するメンバーが members.ts に見つかりません。`,
      );
    }
  }
  return {
    slug,
    title: raw.title,
    date: raw.date,
    description: raw.description,
    thumbnail: raw.thumbnail,
    author,
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { metadata } = await import(`@/content/news/${slug}.mdx`);
      return resolveMeta(slug, metadata as RawPostMeta);
    }),
  );

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<{
  Content: React.ComponentType;
  meta: PostMeta;
}> {
  const { default: Content, metadata } = await import(
    `@/content/news/${slug}.mdx`
  );
  return { Content, meta: resolveMeta(slug, metadata as RawPostMeta) };
}
