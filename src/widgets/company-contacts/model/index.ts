import { StaticImageData } from "next/image";

export type SocialLink = {
    href: string;
    icon: StaticImageData;
    label: string;
};

export type BusinessHour = {
    dayLabel: string;
    openTime: string;
    closeTime: string;
};
