import Image from "next/image";

import ContactSection from "./_components/ContactSection";
import HomeSection from "./_components/HomeSection/HomeSection";
import KitchenMenuSection from "./_components/KitchenMenuSection/KitchenMenuSection";
import ReservationSection from "./_components/ReservationSection/ReservationSection";
import ReviewsSection from "./_components/ReviewsSection/ReviewsSection";
import SeoSection from "./_components/SeoSection";

export default function page() {
    return (
        <main>
            <HomeSection />
            <div className="relative overflow-hidden">
                <Image
                    className="animate-spin-slow absolute -right-2/5 z-1"
                    src="/icons/deer_antlers_1024.svg"
                    alt=""
                    height={1024}
                    width={1024}
                />
                <Image
                    className="animate-reverse-spin absolute top-[17%] -right-[34%] z-1"
                    src="/icons/deer_antlers_824.svg"
                    alt=""
                    height={824}
                    width={824}
                />
                <SeoSection />
                <KitchenMenuSection />
            </div>
            <ReservationSection />
            <ReviewsSection />
            <ContactSection />
        </main>
    );
}
