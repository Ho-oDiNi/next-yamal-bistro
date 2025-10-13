"use client";

import ReservationCard from "./ReservationCard";
import ReservationContainer from "./ReservationContainer";
import ReservationHeader from "./ReservationHeader";

import ReservationForm from "@/components/ui/ReservationForm";

export default function ReservationSection() {
    return (
        <ReservationContainer backgroundSrc="/images/reservation.png">
            <ReservationCard>
                <ReservationHeader
                    title="Забронируйте стол"
                    subtitle="Оставьте контактные данные и наш менеджер сразу свяжется с Вами"
                />
                <ReservationForm />
            </ReservationCard>
        </ReservationContainer>
    );
}
