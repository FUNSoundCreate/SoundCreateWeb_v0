import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async rewrites() {
    return [
      {
        source: "/miraithmic02/:path*",
        destination: "/api/proxy-miraithmic02/:path*",
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    // 裸の URL を自動でリンク化（Turbopack 互換のため文字列指定）
    remarkPlugins: [["remark-gfm", {}]],
  },
});

export default withMDX(nextConfig);
