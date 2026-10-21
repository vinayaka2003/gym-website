import os from "os";

// Automatically include active local network IPs so mobile/LAN testing works on any network
const localIPs = Object.values(os.networkInterfaces())
  .flat()
  .filter((iface) => iface && iface.family === "IPv4" && !iface.internal)
  .map((iface) => iface.address);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    qualities: [75, 85],
  },
  allowedDevOrigins: [
    "localhost",
    "10.242.248.178",
    "192.168.43.178",
    "10.141.232.178",
    "10.170.162.178",
    ...localIPs,
  ],
};

export default nextConfig;

