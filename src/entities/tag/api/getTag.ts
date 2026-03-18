import { prisma } from "@/shared/lib/prisma";

export const getTag = async (id: number | null) => {
    if (!id) return;

    return prisma.tag.findFirst({
        where: { id },
    });
};
