import { StaticImageData } from "next/image";

import { ITag } from "@/entities/tag/model";

export type TWeightUnit = "KG" | "G" | "PCS" | "ML" | "L";

export interface IDish {
    id: number;
    name: string;
    slug: string;
    price: number | null;
    description: string | null;
    weightValue: number | null;
    weightUnit: TWeightUnit | null;
    composition: string | null;
    imageUrl: string | StaticImageData | null;
    categoryId: number | null;
    tagId: number | null;
    tag?: ITag | null;
}

export type TDishData = Omit<IDish, "id">;

export type TSupplementData = {
    name: string;
    price: number;
};
