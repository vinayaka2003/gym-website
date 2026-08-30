/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    qualities: [75, 85],
  },
  allowedDevOrigins: ['10.170.162.178'],
};

export default nextConfig;

