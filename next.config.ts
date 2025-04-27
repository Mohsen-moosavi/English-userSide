import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost'], // این خط مهمه!
  },
  eslint:{
    ignoreDuringBuilds : true
  }
};

export default nextConfig;
