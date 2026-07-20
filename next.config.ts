import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Required for GitHub Pages
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "im2.book.com.tw",
      },
      {
        protocol: "https",
        hostname: "s.wsj.net",
      },
      {
        protocol: "https",
        hostname: "static01.nyt.com",
      },
      {
        protocol: "https",
        hostname: "www.rolandli.me",
      },
      {
        protocol: "https",
        hostname: "s.hdnux.com",
      },
      {
        protocol: "https",
        hostname: "media.bizj.us",
      },
      {
        protocol: "https",
        hostname: "frontend-cdn.bizjournals.com",
      },
    ],
  },

  // Only needed for a project repository
  basePath: isProd ? "/Roland-Portfolio" : "",
  assetPrefix: isProd ? "/Roland-Portfolio/" : "",
};

export default nextConfig;
