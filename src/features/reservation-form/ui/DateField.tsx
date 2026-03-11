import { Controller, useFormContext } from "react-hook-form";

import { DateInput } from "@/shared/ui/StyledInput";

import { ReservationFormValues } from "../model";

export const DateField = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext<ReservationFormValues>();

    return (
        <Controller
            name="date"
            control={control}
            render={({ field }) => (
                <DateInput
                    id="date"
                    label="Дата"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    error={errors.date?.message}
                />
            )}
        />
    );
};
