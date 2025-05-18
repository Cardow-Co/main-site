// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TODO: Set `basePath` to match your Webflow Cloud environment's mount path.
  // For example, uncomment the next line if mounted at /app:
  basePath: "/home",

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
