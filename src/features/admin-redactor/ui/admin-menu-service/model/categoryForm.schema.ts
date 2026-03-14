// features/admin-redactor/model/categoryForm.schema.ts
import { z } from "zod";

import {
    CATEGORY_IMAGE_MAX_SIZE_BYTES,
    CATEGORY_IMAGE_MAX_SIZE_LABEL,
} from "@/shared/lib/file-storage";

export const categoryFormSchema = z.object({
    name: z.string().trim().min(1, "Название обязательно"),
    slug: z.string().trim().min(1, "Slug обязателен"),
    description: z.preprocess((value) => {
        if (typeof value !== "string") {
            return undefined;
        }

        const trimmed = value.trim();
        return trimmed ? trimmed : undefined;
    }, z.string().optional()),
    position: z.preprocess(
        (value) =>
            value === "" || value === null || value === undefined
                ? undefined
                : Number(value),
        z
            .number({
                error: "Позиция должна быть числом",
            })
            .int("Позиция должна быть целым числом")
            .nonnegative("Позиция должна быть неотрицательной")
            .optional(),
    ),
    imageFile: z
        .custom<File | undefined>(
            (value) => value === undefined || value instanceof File,
            "Некорректный файл",
        )
        .refine(
            (file) => !file || file.size <= CATEGORY_IMAGE_MAX_SIZE_BYTES,
            `Размер изображения не должен превышать ${CATEGORY_IMAGE_MAX_SIZE_LABEL}`,
        )
        .optional(),
});

export type CategoryFormValues = z.infer<typeof categoryFormSchema>;
