import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the same source deployable on Render's static `out` workflow.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
