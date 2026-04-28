import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/miraithmic02/:path*',
        destination: 'https://miraithmic02-git-main-usamimis-projects.vercel.app/miraithmic02/:path*',
      },
    ]
  },
};

export default nextConfig;
