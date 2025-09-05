/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/data-portfolio',
  assetPrefix: '/data-portfolio/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig