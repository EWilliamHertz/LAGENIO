/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    allowedDevOrigins: [
      "localhost:3000",
      "*.cloudshell.dev",
      "3000-cs-553118797525-default.cs-europe-west4-pear.cloudshell.dev"
    ]
  }
};

export default nextConfig;