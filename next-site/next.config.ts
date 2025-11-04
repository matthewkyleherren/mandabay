import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    outputFileTracingRoot: path.join(__dirname, ".."),
  },
  webpack: (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.symlinks = true;
    return config;
  },
};

export default nextConfig;
