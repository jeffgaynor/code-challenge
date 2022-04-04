const path = require('path');
const withImages = require('next-images');

/** @type {import('next').NextConfig} */
const nextConfig = withImages({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  exclude: path.resolve(__dirname, 'lib/icons'),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});

module.exports = nextConfig;
