/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  pageExtensions: ['page.tsx', 'api.ts'],
  swcMinify: true,
  reactStrictMode: true,
  output: 'standalone',
};
