import Image from "next/image";
import type { Member } from "@/lib/members";

type AuthorBadgeProps = {
  author: Member;
  size?: "sm" | "md";
};

export default function AuthorBadge({ author, size = "sm" }: AuthorBadgeProps) {
  const avatar = size === "md" ? "w-9 h-9" : "w-7 h-7";
  const label = size === "md" ? "text-[15px]" : "text-[13px]";

  return (
    <div className="flex items-center gap-2">
      <div className={`relative ${avatar} rounded-full overflow-hidden shrink-0`}>
        <Image
          src={author.imageSrc}
          alt={author.name}
          fill
          sizes="36px"
          className="object-cover"
        />
      </div>
      <span className={`${label} font-noto-sans-jp text-gray-700`}>
        {author.name}
      </span>
    </div>
  );
}
