import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  transpilePackages: ["@workspace/ui"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },

  experimental: {
    reactCompiler: true,
    typedRoutes: true,
    // Add large packages here for tree-shaking optimization
    // optimizePackageImports: [],
  },
};

export default nextConfig;
