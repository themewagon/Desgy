
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Ensure the build output goes to .next directory
  distDir: '.next',
};

module.exports = nextConfig;
