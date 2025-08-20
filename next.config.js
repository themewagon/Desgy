/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '',
  basePath: '',
};

module.exports = nextConfig;
