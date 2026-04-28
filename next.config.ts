import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/miraithmic02/:path*",
        destination: "/api/proxy-miraithmic02/:path*",
      },
    ];
  },
};

export default nextConfig;
