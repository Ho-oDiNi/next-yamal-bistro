"use client";

import Image from "next/image";

import ReservationForm from "./ReservationForm";

const ReservationSection = () => {
    return (
        <section
            id="section-reservation"
            className="relative bg-cover bg-bottom bg-no-repeat text-white"
        >
            <div className="bg-brand-dark/60 absolute top-1/2 left-1/2 container -translate-1/2 rounded-[26px] px-24 py-30">
                <div className="mb-10 border-b-3 pb-10">
                    <h2 className="title-secession-bold-40 mb-10">
                        Забронируйте стол
                    </h2>
                    <p className="body-secession-regular-22 max-w-3/12">
                        Оставьте контактные данные и наш менеджер сразу свяжется
                        с Вами
                    </p>
                </div>
                <ReservationForm />
            </div>

            <Image
                className="w-full"
                src="/images/reservation.png"
                width={1440}
                height={895}
                priority
                quality={85}
                alt="SEO"
            />
        </section>
    );
};

export default ReservationSection;
