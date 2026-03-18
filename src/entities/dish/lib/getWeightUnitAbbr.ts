import { WEIGHT_UNIT_ABBR } from "../config";
import { TWeightUnit } from "../model";

export const getWeightUnitAbbr = (
    unit: TWeightUnit | null | undefined,
): string => {
    if (!unit) return "";
    return WEIGHT_UNIT_ABBR[unit];
};
