"use client";

import Form from "next/form";
import { useEffect } from "react";

import { Service } from "@/entities/service";
import StatusMessage from "@/shared/ui/StatusMessage";
import { getServiceTitle } from "@/features/admin-redactor/admin.utils";
import {
    AdminRedactorFormProps,
    ServiceFieldValue,
} from "@/features/admin-redactor/model/adminRedactor.types";

import ViewRenderer from "./ui/ViewRenderer";
import { useAdminRedactorState } from "./useAdminRedactorState";
import { useCategoryHandlers } from "./useCategoryHandlers";
import { useAdminRedactorFormHandlers } from "./useFormHandlers";

const AdminRedactorForm = ({ mode, onClose }: AdminRedactorFormProps) => {
    const {
        serviceSlug,
        formData,
        setFormData,
        currentView,
        setCurrentView,
        isSubmitting,
        setIsSubmitting,
        submitStatus,
        setSubmitStatus,
        isServiceLoading,
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
        loadCategories,
        handleCreateCategory,
        handleUpdateCategory,
        handleDeleteCategory,
    } = useCategoryHandlers({
        setIsCategoriesLoading,
        setCategoriesError,
        setCategories,
        setFormData,
        setCurrentView,
    });

    useEffect(() => {
        loadCategories();
    }, [loadCategories]);

    const {
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
        formData,
        setFormData,
        setIsSubmitting,
        setSubmitStatus,
    });

    const serviceTitle = getServiceTitle(formData, serviceSlug);

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
                            field as keyof Service,
                            value as ServiceFieldValue,
                        )
                    }
                    onArrayChange={handleArrayChange}
                    onFaqChange={handleFaqChange}
                    onAddArrayItem={addArrayItem}
                    onRemoveArrayItem={removeArrayItem}
                    onAddFaqItem={addFaqItem}
                    onRemoveFaqItem={removeFaqItem}
                    isPending={isSubmitting || isServiceLoading}
                    deleteProps={
                        mode === "delete"
                            ? {
                                  serviceTitle,
                                  onCancel: onClose,
                                  deleteState,
                                  serviceSlug: serviceSlug ?? "",
                              }
                            : undefined
                    }
                    categoryViewProps={{
                        formData,
                        onChange: (field, value) =>
                            handleChange(
                                field as keyof Service,
                                value as ServiceFieldValue,
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
