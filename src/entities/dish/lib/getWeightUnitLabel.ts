import { WEIGHT_UNIT_LABELS } from "../config";
import { TWeightUnit } from "../model";

export const getWeightUnitLabel = (
    unit: TWeightUnit | null | undefined,
): string => {
    if (!unit) return "";
    return WEIGHT_UNIT_LABELS[unit];
};
