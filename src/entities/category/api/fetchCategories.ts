import { ICategory } from "../model";

export const fetchCategories = async (): Promise<ICategory[]> => {
    try {
        const response = await fetch("/api/dish-categories");

        if (!response.ok) {
            throw new Error("Не удалось загрузить категории");
        }

        const data = (await response.json()) as ICategory[];
        return data;
    } catch (error) {
        console.error("Не удалось загрузить список категорий", error);
        throw error instanceof Error
            ? error
            : new Error("Не удалось загрузить категории");
    }
};
