import { prisma } from "@/shared/lib/prisma";

import { IDish } from "../model";

export const getDishBySlug = async (slug: string): Promise<IDish | null> => {
    const dish = await prisma.dish.findUnique({
        where: {
            slug,
        },
    });

    return dish;
};
