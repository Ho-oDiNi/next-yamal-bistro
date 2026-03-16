import { prisma } from "@/shared/lib/prisma";

import { TDishData } from "../model";

export const getDishBySlug = async (
    slug: string,
): Promise<TDishData | null> => {
    const dish = await prisma.dish.findUnique({
        where: {
            slug,
        },
    });

    return dish;
};
