/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  poweredByHeader: false,
  generateEtags: false
}

module.exports = nextConfig
