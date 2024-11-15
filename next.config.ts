import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    experimental: {

    },
    images: {
        unoptimized: true,
    },
    async rewrites() {
        return [
            {
                source: '/api/v1/:path*',
                destination: 'http://strapi:5000/api/v1/:path*',
            },
            {
                source: '/uploads/:path*',
                destination: 'http://strapi:5000/uploads/:path*',
            },
        ];
    },
};

export default nextConfig;
