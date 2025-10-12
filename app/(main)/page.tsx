import Image from "next/image";

import ContactSection from "../../components/sections/ContactSection";
import HomeSection from "../../components/sections/HomeSection";
import KitchenMenuSection from "../../components/sections/KitchenMenuSection";
import ReservationSection from "../../components/sections/ReservationSection";
import ReviewsSection from "../../components/sections/ReviewsSection";
import SeoSection from "../../components/sections/SeoSection";

export default function page() {
    return (
        <main>
            <HomeSection />
            <div className="relative overflow-hidden">
                {/* <Image
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
                /> */}
                <SeoSection />
                <KitchenMenuSection />
            </div>
            <ReservationSection />
            <ReviewsSection />
            <ContactSection />
        </main>
    );
}
