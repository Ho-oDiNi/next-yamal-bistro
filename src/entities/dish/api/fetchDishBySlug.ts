import { IDish } from "../model";

export const fetchDishBySlug = async (
    dishSlug: string,
): Promise<IDish | null> => {
    try {
        const response = await fetch(`/api/dishes/${dishSlug}`);
        if (!response.ok) {
            return null;
        }

        const data = (await response.json()) as IDish;
        return data;
    } catch (error) {
        console.error("Не удалось загрузить данные блюда", error);
        return null;
    }
};
