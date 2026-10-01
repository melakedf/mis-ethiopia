import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
  {
    "source": "/projects/cssp-inclusion-2019-2021",
    "destination": "/projects/cssp1-social-inclusion",
    "permanent": true
  },
  {
    "source": "/projects/cssp-inclusion-2022-2023",
    "destination": "/projects/cssp2-community-inclusion",
    "permanent": true
  },
  {
    "source": "/projects/school-education-hygiene",
    "destination": "/projects/student-led-school-sanitation-hygiene",
    "permanent": true
  }
];
  },
  images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] },
};

export default nextConfig;
