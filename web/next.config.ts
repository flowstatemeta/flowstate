import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: '../.next',
  typescript: {
    ignoreBuildErrors: true,
  },
  // @ts-expect-error - eslint is missing from NextConfig type
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
