const TerserPlugin = require('terser-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react', 'lucide-react'],
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  // Include static assets in standalone build
  outputFileTracing: true,
  transpilePackages: ['@heroicons/react', 'lucide-react'],
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  webpack: (config, { dev, isServer }) => {
    // Use non-eval source maps
    if (dev) {
      config.devtool = 'source-map';
    }

    // Optimize for production
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      chunkIds: 'deterministic',
      splitChunks: {
        ...config.optimization.splitChunks,
        chunks: 'all',
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          vendors: false,
          default: false,
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /[\\/]node_modules[\\/](@vercel\/analytics|react|react-dom|scheduler|prop-types|use-subscription)[\\/-]/,
            priority: 40,
            enforce: true,
          },
        },
      },
    };
    
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization.minimize = true;
      config.optimization.minimizer = [
        ...config.optimization.minimizer || [],
        new TerserPlugin({
          terserOptions: {
            parse: { ecma: 2020 },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
              module: true,
              reduce_vars: true,
              pure_getters: true,
              unsafe_math: true,
              passes: 3,
              pure_funcs: [
                'console.log',
                'console.info',
                'console.debug',
                'console.warn'
              ]
            },
            mangle: { safari10: true },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
        })
      ];
    }
    
    return config;
  }
};

module.exports = nextConfig;
