"use server";

import { escapeHtml } from "@/shared/lib/html-react-parser/lib/escapeHtml";
import { SubmitState, toFieldErrors } from "@/shared/lib/zod";

import { reservationSchema } from "../model";

export const submitReservationForm = async (
    values: unknown,
): Promise<SubmitState> => {
    const parsed = reservationSchema.safeParse(values);

    if (!parsed.success) {
        return {
            success: false,
            message: "Исправьте ошибки в форме",
            errors: toFieldErrors(parsed.error),
        };
    }

    const { name, phone, guests, date, time } = parsed.data;

    const submittedAt = new Intl.DateTimeFormat("ru-RU", {
        dateStyle: "short",
        timeStyle: "medium",
        timeZone: "Asia/Yekaterinburg",
    }).format(new Date());

    const text = [
        "📥 <b>Новая заявка на бронирование</b>",
        "",
        `<b>Имя:</b> ${escapeHtml(name)}`,
        `<b>Телефон:</b> ${escapeHtml(phone)}`,
        `<b>Количество гостей:</b> ${guests ?? "не указано"}`,
        `<b>Дата:</b> ${escapeHtml(date) ?? "не указана"}`,
        `<b>Время:</b> ${escapeHtml(time) ?? "не указано"}`,
        `<b>Отправлено:</b> ${submittedAt}`,
    ].join("\n");

    try {
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            throw new Error(
                "TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы",
            );
        }

        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text,
                    parse_mode: "HTML",
                }),
                cache: "no-store",
            },
        );

        if (!telegramResponse.ok) {
            const errorText = await telegramResponse.text();
            throw new Error(errorText || "Ошибка при отправке в Telegram");
        }

        return {
            success: true,
            message: "Заявка успешно отправлена",
        };
    } catch (error) {
        return {
            success: false,
            message:
                error instanceof Error
                    ? `Ошибка при отправке формы: ${error.message}`
                    : "Ошибка при отправке формы",
        };
    }
};
