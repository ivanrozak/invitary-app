/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploads-ssl.webflow.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'london.bridestory.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'alexandra.bridestory.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'groovepublic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
