import { Controller, useFormContext } from "react-hook-form";

import { TimeInput } from "@/shared/ui/StyledInput";

import { ReservationFormValues } from "../model";

export const TimeField = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext<ReservationFormValues>();

    return (
        <Controller
            name="time"
            control={control}
            render={({ field }) => (
                <TimeInput
                    id="time"
                    label="Время"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    error={errors.time?.message}
                />
            )}
        />
    );
};
