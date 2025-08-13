"use client";

import Image from "next/image";

import ReservationForm from "./ReservationForm";

const ReservationSection = () => {
    return (
        <section
            id="section-reservation"
            className="relative flex aspect-1440/895 w-full items-center justify-center bg-[url(/images/reservation.png)] bg-cover bg-center bg-no-repeat p-(--space-outside-container) text-white"
        >
            <div className="bg-brand-dark/60 container my-auto rounded-[26px] px-24 py-30">
                <div className="mb-10 border-b-3 pb-10">
                    <h2>Забронируйте стол</h2>
                    <p className="body-secession-regular-22 font-lighter max-w-sm text-xl">
                        Оставьте контактные данные и наш менеджер сразу свяжется
                        с Вами
                    </p>
                </div>
                <ReservationForm />
            </div>
        </section>
    );
};

export default ReservationSection;
