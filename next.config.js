/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    nextScriptWorkers: false,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
