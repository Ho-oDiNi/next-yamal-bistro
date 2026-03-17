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

    return {
        title: `${dish?.name} в Салехарде | Ямал Бистро`,
        description: dish?.description,
    };
};
