"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import {
    categorySchema,
    emptyCategory,
    ICategory,
    TCategoryData,
} from "@/entities/category";
import { IDish } from "@/entities/dish";
import { StyledInput } from "@/shared/ui/StyledInput";

import { createCategory, deleteCategory, updateCategory } from "../api";
import { AdminAction } from "../model";

interface CategoryFormSectionProps {
    mode: AdminAction;
    dishes: IDish[];
    categories: ICategory[];
    loading: boolean;
    setLoading: (nextLoading: boolean) => void;
    setMessage: (message: string) => void;
    onDataChanged: () => Promise<void>;
}

export const CategoryFormSection = ({
    mode,
    dishes,
    categories,
    loading,
    setLoading,
    setMessage,
    onDataChanged,
}: CategoryFormSectionProps) => {
    const isEditMode = mode === "edit";
    const isDeleteMode = mode === "delete";

    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
        null,
    );
    const [selectedDishIds, setSelectedDishIds] = useState<number[]>([]);
    const [categoryErrors, setCategoryErrors] = useState<
        Record<string, string>
    >({});

    const categoryForm = useForm<TCategoryData>({
        defaultValues: emptyCategory,
    });

    const { register, handleSubmit, reset, getValues } = categoryForm;

    const setCategoryFromEntity = (category: ICategory | null) => {
        if (!category) {
            reset(emptyCategory);
            setSelectedDishIds([]);
            return;
        }

        reset({
            name: category.name,
            slug: category.slug,
        });

        const dishIdsFromCategory = dishes
            .filter((dish) => dish.categoryId === category.id)
            .map((dish) => dish.id);

        setSelectedDishIds(dishIdsFromCategory);
    };

    const toggleDishSelection = (dishId: number, isChecked: boolean) => {
        setSelectedDishIds((currentDishIds) => {
            if (isChecked) {
                return [...currentDishIds, dishId];
            }

            return currentDishIds.filter(
                (currentDishId) => currentDishId !== dishId,
            );
        });
    };

    const onSubmitCategoryForm = handleSubmit(async () => {
        if (isDeleteMode) {
            if (!selectedCategoryId) {
                setMessage("Выберите категорию для удаления");
                return;
            }

            setLoading(true);
            const deleteResponse = await deleteCategory(selectedCategoryId);
            setLoading(false);
            setMessage(deleteResponse.message);

            if (deleteResponse.success) {
                setSelectedCategoryId(null);
                setCategoryFromEntity(null);
                await onDataChanged();
            }

            return;
        }

        const parsedCategory = categorySchema.safeParse(getValues());

        if (!parsedCategory.success) {
            const nextErrors: Record<string, string> = {};

            for (const issue of parsedCategory.error.issues) {
                const pathField = issue.path[0];

                if (typeof pathField === "string") {
                    nextErrors[pathField] = issue.message;
                }
            }

            setCategoryErrors(nextErrors);
            setMessage("Проверьте корректность заполнения формы категории");
            return;
        }

        setCategoryErrors({});
        setLoading(true);

        const submitResponse =
            isEditMode && selectedCategoryId
                ? await updateCategory(
                      selectedCategoryId,
                      parsedCategory.data,
                      selectedDishIds,
                  )
                : await createCategory(parsedCategory.data, selectedDishIds);

        setLoading(false);
        setMessage(submitResponse.message);
        setCategoryErrors(submitResponse.errors ?? {});

        if (submitResponse.success) {
            if (!isEditMode) {
                reset(emptyCategory);
                setSelectedDishIds([]);
            }

            await onDataChanged();
        }
    });

    return (
        <form
            className="space-y-4 rounded-2xl border border-slate-200 p-4"
            onSubmit={onSubmitCategoryForm}
        >
            <h4 className="text-xl font-semibold">Управление категориями</h4>

            {isEditMode || isDeleteMode ? (
                <select
                    className="w-full rounded-xl border border-slate-300 p-3"
                    value={selectedCategoryId ?? ""}
                    onChange={(event) => {
                        const selectedValue = Number(event.target.value);

                        if (Number.isNaN(selectedValue)) {
                            setSelectedCategoryId(null);
                            setCategoryFromEntity(null);
                            return;
                        }

                        const selectedCategory =
                            categories.find(
                                (category) => category.id === selectedValue,
                            ) ?? null;

                        setSelectedCategoryId(selectedValue);
                        setCategoryFromEntity(selectedCategory);
                    }}
                >
                    <option value="">Выберите категорию</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            ) : null}

            {!isDeleteMode ? (
                <>
                    <StyledInput
                        id="category-name"
                        label="Название категории"
                        required
                        error={categoryErrors.name}
                        {...register("name")}
                    />

                    <StyledInput
                        id="category-slug"
                        label="Slug категории"
                        required
                        error={categoryErrors.slug}
                        {...register("slug")}
                    />

                    <div className="rounded-xl border border-slate-300 p-3">
                        <p className="mb-2 text-sm font-medium">
                            Блюда в категории
                        </p>
                        <div className="max-h-52 space-y-2 overflow-y-auto">
                            {dishes.map((dish) => {
                                const isChecked = selectedDishIds.includes(
                                    dish.id,
                                );

                                return (
                                    <label
                                        key={dish.id}
                                        className="flex items-center gap-2"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={(event) =>
                                                toggleDishSelection(
                                                    dish.id,
                                                    event.target.checked,
                                                )
                                            }
                                        />
                                        <span>{dish.name}</span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                </>
            ) : null}

            <div className="flex gap-3">
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-brand-dark rounded-xl px-4 py-2 text-white disabled:opacity-60"
                >
                    {isDeleteMode
                        ? "Удалить категорию"
                        : isEditMode
                          ? "Обновить категорию"
                          : "Создать категорию"}
                </button>
            </div>
        </form>
    );
};
