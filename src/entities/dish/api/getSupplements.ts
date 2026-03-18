import { prisma } from "@/shared/lib/prisma";

export const getSupplements = async (dishId: number) => {
    return prisma.supplement.findMany({
        where: { dishId },
        orderBy: { id: "asc" },
    });
};
