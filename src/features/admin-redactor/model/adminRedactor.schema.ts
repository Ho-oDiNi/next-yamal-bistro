import { z } from "zod";

const faqItemSchema = z.tuple([z.string(), z.string()]);

export const adminRedactorSchema = z.object({
    id: z.number(),
    slug: z.string().min(1, "Slug обязателен"),
    shortName: z.string(),
    metaTitle: z.string().min(1, "Meta Title обязателен"),
    metaDescription: z.string().min(1, "Meta Description обязателен"),
    title: z.string().min(1, "Название услуги обязательно"),
    description: z.string().min(1, "Описание обязательно"),
    contentTitle: z.string(),
    contentDescription: z.string(),
    mainText: z.string(),
    comparedImages: z.unknown().optional(),
    price: z.number().nonnegative("Цена не может быть отрицательной"),
    priceAbbr: z.string().min(1, "Аббревиатура обязательна"),
    priceExplanation: z.string(),
    guarantee: z.string(),
    duration: z.string(),
    whatIncluded: z.array(z.string()),
    materials: z.array(z.string()),
    faqDescription: z.string(),
    faqItems: z.array(faqItemSchema),
    categoryId: z.number().optional(),
    categorySlug: z.string().optional(),
});

export type AdminRedactorFormValues = z.infer<typeof adminRedactorSchema>;
