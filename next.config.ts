import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "147.45.107.174",
      },
    ],
  },
};

export default nextConfig;
