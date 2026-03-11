import z from "zod";

import { isValidDayMonth } from "@/shared/ui/StyledInput/lib/isValidDayMonth";
import { isValidTime } from "@/shared/ui/StyledInput/lib/isValidTime";

import { emptyToUndefined } from "../lib/emptyToUndefined";

export const schema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "Введите имя")
        .regex(/^[A-Za-zА-Яа-яЁё\s-]+$/, "Имя может содержать только буквы"),

    phone: z
        .string()
        .trim()
        .min(1, "Введите номер телефона")
        .regex(/^\+?[0-9\s\-()]{10,20}$/, "Введите корректный номер телефона"),

    guests: z.preprocess(
        emptyToUndefined,
        z.coerce
            .number()
            .int("Количество гостей должно быть целым числом")
            .min(1, "Минимум 1 гость")
            .max(20, "Максимум 20 гостей")
            .optional(),
    ),

    date: z.preprocess(
        emptyToUndefined,
        z
            .string()
            .regex(/^\d{2}\.\d{2}$/, "Введите дату в формате ДД.ММ")
            .refine(isValidDayMonth, "Введите корректную дату")
            .optional(),
    ),

    time: z.preprocess(
        emptyToUndefined,
        z
            .string()
            .regex(/^\d{2}:\d{2}$/, "Введите время в формате ЧЧ:ММ")
            .refine(isValidTime, "Введите корректное время")
            .optional(),
    ),

    consent: z.boolean().refine((value) => value === true, {
        message: "Нужно согласие на обработку данных",
    }),
});

export type ReservationFormValues = z.infer<typeof schema>;
