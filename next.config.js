// import constant from "@/utils/constant";
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output : 'standalone',
//   /* config options here */
//   images: {
//     domains: ['localhost',constant.BACKEND_URL], // این خط مهمه!
//   },
//   eslint:{
//     ignoreDuringBuilds : true
//   }
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ['localhost', 'english-backend.liara.run'],
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;