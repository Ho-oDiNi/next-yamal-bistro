"use client";

import { FormEvent, useEffect, useState } from "react";

import { ICategory, TCategoryData } from "@/entities/category/model";
import { categorySchema } from "@/entities/category/model/categorySchema";
import { IDish, TDishData } from "@/entities/dish/model";
import { dishSchema } from "@/entities/dish/model/dishSchema";
import { StyledInput, StyledTextarea } from "@/shared/ui/StyledInput";

import { AdminAction } from "../../actions-menu/model";
import { createCategory } from "../api/createCategory";
import { createDish } from "../api/createDish";
import { deleteCategory } from "../api/deleteCategory";
import { deleteDish } from "../api/deleteDish";
import { getAdminRedactorData } from "../api/getAdminRedactorData";
import { updateDish } from "../api/updateDish";
import { updateCategory } from "../api/updatеCategory";

type RedactorEntity = "dish" | "category";

type FormErrors = Record<string, string>;

interface AdminRedactorFormProps {
    mode: AdminAction;
    onClose: () => void;
}

const emptyDishForm: TDishData = {
    name: "",
    slug: "",
    price: null,
    description: null,
    weightValue: null,
    weightUnit: null,
    imageUrl: null,
    categoryId: null,
    tagId: null,
};

const emptyCategoryForm: TCategoryData = {
    name: "",
    slug: "",
};

const parseNullableNumber = (value: string): number | null => {
    if (!value.trim()) {
        return null;
    }

    const parsedNumber = Number(value);

    return Number.isNaN(parsedNumber) ? null : parsedNumber;
};

export const AdminRedactorForm = ({ mode, onClose }: AdminRedactorFormProps) => {
    const [entityType, setEntityType] = useState<RedactorEntity>("dish");
    const [dishes, setDishes] = useState<IDish[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [selectedDishId, setSelectedDishId] = useState<number | null>(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

    const [dishForm, setDishForm] = useState<TDishData>(emptyDishForm);
    const [categoryForm, setCategoryForm] = useState<TCategoryData>(emptyCategoryForm);
    const [categoryDishIds, setCategoryDishIds] = useState<number[]>([]);

    const [dishErrors, setDishErrors] = useState<FormErrors>({});
    const [categoryErrors, setCategoryErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string>("");

    const isEditMode = mode === "edit";
    const isDeleteMode = mode === "delete";

    const syncData = async () => {
        const redactorData = await getAdminRedactorData();

        if (!redactorData.success) {
            setMessage(redactorData.message);
            return;
        }

        setDishes(redactorData.data.dishes);
        setCategories(redactorData.data.categories);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        void syncData();
    }, []);

    const handleDishSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isDeleteMode) {
            if (!selectedDishId) {
                setMessage("Выберите блюдо для удаления");
                return;
            }

            setLoading(true);
            const response = await deleteDish(selectedDishId);
            setLoading(false);
            setMessage(response.message);

            if (response.success) {
                setSelectedDishId(null);
                await syncData();
            }

            return;
        }

        const parsedDish = dishSchema.safeParse(dishForm);

        if (!parsedDish.success) {
            const nextDishErrors: FormErrors = {};

            for (const issue of parsedDish.error.issues) {
                const errorPath = issue.path[0];

                if (typeof errorPath === "string") {
                    nextDishErrors[errorPath] = issue.message;
                }
            }

            setDishErrors(nextDishErrors);
            setMessage("Проверьте корректность заполнения формы блюда");
            return;
        }

        setDishErrors({});
        setLoading(true);

        const response = isEditMode && selectedDishId
            ? await updateDish(selectedDishId, parsedDish.data)
            : await createDish(parsedDish.data);

        setLoading(false);
        setMessage(response.message);
        setDishErrors(response.errors ?? {});

        if (response.success) {
            if (!isEditMode) {
                setDishForm(emptyDishForm);
            }

            await syncData();
        }
    };

    const handleCategorySubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isDeleteMode) {
            if (!selectedCategoryId) {
                setMessage("Выберите категорию для удаления");
                return;
            }

            setLoading(true);
            const response = await deleteCategory(selectedCategoryId);
            setLoading(false);
            setMessage(response.message);

            if (response.success) {
                setSelectedCategoryId(null);
                await syncData();
            }

            return;
        }

        const parsedCategory = categorySchema.safeParse(categoryForm);

        if (!parsedCategory.success) {
            const nextCategoryErrors: FormErrors = {};

            for (const issue of parsedCategory.error.issues) {
                const errorPath = issue.path[0];

                if (typeof errorPath === "string") {
                    nextCategoryErrors[errorPath] = issue.message;
                }
            }

            setCategoryErrors(nextCategoryErrors);
            setMessage("Проверьте корректность заполнения формы категории");
            return;
        }

        setCategoryErrors({});
        setLoading(true);

        const response = isEditMode && selectedCategoryId
            ? await updateCategory(selectedCategoryId, parsedCategory.data, categoryDishIds)
            : await createCategory(parsedCategory.data, categoryDishIds);

        setLoading(false);
        setMessage(response.message);
        setCategoryErrors(response.errors ?? {});

        if (response.success) {
            if (!isEditMode) {
                setCategoryForm(emptyCategoryForm);
                setCategoryDishIds([]);
            }

            await syncData();
        }
    };

    return (
        <section className="p-6 pt-16 lg:p-10 lg:pt-16">
            <h3 className="mb-6 text-2xl">Админка: {mode}</h3>

            <div className="mb-6 flex gap-2">
                <button
                    className={`rounded-full px-4 py-2 ${entityType === "dish" ? "bg-brand-dark text-white" : "bg-white"}`}
                    onClick={() => setEntityType("dish")}
                    type="button"
                >
                    Блюда
                </button>
                <button
                    className={`rounded-full px-4 py-2 ${entityType === "category" ? "bg-brand-dark text-white" : "bg-white"}`}
                    onClick={() => setEntityType("category")}
                    type="button"
                >
                    Категории
                </button>
            </div>

            {entityType === "dish" ? (
                <form className="space-y-4" onSubmit={handleDishSubmit}>
                    {isEditMode || isDeleteMode ? (
                        <select
                            className="w-full rounded-xl border border-slate-300 p-3"
                            value={selectedDishId ?? ""}
                            onChange={(event) => {
                                const nextDishId = Number(event.target.value);

                                if (Number.isNaN(nextDishId)) {
                                    setSelectedDishId(null);
                                    setDishForm(emptyDishForm);
                                    return;
                                }

                                const nextDish = dishes.find((dish) => dish.id === nextDishId);

                                setSelectedDishId(nextDishId);

                                if (!nextDish) {
                                    setDishForm(emptyDishForm);
                                    return;
                                }

                                setDishForm({
                                    name: nextDish.name,
                                    slug: nextDish.slug,
                                    price: nextDish.price,
                                    description: nextDish.description,
                                    weightValue: nextDish.weightValue,
                                    weightUnit: nextDish.weightUnit,
                                    imageUrl: nextDish.imageUrl
                                        ? String(nextDish.imageUrl)
                                        : null,
                                    categoryId: nextDish.categoryId,
                                    tagId: null,
                                });
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
                                value={dishForm.name}
                                error={dishErrors.name}
                                onChange={(event) =>
                                    setDishForm((prevDishForm) => ({
                                        ...prevDishForm,
                                        name: event.target.value,
                                    }))
                                }
                            />

                            <StyledInput
                                id="dish-slug"
                                label="Slug блюда"
                                required
                                value={dishForm.slug}
                                error={dishErrors.slug}
                                onChange={(event) =>
                                    setDishForm((prevDishForm) => ({
                                        ...prevDishForm,
                                        slug: event.target.value,
                                    }))
                                }
                            />

                            <StyledInput
                                id="dish-price"
                                label="Цена"
                                type="number"
                                value={dishForm.price ?? ""}
                                error={dishErrors.price}
                                onChange={(event) =>
                                    setDishForm((prevDishForm) => ({
                                        ...prevDishForm,
                                        price: parseNullableNumber(event.target.value),
                                    }))
                                }
                            />

                            <StyledTextarea
                                id="dish-description"
                                label="Описание"
                                value={dishForm.description ?? ""}
                                error={dishErrors.description}
                                onChange={(event) =>
                                    setDishForm((prevDishForm) => ({
                                        ...prevDishForm,
                                        description: event.target.value || null,
                                    }))
                                }
                            />

                            <div className="grid grid-cols-2 gap-3">
                                <StyledInput
                                    id="dish-weight-value"
                                    label="Вес (число)"
                                    type="number"
                                    value={dishForm.weightValue ?? ""}
                                    error={dishErrors.weightValue}
                                    onChange={(event) =>
                                        setDishForm((prevDishForm) => ({
                                            ...prevDishForm,
                                            weightValue: parseNullableNumber(event.target.value),
                                        }))
                                    }
                                />

                                <StyledInput
                                    id="dish-weight-unit"
                                    label="Ед. веса"
                                    value={dishForm.weightUnit ?? ""}
                                    error={dishErrors.weightUnit}
                                    onChange={(event) =>
                                        setDishForm((prevDishForm) => ({
                                            ...prevDishForm,
                                            weightUnit: event.target.value || null,
                                        }))
                                    }
                                />
                            </div>

                            <select
                                className="w-full rounded-xl border border-slate-300 p-3"
                                value={dishForm.categoryId ?? ""}
                                onChange={(event) => {
                                    const nextCategoryId = Number(event.target.value);

                                    setDishForm((prevDishForm) => ({
                                        ...prevDishForm,
                                        categoryId: Number.isNaN(nextCategoryId)
                                            ? null
                                            : nextCategoryId,
                                    }));
                                }}
                            >
                                <option value="">Без категории</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </>
                    ) : null}

                    <div className="flex gap-3">
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-xl bg-brand-dark px-4 py-2 text-white disabled:opacity-60"
                        >
                            {isDeleteMode
                                ? "Удалить блюдо"
                                : isEditMode
                                  ? "Обновить блюдо"
                                  : "Создать блюдо"}
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl bg-slate-300 px-4 py-2"
                        >
                            Закрыть
                        </button>
                    </div>
                </form>
            ) : (
                <form className="space-y-4" onSubmit={handleCategorySubmit}>
                    {isEditMode || isDeleteMode ? (
                        <select
                            className="w-full rounded-xl border border-slate-300 p-3"
                            value={selectedCategoryId ?? ""}
                            onChange={(event) => {
                                const nextCategoryId = Number(event.target.value);

                                if (Number.isNaN(nextCategoryId)) {
                                    setSelectedCategoryId(null);
                                    setCategoryForm(emptyCategoryForm);
                                    setCategoryDishIds([]);
                                    return;
                                }

                                const nextCategory = categories.find(
                                    (category) => category.id === nextCategoryId,
                                );

                                setSelectedCategoryId(nextCategoryId);

                                if (!nextCategory) {
                                    setCategoryForm(emptyCategoryForm);
                                    setCategoryDishIds([]);
                                    return;
                                }

                                setCategoryForm({
                                    name: nextCategory.name,
                                    slug: nextCategory.slug,
                                });

                                setCategoryDishIds(
                                    dishes
                                        .filter((dish) => dish.categoryId === nextCategory.id)
                                        .map((dish) => dish.id),
                                );
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
                                value={categoryForm.name}
                                error={categoryErrors.name}
                                onChange={(event) =>
                                    setCategoryForm((prevCategoryForm) => ({
                                        ...prevCategoryForm,
                                        name: event.target.value,
                                    }))
                                }
                            />

                            <StyledInput
                                id="category-slug"
                                label="Slug категории"
                                required
                                value={categoryForm.slug}
                                error={categoryErrors.slug}
                                onChange={(event) =>
                                    setCategoryForm((prevCategoryForm) => ({
                                        ...prevCategoryForm,
                                        slug: event.target.value,
                                    }))
                                }
                            />

                            <div className="rounded-xl border border-slate-300 p-3">
                                <p className="mb-2 text-sm font-medium">Блюда в категории</p>
                                <div className="max-h-52 space-y-2 overflow-y-auto">
                                    {dishes.map((dish) => {
                                        const isChecked = categoryDishIds.includes(dish.id);

                                        return (
                                            <label key={dish.id} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={(event) => {
                                                        setCategoryDishIds((prevDishIds) => {
                                                            if (event.target.checked) {
                                                                return [...prevDishIds, dish.id];
                                                            }

                                                            return prevDishIds.filter(
                                                                (dishId) => dishId !== dish.id,
                                                            );
                                                        });
                                                    }}
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
                            className="rounded-xl bg-brand-dark px-4 py-2 text-white disabled:opacity-60"
                        >
                            {isDeleteMode
                                ? "Удалить категорию"
                                : isEditMode
                                  ? "Обновить категорию"
                                  : "Создать категорию"}
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl bg-slate-300 px-4 py-2"
                        >
                            Закрыть
                        </button>
                    </div>
                </form>
            )}

            {message ? <p className="mt-4 text-sm">{message}</p> : null}
        </section>
    );
};
