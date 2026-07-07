import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PageHead from "@/components/pagehead";
import AuthorBadge from "@/components/author-badge";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "News | SoundCreate Official",
  description: "SoundCreateの最新情報・活動報告",
};

export default async function News() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHead
        RImageSrc="/sqstripe.svg"
        LImageSrc="/sqstripe.svg"
        title="最新情報"
        subtitle="News"
      />
      <main className="max-w-6xl mx-auto px-8 pb-24">
        <ul className="flex flex-col gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/news/${post.slug}`}
                className="group flex items-center gap-8 flex-col sm:flex-row sm:gap-12 rounded-xl border border-gray-200 p-6 sm:p-8 transition-all hover:border-violet-600 hover:shadow-md"
              >
                <div className="w-full sm:flex-1 flex flex-col gap-2">
                  <p className="text-[16px] font-bold font-helvetica-lt-pro text-violet-600">
                    {post.date.replaceAll("-", ".")}
                  </p>
                  <p className="text-[25px] text-black font-bold font-noto-sans-jp group-hover:text-violet-600 transition-colors">
                    {post.title}
                  </p>
                  <p className="text-[16px] font-noto-sans-jp text-black leading-relaxed">
                    {post.description}
                  </p>
                  {post.author && (
                    <div className="pt-1">
                      <AuthorBadge author={post.author} />
                    </div>
                  )}
                </div>
                <div className="relative w-full sm:flex-1">
                  <div className="relative aspect-21/9 overflow-hidden rounded-lg">
                    <Image
                      src={post.thumbnail ?? "/sqstripe.svg"}
                      alt={post.title}
                      fill
                      sizes="(min-width: 600px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
