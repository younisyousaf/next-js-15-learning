import type { NextConfig } from "next";
import { inc } from "sanity";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    ppr: "incremental",
  },
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right",
    appIsrStatus: true,
  },
};

export default nextConfig;
