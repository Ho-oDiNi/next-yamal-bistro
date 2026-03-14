import { Category } from "@/entities/category/model";
import { Dish } from "@/entities/dish/model";

export const createEmptyDish = (): Dish => ({
    id: 0,
    slug: "",
    shortName: "",
    metaTitle: "",
    metaDescription: "",
    title: "",
    description: "",
    contentTitle: "",
    contentDescription: "",
    mainText: "",
    comparedImages: undefined,
    price: 0,
    priceAbbr: "",
    priceExplanation: "",
    guarantee: "",
    duration: "",
    whatIncluded: [],
    materials: [],
    faqDescription: "",
    faqItems: [],
    categoryId: undefined,
    categorySlug: undefined,
});

export const fetchDishBySlug = async (
    dishSlug: string,
): Promise<Dish | null> => {
    if (!dishSlug) {
        return null;
    }

    try {
        const response = await fetch(`/api/dishes/${dishSlug}`);
        if (!response.ok) {
            return null;
        }

        const data = (await response.json()) as Dish;
        return data;
    } catch (error) {
        console.error("Не удалось загрузить данные блюда", error);
        return null;
    }
};

export const fetchDishCategories = async (): Promise<Category[]> => {
    try {
        const response = await fetch("/api/dish-categories");

        if (!response.ok) {
            throw new Error("Не удалось загрузить категории");
        }

        const data = (await response.json()) as Category[];
        return data;
    } catch (error) {
        console.error("Не удалось загрузить список категорий", error);
        throw error instanceof Error
            ? error
            : new Error("Не удалось загрузить категории");
    }
};

export const getDishTitle = (
    formData: Dish,
    dishSlug: string | undefined,
): string => {
    return (
        formData.title?.trim() ||
        formData.shortName?.trim() ||
        dishSlug?.trim() ||
        "это блюдо"
    );
};
