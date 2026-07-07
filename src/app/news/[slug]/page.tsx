import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PageHead from "@/components/pagehead";
import { getAllPosts, type PostMeta } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const { default: Content, metadata } = await import(
    `@/content/news/${slug}.mdx`
  );
  const meta = metadata as PostMeta;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHead
        RImageSrc="/sqstripe.svg"
        LImageSrc="/sqstripe.svg"
        title={meta.title}
        subtitle="News"
      />
      <main className="max-w-3xl mx-auto px-8 pb-24">
        <p className="text-[16px] font-bold font-helvetica-lt-pro text-violet-600 mb-8">
          {meta.date.replaceAll("-", ".")}
        </p>
        <article>
          <Content />
        </article>
        <div className="mt-16">
          <Link
            href="/news"
            className="text-[16px] font-bold font-helvetica-lt-pro text-violet-600 hover:text-violet-800"
          >
            ← Back to News
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await import(`@/content/news/${slug}.mdx`);
  return {
    title: `${metadata.title} | SoundCreate Official`,
    description: metadata.description,
  };
}

export const dynamicParams = false;
