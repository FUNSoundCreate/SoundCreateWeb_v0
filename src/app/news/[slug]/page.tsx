import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PageHead from "@/components/pagehead";
import AuthorBadge from "@/components/author-badge";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const { Content, meta } = await getPost(slug);

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
        {meta.thumbnail && (
          <div className="relative aspect-21/9 overflow-hidden rounded-lg mb-8">
            <Image
              src={meta.thumbnail}
              alt={meta.title}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}
        <div className="flex flex-col items-start gap-3 mb-8">
          <p className="text-[16px] font-bold font-helvetica-lt-pro text-violet-600">
            {meta.date.replaceAll("-", ".")}
          </p>
          {meta.author && <AuthorBadge author={meta.author} size="md" />}
        </div>
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
  const { meta } = await getPost(slug);
  return {
    title: `${meta.title} | SoundCreate Official`,
    description: meta.description,
  };
}

export const dynamicParams = false;
