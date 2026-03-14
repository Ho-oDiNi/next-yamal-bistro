// features/admin-redactor/model/adminRedactor.types.ts
import { UseFormReturn } from "react-hook-form";

import { ICategory } from "@/entities/category/model";
import { IDish } from "@/entities/dish/model";

import { AdminRedactorFormValues } from "./adminRedactor.schema";
import { CategoryFormValues } from "./categoryForm.schema";

export type AdminRedactorMode = "create" | "edit" | "delete";
export type AdminRedactorView =
    | "menu"
    | "content"
    | "category"
    | "categoryCreate"
    | "delete";

export type SubmitStatus = {
    success: boolean;
    message: string;
};

export type CategoryCreateResult = SubmitStatus;

export interface AdminRedactorFormProps {
    mode: AdminRedactorMode;
    onClose: () => void;
}

export interface BaseViewProps {
    formData: AdminRedactorFormValues;
    onChange: <K extends keyof AdminRedactorFormValues>(
        field: K,
        value: AdminRedactorFormValues[K],
    ) => void;
    onBack: () => void;
}

export interface DeleteViewProps {
    dishTitle: string;
    dishSlug: string;
    onCancel: () => void;
    deleteState: SubmitStatus | null;
}

export interface CategoryViewProps {
    selectedCategoryId?: number;
    categories: ICategory[];
    isLoading: boolean;
    error: string | null;
    onRefresh: () => Promise<void>;
    onCreateCategory: () => void;
    onSelectCategory: (categoryId?: number) => void;
    onEditCategory: (
        categoryId: number,
        values: CategoryFormValues,
    ) => Promise<CategoryCreateResult>;
    onDeleteCategory: (categoryId: number) => Promise<CategoryCreateResult>;
    onBack: () => void;
}

export interface CategoryCreateViewComponentProps {
    onBack: () => void;
    onSubmit: (values: CategoryFormValues) => Promise<CategoryCreateResult>;
}

export interface ViewRendererProps {
    currentView: AdminRedactorView;
    formData: AdminRedactorFormValues;
    onViewChange: (view: AdminRedactorView) => void;
    onChange: <K extends keyof AdminRedactorFormValues>(
        field: K,
        value: AdminRedactorFormValues[K],
    ) => void;
    isPending: boolean;
    deleteProps?: DeleteViewProps;
    categoryViewProps?: Omit<CategoryViewProps, "onBack">;
    categoryCreateViewProps?: Omit<CategoryCreateViewComponentProps, "onBack">;
}

export interface UseAdminRedactorFormHandlersParams {
    mode: AdminRedactorMode;
    initialFormData: AdminRedactorFormValues;
    setIsSubmitting: (value: boolean) => void;
    setSubmitStatus: (value: SubmitStatus | null) => void;
}

export interface UseAdminRedactorFormHandlersReturn {
    form: UseFormReturn<AdminRedactorFormValues>;
    formData: AdminRedactorFormValues;
    handleChange: <K extends keyof AdminRedactorFormValues>(
        field: K,
        value: AdminRedactorFormValues[K],
    ) => void;
    handleSubmit: () => void;
}

export interface UseAdminRedactorStateReturn {
    dishSlug?: string;
    initialFormData: AdminRedactorFormValues;
    currentView: AdminRedactorView;
    setCurrentView: React.Dispatch<React.SetStateAction<AdminRedactorView>>;
    isSubmitting: boolean;
    setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
    submitStatus: SubmitStatus | null;
    setSubmitStatus: React.Dispatch<React.SetStateAction<SubmitStatus | null>>;
    isDishLoading: boolean;
    categories: ICategory[];
    setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
    isCategoriesLoading: boolean;
    setIsCategoriesLoading: React.Dispatch<React.SetStateAction<boolean>>;
    categoriesError: string | null;
    setCategoriesError: React.Dispatch<React.SetStateAction<string | null>>;
    deleteState: SubmitStatus | null;
    deleteAction: () => Promise<void>;
}

export type DishPayload = IDish;
