import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    experimental: {
        typedRoutes: false,
    },
    images: {
        unoptimized: true,
    },
    async rewrites() {
        return [
            {
                source: '/api/v1/:path*',
                destination: 'http://lazo_backend:1337/api/v1/:path*',
            },
            {
                source: '/uploads/:path*',
                destination: 'http://lazo_backend:1337/uploads/:path*',
            },
        ];
    },
};

export default nextConfig;
