// features/admin-redactor/model/adminRedactor.schema.ts
import { z } from "zod";

export const adminRedactorSchema = z.object({
    id: z.number().int().positive().optional(),
    name: z.string().trim().min(1, "Название обязательно"),
    description: z.string().trim().min(1, "Описание обязательно"),
    slug: z.string().trim().min(1, "Slug обязателен"),
    weightValue: z.preprocess(
        (value) =>
            value === "" || value === null || value === undefined
                ? undefined
                : Number(value),
        z
            .number({
                error: "Вес должен быть числом",
            })
            .nonnegative("Вес не может быть отрицательным")
            .optional(),
    ),
    weightUnit: z.preprocess((value) => {
        if (typeof value !== "string") {
            return undefined;
        }

        const trimmed = value.trim();
        return trimmed ? trimmed : undefined;
    }, z.string().optional()),
    price: z.preprocess(
        (value) => Number(value),
        z
            .number({
                error: "Цена должна быть числом",
            })
            .nonnegative("Цена должна быть неотрицательной"),
    ),
    imageUrl: z.preprocess((value) => {
        if (typeof value !== "string") {
            return undefined;
        }

        const trimmed = value.trim();
        return trimmed ? trimmed : undefined;
    }, z.string().optional()),
    categoryId: z.preprocess(
        (value) =>
            value === "" || value === null || value === undefined
                ? undefined
                : Number(value),
        z
            .number({
                error: "Категория должна быть числом",
            })
            .int("Категория должна быть целым числом")
            .positive("Категория должна быть положительным числом")
            .optional(),
    ),
    tagId: z.preprocess(
        (value) =>
            value === "" || value === null || value === undefined
                ? undefined
                : Number(value),
        z
            .number({
                error: "Тег должен быть числом",
            })
            .int("Тег должен быть целым числом")
            .positive("Тег должен быть положительным числом")
            .optional(),
    ),
});

export type AdminRedactorFormValues = z.infer<typeof adminRedactorSchema>;
