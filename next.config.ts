import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "192.168.102.68",
      },
      {
        hostname: "217.18.63.71",
      },
      {
        hostname: "raqamli-manaviyat.uz",
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
