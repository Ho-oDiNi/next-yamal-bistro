import { MetadataRoute } from "next";

// import { getServiceCategories } from "@/lib/services/service.queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://alpforce.ru";

    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contacts`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.5,
        },
    ];

    const staticIcons = [
        {
            url: `${baseUrl}/favicon.ico`,
            changeFrequency: "never" as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/icon.ico`,
            changeFrequency: "never" as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/apple-icon.png`,
            changeFrequency: "never" as const,
            priority: 0.7,
        },
    ];

    // if (process.env.BUILD_TIME) {
    return [...staticPages, ...staticIcons];
    // }

    // const categories = await getServiceCategories();

    // const dynamicPages = categories.flatMap((category) =>
    //     category.serviceSlugs.map((serviceSlug) => ({
    //         url: `${baseUrl}/services/${category.slug}/${serviceSlug}`,
    //         lastModified: new Date(),
    //         changeFrequency: "weekly" as const,
    //         priority: 0.6,
    //     })),
    // );

    // return [...staticPages, ...staticIcons, ...dynamicPages];
}

export const dynamic = "force-dynamic";
