import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://yamal-bistro.ru"),
    verification: {
        yandex: "4e2e707416432fc3",
    },
    title: "Кафе северной кухни в Салехарде | Ямал Бистро",
    description:
        "Уютное кафе, где можно вкусно поесть. Заказать горячие блюда с доставкой. Бронирование столиков онлайн. Завтрак, обед и ужин с собой.",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "ru_RU",
        url: "/",
        siteName: "Ямал Бистро",
        title: "Кафе северной кухни в Салехарде | Ямал Бистро",
        description:
            "Уютное кафе, где можно вкусно поесть. Заказать горячие блюда с доставкой. Бронирование столиков онлайн. Завтрак, обед и ужин с собой.",
        images: "/images/og-image.jpg",
    },
};
