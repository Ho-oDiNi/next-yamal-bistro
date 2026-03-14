// features/admin-redactor/hooks/useCategoryHandlers.ts
"use client";

import { Dispatch, SetStateAction, useCallback } from "react";

import { fetchCategories } from "@/entities/category/api/fetchCategories";
import { ICategory } from "@/entities/category/model";
import { createDishCategory } from "@/features/admin-redactor/api/createDishCategory";
import { deleteDishCategory } from "@/features/admin-redactor/api/deleteDishCategory";
import { updateDishCategory } from "@/features/admin-redactor/api/updateDishCategory";

import { CategoryFormValues } from "../model/categoryForm.schema";

interface UseCategoryHandlersParams {
    setIsCategoriesLoading: (value: boolean) => void;
    setCategoriesError: (value: string | null) => void;
    setCategories: Dispatch<SetStateAction<ICategory[]>>;
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
            const result = await createDishCategory(values);

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
            const result = await updateDishCategory({ id: categoryId, ...values });

            if (result.success) {
                await loadCategories();
            }

            return result;
        },
        [loadCategories],
    );

    const handleDeleteCategory = useCallback(
        async (categoryId: number) => {
            const result = await deleteDishCategory(categoryId);

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
