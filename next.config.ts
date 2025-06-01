import type { NextConfig } from "next";
import "./lib/env";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
