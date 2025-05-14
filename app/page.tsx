import { HomeSection } from "@/app/_components/HomeSection/HomeSection";
import { SeoSection } from "@/app/_components/SeoSection/SeoSection";
import { KitchenMenuSection } from "@/app/_components/KitchenMenuSection/KitchenMenuSection";
import { ReservationSection } from "@/app/_components/ReservationSection/ReservationSection";
import { ReviewsSection } from "@/app/_components/ReviewsSection/ReviewsSection";
import { ContactSection } from "@/app/_components/ContactSection/ContactSection";

export default function Home() {
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
