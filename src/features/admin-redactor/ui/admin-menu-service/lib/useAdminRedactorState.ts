"use client";

import { useSearchParams } from "next/navigation";
import { useActionState, useEffect, useMemo, useState } from "react";

import { ICategory } from "@/entities/category/model";
import { fetchDishBySlug } from "@/entities/dish/api/fetchDishBySlug";
import { deleteDish } from "@/features/admin-redactor/api/deleteDish";

import { normalizeDishPayload } from "./normalizeDishPayload";
import { AdminRedactorFormValues } from "../model/adminRedactor.schema";
import {
    AdminRedactorMode,
    AdminRedactorView,
    SubmitStatus,
    UseAdminRedactorStateReturn,
} from "../model/adminRedactor.types";

const INITIAL_FORM_DATA: AdminRedactorFormValues = {
    name: "",
    description: "",
    slug: "",
    price: 0,
    imageUrl: undefined,
    weightValue: undefined,
    weightUnit: undefined,
    categoryId: undefined,
    tagId: undefined,
};

const resolveInitialView = (mode: AdminRedactorMode): AdminRedactorView =>
    mode === "delete" ? "delete" : "menu";

export const useAdminRedactorState = (
    mode: AdminRedactorMode,
): UseAdminRedactorStateReturn => {
    const searchParams = useSearchParams();
    const dishSlug = searchParams.get("dishSlug") ?? undefined;

    const [initialFormData, setInitialFormData] =
        useState<AdminRedactorFormValues>(INITIAL_FORM_DATA);
    const [currentView, setCurrentView] = useState<AdminRedactorView>(
        resolveInitialView(mode),
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
    const [isDishLoading, setIsDishLoading] = useState(mode !== "create");

    const [categories, setCategories] = useState<ICategory[]>([]);
    const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);
    const [categoriesError, setCategoriesError] = useState<string | null>(null);

    const [deleteState, deleteAction] = useActionState(deleteDish, null);

    useEffect(() => {
        if (mode === "create") {
            setInitialFormData(INITIAL_FORM_DATA);
            setIsDishLoading(false);
            return;
        }

        if (!dishSlug) {
            setInitialFormData(INITIAL_FORM_DATA);
            setIsDishLoading(false);
            setSubmitStatus({
                success: false,
                message: "Не удалось определить блюдо для редактирования",
            });
            return;
        }

        const loadDish = async () => {
            setIsDishLoading(true);
            const dish = await fetchDishBySlug(dishSlug);

            if (!dish) {
                setSubmitStatus({
                    success: false,
                    message: "Не удалось загрузить данные блюда",
                });
                setIsDishLoading(false);
                return;
            }

            setInitialFormData(normalizeDishPayload(dish));
            setIsDishLoading(false);
        };

        void loadDish();
    }, [dishSlug, mode]);

    useEffect(() => {
        setCurrentView(resolveInitialView(mode));
    }, [mode]);

    return useMemo(
        () => ({
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
        }),
        [
            dishSlug,
            initialFormData,
            currentView,
            isSubmitting,
            submitStatus,
            isDishLoading,
            categories,
            isCategoriesLoading,
            categoriesError,
            deleteState,
            deleteAction,
        ],
    );
};
