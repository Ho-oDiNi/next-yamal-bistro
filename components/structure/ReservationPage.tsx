import Image from "next/image";
import { ReservationModal } from "@/components/ReservationModal";

export const ReservationPage = () => {
    return (
        <section id="page_reservation" className="relative">
            <Image
                className="w-full"
                src="/images/reservation.png"
                width={1440}
                height={895}
                priority
                quality={85}
                alt="SEO"
            />
            <ReservationModal />
        </section>
    );
};
