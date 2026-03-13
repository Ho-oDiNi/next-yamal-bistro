import { StaticImageData } from "next/image";

export interface IDish {
    id: number;
    name: string;
    description: string;
    slug: string;
    weightValue?: number;
    weightUnit?: string;
    price: number;
    imageUrl?: string | StaticImageData;
    categoryId: number;
    tagId?: number;
}
