import { ReservationForm } from "@/features/reservation-form";

import { ReservationHeader } from "./ReservationHeader";

export const ReservationCard = () => {
    return (
        <div className="bg-brand-dark/60 container mx-auto rounded-3xl p-8">
            <ReservationHeader />
            <hr className="my-10 rounded-3xl border border-white" />
            <ReservationForm />
        </div>
    );
};
