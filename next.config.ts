import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repoBasePath = "/Servixa-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  basePath: isGitHubPages ? repoBasePath : "",
  assetPrefix: isGitHubPages ? repoBasePath : "",
};

export default nextConfig;
