export type BusinessHour = {
    dayLabel: string;
    openTime: string;
    closeTime: string;
};

export const BUSINESS_HOURS: BusinessHour[] = [
    { dayLabel: "Пн - Чт", openTime: "7:30", closeTime: "21:00" },
    { dayLabel: "Пт", openTime: "7:30", closeTime: "22:00" },
    { dayLabel: "Сб", openTime: "9:00", closeTime: "22:00" },
    { dayLabel: "Вс", openTime: "9:00", closeTime: "21:00" },
];

export const CONTACT_PHONES: string[] = ["+7 (904) 475-50-99"];

export const ORGANIZATION_ADDRESS = {
    city: "г. Салехард",
    street: "ул. Свердлова",
    house: "д. 34А",
};

export const CONTACT_EMAIL = "yamdstone@mail.ru";

export const SOCIAL_LINKS = [
    {
        href: "https://t.me/YamalBistro",
        icon: "/icons/tg.svg",
        label: "Мы в Telegram",
    },
    {
        href: "https://vk.com/bistroyamal",
        icon: "/icons/vk.svg",
        label: "Мы во ВКонтакте",
    },
];

export const CONTACT_MAP = {
    title: "Ямал Бистро на карте Салехарда",
    yandexEmbedSrc:
        "https://yandex.ru/map-widget/v1/?from=api-maps&ll=66.600484%2C66.526556&mode=search&oid=95926227579&ol=biz&origin=jsapi_2_1_79&z=16.79",
};
