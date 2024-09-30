/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allows any subdomain of toiimg.com
      },
      {
        protocol: "https",
        hostname: "**.toiimg.com", // Allows any subdomain of toiimg.com
        pathname: "/photo/**",
      },
    ],
  },
};

export default nextConfig;
