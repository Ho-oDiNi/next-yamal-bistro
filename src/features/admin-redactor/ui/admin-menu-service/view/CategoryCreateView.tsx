// features/admin-redactor/ui/category/CategoryCreateView.tsx
"use client";

import { useState } from "react";

import CategoryForm from "./CategoryForm";
import { CategoryCreateViewComponentProps } from "../model/adminRedactor.types";
import BackButton from "../ui-test/BackButton";

const CategoryCreateView = ({
    onBack,
    onSubmit,
}: CategoryCreateViewComponentProps) => {
    const [status, setStatus] = useState<{
        success: boolean;
        message: string;
    } | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <div className="space-y-4">
            <BackButton onBack={onBack} />

            <div>
                <h2 className="text-xl font-semibold">Новая категория</h2>
                <p className="text-sm text-gray-600">
                    Заполните данные, чтобы добавить новую категорию блюд.
                </p>
            </div>

            <StatusMessage
                message={status?.message}
                success={status?.success}
            />

            <CategoryForm
                submitLabel="Создать категорию"
                isSubmitting={isSubmitting}
                onCancel={onBack}
                onSubmit={async (values) => {
                    setIsSubmitting(true);
                    setStatus(null);

                    try {
                        const result = await onSubmit(values);
                        setStatus(result);
                    } finally {
                        setIsSubmitting(false);
                    }
                }}
            />
        </div>
    );
};

export default CategoryCreateView;
