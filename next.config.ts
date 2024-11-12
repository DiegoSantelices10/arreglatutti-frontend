import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thoughtful-activity-d4dac2147c.media.strapiapp.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
