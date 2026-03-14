import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { addNewService } from "@/features/admin-redactor/api/addNewService";
import { insertIntoService } from "@/features/admin-redactor/api/insertIntoService";
import {
    AdminRedactorFormValues,
    adminRedactorSchema,
} from "@/features/admin-redactor/model/adminRedactor.schema";
import { AdminRedactorFormProps } from "@/features/admin-redactor/model/adminRedactor.types";

import type { Dispatch, SetStateAction } from "react";

type SubmitStatus = {
    success: boolean;
    message: string;
};

type UseAdminRedactorFormHandlersParams = {
    mode: AdminRedactorFormProps["mode"];
    initialFormData: AdminRedactorFormValues;
    setIsSubmitting: Dispatch<SetStateAction<boolean>>;
    setSubmitStatus: Dispatch<SetStateAction<SubmitStatus | null>>;
};

export const useAdminRedactorFormHandlers = ({
    mode,
    initialFormData,
    setIsSubmitting,
    setSubmitStatus,
}: UseAdminRedactorFormHandlersParams) => {
    const form = useForm<AdminRedactorFormValues>({
        resolver: zodResolver(adminRedactorSchema),
        defaultValues: initialFormData,
    });

    const formData = form.watch();

    const handleChange = useCallback(
        <K extends keyof AdminRedactorFormValues>(
            field: K,
            value: AdminRedactorFormValues[K],
        ) => {
            form.setValue(field, value, { shouldDirty: true });
        },
        [form],
    );

    const handleArrayChange = useCallback(
        (field: "whatIncluded" | "materials", index: number, value: string) => {
            const updatedItems = [...(form.getValues(field) ?? [])];
            updatedItems[index] = value;
            form.setValue(field, updatedItems, { shouldDirty: true });
        },
        [form],
    );

    const handleFaqChange = useCallback(
        (index: number, type: 0 | 1, value: string) => {
            const updatedFaqItems = [...(form.getValues("faqItems") ?? [])];
            const currentItem = updatedFaqItems[index] ?? ["", ""];
            updatedFaqItems[index] = [
                type === 0 ? value : currentItem[0],
                type === 1 ? value : currentItem[1],
            ];

            form.setValue("faqItems", updatedFaqItems, { shouldDirty: true });
        },
        [form],
    );

    const addArrayItem = useCallback(
        (field: "whatIncluded" | "materials") => {
            const currentItems = form.getValues(field) ?? [];
            form.setValue(field, [...currentItems, ""], { shouldDirty: true });
        },
        [form],
    );

    const removeArrayItem = useCallback(
        (field: "whatIncluded" | "materials", index: number) => {
            const currentItems = form.getValues(field) ?? [];
            form.setValue(
                field,
                currentItems.filter((_, itemIndex) => itemIndex !== index),
                { shouldDirty: true },
            );
        },
        [form],
    );

    const addFaqItem = useCallback(() => {
        const currentFaqItems = form.getValues("faqItems") ?? [];
        form.setValue("faqItems", [...currentFaqItems, ["", ""]], {
            shouldDirty: true,
        });
    }, [form]);

    const removeFaqItem = useCallback(
        (index: number) => {
            const currentFaqItems = form.getValues("faqItems") ?? [];
            form.setValue(
                "faqItems",
                currentFaqItems.filter((_, itemIndex) => itemIndex !== index),
                { shouldDirty: true },
            );
        },
        [form],
    );

    const handleSubmit = form.handleSubmit(async (validatedData) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const action = mode === "create" ? addNewService : insertIntoService;
            const result = await action(validatedData);
            setSubmitStatus(result);
        } catch (error) {
            setSubmitStatus({
                success: false,
                message:
                    error instanceof Error ? error.message : "Произошла ошибка",
            });
        } finally {
            setIsSubmitting(false);
        }
    });

    return {
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
    } as const;
};

export type UseAdminRedactorFormHandlersReturn = ReturnType<
    typeof useAdminRedactorFormHandlers
>;
