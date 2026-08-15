/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.credly.com" },
      { protocol: "https", hostname: "brm-workforce.oracle.com" },
    ],
    // Allow unoptimized for badge PNGs served from external CDNs
    unoptimized: false,
  },
};

export default nextConfig;
