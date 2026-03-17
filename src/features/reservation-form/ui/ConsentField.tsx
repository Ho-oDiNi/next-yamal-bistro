import Link from "next/link";
import { useFormContext } from "react-hook-form";

import { StyledCheckbox } from "@/shared/ui/StyledCheckbox";

import { ReservationFormValues } from "../model";

export const ConsentField = () => {
    const id = "consent";

    const {
        register,
        formState: { errors },
    } = useFormContext<ReservationFormValues>();

    return (
        <div>
            <label htmlFor={id} className="flex-start gap-3">
                <StyledCheckbox
                    id={id}
                    aria-invalid={Boolean(errors.consent)}
                    {...register("consent")}
                />

                <span className="font-roboto text-xs">
                    Заполняя форму, я даю согласие <br />
                    на{" "}
                    <Link
                        href="/privacy"
                        className="text-zinc-300 hover:opacity-70"
                    >
                        обработку персональных данных
                    </Link>
                    <span className="text-red-500"> *</span>
                </span>
            </label>

            {errors.consent?.message && (
                <p className="absolute text-base text-red-500 md:mt-2">
                    {errors.consent.message}
                </p>
            )}
        </div>
    );
};
