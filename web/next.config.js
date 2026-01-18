/** @type {import('next').NextConfig} */
const nextConfig = {
 /* config options here */
  distDir: '../.next',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;