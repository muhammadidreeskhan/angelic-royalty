/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ]
  },
  experimental: {
    optimizeCss: false,
    webpackBuildWorker: false,
    parallelServerCompiles: false,
    parallelServerBuildTraces: false
  },
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false,
      path: false,
      crypto: false
    };
    return config;
  }
};

module.exports = nextConfig; 