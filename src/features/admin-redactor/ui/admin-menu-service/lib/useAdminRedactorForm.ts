// features/admin-redactor/hooks/useAdminRedactorForm.ts
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { addNewDish } from "@/features/admin-redactor/api/addNewDish";
import { insertIntoDish } from "@/features/admin-redactor/api/insertIntoDish";

import {
    AdminRedactorFormValues,
    adminRedactorSchema,
} from "../model/adminRedactor.schema";
import {
    UseAdminRedactorFormHandlersParams,
    UseAdminRedactorFormHandlersReturn,
} from "../model/adminRedactor.types";

export const useAdminRedactorForm = ({
    mode,
    initialFormData,
    setIsSubmitting,
    setSubmitStatus,
}: UseAdminRedactorFormHandlersParams): UseAdminRedactorFormHandlersReturn => {
    const form = useForm<AdminRedactorFormValues>({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolver: zodResolver(adminRedactorSchema as any),
        defaultValues: initialFormData,
    });

    const formData = form.watch();

    const handleChange = useCallback<
        UseAdminRedactorFormHandlersReturn["handleChange"]
    >(
        (field, value) => {
            form.setValue(field, value, {
                shouldDirty: true,
                shouldValidate: true,
            });
        },
        [form],
    );

    const handleSubmit = form.handleSubmit(async (validatedData) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const action = mode === "create" ? addNewDish : insertIntoDish;
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
        handleSubmit,
    };
};
