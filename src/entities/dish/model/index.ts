import { StaticImageData } from "next/image";

export interface IDish {
    id: number | string;
    name: string;
    description: string;
    slug: string;
    weightValue?: number;
    weightUnit?: string;
    price: number;
    imageUrl?: string | StaticImageData;
    categoryId?: number | string;
    tagId?: number | string;

    shortName?: string;
    metaTitle?: string;
    metaDescription?: string;
    title?: string;
    contentTitle?: string;
    contentDescription?: string;
    mainText?: string;
    comparedImages?: unknown;
    priceAbbr?: string;
    priceExplanation?: string;
    guarantee?: string;
    duration?: string;
    whatIncluded?: string[];
    materials?: string[];
    faqDescription?: string;
    faqItems?: [string, string][];
    categorySlug?: string;
}

export type Dish = IDish;
