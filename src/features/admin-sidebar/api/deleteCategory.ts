"use server";

import { Prisma } from "@prisma/client";

import { isAdminServerSide } from "@/app/auth";
import { prisma } from "@/shared/lib/prisma";
import { SubmitState } from "@/shared/lib/zod";

export const deleteCategory = async (
    categoryId: number,
): Promise<SubmitState> => {
    const isAdmin = await isAdminServerSide();

    if (!isAdmin) {
        return {
            success: false,
            message: "Ошибка авторизации",
        };
    }

    try {
        await prisma.category.delete({
            where: {
                id: categoryId,
            },
        });

        return {
            success: true,
            message: "Категория успешно удалена",
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
            error.code === "P2003"
        ) {
            return {
                success: false,
                message:
                    "Нельзя удалить категорию, так как она связана с блюдами",
            };
        }

        return {
            success: false,
            message: "Ошибка при удалении категории",
        };
    }
};
