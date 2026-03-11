import { useFormContext } from "react-hook-form";

import { StyledInput } from "@/shared/ui/StyledInput";

import { ReservationFormValues } from "../model";

export const NameField = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<ReservationFormValues>();
    return (
        <StyledInput
            id="name"
            label="Ваше имя"
            type="text"
            inputMode="text"
            required
            error={errors.name?.message}
            {...register("name")}
        />
    );
};
