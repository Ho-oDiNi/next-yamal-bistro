"use server";

import { Prisma } from "@prisma/client";

import { isAdminServerSide } from "@/app/auth";
import { prisma } from "@/shared/lib/prisma";
import { SubmitState } from "@/shared/lib/zod";

export const deleteDish = async (dishId: number): Promise<SubmitState> => {
    const isAdmin = await isAdminServerSide();

    if (!isAdmin) {
        return {
            success: false,
            message: "Ошибка авторизации",
        };
    }

    try {
        await prisma.dish.delete({
            where: {
                id: dishId,
            },
        });

        return {
            success: true,
            message: "Блюдо успешно удалено",
        };
    } catch (error) {
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2025"
        ) {
            return {
                success: false,
                message: "Блюдо не найдено",
            };
        }

        return {
            success: false,
            message: "Ошибка при удалении блюда",
        };
    }
};
