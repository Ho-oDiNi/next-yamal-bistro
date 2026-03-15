"use server";

import { Prisma } from "@prisma/client";

import { isAdminServerSide } from "@/app/auth";
import { revalidateDishPaths } from "@/entities/dish/lib/dishRevalidate";
import { IDish } from "@/entities/dish/model";
import { logger } from "@/shared/lib/logger";
import { prisma } from "@/shared/lib/prisma";

import { normalizeDishPayload } from "../ui/admin-menu-service/lib/normalizeDishPayload";

export const addNewDish = async (
    dishData: IDish,
): Promise<{
    success: boolean;
    message: string;
}> => {
    try {
        const isAdmin = await isAdminServerSide();

        if (!isAdmin) {
            throw new Error("Ошибка авторизации");
        }

        const extendedPayload = dishData as DishActionInput;
        const { data, children, comparison } =
            normalizeDishPayload(extendedPayload);

        let categoryId = extendedPayload.categoryId ?? null;

        if (!categoryId && extendedPayload.categorySlug) {
            const category = await prisma.category.findUnique({
                where: { slug: extendedPayload.categorySlug },
                select: { id: true },
            });

            categoryId = category?.id ?? null;
        }

        if (!categoryId) {
            throw new Error("Категория обязательна");
        }

        const createdDish = await prisma.$transaction(async (tx) => {
            const created = await tx.dish.create({
                data: {
                    ...data,
                    categoryId,
                },
                include: {
                    category: {
                        select: {
                            slug: true,
                        },
                    },
                },
            });

            if (children.whatIncluded.length > 0) {
                await tx.dishChecklistItem.createMany({
                    data: children.whatIncluded.map(({ text, position }) => ({
                        dishId: created.id,
                        text,
                        position,
                    })),
                });
            }

            if (children.materials.length > 0) {
                await tx.dishMaterial.createMany({
                    data: children.materials.map(({ text, position }) => ({
                        dishId: created.id,
                        text,
                        position,
                    })),
                });
            }

            if (children.faqs.length > 0) {
                await tx.dishFaq.createMany({
                    data: children.faqs.map(
                        ({ question, answer, position }) => ({
                            dishId: created.id,
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
                    where: { dishId: created.id },
                    create: {
                        dishId: created.id,
                        ...normalizedComparison,
                    },
                    update: normalizedComparison,
                });
            }

            return created;
        });

        await revalidateDishPaths([
            {
                categorySlug: createdDish.category?.slug,
                slug: createdDish.slug,
            },
        ]);

        return {
            success: true,
            message: "Блюдо успешно создано",
        };
    } catch (error) {
        logger.error("Ошибка при добавлении блюда", {
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
};
