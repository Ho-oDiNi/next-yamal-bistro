import { prisma } from "@/shared/lib/prisma";

export const getDishes = async () => {
    return prisma.dish.findMany({
        include: {
            tag: true,
        },
        orderBy: {
            id: "asc",
        },
    });
};
