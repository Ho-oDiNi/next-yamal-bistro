import { Prisma } from "@prisma/client";

import { isAdminServerSide } from "@/app/auth";
import { categorySchema, TCategoryData } from "@/entities/category";
import { prisma } from "@/shared/lib/prisma";
import { SubmitState, toFieldErrors } from "@/shared/lib/zod";

export const updateCategory = async (
    categoryId: number,
    categoryData: TCategoryData,
): Promise<SubmitState> => {
    const isAdmin = await isAdminServerSide();

    if (!isAdmin) {
        return {
            success: false,
            message: "Ошибка авторизации",
        };
    }

    const parsed = categorySchema.safeParse(categoryData);

    if (!parsed.success) {
        return {
            success: false,
            message: "Проверьте корректность заполнения формы",
            errors: toFieldErrors(parsed.error),
        };
    }

    try {
        await prisma.category.update({
            where: {
                id: categoryId,
            },
            data: parsed.data,
        });

        return {
            success: true,
            message: "Категория успешно обновлена",
        };
    } catch (error) {
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2025"
        ) {
            return {
                success: false,
                message: "Категория не найдена",
            };
        }

        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
        ) {
            return {
                success: false,
                message: "Категория с такими данными уже существует",
                errors: {
                    slug: "Этот slug уже занят",
                },
            };
        }

        return {
            success: false,
            message: "Ошибка при обновлении категории",
        };
    }
};
