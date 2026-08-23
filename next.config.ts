import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Render serves this project as a static export. `trailingSlash` makes
  // routes such as /privacy and /terms export as /privacy/index.html and
  // /terms/index.html so direct navigation works correctly on static hosts.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
