/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        REST_API_URL: process.env.REST_API_URL,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com'
          },
        ],
      },
}

module.exports = nextConfig
