import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          'sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Coworkers/user/1819/',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
