import { Dispatch, SetStateAction, useCallback } from "react";

import { Category } from "@/entities/category";
import { fetchServiceCategories } from "@/features/admin-redactor/admin.utils";
import { createServiceCategory } from "@/features/admin-redactor/api/createServiceCategory";
import { deleteServiceCategory } from "@/features/admin-redactor/api/deleteServiceCategory";
import { updateServiceCategory } from "@/features/admin-redactor/api/updateServiceCategory";
import {
    CategoryCreatePayload,
    CategoryCreateResult,
    CategoryDeleteResult,
    CategoryUpdatePayload,
    CategoryUpdateResult,
    ViewMode,
} from "@/features/admin-redactor/model/adminRedactor.types";

interface UseCategoryHandlersParams {
    setIsCategoriesLoading: Dispatch<SetStateAction<boolean>>;
    setCategoriesError: Dispatch<SetStateAction<string | null>>;
    setCategories: Dispatch<SetStateAction<Category[]>>;
    setCurrentView: Dispatch<SetStateAction<ViewMode>>;
    updateSelectedCategory: (categoryId?: number, categorySlug?: string) => void;
    getSelectedCategoryId: () => number | undefined;
}

export const useCategoryHandlers = ({
    setIsCategoriesLoading,
    setCategoriesError,
    setCategories,
    setCurrentView,
    updateSelectedCategory,
    getSelectedCategoryId,
}: UseCategoryHandlersParams) => {
    const loadCategories = useCallback(async () => {
        setIsCategoriesLoading(true);
        setCategoriesError(null);

        try {
            const data = await fetchServiceCategories();
            setCategories(data);
        } catch (error) {
            setCategoriesError(
                error instanceof Error
                    ? error.message
                    : "Не удалось загрузить категории",
            );
        } finally {
            setIsCategoriesLoading(false);
        }
    }, [setIsCategoriesLoading, setCategoriesError, setCategories]);

    const sortCategories = useCallback((items: Category[]): Category[] => {
        return [...items].sort((left, right) => {
            const leftPosition =
                typeof left.position === "number" ? left.position : 0;
            const rightPosition =
                typeof right.position === "number" ? right.position : 0;

            if (leftPosition !== rightPosition) {
                return leftPosition - rightPosition;
            }

            return left.id - right.id;
        });
    }, []);

    const handleCreateCategory = useCallback(
        async (
            payload: CategoryCreatePayload,
        ): Promise<CategoryCreateResult> => {
            try {
                const result = await createServiceCategory(payload);

                if (result.success && result.category) {
                    const category = result.category;

                    setCategories((prev) => {
                        const existingIndex = prev.findIndex(
                            (existingCategory) =>
                                existingCategory.id === category.id,
                        );

                        if (existingIndex >= 0) {
                            const next = [...prev];
                            next[existingIndex] = category;
                            return sortCategories(next);
                        }

                        return sortCategories([...prev, category]);
                    });

                    setCategoriesError(null);
                    updateSelectedCategory(category.id, category.slug);
                    setCurrentView("category");
                }

                return result;
            } catch (error) {
                return {
                    success: false,
                    message:
                        error instanceof Error
                            ? error.message
                            : "Не удалось создать категорию",
                };
            }
        },
        [
            setCategories,
            setCategoriesError,
            setCurrentView,
            sortCategories,
            updateSelectedCategory,
        ],
    );

    const handleUpdateCategory = useCallback(
        async (
            payload: CategoryUpdatePayload,
        ): Promise<CategoryUpdateResult> => {
            try {
                const result = await updateServiceCategory(payload);

                if (result.success && result.category) {
                    const category = result.category;

                    setCategories((prev) => {
                        const next = prev.map((existing) =>
                            existing.id === category.id ? category : existing,
                        );

                        return sortCategories(next);
                    });

                    setCategoriesError(null);

                    if (getSelectedCategoryId() === category.id) {
                        updateSelectedCategory(category.id, category.slug);
                    }
                }

                return result;
            } catch (error) {
                return {
                    success: false,
                    message:
                        error instanceof Error
                            ? error.message
                            : "Не удалось обновить категорию",
                } satisfies CategoryUpdateResult;
            }
        },
        [
            getSelectedCategoryId,
            setCategories,
            setCategoriesError,
            sortCategories,
            updateSelectedCategory,
        ],
    );

    const handleDeleteCategory = useCallback(
        async (categoryId: number): Promise<CategoryDeleteResult> => {
            try {
                const result = await deleteServiceCategory(categoryId);

                if (result.success && result.categoryId) {
                    setCategories((prev) =>
                        prev.filter(
                            (category) => category.id !== result.categoryId,
                        ),
                    );

                    setCategoriesError(null);

                    if (getSelectedCategoryId() === result.categoryId) {
                        updateSelectedCategory(undefined, undefined);
                    }
                }

                return result;
            } catch (error) {
                return {
                    success: false,
                    message:
                        error instanceof Error
                            ? error.message
                            : "Не удалось удалить категорию",
                } satisfies CategoryDeleteResult;
            }
        },
        [
            getSelectedCategoryId,
            setCategories,
            setCategoriesError,
            updateSelectedCategory,
        ],
    );

    return {
        loadCategories,
        handleCreateCategory,
        handleUpdateCategory,
        handleDeleteCategory,
    };
};
