/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["localhost", "placeimg.com"],
    imageSizes: [],
    deviceSizes: [400, 500, 600, 700],
  },
};

module.exports = nextConfig;
