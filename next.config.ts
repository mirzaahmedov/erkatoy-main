import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://raqamli-manaviyat.uz/ayzek-back/api/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "192.168.102.68",
      },
      {
        hostname: "217.18.63.71",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
