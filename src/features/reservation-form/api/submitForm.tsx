"use server";

import { schema } from "../model";

export type ReservationSubmitState = {
    success: boolean;
    message: string;
    errors?: Record<string, string>;
};

const escapeHtml = (value: string) =>
    value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

export const submitReservationForm = async (
    values: unknown,
): Promise<ReservationSubmitState> => {
    const parsed = schema.safeParse(values);

    if (!parsed.success) {
        const fieldErrors = parsed.error.flatten().fieldErrors;

        return {
            success: false,
            message: "Исправьте ошибки в форме",
            errors: {
                name: fieldErrors.name?.[0] ?? "",
                phone: fieldErrors.phone?.[0] ?? "",
                guests: fieldErrors.guests?.[0] ?? "",
                date: fieldErrors.date?.[0] ?? "",
                time: fieldErrors.time?.[0] ?? "",
                consent: fieldErrors.consent?.[0] ?? "",
            },
        };
    }

    const { name, phone, guests, date, time } = parsed.data;

    const submittedAt = new Intl.DateTimeFormat("ru-RU", {
        dateStyle: "short",
        timeStyle: "medium",
        timeZone: "Europe/Moscow",
    }).format(new Date());

    const text = [
        "📥 <b>Новая заявка на бронирование</b>",
        "",
        `<b>Имя:</b> ${escapeHtml(name)}`,
        `<b>Телефон:</b> ${escapeHtml(phone)}`,
        `<b>Количество гостей:</b> ${guests ?? "не указано"}`,
        `<b>Дата:</b> ${date ? escapeHtml(date) : "не указана"}`,
        `<b>Время:</b> ${time ? escapeHtml(time) : "не указано"}`,
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
