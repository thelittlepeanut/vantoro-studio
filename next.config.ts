import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/sweep', destination: '/flickflush', permanent: true },
      { source: '/sweep/privacy', destination: '/flickflush/privacy', permanent: true },
      { source: '/sweep/terms', destination: '/flickflush/terms', permanent: true },
    ];
  },
};

export default nextConfig;
