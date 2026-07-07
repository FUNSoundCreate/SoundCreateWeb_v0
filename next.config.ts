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

const withMDX = createMDX();

export default withMDX(nextConfig);
