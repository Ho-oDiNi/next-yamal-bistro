import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    experimental: {
        serverActions: {
            bodySizeLimit: "10mb",
        },
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.mds.yandex.net",
                pathname: "/get-yapic/**",
            },
        ],
    },
};

export default nextConfig;
