import { z } from "zod";

export const categorySchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "Введите название категории")
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
});
