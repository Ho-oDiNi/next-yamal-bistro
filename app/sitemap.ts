import { MetadataRoute } from "next";

import { getBaseUrl } from "@/app/domains";
import { getDishes, IDish } from "@/entities/dish";

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

    const dishes = await getDishes();

    const dynamicPages = dishes.flatMap((dish: IDish) => ({
        url: `${baseUrl}/menu/${dish.slug}`,
    }));

    return [...staticPages, ...dynamicPages];
}

export const dynamic = "force-dynamic";
