import { WeightUnit } from "@prisma/client";
import z from "zod";

import { nullableNumber, nullableString } from "@/shared/lib/zod";

export const dishSchema = z
    .object({
        name: z
            .string()
            .trim()
            .min(1, "Введите название блюда")
            .max(120, "Название слишком длинное"),

        slug: z
            .string()
            .trim()
            .min(1, "Введите slug")
            .max(120, "Slug слишком длинный")
            .regex(
                /^[a-z0-9-]+$/,
                "Slug должен содержать только строчные латинские буквы, цифры и дефис",
            ),

        price: z.preprocess(
            nullableNumber,
            z
                .number({
                    error: "Цена должна быть числом",
                })
                .nullable()
                .refine((value) => value === null || value >= 0, {
                    message: "Цена не может быть отрицательной",
                }),
        ),

        description: z.preprocess(
            nullableString,
            z.string().max(2000, "Описание слишком длинное").nullable(),
        ),

        weightValue: z.preprocess(
            nullableNumber,
            z
                .number({
                    error: "Вес должен быть числом",
                })
                .nullable()
                .refine((value) => value === null || value >= 0, {
                    message: "Вес не может быть отрицательным",
                }),
        ),

        weightUnit: z.preprocess(
            nullableString,
            z.nativeEnum(WeightUnit).nullable(),
        ),

        imageUrl: z.preprocess(
            nullableString,
            z.union([z.string().min(1, "Некорректный imageUrl"), z.null()]),
        ),

        categoryId: z.preprocess(
            nullableNumber,
            z
                .number({
                    error: "Категория должна быть числом",
                })
                .int("Некорректная категория")
                .nullable(),
        ),

        tagId: z.preprocess(
            nullableNumber,
            z
                .number({
                    error: "Тег должен быть числом",
                })
                .int("Некорректный тег")
                .nullable(),
        ),
    })
    .superRefine((data, ctx) => {
        if (data.weightValue !== null && data.weightUnit === null) {
            ctx.addIssue({
                code: "custom",
                path: ["weightUnit"],
                message: "Укажите единицу измерения веса",
            });
        }

        if (data.weightValue === null && data.weightUnit !== null) {
            ctx.addIssue({
                code: "custom",
                path: ["weightValue"],
                message: "Укажите значение веса",
            });
        }
    });
