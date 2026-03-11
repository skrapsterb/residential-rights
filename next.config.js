/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/checkout/cancelled',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;