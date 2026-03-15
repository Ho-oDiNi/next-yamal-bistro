import { prisma } from "@/shared/lib/prisma";

export const getCategories = async () => {
    return prisma.category.findMany({
        orderBy: {
            id: "asc",
        },
    });
};
