import { Category } from "@/entities/category/model";
import { Dish } from "@/entities/dish/model";

export type ViewMode =
    | "menu"
    | "meta"
    | "content"
    | "whatIncluded"
    | "faq"
    | "category"
    | "categoryCreate"
    | "delete";

export type DeleteActionState = {
    success: boolean;
    message: string;
} | null;

export type DishFieldValue = Dish[keyof Dish];

export interface ViewRendererProps {
    currentView: ViewMode;
    formData: Dish;
    onViewChange: (view: ViewMode) => void;
    onChange: (field: keyof Dish, value: DishFieldValue) => void;
    onArrayChange: (
        field: "whatIncluded" | "materials",
        index: number,
        value: string,
    ) => void;
    onFaqChange: (index: number, type: 0 | 1, value: string) => void;
    onAddArrayItem: (field: "whatIncluded" | "materials") => void;
    onRemoveArrayItem: (
        field: "whatIncluded" | "materials",
        index: number,
    ) => void;
    onAddFaqItem: () => void;
    onRemoveFaqItem: (index: number) => void;
    isPending: boolean;
    deleteProps?: DeleteViewProps;
    categoryViewProps?: Omit<CategoryViewComponentProps, "onBack">;
    categoryCreateViewProps?: Omit<CategoryCreateViewComponentProps, "onBack">;
}

export interface BaseViewProps {
    formData: Dish;
    onChange: (field: keyof Dish, value: DishFieldValue) => void;
    onBack: () => void;
}

export interface ArrayViewProps extends BaseViewProps {
    onArrayChange: (
        field: "whatIncluded" | "materials",
        index: number,
        value: string,
    ) => void;
    onAddArrayItem: (field: "whatIncluded" | "materials") => void;
    onRemoveArrayItem: (
        field: "whatIncluded" | "materials",
        index: number,
    ) => void;
}

export interface FaqViewProps extends BaseViewProps {
    onFaqChange: (index: number, type: 0 | 1, value: string) => void;
    onAddFaqItem: () => void;
    onRemoveFaqItem: (index: number) => void;
}

export interface DeleteViewProps {
    dishTitle: string;
    onCancel: () => void;
    deleteState: DeleteActionState;
    dishSlug: string;
}

export interface CategoryViewComponentProps extends BaseViewProps {
    categories: Category[];
    isLoading: boolean;
    error: string | null;
    onRefresh: () => void;
    onCreateCategory: () => void;
    onEditCategory: (
        payload: CategoryUpdatePayload,
    ) => Promise<CategoryUpdateResult>;
    onDeleteCategory: (categoryId: number) => Promise<CategoryDeleteResult>;
}

export interface CategoryCreatePayload {
    name: string;
    slug: string;
    description?: string;
    position?: number;
    imageFile?: File | null;
}

export interface CategoryCreateResult {
    success: boolean;
    message: string;
    category?: Category;
}

export interface CategoryUpdatePayload extends CategoryCreatePayload {
    id: number;
}

export interface CategoryUpdateResult {
    success: boolean;
    message: string;
    category?: Category;
}

export interface CategoryDeleteResult {
    success: boolean;
    message: string;
    categoryId?: number;
}

export interface CategoryCreateViewComponentProps {
    onBack: () => void;
    onSubmit: (payload: CategoryCreatePayload) => Promise<CategoryCreateResult>;
}

export interface AdminRedactorFormProps {
    mode: "edit" | "create" | "delete";
    onClose: () => void;
}
