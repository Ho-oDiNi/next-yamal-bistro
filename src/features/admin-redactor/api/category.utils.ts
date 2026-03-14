import { Category } from "@/entities/category";

interface CategoryWithServiceSlugs {
    id: number;
    slug: string;
    name: string;
    imageUrl: string | null;
    position: number | null;
    services: Array<{ slug: string }>;
}

export const mapCategoryWithServiceSlugs = (
    category: CategoryWithServiceSlugs,
): Category => ({
    id: category.id,
    slug: category.slug,
    name: category.name,
    imageUrl: category.imageUrl ?? undefined,
    position: category.position ?? undefined,
    serviceSlugs: category.services.map((service) => service.slug),
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
