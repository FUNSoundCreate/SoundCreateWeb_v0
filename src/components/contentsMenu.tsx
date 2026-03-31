import Image from "next/image";
import Link from "next/link";

type ContentsMenuProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  slogan: string;
  description: string;
  layout?: "image-left" | "image-right";
  buttonLabel?: string;
  buttonHref?: string;
  priority?: boolean;
};

export default function ContentsMenu({
  imageSrc,
  imageAlt,
  title,
  slogan,
  description,
  layout = "image-left",
  buttonLabel,
  buttonHref,
  priority = false,
}: ContentsMenuProps) {
  const isImageLeft = layout === "image-left";

  return (
    <div
      className={`flex items-center gap-8 max-w-6xl mx-auto py-24 px-4 flex-col ${
        isImageLeft ? "sm:flex-row-reverse sm:gap-20" : "sm:flex-row sm:gap-20"
      }`}
    >
      <div className="w-full sm:flex-1 flex flex-col gap-2 px-4 sm:px-0">
        <p className="text-[16px] font-bold font-helvetica-lt-pro text-violet-600">{title}</p>
        <p className="text-[41px] text-black font-bold font-helvetica-lt-pro">{slogan}</p>
        <p className="text-[16px] font-noto-sans-jp text-black leading-relaxed">{description}</p>
        {buttonHref && (
          <Link
            href={buttonHref}
            className="inline-flex items-center self-start px-4 py-2 bg-violet-600 text-[16px] font-helvetica-lt-pro text-white font-bold"
          >
            {buttonLabel}
            <Image
              src="/uparrow.svg"
              alt=""
              width={14}
              height={14}
              className="ml-2"
            />
          </Link>
        )}
      </div>

      <div className="relative w-full sm:flex-1 px-4 sm:px-0">
        <div className="relative aspect-377/233 overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={priority}
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
