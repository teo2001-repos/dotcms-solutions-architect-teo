/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demo.dotcms.com',
        port: '',
        pathname: '/dA/**',
      },
    ],
  },
};

export default nextConfig;
