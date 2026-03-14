import { useActionState, useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { useParams } from "next/navigation";

import { Category } from "@/entities/category";
import { Service } from "@/entities/service";
import { deleteService } from "@/features/admin-redactor/api/deleteService";
import {
    createEmptyService,
    fetchServiceBySlug,
} from "@/features/admin-redactor/admin.utils";
import {
    AdminRedactorFormProps,
    DeleteActionState,
    ViewMode,
} from "@/features/admin-redactor/model/adminRedactor.types";

interface UseAdminRedactorStateResult {
    serviceSlug?: string;
    formData: Service;
    setFormData: Dispatch<SetStateAction<Service>>;
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

    const [formData, setFormData] = useState<Service>(createEmptyService());
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
                setFormData(createEmptyService());
                setIsServiceLoading(false);
                return;
            }

            if (!serviceSlug) {
                setFormData(createEmptyService());
                setIsServiceLoading(false);
                return;
            }

            setIsServiceLoading(true);
            const loadedService = await fetchServiceBySlug(serviceSlug);

            if (isActualState) {
                setFormData(loadedService ?? createEmptyService());
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
    };
};
