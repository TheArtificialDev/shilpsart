import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Disable the unescaped entities rule for better content readability
  reactStrictMode: true,
};

export default nextConfig;
