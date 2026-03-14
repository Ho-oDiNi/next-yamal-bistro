"use server";

import { Prisma } from "@prisma/client";

import { Dish } from "@/entities/dish/model";
import { logger } from "@/shared/lib/logger";
import { prisma } from "@/shared/lib/prisma";

import { normalizeDishPayload, DishActionInput } from "../dishPayload.utils";
import { revalidateDishPaths } from "../../../entities/dish/lib/dishRevalidate";
import { isAdminServerSide } from "@/app/auth";

export async function insertIntoDish(dishData: Dish): Promise<{
    success: boolean;
    message: string;
}> {
    try {
        const isAdmin = await isAdminServerSide();
        if (!isAdmin) throw new Error("Ошибка авторизации");

        if (!Number.isInteger(dishData.id) || dishData.id <= 0) {
            throw new Error("Идентификатор блюда обязателен");
        }

        const extendedPayload = dishData as DishActionInput;
        const { data, children, comparison } =
            normalizeDishPayload(extendedPayload);

        const existingDish = await prisma.dish.findUnique({
            where: { id: dishData.id },
            include: {
                category: {
                    select: {
                        slug: true,
                    },
                },
            },
        });

        if (!existingDish) {
            throw new Error("Блюдо не найдено");
        }

        let nextCategoryId: number | null =
            extendedPayload.categoryId ?? existingDish.categoryId;

        if (!nextCategoryId && extendedPayload.categorySlug) {
            const category = await prisma.category.findUnique({
                where: { slug: extendedPayload.categorySlug },
                select: { id: true },
            });

            nextCategoryId = category?.id ?? null;
        }

        if (!nextCategoryId) {
            throw new Error("Категория обязательна");
        }

        const dishId = existingDish.id;

        const updatedDish = await prisma.$transaction(async (tx) => {
            const updated = await tx.dish.update({
                where: { id: dishId },
                data: {
                    ...data,
                    categoryId: nextCategoryId,
                },
                include: {
                    category: {
                        select: {
                            slug: true,
                        },
                    },
                },
            });

            await tx.dishChecklistItem.deleteMany({
                where: { dishId },
            });

            await tx.dishMaterial.deleteMany({
                where: { dishId },
            });

            await tx.dishFaq.deleteMany({
                where: { dishId },
            });

            if (children.whatIncluded.length > 0) {
                await tx.dishChecklistItem.createMany({
                    data: children.whatIncluded.map(({ text, position }) => ({
                        dishId,
                        text,
                        position,
                    })),
                });
            }

            if (children.materials.length > 0) {
                await tx.dishMaterial.createMany({
                    data: children.materials.map(({ text, position }) => ({
                        dishId,
                        text,
                        position,
                    })),
                });
            }

            if (children.faqs.length > 0) {
                await tx.dishFaq.createMany({
                    data: children.faqs.map(
                        ({ question, answer, position }) => ({
                            dishId,
                            question,
                            answer,
                            position,
                        }),
                    ),
                });
            }

            if (comparison) {
                const normalizedComparison = {
                    ...comparison,
                    beforeImageAlt: comparison.beforeImageAlt ?? "",
                    afterImageAlt: comparison.afterImageAlt ?? "",
                };

                await tx.dishComparison.upsert({
                    where: { dishId },
                    create: {
                        dishId,
                        ...normalizedComparison,
                    },
                    update: normalizedComparison,
                });
            } else {
                await tx.dishComparison.deleteMany({
                    where: { dishId },
                });
            }

            return updated;
        });

        await revalidateDishPaths([
            {
                categorySlug: existingDish.category?.slug,
                slug: existingDish.slug,
            },
            {
                categorySlug: updatedDish.category?.slug,
                slug: updatedDish.slug,
            },
        ]);

        return {
            success: true,
            message: "Данные успешно сохранены",
        };
    } catch (error) {
        logger.error("Ошибка при сохранении блюда", {
            error,
            dishData,
        });

        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
        ) {
            return {
                success: false,
                message: "Блюдо с таким slug уже существует",
            };
        }

        return {
            success: false,
            message: error instanceof Error ? error.message : "Ошибка сервера",
        };
    }
}
