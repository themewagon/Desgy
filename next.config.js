
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Ensure the build output goes to out directory for static export
  distDir: 'out',
};

module.exports = nextConfig;
