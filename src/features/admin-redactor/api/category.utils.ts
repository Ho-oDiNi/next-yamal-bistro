import { Category } from "@/entities/category/model";

interface CategoryWithDishSlugs {
    id: number;
    slug: string;
    name: string;
    imageUrl: string | null;
    position: number | null;
    dishes: Array<{ slug: string }>;
}

export const mapCategoryWithDishSlugs = (
    category: CategoryWithDishSlugs,
): Category => ({
    id: category.id,
    slug: category.slug,
    name: category.name,
    imageUrl: category.imageUrl ?? undefined,
    position: category.position ?? undefined,
    dishSlugs: category.dishes.map((dish) => dish.slug),
});

export const normalizeCategoryPosition = (
    position: number | undefined,
): number | undefined => {
    if (typeof position !== "number" || !Number.isFinite(position)) {
        return undefined;
    }

    return position;
};

export const normalizeCategoryImageFile = (
    imageFile: File | null | undefined,
): File | null => {
    if (typeof File === "undefined" || !(imageFile instanceof File)) {
        return null;
    }

    return imageFile;
};
