/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true,
    qualities: [75, 85],
  },
};

export default nextConfig;
