import { TDishData, TWeightUnit } from "../model";

export const emptyDish: TDishData = {
    name: "",
    slug: "",
    composition: "",
    price: null,
    description: null,
    weightValue: null,
    weightUnit: null,
    imageUrl: null,
    categoryId: null,
    tagId: null,
};

export const WEIGHT_UNIT_LABELS: Record<TWeightUnit, string> = {
    KG: "кг",
    G: "г",
    PCS: "шт",
    ML: "мл",
    L: "л",
};

export const WEIGHT_UNIT_ABBR: Record<TWeightUnit, string> = {
    KG: "килограммы",
    G: "граммы",
    PCS: "штуки",
    ML: "миллилитры",
    L: "литры",
};
