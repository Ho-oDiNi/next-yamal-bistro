"use client";

import Form from "next/form";
import { useEffect } from "react";

import { Dish } from "@/entities/dish/model";
import { getDishTitle } from "@/features/admin-redactor/admin.utils";
import {
    AdminRedactorFormProps,
    DishFieldValue,
} from "@/features/admin-redactor/model/adminRedactor.types";
import StatusMessage from "@/shared/ui/StatusMessage";

import ViewRenderer from "./ui/ViewRenderer";
import { useAdminRedactorState } from "./useAdminRedactorState";
import { useCategoryHandlers } from "./useCategoryHandlers";
import { useAdminRedactorFormHandlers } from "./useFormHandlers";

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

    const {
        form,
        formData,
        handleChange,
        handleArrayChange,
        handleFaqChange,
        addArrayItem,
        removeArrayItem,
        addFaqItem,
        removeFaqItem,
        handleSubmit,
    } = useAdminRedactorFormHandlers({
        mode,
        initialFormData,
        setIsSubmitting,
        setSubmitStatus,
    });

    useEffect(() => {
        form.reset(initialFormData);
    }, [form, initialFormData]);

    const { loadCategories, handleCreateCategory, handleUpdateCategory, handleDeleteCategory } =
        useCategoryHandlers({
            setIsCategoriesLoading,
            setCategoriesError,
            setCategories,
            setCurrentView,
            updateSelectedCategory: (categoryId, categorySlug) => {
                handleChange("categoryId", categoryId);
                handleChange("categorySlug", categorySlug);
            },
            getSelectedCategoryId: () => form.getValues("categoryId"),
        });

    useEffect(() => {
        loadCategories();
    }, [loadCategories]);

    const dishTitle = getDishTitle(formData, dishSlug);

    return (
        <div className="space-y-6 p-8">
            {mode !== "delete" && (
                <StatusMessage
                    message={submitStatus?.message}
                    success={submitStatus?.success}
                />
            )}

            <Form action={mode === "delete" ? deleteAction : handleSubmit}>
                <ViewRenderer
                    currentView={currentView}
                    formData={formData}
                    onViewChange={setCurrentView}
                    onChange={(field, value) =>
                        handleChange(
                            field as keyof Dish,
                            value as DishFieldValue,
                        )
                    }
                    onArrayChange={handleArrayChange}
                    onFaqChange={handleFaqChange}
                    onAddArrayItem={addArrayItem}
                    onRemoveArrayItem={removeArrayItem}
                    onAddFaqItem={addFaqItem}
                    onRemoveFaqItem={removeFaqItem}
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
                        formData,
                        onChange: (field, value) =>
                            handleChange(
                                field as keyof Dish,
                                value as DishFieldValue,
                            ),
                        categories,
                        isLoading: isCategoriesLoading,
                        error: categoriesError,
                        onRefresh: loadCategories,
                        onCreateCategory: () =>
                            setCurrentView("categoryCreate"),
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
