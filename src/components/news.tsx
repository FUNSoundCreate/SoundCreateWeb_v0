import Image from "next/image";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

type NewsProps = {
  post: PostMeta;
};

export default function News({ post }: NewsProps) {
  return (
    <div className="flex items-center gap-8 max-w-6xl mx-auto py-16 px-4 flex-col sm:flex-row sm:gap-20">
      <div className="w-full sm:flex-1 flex flex-col gap-2 px-4 sm:px-0">
        <p className="text-[16px] font-bold font-helvetica-lt-pro text-violet-600">
          {post.date.replaceAll("-", ".")}
        </p>
        <Link href={`/news/${post.slug}`}>
          <p className="text-[25px] text-black font-bold font-noto-sans-jp hover:text-violet-600 transition-colors">
            {post.title}
          </p>
        </Link>
        <p className="text-[16px] font-noto-sans-jp text-black leading-relaxed">
          {post.description}
        </p>
        <Link
          href="/news"
          className="inline-flex items-center self-start px-4 py-2 bg-violet-600 text-[16px] font-helvetica-lt-pro text-white font-bold"
        >
          Check News
          <Image src="/uparrow.svg" alt="" width={14} height={14} className="ml-2" />
        </Link>
      </div>
      <div className="relative w-full sm:flex-1 px-4 sm:px-0">
        <Link href={`/news/${post.slug}`} className="block relative aspect-16/5 overflow-hidden">
          <Image
            src={post.thumbnail ?? "/sqstripe.svg"}
            alt={post.title}
            fill
            sizes="(min-width: 600px) 50vw, 100vw"
            className="object-cover"
          />
        </Link>
      </div>
    </div>
  );
}
