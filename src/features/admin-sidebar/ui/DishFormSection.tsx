"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { ICategory } from "@/entities/category";
import { dishSchema, emptyDish, IDish, TDishData } from "@/entities/dish";
import { StyledInput, StyledTextarea } from "@/shared/ui/StyledInput";

import { createDish, deleteDish, updateDish } from "../api";
import { AdminAction } from "../model";

interface DishFormSectionProps {
    mode: AdminAction;
    dishes: IDish[];
    categories: ICategory[];
    loading: boolean;
    setLoading: (nextLoading: boolean) => void;
    setMessage: (message: string) => void;
    onDataChanged: () => Promise<void>;
}

export const DishFormSection = ({
    mode,
    dishes,
    categories,
    loading,
    setLoading,
    setMessage,
    onDataChanged,
}: DishFormSectionProps) => {
    const isEditMode = mode === "edit";
    const isDeleteMode = mode === "delete";

    const [selectedDishId, setSelectedDishId] = useState<number | null>(null);
    const [dishErrors, setDishErrors] = useState<Record<string, string>>({});

    const dishForm = useForm<TDishData>({
        defaultValues: emptyDish,
    });

    const { register, handleSubmit, reset, getValues } = dishForm;

    const setDishFromEntity = (dish: IDish | null) => {
        if (!dish) {
            reset(emptyDish);
            return;
        }

        reset({
            name: dish.name,
            slug: dish.slug,
            price: dish.price,
            description: dish.description,
            weightValue: dish.weightValue,
            weightUnit: dish.weightUnit,
            imageUrl: dish.imageUrl ? String(dish.imageUrl) : null,
            categoryId: dish.categoryId,
            tagId: null,
        });
    };

    const onSubmitDishForm = handleSubmit(async () => {
        if (isDeleteMode) {
            if (!selectedDishId) {
                setMessage("Выберите блюдо для удаления");
                return;
            }

            setLoading(true);
            const deleteResponse = await deleteDish(selectedDishId);
            setLoading(false);
            setMessage(deleteResponse.message);

            if (deleteResponse.success) {
                setSelectedDishId(null);
                setDishFromEntity(null);
                await onDataChanged();
            }

            return;
        }

        const parsedDish = dishSchema.safeParse(getValues());

        if (!parsedDish.success) {
            const nextErrors: Record<string, string> = {};

            for (const issue of parsedDish.error.issues) {
                const pathField = issue.path[0];

                if (typeof pathField === "string") {
                    nextErrors[pathField] = issue.message;
                }
            }

            setDishErrors(nextErrors);
            setMessage("Проверьте корректность заполнения формы блюда");
            return;
        }

        setDishErrors({});
        setLoading(true);

        const submitResponse =
            isEditMode && selectedDishId
                ? await updateDish(selectedDishId, parsedDish.data)
                : await createDish(parsedDish.data);

        setLoading(false);
        setMessage(submitResponse.message);
        setDishErrors(submitResponse.errors ?? {});

        if (submitResponse.success) {
            if (!isEditMode) {
                reset(emptyDish);
            }

            await onDataChanged();
        }
    });

    return (
        <form
            className="space-y-4 rounded-2xl border border-slate-200 p-4"
            onSubmit={onSubmitDishForm}
        >
            <h4 className="text-xl font-semibold">Управление блюдами</h4>

            {isEditMode || isDeleteMode ? (
                <select
                    className="w-full rounded-xl border border-slate-300 p-3"
                    value={selectedDishId ?? ""}
                    onChange={(event) => {
                        const selectedValue = Number(event.target.value);

                        if (Number.isNaN(selectedValue)) {
                            setSelectedDishId(null);
                            setDishFromEntity(null);
                            return;
                        }

                        const selectedDish =
                            dishes.find((dish) => dish.id === selectedValue) ??
                            null;

                        setSelectedDishId(selectedValue);
                        setDishFromEntity(selectedDish);
                    }}
                >
                    <option value="">Выберите блюдо</option>
                    {dishes.map((dish) => (
                        <option key={dish.id} value={dish.id}>
                            {dish.name}
                        </option>
                    ))}
                </select>
            ) : null}

            {!isDeleteMode ? (
                <>
                    <StyledInput
                        id="dish-name"
                        label="Название блюда"
                        required
                        error={dishErrors.name}
                        {...register("name")}
                    />

                    <StyledInput
                        id="dish-slug"
                        label="Slug блюда"
                        required
                        error={dishErrors.slug}
                        {...register("slug")}
                    />

                    <StyledInput
                        id="dish-price"
                        label="Цена"
                        type="number"
                        error={dishErrors.price}
                        {...register("price")}
                    />

                    <StyledTextarea
                        id="dish-description"
                        label="Описание"
                        error={dishErrors.description}
                        {...register("description")}
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <StyledInput
                            id="dish-weight-value"
                            label="Вес (число)"
                            type="number"
                            error={dishErrors.weightValue}
                            {...register("weightValue")}
                        />

                        <StyledInput
                            id="dish-weight-unit"
                            label="Ед. веса"
                            error={dishErrors.weightUnit}
                            {...register("weightUnit")}
                        />
                    </div>

                    <select
                        className="w-full rounded-xl border border-slate-300 p-3"
                        {...register("categoryId")}
                    >
                        <option value="">Без категории</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>

                    <StyledInput
                        id="dish-image-url"
                        label="URL картинки"
                        error={dishErrors.imageUrl}
                        {...register("imageUrl")}
                    />
                </>
            ) : null}

            <div className="flex gap-3">
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-brand-dark rounded-xl px-4 py-2 text-white disabled:opacity-60"
                >
                    {isDeleteMode
                        ? "Удалить блюдо"
                        : isEditMode
                          ? "Обновить блюдо"
                          : "Создать блюдо"}
                </button>
            </div>
        </form>
    );
};
