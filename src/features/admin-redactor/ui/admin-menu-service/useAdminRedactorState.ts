import { useParams } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

import { Category } from "@/entities/category/model";
import {
    createEmptyDish,
    fetchDishBySlug,
} from "@/features/admin-redactor/admin.utils";
import { deleteDish } from "@/features/admin-redactor/api/deleteDish";
import { AdminRedactorFormValues } from "@/features/admin-redactor/model/adminRedactor.schema";
import {
    AdminRedactorFormProps,
    DeleteActionState,
    ViewMode,
} from "@/features/admin-redactor/model/adminRedactor.types";

import type { Dispatch, SetStateAction } from "react";

interface UseAdminRedactorStateResult {
    dishSlug?: string;
    initialFormData: AdminRedactorFormValues;
    currentView: ViewMode;
    setCurrentView: Dispatch<SetStateAction<ViewMode>>;
    isSubmitting: boolean;
    setIsSubmitting: Dispatch<SetStateAction<boolean>>;
    submitStatus: { success: boolean; message: string } | null;
    setSubmitStatus: Dispatch<
        SetStateAction<{ success: boolean; message: string } | null>
    >;
    isDishLoading: boolean;
    categories: Category[];
    setCategories: Dispatch<SetStateAction<Category[]>>;
    isCategoriesLoading: boolean;
    setIsCategoriesLoading: Dispatch<SetStateAction<boolean>>;
    categoriesError: string | null;
    setCategoriesError: Dispatch<SetStateAction<string | null>>;
    deleteState: DeleteActionState;
    deleteAction: (payload: FormData) => void;
}

export const useAdminRedactorState = (
    mode: AdminRedactorFormProps["mode"],
): UseAdminRedactorStateResult => {
    const params = useParams();
    const dishSlug = params.dish as string | undefined;

    const [initialFormData, setInitialFormData] =
        useState<AdminRedactorFormValues>(createEmptyDish());
    const [currentView, setCurrentView] = useState<ViewMode>(() =>
        mode === "delete" ? "delete" : "menu",
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        success: boolean;
        message: string;
    } | null>(null);
    const [isDishLoading, setIsDishLoading] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);
    const [categoriesError, setCategoriesError] = useState<string | null>(null);
    const [deleteState, deleteAction] = useActionState<
        DeleteActionState,
        FormData
    >(deleteDish, null);

    useEffect(() => {
        let isActualState = true;

        const resetTransientState = () => {
            if (!isActualState) {
                return;
            }

            setCurrentView(mode === "delete" ? "delete" : "menu");
            setSubmitStatus(null);
            setIsSubmitting(false);
        };

        const loadCurrentDish = async () => {
            resetTransientState();

            if (mode !== "edit" && mode !== "delete") {
                setInitialFormData(createEmptyDish());
                setIsDishLoading(false);
                return;
            }

            if (!dishSlug) {
                setInitialFormData(createEmptyDish());
                setIsDishLoading(false);
                return;
            }

            setIsDishLoading(true);
            const loadedDish = await fetchDishBySlug(dishSlug);

            if (isActualState) {
                setInitialFormData(loadedDish ?? createEmptyDish());
                setIsDishLoading(false);
            }
        };

        loadCurrentDish();

        return () => {
            isActualState = false;
        };
    }, [mode, dishSlug]);

    return {
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
    };
};
