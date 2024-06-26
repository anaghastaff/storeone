/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { theme: "DEFAULT", currency: "USD" },
  publicRuntimeConfig: { theme: "DEFAULT", currency: "USD" },
  experimental: {
    serverComponentsExternalPackages: [
      "@medusajs/product",
    ],
  },
  images: {
    
    remotePatterns: [
      {
        protocol:"http",
        hostname:"res.cloudinary.com",    
        pathname:"/dxvvl4bpp/**",
      },
      {
        protocol:"https",
        hostname:"res.cloudinary.com",
        pathname:"/dxvvl4bpp/**",
      },
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
    ],
  },
};

export default nextConfig;
