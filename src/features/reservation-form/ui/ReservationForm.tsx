"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { useModal } from "@/shared/lib/modal-node";
import { MessagePopup } from "@/shared/ui/MessagePopup";
import { StyledButton } from "@/shared/ui/StyledButton";

import { ConsentField } from "./ConsentField";
import { DateField } from "./DateField";
import { GuestsField } from "./GuestsField";
import { NameField } from "./NameField";
import { PhoneField } from "./PhoneField";
import { TimeField } from "./TimeField";
import { submitReservationForm } from "../api/submitForm";
import { ReservationFormValues, reservationSchema } from "../model";

export const ReservationForm = () => {
    const { openPopup, closeModal } = useModal();

    const methods = useForm<ReservationFormValues>({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolver: zodResolver(reservationSchema as any),
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            name: "",
            phone: "",
            guests: undefined,
            date: "",
            time: "",
            consent: false,
        },
    });

    const onSubmit = async (values: ReservationFormValues) => {
        const result = await submitReservationForm(values);

        if (!result.success && result.errors) {
            Object.entries(result.errors).forEach(([field, message]) => {
                if (!message) {
                    return;
                }

                methods.setError(field as keyof ReservationFormValues, {
                    type: "server",
                    message,
                });
            });
        }

        if (result.message) {
            openPopup(
                <MessagePopup
                    message={result.message}
                    success={result.success}
                    autoCloseMs={3000}
                    onClose={closeModal}
                />,
            );
        }
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-8 md:space-y-12"
                noValidate
            >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <NameField />
                    <PhoneField />
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <GuestsField />
                    <DateField />
                    <TimeField />
                </div>
                <div className="md:flex-between flex flex-col gap-8 md:flex-row">
                    <ConsentField />
                    <StyledButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={methods.formState.isSubmitting}
                    >
                        {methods.formState.isSubmitting
                            ? "Отправка..."
                            : "Забронировать"}
                    </StyledButton>
                </div>
            </form>
        </FormProvider>
    );
};
