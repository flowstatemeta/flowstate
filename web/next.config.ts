import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: '../.next',
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
