import { StaticImageData } from "next/image";

export interface IDish {
    id: number;
    name: string;
    slug: string;
    price: number | null;
    description: string | null;
    weightValue: number | null;
    weightUnit: string | null;
    imageUrl: string | StaticImageData | null;
    categoryId: number | null;
    tagId: number | null;
}

export type TDishData = Omit<IDish, "id">;
