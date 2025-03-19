import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'optimized-images-mat-gil.netlify.app',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
