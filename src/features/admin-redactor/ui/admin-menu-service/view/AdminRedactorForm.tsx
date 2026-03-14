// features/admin-redactor/ui/AdminRedactorForm.tsx
"use client";

import Form from "next/form";
import { useEffect } from "react";

import StatusMessage from "./StatusMessage";
import ViewRenderer from "./ViewRenderer";
import { useAdminRedactorForm } from "../lib/useAdminRedactorForm";
import { useAdminRedactorState } from "../lib/useAdminRedactorState";
import { useCategoryHandlers } from "../lib/useCategoryHandlers";
import { AdminRedactorFormProps } from "../model/adminRedactor.types";

const AdminRedactorForm = ({ mode, onClose }: AdminRedactorFormProps) => {
    const {
        dishSlug,
        initialFormData,
        currentView,
        setCurrentView,
        isSubmitting,
        setIsSubmitting,
        submitStatus,
        setSubmitStatus,
        isDishLoading,
        categories,
        setCategories,
        isCategoriesLoading,
        setIsCategoriesLoading,
        categoriesError,
        setCategoriesError,
        deleteState,
        deleteAction,
    } = useAdminRedactorState(mode);

    const { form, formData, handleChange, handleSubmit } = useAdminRedactorForm(
        {
            mode,
            initialFormData,
            setIsSubmitting,
            setSubmitStatus,
        },
    );

    useEffect(() => {
        form.reset(initialFormData);
    }, [form, initialFormData]);

    const {
        loadCategories,
        handleCreateCategory,
        handleUpdateCategory,
        handleDeleteCategory,
    } = useCategoryHandlers({
        setIsCategoriesLoading,
        setCategoriesError,
        setCategories,
        setCurrentView,
        updateSelectedCategory: (categoryId) => {
            handleChange("categoryId", categoryId);
        },
        getSelectedCategoryId: () => form.getValues("categoryId"),
    });

    useEffect(() => {
        void loadCategories();
    }, [loadCategories]);

    const dishTitle = formData.name?.trim() || "это блюдо";

    return (
        <div className="space-y-6 p-8">
            {mode !== "delete" ? (
                <StatusMessage
                    message={submitStatus?.message}
                    success={submitStatus?.success}
                />
            ) : null}

            <Form action={mode === "delete" ? deleteAction : handleSubmit}>
                <ViewRenderer
                    currentView={currentView}
                    formData={formData}
                    onViewChange={setCurrentView}
                    onChange={handleChange}
                    isPending={isSubmitting || isDishLoading}
                    deleteProps={
                        mode === "delete"
                            ? {
                                  dishTitle,
                                  onCancel: onClose,
                                  deleteState,
                                  dishSlug: dishSlug ?? "",
                              }
                            : undefined
                    }
                    categoryViewProps={{
                        selectedCategoryId: formData.categoryId,
                        categories,
                        isLoading: isCategoriesLoading,
                        error: categoriesError,
                        onRefresh: loadCategories,
                        onCreateCategory: () =>
                            setCurrentView("categoryCreate"),
                        onSelectCategory: (categoryId) =>
                            handleChange("categoryId", categoryId),
                        onEditCategory: handleUpdateCategory,
                        onDeleteCategory: handleDeleteCategory,
                    }}
                    categoryCreateViewProps={{
                        onSubmit: handleCreateCategory,
                    }}
                />
            </Form>
        </div>
    );
};

export default AdminRedactorForm;
