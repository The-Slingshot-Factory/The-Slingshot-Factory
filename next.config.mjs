// next.config.js
const withNetlify = (await import('@netlify/next')).withNetlify;

/** @type {import('next').NextConfig} */
const nextConfig = withNetlify({
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
});

export default nextConfig;
