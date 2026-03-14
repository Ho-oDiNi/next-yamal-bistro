"use server";

import { isAdminServerSide } from "@/app/auth";
import { logger } from "@/shared/lib/logger";
import { prisma } from "@/shared/lib/prisma";

import { revalidateDishPaths } from "../../../entities/dish/lib/dishRevalidate";

interface DeleteDishState {
    success: boolean;
    message: string;
};

export const deleteDish = async (
    prevState: DeleteDishState | null,
    formData: FormData,
): Promise<DeleteDishState> => {
    const dishSlug = formData.get("dishSlug");
    try {
        const isAdmin = await isAdminServerSide();

        if (!isAdmin) {
            throw new Error("Ошибка авторизации");
        }

        if (!dishSlug || typeof dishSlug !== "string") {
            throw new Error("Slug обязателен");
        }

        const dish = await prisma.dish.findUnique({
            where: { slug: dishSlug },
            include: {
                category: {
                    select: {
                        slug: true,
                    },
                },
            },
        });

        if (!dish) {
            throw new Error("Блюдо не найдено");
        }

        await prisma.dish.delete({
            where: { slug: dishSlug },
        });

        await revalidateDishPaths([
            {
                categorySlug: dish.category.slug,
                dishSlug: dish.slug,
            },
        ]);

        return {
            success: true,
            message: "Блюдо успешно удалено",
        };
    } catch (error) {
        logger.error("Ошибка при удалении блюда", {
            error,
            dishSlug,
        });
        return {
            success: false,
            message: error instanceof Error ? error.message : "Ошибка сервера",
        };
    }
}
