"use server";

import { Prisma } from "@prisma/client";

import { isAdminServerSide } from "@/app/auth";
import { dishSchema, TDishData } from "@/entities/dish";
import { prisma } from "@/shared/lib/prisma";
import { SubmitState, toFieldErrors } from "@/shared/lib/zod";

export const createDish = async (dishData: TDishData): Promise<SubmitState> => {
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
        await prisma.dish.create({
            data: parsed.data,
        });

        return {
            success: true,
            message: "Блюдо успешно добавлено",
        };
    } catch (error) {
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

        return {
            success: false,
            message: "Ошибка при отправке формы",
        };
    }
};
