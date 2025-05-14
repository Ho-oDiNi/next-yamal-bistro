import ContactSection from "@/app/_components/ContactSection";
import HomeSection from "@/app/_components/HomeSection/HomeSection";
import KitchenMenuSection from "@/app/_components/KitchenMenuSection/KitchenMenuSection";
import ReservationSection from "@/app/_components/ReservationSection/ReservationSection";
import ReviewsSection from "@/app/_components/ReviewsSection/ReviewsSection";
import SeoSection from "@/app/_components/SeoSection";

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
