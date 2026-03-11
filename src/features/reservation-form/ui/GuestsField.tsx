import { useFormContext } from "react-hook-form";

import { StyledInput } from "@/shared/ui/StyledInput";

import { ReservationFormValues } from "../model";

export const GuestsField = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<ReservationFormValues>();
    return (
        <StyledInput
            id="guests"
            label="Количество гостей"
            type="number"
            inputMode="numeric"
            error={errors.guests?.message}
            {...register("guests")}
        />
    );
};
