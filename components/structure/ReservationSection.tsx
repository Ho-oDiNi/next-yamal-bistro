import Image from "next/image";

export const ReservationSection = () => {
    return (
        <section id="section-reservation" className="relative">
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
