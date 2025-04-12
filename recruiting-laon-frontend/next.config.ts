import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.themoviedb.org',
                port: '',
                pathname: '/**',
            },
        ]
    }
};

export default nextConfig;
