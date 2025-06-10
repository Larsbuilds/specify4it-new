const TerserPlugin = require('terser-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react'],
    optimizeCss: true,
    webpackBuildWorker: true,
    swcMinify: true,
    optimizeServerReact: true,
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
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 100000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      };
      config.optimization.minimizer = [
        ...config.optimization.minimizer || [],
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
              pure_funcs: ['console.log'],
              unused: true,
              dead_code: true,
              passes: 2,
            },
            mangle: true,
            format: {
              comments: false,
            },
          },
        }),
      ];
    }

    // Modern JavaScript output
    if (!dev && !isServer) {
      config.target = ['web', 'es2017'];
    }

    return config;
  },
  // Enable HTTP/2 push
  httpAgentOptions: {
    keepAlive: true,
  }
}

module.exports = nextConfig
