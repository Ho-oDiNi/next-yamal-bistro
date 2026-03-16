"use client";

import Image from "next/image";
import { ReactNode } from "react";

import reservationImg from "@images/reservation.png";

type ReservationContainerProps = {
    children: ReactNode;
};

export const ReservationContainer = ({
    children,
}: ReservationContainerProps) => {
    return (
        <section className="flex-center relative bg-[url('/images/reservation.png')] bg-cover bg-center bg-no-repeat text-white md:bg-none">
            <Image
                className="bottom-0 z-1 hidden h-full w-full object-cover md:block"
                src={reservationImg}
                alt=""
            />
            <div className="md:absolute-center z-5 w-full px-2 py-16">
                {children}
            </div>
        </section>
    );
};
