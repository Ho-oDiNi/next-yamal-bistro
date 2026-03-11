import { MetadataRoute } from "next";

import { getBaseUrl } from "@/app/domains";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = await getBaseUrl();

    const staticPages = [
        {
            url: baseUrl,
        },
        {
            url: `${baseUrl}/privacy`,
        },
    ];

    if (process.env.BUILD_TIME) {
        return [...staticPages];
    }

    // const dynamicPages = yamals.flatMap((yamal) =>
    //     })),
    // );

    // return [...staticPages, ...dynamicPages];

    return [...staticPages];
}

export const dynamic = "force-dynamic";
