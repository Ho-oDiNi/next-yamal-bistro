// features/admin-redactor/ui/category/CategoryForm.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
    categoryFormSchema,
    CategoryFormValues,
} from "../model/categoryForm.schema";

interface CategoryFormProps {
    defaultValues?: Partial<CategoryFormValues>;
    submitLabel: string;
    onSubmit: (values: CategoryFormValues) => Promise<void>;
    onCancel?: () => void;
    isSubmitting?: boolean;
}

const CategoryForm = ({
    defaultValues,
    submitLabel,
    onSubmit,
    onCancel,
    isSubmitting,
}: CategoryFormProps) => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<CategoryFormValues>({
        resolver: zodResolver(categoryFormSchema),
        defaultValues: {
            name: "",
            slug: "",
            description: undefined,
            position: undefined,
            imageFile: undefined,
            ...defaultValues,
        },
    });

    const imageFile = watch("imageFile");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <label className="block space-y-2">
                <span className="text-sm font-medium text-gray-700">
                    Название
                </span>
                <input
                    {...register("name")}
                    className="w-full rounded border border-gray-300 p-2 text-sm"
                />
                {errors.name ? (
                    <span className="text-xs text-red-600">
                        {errors.name.message}
                    </span>
                ) : null}
            </label>

            <label className="block space-y-2">
                <span className="text-sm font-medium text-gray-700">Slug</span>
                <input
                    {...register("slug")}
                    className="w-full rounded border border-gray-300 p-2 text-sm"
                />
                {errors.slug ? (
                    <span className="text-xs text-red-600">
                        {errors.slug.message}
                    </span>
                ) : null}
            </label>

            <label className="block space-y-2">
                <span className="text-sm font-medium text-gray-700">
                    Описание
                </span>
                <textarea
                    {...register("description")}
                    className="min-h-24 w-full rounded border border-gray-300 p-2 text-sm"
                />
            </label>

            <label className="block space-y-2">
                <span className="text-sm font-medium text-gray-700">
                    Позиция
                </span>
                <input
                    type="number"
                    {...register("position")}
                    className="w-full rounded border border-gray-300 p-2 text-sm"
                />
                {errors.position ? (
                    <span className="text-xs text-red-600">
                        {errors.position.message}
                    </span>
                ) : null}
            </label>

            <label className="block space-y-2">
                <span className="text-sm font-medium text-gray-700">
                    Изображение
                </span>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(event) =>
                        setValue("imageFile", event.target.files?.[0], {
                            shouldDirty: true,
                            shouldValidate: true,
                        })
                    }
                    className="w-full rounded border border-gray-300 p-2 text-sm"
                />
                <span className="text-xs text-gray-500">
                    {imageFile?.name ?? "Необязательное поле"}
                </span>
                {errors.imageFile ? (
                    <span className="text-xs text-red-600">
                        {errors.imageFile.message as string}
                    </span>
                ) : null}
            </label>

            <div className="flex justify-end gap-3">
                {onCancel ? (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="rounded border border-gray-300 px-4 py-2 text-sm"
                    >
                        Отмена
                    </button>
                ) : null}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded bg-blue-600 px-4 py-2 text-sm text-white disabled:bg-gray-400"
                >
                    {submitLabel}
                </button>
            </div>
        </form>
    );
};

export default CategoryForm;
