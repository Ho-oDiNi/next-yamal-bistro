import Image from "next/image";

import ContactSection from "./_components/ContactSection";
import HomeSection from "./_components/HomeSection";
import KitchenMenuSection from "./_components/KitchenMenuSection";
import ReservationSection from "./_components/ReservationSection";
import ReviewsSection from "./_components/ReviewsSection";
import SeoSection from "./_components/SeoSection";

export default function page() {
    return (
        <main>
            <HomeSection />
            <SeoSection />
            <KitchenMenuSection />
            <ReservationSection />
            <ReviewsSection />
            <ContactSection />
        </main>
    );
}
