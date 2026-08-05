import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/167699/pexels-photo-167699.jpeg",
        search: "?auto=compress&cs=tinysrgb&w=1600",
      },
    ],
  },
};

export default nextConfig;
