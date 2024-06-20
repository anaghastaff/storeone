/** @type {import('next').NextConfig} */
// import { withStoreConfig } from '../store-config';
// import store from '../store.config.json';

const nextConfig = {
  // env: { theme: "DEFAULT", currency: "USD" },
  // publicRuntimeConfig: { theme: "DEFAULT", currency: "USD" },
  // features: store.features,
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: [
      "@medusajs/product",
    ],
    
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
      {
        protocol:"https",
        hostname:"res.cloudinary.com",
        pathname:"/dxvvl4bpp/**",
      },
    ],
  },
};

export default nextConfig;
