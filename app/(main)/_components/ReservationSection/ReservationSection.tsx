"use client";

import ReservationForm from "./ReservationForm";
import ReservationTitle from "./ReservationTitle";

const ReservationSection = () => {
    return (
        <section
            id="section-reservation"
            className="relative flex aspect-1440/895 w-full items-center justify-center bg-[url(/images/reservation.png)] bg-cover bg-center bg-no-repeat p-(--space-outside-container-accent)"
        >
            <div className="bg-brand-dark/60 w-full max-w-420 rounded-[26px] p-(--space-intside-container) text-white">
                <div className="container mx-auto">
                    <ReservationTitle />
                    <ReservationForm />
                </div>
            </div>
        </section>
    );
};

export default ReservationSection;
