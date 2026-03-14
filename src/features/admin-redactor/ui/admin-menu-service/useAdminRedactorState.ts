import { useParams } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

import { Category } from "@/entities/category";
import {
    createEmptyService,
    fetchServiceBySlug,
} from "@/features/admin-redactor/admin.utils";
import { deleteService } from "@/features/admin-redactor/api/deleteService";
import { AdminRedactorFormValues } from "@/features/admin-redactor/model/adminRedactor.schema";
import {
    AdminRedactorFormProps,
    DeleteActionState,
    ViewMode,
} from "@/features/admin-redactor/model/adminRedactor.types";

import type { Dispatch, SetStateAction } from "react";

interface UseAdminRedactorStateResult {
    serviceSlug?: string;
    initialFormData: AdminRedactorFormValues;
    currentView: ViewMode;
    setCurrentView: Dispatch<SetStateAction<ViewMode>>;
    isSubmitting: boolean;
    setIsSubmitting: Dispatch<SetStateAction<boolean>>;
    submitStatus: { success: boolean; message: string } | null;
    setSubmitStatus: Dispatch<
        SetStateAction<{ success: boolean; message: string } | null>
    >;
    isServiceLoading: boolean;
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
    const serviceSlug = params.service as string | undefined;

    const [initialFormData, setInitialFormData] =
        useState<AdminRedactorFormValues>(createEmptyService());
    const [currentView, setCurrentView] = useState<ViewMode>(() =>
        mode === "delete" ? "delete" : "menu",
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        success: boolean;
        message: string;
    } | null>(null);
    const [isServiceLoading, setIsServiceLoading] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);
    const [categoriesError, setCategoriesError] = useState<string | null>(null);
    const [deleteState, deleteAction] = useActionState<
        DeleteActionState,
        FormData
    >(deleteService, null);

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

        const loadCurrentService = async () => {
            resetTransientState();

            if (mode !== "edit" && mode !== "delete") {
                setInitialFormData(createEmptyService());
                setIsServiceLoading(false);
                return;
            }

            if (!serviceSlug) {
                setInitialFormData(createEmptyService());
                setIsServiceLoading(false);
                return;
            }

            setIsServiceLoading(true);
            const loadedService = await fetchServiceBySlug(serviceSlug);

            if (isActualState) {
                setInitialFormData(loadedService ?? createEmptyService());
                setIsServiceLoading(false);
            }
        };

        loadCurrentService();

        return () => {
            isActualState = false;
        };
    }, [mode, serviceSlug]);

    return {
        serviceSlug,
        initialFormData,
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
    };
};
