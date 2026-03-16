"use server";

import { Prisma } from "@prisma/client";

import { isAdminServerSide } from "@/app/auth";
import { dishSchema, TDishData } from "@/entities/dish";
import { prisma } from "@/shared/lib/prisma";
import { SubmitState, toFieldErrors } from "@/shared/lib/zod";

export const updateDish = async (
    dishId: number,
    dishData: TDishData,
): Promise<SubmitState> => {
    const isAdmin = await isAdminServerSide();

    if (!isAdmin) {
        return {
            success: false,
            message: "Ошибка авторизации",
        };
    }

    const parsed = dishSchema.safeParse(dishData);

    if (!parsed.success) {
        return {
            success: false,
            message: "Проверьте корректность заполнения формы",
            errors: toFieldErrors(parsed.error),
        };
    }

    try {
        await prisma.dish.update({
            where: {
                id: dishId,
            },
            data: parsed.data,
        });

        return {
            success: true,
            message: "Блюдо успешно обновлено",
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

        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
        ) {
            return {
                success: false,
                message: "Блюдо с такими данными уже существует",
                errors: {
                    slug: "Этот slug уже занят",
                },
            };
        }

        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2003"
        ) {
            return {
                success: false,
                message: "Указана некорректная категория или тег",
            };
        }

        return {
            success: false,
            message: "Ошибка при обновлении блюда",
        };
    }
};
