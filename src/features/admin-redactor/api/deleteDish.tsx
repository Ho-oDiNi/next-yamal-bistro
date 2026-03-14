"use server";

import { logger } from "@/shared/lib/logger";
import { prisma } from "@/shared/lib/prisma";
import { revalidateDishPaths } from "../dishRevalidate.utils";
import { isAdminServerSide } from "@/app/auth";

interface DeleteDishState {
    success: boolean;
    message: string;
}

export async function deleteDish(
    prevState: DeleteDishState | null,
    formData: FormData,
): Promise<DeleteDishState> {
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
                slug: dish.slug,
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
