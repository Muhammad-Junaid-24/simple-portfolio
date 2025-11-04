/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pushbrands.app',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
