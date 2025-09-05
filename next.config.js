/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/data-portfolio',
  assetPrefix: '/data-portfolio/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'docs',
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig