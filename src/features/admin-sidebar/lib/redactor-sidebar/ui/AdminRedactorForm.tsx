"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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

interface AdminRedactorFormProps {
    mode: AdminAction;
    onClose: () => void;
}

interface DishFormSectionProps {
    mode: AdminAction;
    dishes: IDish[];
    categories: ICategory[];
    loading: boolean;
    setLoading: (nextLoading: boolean) => void;
    setMessage: (message: string) => void;
    onDataChanged: () => Promise<void>;
    onClose: () => void;
}

interface CategoryFormSectionProps {
    mode: AdminAction;
    dishes: IDish[];
    categories: ICategory[];
    loading: boolean;
    setLoading: (nextLoading: boolean) => void;
    setMessage: (message: string) => void;
    onDataChanged: () => Promise<void>;
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

const parseNullableNumber = (value: unknown): number | null => {
    const normalizedValue = String(value ?? "").trim();

    if (!normalizedValue) {
        return null;
    }

    const parsedNumber = Number(normalizedValue);

    return Number.isNaN(parsedNumber) ? null : parsedNumber;
};

const parseNullableString = (value: unknown): string | null => {
    const normalizedValue = String(value ?? "").trim();

    return normalizedValue ? normalizedValue : null;
};

const DishFormSection = ({
    mode,
    dishes,
    categories,
    loading,
    setLoading,
    setMessage,
    onDataChanged,
    onClose,
}: DishFormSectionProps) => {
    const isEditMode = mode === "edit";
    const isDeleteMode = mode === "delete";

    const [selectedDishId, setSelectedDishId] = useState<number | null>(null);
    const [dishErrors, setDishErrors] = useState<Record<string, string>>({});

    const dishForm = useForm<TDishData>({
        defaultValues: emptyDishForm,
    });

    const { register, handleSubmit, reset, getValues } = dishForm;

    const setDishFromEntity = (dish: IDish | null) => {
        if (!dish) {
            reset(emptyDishForm);
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

        const submitResponse = isEditMode && selectedDishId
            ? await updateDish(selectedDishId, parsedDish.data)
            : await createDish(parsedDish.data);

        setLoading(false);
        setMessage(submitResponse.message);
        setDishErrors(submitResponse.errors ?? {});

        if (submitResponse.success) {
            if (!isEditMode) {
                reset(emptyDishForm);
            }

            await onDataChanged();
        }
    });

    return (
        <form className="space-y-4 rounded-2xl border border-slate-200 p-4" onSubmit={onSubmitDishForm}>
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

                        const selectedDish = dishes.find((dish) => dish.id === selectedValue) ?? null;

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
                        {...register("price", {
                            setValueAs: parseNullableNumber,
                        })}
                    />

                    <StyledTextarea
                        id="dish-description"
                        label="Описание"
                        error={dishErrors.description}
                        {...register("description", {
                            setValueAs: parseNullableString,
                        })}
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <StyledInput
                            id="dish-weight-value"
                            label="Вес (число)"
                            type="number"
                            error={dishErrors.weightValue}
                            {...register("weightValue", {
                                setValueAs: parseNullableNumber,
                            })}
                        />

                        <StyledInput
                            id="dish-weight-unit"
                            label="Ед. веса"
                            error={dishErrors.weightUnit}
                            {...register("weightUnit", {
                                setValueAs: parseNullableString,
                            })}
                        />
                    </div>

                    <select
                        className="w-full rounded-xl border border-slate-300 p-3"
                        {...register("categoryId", {
                            setValueAs: parseNullableNumber,
                        })}
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
                        {...register("imageUrl", {
                            setValueAs: parseNullableString,
                        })}
                    />
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

                <button type="button" onClick={onClose} className="rounded-xl bg-slate-300 px-4 py-2">
                    Закрыть
                </button>
            </div>
        </form>
    );
};

const CategoryFormSection = ({
    mode,
    dishes,
    categories,
    loading,
    setLoading,
    setMessage,
    onDataChanged,
    onClose,
}: CategoryFormSectionProps) => {
    const isEditMode = mode === "edit";
    const isDeleteMode = mode === "delete";

    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const [selectedDishIds, setSelectedDishIds] = useState<number[]>([]);
    const [categoryErrors, setCategoryErrors] = useState<Record<string, string>>({});

    const categoryForm = useForm<TCategoryData>({
        defaultValues: emptyCategoryForm,
    });

    const { register, handleSubmit, reset, getValues } = categoryForm;

    const setCategoryFromEntity = (category: ICategory | null) => {
        if (!category) {
            reset(emptyCategoryForm);
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

            return currentDishIds.filter((currentDishId) => currentDishId !== dishId);
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

        const submitResponse = isEditMode && selectedCategoryId
            ? await updateCategory(selectedCategoryId, parsedCategory.data, selectedDishIds)
            : await createCategory(parsedCategory.data, selectedDishIds);

        setLoading(false);
        setMessage(submitResponse.message);
        setCategoryErrors(submitResponse.errors ?? {});

        if (submitResponse.success) {
            if (!isEditMode) {
                reset(emptyCategoryForm);
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
                            categories.find((category) => category.id === selectedValue) ?? null;

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
                        <p className="mb-2 text-sm font-medium">Блюда в категории</p>
                        <div className="max-h-52 space-y-2 overflow-y-auto">
                            {dishes.map((dish) => {
                                const isChecked = selectedDishIds.includes(dish.id);

                                return (
                                    <label key={dish.id} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={(event) =>
                                                toggleDishSelection(dish.id, event.target.checked)
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
                    className="rounded-xl bg-brand-dark px-4 py-2 text-white disabled:opacity-60"
                >
                    {isDeleteMode
                        ? "Удалить категорию"
                        : isEditMode
                          ? "Обновить категорию"
                          : "Создать категорию"}
                </button>

                <button type="button" onClick={onClose} className="rounded-xl bg-slate-300 px-4 py-2">
                    Закрыть
                </button>
            </div>
        </form>
    );
};

export const AdminRedactorForm = ({ mode, onClose }: AdminRedactorFormProps) => {
    const [dishes, setDishes] = useState<IDish[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

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

    return (
        <section className="space-y-6 p-6 pt-16 lg:p-10 lg:pt-16">
            <h3 className="text-2xl">Админка: {mode}</h3>

            <DishFormSection
                mode={mode}
                dishes={dishes}
                categories={categories}
                loading={loading}
                setLoading={setLoading}
                setMessage={setMessage}
                onDataChanged={syncData}
                onClose={onClose}
            />

            <CategoryFormSection
                mode={mode}
                dishes={dishes}
                categories={categories}
                loading={loading}
                setLoading={setLoading}
                setMessage={setMessage}
                onDataChanged={syncData}
                onClose={onClose}
            />

            {message ? <p className="text-sm">{message}</p> : null}
        </section>
    );
};
