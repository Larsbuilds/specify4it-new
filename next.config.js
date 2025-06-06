/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ['@heroicons/react'],
    optimizeCss: true,
    webpackBuildWorker: true,
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Production optimizations
      config.optimization.moduleIds = 'deterministic';
      config.optimization.concatenateModules = true;
      config.optimization.minimize = true;
    }

    return config;
  },
  // Enable HTTP/2 push
  httpAgentOptions: {
    keepAlive: true,
  }
}

module.exports = nextConfig
