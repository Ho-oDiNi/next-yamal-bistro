// features/admin-redactor/ui/category/CategoryView.tsx
"use client";

import { useMemo, useState } from "react";

import CategoryForm from "./CategoryForm";
import { pluralizeDishes } from "../lib/pluralizeDishes";
import { CategoryViewProps } from "../model/adminRedactor.types";
import { CategoryFormValues } from "../model/categoryForm.schema";
import BackButton from "../ui-test/BackButton";

const CategoryView = ({
    selectedCategoryId,
    categories,
    isLoading,
    error,
    onRefresh,
    onCreateCategory,
    onSelectCategory,
    onEditCategory,
    onDeleteCategory,
    onBack,
}: CategoryViewProps) => {
    const [editingCategoryId, setEditingCategoryId] = useState<number | null>(
        null,
    );
    const [status, setStatus] = useState<{
        success: boolean;
        message: string;
    } | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const selectedCategory = useMemo(
        () => categories.find((category) => category.id === selectedCategoryId),
        [categories, selectedCategoryId],
    );

    return (
        <div className="space-y-4">
            <BackButton onBack={onBack} />

            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h2 className="text-xl font-semibold">Категории</h2>
                    <p className="text-sm text-gray-600">
                        Выберите категорию для блюда или управляйте списком.
                    </p>
                </div>

                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => void onRefresh()}
                        className="rounded border border-gray-300 px-4 py-2 text-sm"
                    >
                        Обновить
                    </button>

                    <button
                        type="button"
                        onClick={onCreateCategory}
                        className="rounded bg-blue-600 px-4 py-2 text-sm text-white"
                    >
                        Новая категория
                    </button>
                </div>
            </div>

            <StatusMessage
                message={status?.message ?? error ?? undefined}
                success={status?.success}
            />

            {isLoading ? (
                <div className="rounded border border-gray-200 p-4 text-sm text-gray-600">
                    Загрузка категорий...
                </div>
            ) : (
                <div className="space-y-3">
                    {categories.map((category) => {
                        const dishesCount = category.dishSlugs?.length ?? 0;
                        const isSelected = category.id === selectedCategoryId;
                        const isEditing = category.id === editingCategoryId;

                        if (isEditing) {
                            const defaultValues: Partial<CategoryFormValues> = {
                                name: category.name,
                                slug: category.slug,
                                description: category.description,
                                position: category.position,
                            };

                            return (
                                <div
                                    key={category.id}
                                    className="rounded border border-gray-200 p-4"
                                >
                                    <CategoryForm
                                        defaultValues={defaultValues}
                                        submitLabel="Сохранить"
                                        isSubmitting={isSubmitting}
                                        onCancel={() =>
                                            setEditingCategoryId(null)
                                        }
                                        onSubmit={async (values) => {
                                            setIsSubmitting(true);
                                            setStatus(null);

                                            try {
                                                const result =
                                                    await onEditCategory(
                                                        category.id,
                                                        values,
                                                    );
                                                setStatus(result);

                                                if (result.success) {
                                                    setEditingCategoryId(null);
                                                }
                                            } finally {
                                                setIsSubmitting(false);
                                            }
                                        }}
                                    />
                                </div>
                            );
                        }

                        return (
                            <div
                                key={category.id}
                                className={`rounded border p-4 ${
                                    isSelected
                                        ? "border-blue-500 bg-blue-50"
                                        : "border-gray-200"
                                }`}
                            >
                                <div className="flex flex-wrap items-start justify-between gap-3">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-medium">
                                                {category.name}
                                            </h3>
                                            {isSelected ? (
                                                <span className="rounded bg-blue-600 px-2 py-1 text-xs text-white">
                                                    Выбрана
                                                </span>
                                            ) : null}
                                        </div>

                                        <p className="text-sm text-gray-600">
                                            slug: {category.slug}
                                        </p>

                                        {category.description ? (
                                            <p className="text-sm text-gray-700">
                                                {category.description}
                                            </p>
                                        ) : null}

                                        <p className="text-xs text-gray-500">
                                            {dishesCount}{" "}
                                            {pluralizeDishes(dishesCount)}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                onSelectCategory(
                                                    isSelected
                                                        ? undefined
                                                        : category.id,
                                                )
                                            }
                                            className="rounded border border-gray-300 px-3 py-2 text-sm"
                                        >
                                            {isSelected
                                                ? "Снять выбор"
                                                : "Выбрать"}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setEditingCategoryId(
                                                    category.id,
                                                )
                                            }
                                            className="rounded border border-gray-300 px-3 py-2 text-sm"
                                        >
                                            Редактировать
                                        </button>

                                        <button
                                            type="button"
                                            onClick={async () => {
                                                setIsSubmitting(true);
                                                setStatus(null);

                                                try {
                                                    const result =
                                                        await onDeleteCategory(
                                                            category.id,
                                                        );
                                                    setStatus(result);
                                                } finally {
                                                    setIsSubmitting(false);
                                                }
                                            }}
                                            className="rounded border border-red-300 px-3 py-2 text-sm text-red-600"
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {selectedCategory ? (
                <div className="rounded border border-gray-200 p-4 text-sm text-gray-700">
                    Текущая категория блюда:{" "}
                    <span className="font-medium">{selectedCategory.name}</span>
                </div>
            ) : null}
        </div>
    );
};

export default CategoryView;
