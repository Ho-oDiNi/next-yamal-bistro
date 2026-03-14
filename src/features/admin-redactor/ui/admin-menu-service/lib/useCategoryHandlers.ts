// features/admin-redactor/hooks/useCategoryHandlers.ts
"use client";

import { useCallback } from "react";

import { fetchCategories } from "@/entities/category/api/fetchCategories";

import { CategoryFormValues } from "../model/categoryForm.schema";

interface UseCategoryHandlersParams {
    setIsCategoriesLoading: (value: boolean) => void;
    setCategoriesError: (value: string | null) => void;
    setCategories: (updater: any) => void;
    setCurrentView: (view: "category" | "menu" | "categoryCreate") => void;
    updateSelectedCategory: (categoryId?: number) => void;
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
            const result = await fetchCategories();
            setCategories(result);
        } catch (error) {
            setCategoriesError(
                error instanceof Error
                    ? error.message
                    : "Не удалось загрузить категории",
            );
        } finally {
            setIsCategoriesLoading(false);
        }
    }, [setCategories, setCategoriesError, setIsCategoriesLoading]);

    const handleCreateCategory = useCallback(
        async (values: CategoryFormValues) => {
            const result = await createCategory(values);

            if (result.success) {
                await loadCategories();
                setCurrentView("category");
            }

            return result;
        },
        [loadCategories, setCurrentView],
    );

    const handleUpdateCategory = useCallback(
        async (categoryId: number, values: CategoryFormValues) => {
            const result = await updateCategory(categoryId, values);

            if (result.success) {
                await loadCategories();
            }

            return result;
        },
        [loadCategories],
    );

    const handleDeleteCategory = useCallback(
        async (categoryId: number) => {
            const result = await deleteCategory(categoryId);

            if (result.success) {
                await loadCategories();

                if (getSelectedCategoryId() === categoryId) {
                    updateSelectedCategory(undefined);
                }
            }

            return result;
        },
        [getSelectedCategoryId, loadCategories, updateSelectedCategory],
    );

    return {
        loadCategories,
        handleCreateCategory,
        handleUpdateCategory,
        handleDeleteCategory,
    };
};
