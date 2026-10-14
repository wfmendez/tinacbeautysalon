import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // AVIF first: noticeably lighter photos on phones, WebP as fallback.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
