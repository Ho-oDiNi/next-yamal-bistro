"use server";

import { Prisma } from "@prisma/client";

import { isAdminServerSide } from "@/app/auth";
import { categorySchema, TCategoryData } from "@/entities/category";
import { prisma } from "@/shared/lib/prisma";
import { SubmitState, toFieldErrors } from "@/shared/lib/zod";

export const createCategory = async (
    categoryData: TCategoryData,
    dishIds: number[] = [],
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
        const category = await prisma.category.create({
            data: parsed.data,
        });

        if (dishIds.length > 0) {
            await prisma.dish.updateMany({
                where: {
                    id: {
                        in: dishIds,
                    },
                },
                data: {
                    categoryId: category.id,
                },
            });
        }

        return {
            success: true,
            message: "Категория успешно добавлена",
        };
    } catch (error) {
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
            message: "Ошибка при отправке формы",
        };
    }
};
