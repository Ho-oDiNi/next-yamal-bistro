import { Metadata } from "next";

import { getDishBySlug } from "@/entities/dish";

import { DishPageParams } from "../model";

export const generateMetadata = async ({
    params,
}: DishPageParams): Promise<Metadata> => {
    const { slug } = await params;

    if (process.env.BUILD_TIME) {
        return {};
    }

    const dish = await getDishBySlug(slug);

    if (!dish) {
        return {
            title: "Блюдо не найдено | Ямал Бистро",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const title = `${dish.name} в Салехарде | Ямал Бистро`;
    const description =
        dish.description ??
        `${dish.name} в Ямал Бистро. Оформите заказ в Салехарде.`;

    return {
        metadataBase: new URL("https://yamal-bistro.ru"),
        title,
        description,
        alternates: {
            canonical: `/menu/${slug}`,
        },
        openGraph: {
            type: "article",
            locale: "ru_RU",
            url: `/menu/${slug}`,
            siteName: "Ямал Бистро",
            title,
            description,
            images: [
                {
                    url:
                        typeof dish.imageUrl === "string" && dish.imageUrl
                            ? dish.imageUrl
                            : "/images/og-image.jpg",
                    alt: `${dish.name} — Ямал Бистро`,
                },
            ],
        },
    };
};
