"use server";

import { Prisma } from "@prisma/client";

import { logger } from "@/shared/lib/logger";
import { prisma } from "@/shared/lib/prisma";
import { Category } from "@/entities/category/model";
import { isAdminServerSide } from "@/app/auth";
import {
    CATEGORY_IMAGE_MAX_SIZE_BYTES,
    CATEGORY_IMAGE_MAX_SIZE_LABEL,
    saveCategoryImage,
    removePublicFile,
} from "@/shared/lib/file-storage";
import {
    mapCategoryWithDishSlugs,
    normalizeCategoryImageFile,
    normalizeCategoryPosition,
} from "./category.utils";

export interface CreateDishCategoryInput {
    name: string;
    slug: string;
    description?: string;
    position?: number;
    imageFile?: File | null;
}

export interface CreateDishCategoryResult {
    success: boolean;
    message: string;
    category?: Category;
}

export const createDishCategory = async (
    payload: CreateDishCategoryInput,
): Promise<CreateDishCategoryResult> => {
    try {
        const isAdmin = await isAdminServerSide();

        if (!isAdmin) {
            throw new Error("Ошибка авторизации");
        }

        const name = payload.name?.trim();
        const slug = payload.slug?.trim();

        const imageFile = normalizeCategoryImageFile(payload.imageFile);
        const position = normalizeCategoryPosition(payload.position);

        if (!name) {
            throw new Error("Название категории обязательно");
        }

        if (!slug) {
            throw new Error("Slug категории обязателен");
        }

        let imageUrl: string | undefined;

        if (imageFile && imageFile.size > 0) {
            if (imageFile.size > CATEGORY_IMAGE_MAX_SIZE_BYTES) {
                throw new Error(
                    `Размер изображения не должен превышать ${CATEGORY_IMAGE_MAX_SIZE_LABEL}`,
                );
            }

            imageUrl = await saveCategoryImage(imageFile);
        }

        let createdCategory;

        try {
            createdCategory = await prisma.category.create({
                data: {
                    name,
                    slug,
                    position,
                    imageUrl,
                },
                include: {
                    dishes: {
                        select: {
                            slug: true,
                        },
                        orderBy: {
                            id: "asc",
                        },
                    },
                },
            });
        } catch (error) {
            if (imageUrl) {
                await removePublicFile(imageUrl);
            }

            throw error;
        }

        const category = mapCategoryWithDishSlugs(createdCategory);

        return {
            success: true,
            message: "Категория успешно создана",
            category,
        };
    } catch (error) {
        logger.error("Ошибка при создании категории блюда", {
            error,
            payload,
        });

        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
        ) {
            return {
                success: false,
                message: "Категория с таким slug уже существует",
            };
        }

        return {
            success: false,
            message: error instanceof Error ? error.message : "Ошибка сервера",
        };
    }
};
