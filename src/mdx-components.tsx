import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

const components = {
  h2: ({ children }) => (
    <h2 className="text-[22px] sm:text-[25px] font-bold font-noto-sans-jp text-black mt-12 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-[18px] sm:text-[20px] font-bold font-noto-sans-jp text-black mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[16px] font-noto-sans-jp text-black leading-relaxed mb-4">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-4 text-[16px] font-noto-sans-jp text-black leading-relaxed">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-4 text-[16px] font-noto-sans-jp text-black leading-relaxed">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="mb-1">{children}</li>,
  a: ({ href, children }) => (
    <Link
      href={href ?? "#"}
      className="text-violet-600 underline hover:text-violet-800"
    >
      {children}
    </Link>
  ),
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-violet-600 pl-4 my-4 text-gray-600">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-gray-200" />,
  img: ({ alt, ...props }) => (
    <Image
      alt={alt ?? ""}
      sizes="(min-width: 768px) 768px, 100vw"
      width={768}
      height={432}
      style={{ width: "100%", height: "auto" }}
      className="rounded-lg my-6"
      {...(props as Omit<ImageProps, "alt">)}
    />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
