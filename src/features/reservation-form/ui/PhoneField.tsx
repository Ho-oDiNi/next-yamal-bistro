import { useFormContext } from "react-hook-form";

import { StyledInput } from "@/shared/ui/StyledInput";

import { ReservationFormValues } from "../model";

export const PhoneField = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<ReservationFormValues>();
    return (
        <StyledInput
            id="tel"
            label="Номер телефона"
            inputMode="tel"
            type="tel"
            required
            error={errors.phone?.message}
            {...register("phone")}
        />
    );
};
