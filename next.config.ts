import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Cloudflare Pages does not resize through /_next/image: it returned the
  // original file with no caching. Images are pre-sized in /public instead.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
