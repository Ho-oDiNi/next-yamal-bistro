"use client";

import Image from "next/image";
import { ReactNode } from "react";

type Props = {
    backgroundSrc: string;
    children: ReactNode;
};

export default function ReservationContainer({
    backgroundSrc,
    children,
}: Props) {
    return (
        <section
            id="section-reservation"
            className="relative bg-cover bg-bottom bg-no-repeat text-white"
            aria-labelledby="reservation-title"
        >
            <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                {children}
            </div>

            <Image
                className="h-auto w-full"
                src={backgroundSrc}
                width={1440}
                height={895}
                priority
                quality={85}
                alt="Интерьер «Ямал Бистро»"
            />
        </section>
    );
}
