
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable build process since we're using static HTML
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
