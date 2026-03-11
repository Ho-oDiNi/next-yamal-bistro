import tgIcon from "@icons/social-tg.svg";
import vkIcon from "@icons/social-vk.svg";

import { BusinessHour, SocialLink } from "../model";

export const BUSINESS_HOURS: BusinessHour[] = [
    { dayLabel: "Пн - Чт", openTime: "7:30", closeTime: "21:00" },
    { dayLabel: "Пт", openTime: "7:30", closeTime: "22:00" },
    { dayLabel: "Сб", openTime: "9:00", closeTime: "22:00" },
    { dayLabel: "Вс", openTime: "9:00", closeTime: "21:00" },
];

export const CONTACT_PHONES: string[] = ["+7 (904) 475-50-99"];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        href: "https://t.me/YamalBistro",
        icon: tgIcon,
        label: "Мы в Telegram",
    },
    {
        href: "https://vk.com/bistroyamal",
        icon: vkIcon,
        label: "Мы во ВКонтакте",
    },
];
