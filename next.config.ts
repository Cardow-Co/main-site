// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure the base path to reflect the mount path of your environment
  // For example, if your app is mounted at /app, set basePath to '/app'
  basePath: "/home", // <--- Add your basePath here

  // Additional Next.js configuration options can be added here
  // For example:
  // output: 'standalone', // If you need standalone output
  reactStrictMode: true, // Good to keep this enabled

  // You can add other configurations as needed:
  // images: {
  //   remotePatterns: [ /* ... */ ],
  // },
  // experimental: { /* ... */ },
};

export default nextConfig;
